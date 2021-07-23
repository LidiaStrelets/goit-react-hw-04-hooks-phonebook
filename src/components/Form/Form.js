import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import ButtonAdd from '../ButtonAdd';

import styles from './Form.module.css';

class Form extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  handleInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.addContact(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.onFormSubmit}>
        <Input
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          handleInputChange={this.handleInput}
          value={name}
        />
        <Input
          label="Phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          handleInputChange={this.handleInput}
        />
        <ButtonAdd />
      </form>
    );
  }
}

export default Form;
