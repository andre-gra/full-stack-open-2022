const Filter = ( { handleSearch, textToSearch } ) => {
  return (
    <div>
      <span>Filter shown with <input value={textToSearch} onChange={handleSearch} /></span>
    </div>
  )
}

export default Filter