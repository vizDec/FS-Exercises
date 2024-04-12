import { useState } from "react"
import { Form } from "./Form"
import { Statistics } from "./Statistics"

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

      <Form 
        goodHandler={goodHandler}
        neutralHandler={neutralHandler} 
        badHandler={badHandler}/>

      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}/>
    </>
  )
}

export default App