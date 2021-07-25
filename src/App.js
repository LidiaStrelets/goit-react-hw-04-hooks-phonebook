import './App.css';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };
  const filterContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
    } else {
      return contacts;
    }
  };

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert('Attempt to create existing contact!');
      return;
    }

    setContacts(prevContacts => [...prevContacts, { name, id: uuidv4(), number }]);
  };

  const removeContact = idToRemove => {
    setContacts(prevContacts => [...prevContacts.filter(({ id }) => id !== idToRemove)]);
  };

  return (
    <div className="App">
      <Section title="Phonebook">
        <Form addContact={addContact} />
        {contacts.length > 0 && (
          <Contacts
            filterValue={filter}
            handleFilter={handleFilter}
            title="Contacts"
            filterFunction={filterContacts}
            removeContact={removeContact}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
