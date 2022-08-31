import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Nations from './components/Nations'

const App = () => {
  const [nations, setNations] = useState([])
  const [textToSearch, setTextToSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setNations(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setTextToSearch(event.target.value)
  }
  
  return (
    <div>
      <h1>Data for Countries</h1>
        <Filter handleSearch={handleSearch} textToSearch={textToSearch} />
      <h2>Results:</h2>
        <Nations nations={nations} textToSearch={textToSearch} />
    </div>
  )
}

export default App