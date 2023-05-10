import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { selectIsLoading } from 'redux/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
}
