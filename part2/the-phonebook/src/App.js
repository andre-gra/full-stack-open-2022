import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [textToSearch, setTextToSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setTextToSearch(event.target.value)
  }
  

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (!persons.find(({ name, number }) => (name === personObject.name || number === personObject.number))) {
      setPersons(persons.concat(personObject))
    } else window.alert(`${newName} is already added to phonebook`)
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  

  return (
    <div>
      <h1>Phonebook</h1>
        <Filter handleSearch={handleSearch} textToSearch={textToSearch} />
      <h2>Add a new</h2>
        <PersonForm 
          addName={addName} 
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          newName={newName}
          newNumber={newNumber}
           />
      <h2>Numbers</h2>
        <Persons persons={persons} textToSearch={textToSearch} />
    </div>
  )
}

export default App