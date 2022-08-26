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

export default Course