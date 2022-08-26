const Header = (props) => {
  return (
    <h2>{props.course}</h2>
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

const Total = ({ parts }) => {
  const initialValue = 0
  const sum = parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises
    , initialValue
  )
  return (
    <p style={{ fontWeight: "bold" }}>{`total of ${sum} ${sum > 1 ? "exercises" : "exercise"}`}</p>
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
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {course.map(el => <Course course={el} key={el.id} />)}
    </>
  )
}

export default App