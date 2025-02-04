import { useState, useEffect } from 'react'
import './App.css'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'


function App() {
  const [contacts, setContacts] = useState([])

  // Load contacts from localStorage when the component mounts
  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts')
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts))
    }
  }, [])

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div className="app-container">
      <h1>Phonebook Contact App</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App
