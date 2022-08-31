const Nations = ({ nations, textToSearch }) => {
  const filteredArray = nations.filter(nation => nation.name.common.toLowerCase().includes(textToSearch.toLowerCase()))
  if (textToSearch.length > 0) {
    if (filteredArray.length <= 10) {
      if (filteredArray.length > 1) {
        return (
          <div>
            {filteredArray.map(nation => {
              return (
                <span style={{ display: "block" }} key={nation.name.common}>{nation.name.common}</span>
              )
            })}
          </div>
        )
      } else {
        return (
          <>
            <h1>{filteredArray[0].name.common}</h1>
            <div>
              <span style={{ display: "block" }}>capital {filteredArray[0].capital}</span>
              <span style={{ display: "block" }}>area {filteredArray[0].area}</span>
            </div>
            <p style={{fontWeight: "bold"}}>languages:</p>
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
          </>
        )
      }
    } else {
      return (<span>Too many matches, specify another filter</span>)
    }
  }
}
export default Nations