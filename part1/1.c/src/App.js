import { useState } from 'react'

const Statistics = (props) => {
  const average = (props.good - props.bad) / props.sum
  const positive = (props.good / props.sum) * 100

  if (props.sum > 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>good {props.good}</p>
        <p>neutral {props.neutral}</p>
        <p>bad {props.bad}</p>
        <p>all {props.sum}</p>
        <p>average {!isNaN(average) && average}</p>
        <p>positive {!isNaN(positive) &&positive} %</p>
      </>
    )
  }

  return (
    <p>No feedback given</p>
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
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum}/>
    </div>
  )
}

export default App