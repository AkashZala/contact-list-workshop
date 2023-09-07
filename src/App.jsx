import { useEffect, useState } from 'react'
import Contacts from './Contacts';
import Contact from './Contact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1) * 1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const json = await response.json();
      setContacts(json);
    }
    fetchData();
  }, []);

  const contact = contacts.find(contact => contact.id === hash)

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1) * 1);
    });
  }, []);

  return (
    <>
      <h1>Contacts List ({contacts.length})</h1>
      <hr />
      <Contacts contacts={contacts} hash={hash} />
      <hr />
      <Contact contact={contact} />
    </>
  )
}

export default App
