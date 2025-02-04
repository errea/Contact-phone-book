import React from 'react'

function ContactItem({ contact, deleteContact }) {
  return (
    <div className="contact-item">
      <div className="contact-info">
        <h3>{contact.firstName}</h3>
        <h3>{contact.lastName}</h3>
        <p>{contact.phone}</p>
      </div>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  )
}

export default ContactItem