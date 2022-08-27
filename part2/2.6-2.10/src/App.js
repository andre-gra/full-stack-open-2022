import { useState } from 'react'

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

  const handleSearch = (event) => {
    setTextToSearch(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <span>Filter shown with <input value={textToSearch} onChange={handleSearch} /></span>
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          <span style={{ display: "block" }}>name: <input value={newName} onChange={handleNameChange} /></span>
          <span style={{ display: "block" }}>number: <input value={newNumber} onChange={handleNumberChange} /></span>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person => person.name.toLowerCase().includes(textToSearch.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App