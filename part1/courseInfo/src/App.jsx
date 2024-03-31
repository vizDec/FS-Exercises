import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

const App = () => {
  const course = 'Half Stach application development'
  const parts = [
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

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App