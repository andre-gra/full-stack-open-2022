const PersonForm = ( { addName, newName, handleNameChange, newNumber, handleNumberChange } ) => {
  return (
    <form onSubmit={addName}>
        <div>
          <span style={{ display: "block" }}>name: <input value={newName} onChange={handleNameChange} /></span>
          <span style={{ display: "block" }}>number: <input value={newNumber} onChange={handleNumberChange} /></span>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm