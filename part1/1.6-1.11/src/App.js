import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = (props.good - props.bad) / props.sum
  const positive = (props.good / props.sum) * 100 + " %"

  if (props.sum > 0) {
    return (
      <table style={{ width: "max-content" }}>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.sum} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }

  return (
    <p>No feedback given</p>
  )

}

const Button = (props) => {
  return (
    <button onClick={props.clickType}>{props.text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const sum = (good + neutral + bad)

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button clickType={() => setGood(good + 1)} text="good" />
        <Button clickType={() => setNeutral(neutral + 1)} text="neutral" />
        <Button clickType={() => setBad(bad + 1)} text="bad" />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} />
    </div>
  )
}

export default App