import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import noteServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [textToSearch, setTextToSearch] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    noteServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
    const searchPerson = persons.find(({ name, number }) => (name === personObject.name || number === personObject.number))
    if (!searchPerson) {
      noteServices
        .create(personObject)
        .then(newPersonObject => {
          setPersons(persons.concat(newPersonObject))
          setMessage(
            `Added ${newName}`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    } else {
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) &&
        noteServices
          .update(searchPerson.id, personObject)
          .then((response) => {
            noteServices
              .getAll()
              .then(initialPersons => {
                setPersons(initialPersons)
                setMessage(
                  `New number replaced for ${newName}`
                )
                setTimeout(() => {
                  setMessage(null)
                }, 5000)
              })
          })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleDelete = (id, name) => {
    window.confirm(`Delete ${name}`) &&
      noteServices
        .deletePerson(id)
        .then(response => {
          noteServices
            .getAll()
            .then(initialPersons => {
              setPersons(initialPersons)
            })
        })
        .catch(error => {
          console.log("error", error)
        })
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter handleSearch={handleSearch} textToSearch={textToSearch} />
      <Notification message={message} />
      <h2>Add a new</h2>
      <PersonForm
        addName={addName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} textToSearch={textToSearch} handleDelete={handleDelete} />
    </div>
  )
}

export default App