import { useEffect, useState } from 'react'


function Contact(props) {
    const { contact } = props
    return (
        <div>
            <h1>{contact ? contact.name : null}</h1>
            <h2>{contact ? `Company: ${contact.company.name}` : ''}</h2>
            <p>{contact ? `Email: ${contact.email}` : null}</p>
            <p>{contact ? `Phone: ${contact.phone}` : null}</p>
        </div>
    )
}

export default Contact
