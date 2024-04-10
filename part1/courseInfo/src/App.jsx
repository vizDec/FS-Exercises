import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

const App = () => {
  const course = {
    name: 'Half Stach application development',
    parts: [
      {
        index: 1,
        partTitle: 'Fundamentals of React',
        exercises: 10,
      },
      {
        index: 2,
        partTitle: 'Using props to pass data',
        exercises: 7,
      },
      {
        index: 3,
        partTitle: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
    <div>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts} />
    </div>
  )
}

export default App