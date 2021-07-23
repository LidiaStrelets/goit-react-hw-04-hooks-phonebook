import './App.css';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from './components/Section';
import Form from './components/Form';
import Contacts from './components/Contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const contactsList = localStorage.getItem('contactsList');

  useEffect(() => {
    setContacts([JSON.parse(contactsList)]);
  }, [contactsList]);

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  };

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert('Attempt to create existing contact!');
      return;
    }
    setContacts(contacts => [...contacts, { name, id: uuidv4(), number }]);
  };

  const removeContact = idToRemove => {
    setContacts(contacts => [contacts.filter(({ id }) => id !== idToRemove)]);
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

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     if (localStorage.getItem('contactsList')) {
//       this.setState({ contacts: JSON.parse(localStorage.getItem('contactsList')) });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleFilter = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };
//   filterContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
//   };
//   addContact = (name, number) => {
//     if (this.state.contacts.find(contact => contact.name === name)) {
//       alert('Attempt to create existing contact!');
//       return;
//     }

//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, { name, id: uuidv4(), number }],
//     }));
//   };

//   removeContact = idToRemove => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== idToRemove),
//     }));
//   };

//   render() {
//     return (
//       <div className="App">
//         <Section title="Phonebook">
//           <Form addContact={this.addContact} />
//           {this.state.contacts.length > 0 && (
//             <Contacts
//               filterValue={this.state.filter}
//               handleFilter={this.handleFilter}
//               title="Contacts"
//               filterFunction={this.filterContacts}
//               removeContact={this.removeContact}
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
