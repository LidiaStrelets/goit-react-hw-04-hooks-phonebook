import React from 'react';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, removeContact }) => (
  <ul className={styles.list}>
    {contacts.map(({ name, id, number }) => (
      <li key={id} className={styles.contact}>
        <p className={styles.text}>
          <span className={styles.name}>{name}</span> <span className={styles.phone}>{number}</span>
        </p>
        <button className={styles.removeBtn} type="button" onClick={() => removeContact(id)}>
          Remove contact
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList;
