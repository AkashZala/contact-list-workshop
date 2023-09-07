import { useEffect, useState } from 'react'


function App() {
  const [contacts, setContacts] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const json = await response.json();
      setContacts(json);
    }
      fetchData();
  }, []);

  const contact = contacts.find( contact => contact.id === hash)

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1);
    });
  }, []);

  return (
    <>
      <h1>Contacts List ({ contacts.length })</h1>
     <hr />
      <ul>
        {
          contacts.map( contact => {
            return (
              <li key={ contact.id }>
                <a href={`#${ contact.id === hash ? '' : contact.id}`}
                  className={ contact.id === hash ? 'selected' : ''}>
                    { contact.name }</a>
              </li>
            );
          })
        }
      </ul>
      <div>
      <h1>{ contact ? contact.name : null}</h1>
      <h2>{ contact ? `Company: ${contact.company.name}` : '' }</h2>
      <p>{ contact ? `Email: ${contact.email}` : null}</p>
      <p>{ contact ? `Phone: ${contact.phone}` : null}</p>
      </div>
    </>
  )
}

export default App
