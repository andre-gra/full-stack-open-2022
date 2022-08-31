const Filter = ( { handleSearch, textToSearch } ) => {
  return (
    <p>find countries <input type="text" value={textToSearch} onChange={handleSearch} /></p>
  )
}

export default Filter