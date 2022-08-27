import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [textToSearch, setTextToSearch] = useState('')

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