import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function AddContact({ addContact }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (firstName.trim() === '' || lastName.trim() === '' || phone.trim() === '') {
      alert('Please fill in both fields.')
      return
    }
    const newContact = {
      id: uuidv4(),
      firstName,
      lastName,
      phone
    }
    addContact(newContact)
    setFirstName('')
    setLastName('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-contact-form">
      <input 
        type="text" 
        placeholder="First Name" 
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Last Name" 
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Phone Number" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  )
}

export default AddContact