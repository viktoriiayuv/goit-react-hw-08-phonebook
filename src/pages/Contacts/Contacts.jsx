import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { selectIsLoading } from 'redux/selectors';
import { ContactsContainer } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactsContainer>
        <ContactForm />
        <div className="filter">
          <Filter />
          <div>{isLoading && 'Request in progress...'}</div>
          <ContactList />
        </div>
      </ContactsContainer>
    </>
  );
}
