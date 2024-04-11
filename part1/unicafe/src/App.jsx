import { useState } from "react"
import { Button } from "./Button"
import { Result } from "./Resutl"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good + 1)
  const neutralHandler = () => setNeutral(neutral + 1)
  const badHandler = () => setBad(bad + 1)

  return (
    <>
      <h1>Give feedback</h1>

      <Button eventHandler={goodHandler} name={'Good'} />
      <Button eventHandler={neutralHandler} name={'Neutral'} />
      <Button eventHandler={badHandler} name={'Bad'} />

      <h2>Statistics</h2>

      <Result value={good} name={'Good'}/>
      <Result value={neutral} name={'Neutral'}/>
      <Result value={bad} name={'Bad'}/>
    </>
  )
}

export default App