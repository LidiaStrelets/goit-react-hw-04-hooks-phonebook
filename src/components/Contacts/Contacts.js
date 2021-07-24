import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ContactsList from '../ContactsList';
import styles from './Contacts.module.css';

const Contacts = ({ title, filterFunction, filterValue, handleFilter, removeContact }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    <Input
      label="Find contacts by name:"
      type="text"
      name="filter"
      value={filterValue}
      handleInputChange={handleFilter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    />
    <ContactsList contacts={filterFunction()} removeContact={removeContact} />
  </>
);

Contacts.defaultProps = {
  title: '',
  filterValue: '',
};
Contacts.propTypes = {
  title: PropTypes.string,
  filterFunction: PropTypes.func.isRequired,
  filterValue: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default Contacts;
