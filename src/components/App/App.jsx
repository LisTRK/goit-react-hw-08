import './App.css';
import 'modern-normalize';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactsForm from '../ContactsForm/ContactsForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
      {loading ?? <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </>
  );
}

export default App;
