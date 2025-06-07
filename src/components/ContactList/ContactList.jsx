import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  const renderContactsList = contacts.map((contact) => {
    return (
      <li key={contact.id} className={css.card}>
        <Contact contact={contact} />
      </li>
    );
  });

  return (
    <ul className={css.list}>
      {contacts.lenght !== 0
        ? renderContactsList
        : [<p className={css.empty}>Phonebook is empty</p>]}
    </ul>
  );
}
