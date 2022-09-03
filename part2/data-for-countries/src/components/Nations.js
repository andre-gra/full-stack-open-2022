import Weather from "./Weather"

const Nations = ({ nations, textToSearch, setTextToSearch }) => {
  const handleClick = (event) => {
    setTextToSearch(event.target.value)
  }
  const filteredArray = nations.filter(nation => nation.name.common.toLowerCase().includes(textToSearch.toLowerCase()))
  if (textToSearch.length > 0) {
    if (filteredArray.length <= 10) {
      if (filteredArray.length > 1) {
        return (
          <div>
            {filteredArray.map(nation => {
              return (
                <div style={{ display: "block" }} key={nation.name.common}>
                  <span key={nation.name.common}>{nation.name.common}</span>
                  <button value={nation.name.common} onClick={handleClick}>Show</button>
                </div>
              )
            })}
          </div>
        )
      } else if (filteredArray[0]) {
        return (
          <>
            <h1>{filteredArray[0].name.common}</h1>
            <div>
              <span style={{ display: "block" }}>capital {filteredArray[0].capital}</span>
              <span style={{ display: "block" }}>area {filteredArray[0].area}</span>
            </div>
            <p style={{ fontWeight: "bold" }}>languages:</p>
            <ul>
              {Object.values(filteredArray[0].languages).map((value) => {
                return (
                  <li key={value}>
                    {value}
                  </li>
                )
              })}
            </ul>
            <img src={filteredArray[0].flags.svg} width="150px" alt="flag" />
            <Weather lat={filteredArray[0].capitalInfo.latlng[0]} lon={filteredArray[0].capitalInfo.latlng[1]} capital={filteredArray[0].capital} />
          </>
        )
      }
    } else {
      return (<span>Too many matches, specify another filter</span>)
    }
  }
}
export default Nations