const Persons = ({ persons, textToSearch }) => {
  return (
    <ul>
      {persons.filter(person => person.name.toLowerCase().includes(textToSearch.toLowerCase())).map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
  )
}

export default Persons