const Persons = ({ persons, textToSearch, handleDelete }) => {
  return (
    <ul>
      {persons.filter(person => person.name.toLowerCase().includes(textToSearch.toLowerCase())).map(person =>
        <div key={person.name} style={{display: "flex", gap: "5px"}}>
          <li>{person.name} {person.number}</li>
          <button onClick={() => handleDelete(person.id, person.name)}>delete</button>
        </div>
      )}
    </ul>
  )
}

export default Persons