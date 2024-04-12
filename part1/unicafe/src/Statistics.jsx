import { Result } from "./Resutl"

const Statistics = ({good, neutral, bad}) => {
    const totalPoints = good + neutral + bad
    const positivePorcentage = good / totalPoints
  
    const calculateAverage = () => {
      const avG = good * 1
      const avN = neutral * 0
      const avB = bad * -1
  
      return (avG + avN + avB) / totalPoints
    }

    if(totalPoints === 0) {
        return <p>No feedback given</p>
    } 

    return(
        <>
            <h2>Statistics</h2>

            <table>
                <tbody>
                    <Result value={good} name={'Good'}/>
                    <Result value={neutral} name={'Neutral'}/>
                    <Result value={bad} name={'Bad'}/>
                        
                    <Result value={totalPoints} name={'Total'}/>
                    <Result value={positivePorcentage} name={'Positive'}/>
                    <Result value={calculateAverage()} name={'Average'}/>
                </tbody>
            </table>
        </>
    )
}

export { Statistics }