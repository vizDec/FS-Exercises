import { Button } from "./Button"

const Form = ({goodHandler, neutralHandler, badHandler}) => {
    return (
        <div>
            <Button eventHandler={goodHandler} name={'Good'} />
            <Button eventHandler={neutralHandler} name={'Neutral'} />
            <Button eventHandler={badHandler} name={'Bad'} />
        </div>
    )
}

export { Form }