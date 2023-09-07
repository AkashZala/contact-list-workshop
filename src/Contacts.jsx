import { useEffect, useState } from 'react'

function Contacts(props) {
    const { contacts, hash } = props;

    return (
        <ul>
            {
                contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <a href={`#${contact.id === hash ? '' : contact.id}`}
                                className={contact.id === hash ? 'selected' : ''}>
                                {contact.name}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default Contacts
