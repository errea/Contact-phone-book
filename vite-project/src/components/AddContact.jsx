import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'  // Ensure you installed the "uuid" package

function AddContact({ addContact }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === '' || phone.trim() === '') {
      alert('Please fill in both fields.')
      return
    }
    const newContact = {
      id: uuidv4(),
      name,
      phone
    }
    addContact(newContact)
    setName('')
    setPhone('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-contact-form">
      <input 
        type="text" 
        placeholder="Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Phone Number" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>
  )
}

export default AddContact