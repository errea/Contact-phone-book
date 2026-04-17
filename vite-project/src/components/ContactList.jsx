import React from 'react'
import ContactItem from './ContactItem'

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>No contacts available.</p>
  }

  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  )
}

export default ContactList