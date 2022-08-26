const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = ({ parts }) => {
  return (
    parts.map((part) =>
      <Part part={part.name} exercise={part.exercises} key={part.id} />
    )
  )
}

const Part = (props) => {
  return (
    <p key={props.id}>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.map((part) => 
    sum = sum + part.exercises
  )
  return (
    <p style={{fontWeight: "bold"}}>{`total of ${sum} ${sum > 1 ? "exercises" : "exercise"}`}</p>
  )
}

const Course = (props) => {
  const { course } = props
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App