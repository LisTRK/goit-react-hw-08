import { ImUser } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.cardData}>
        <h3>
          <ImUser />
          {contact.name}
        </h3>
        <p>
          <AiFillPhone />
          {contact.number}
        </p>
      </div>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </>
  );
}
