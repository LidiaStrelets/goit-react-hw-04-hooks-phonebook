import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ButtonAdd from '../ButtonAdd';

import styles from './Form.module.css';

const Form = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = event => {
    event.preventDefault();

    addContact(name, number);
    setNumber('');
    setName('');
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <Input
        label="Name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        handleInputChange={handleInput}
        value={name}
      />
      <Input
        label="Phone number"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        value={number}
        handleInputChange={handleInput}
      />
      <ButtonAdd />
    </form>
  );
};

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default Form;
