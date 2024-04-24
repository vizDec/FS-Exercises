import { Input } from "./components/Input"

const Form = ({
    newName,
    newNumber,
    setNewName,
    setNewNumber,
    addContact
}) => {
    return (
        <form>
            <Input text={'name:'} newValue={newName} setStateChange={setNewName} />
            <Input text={'number:'} newValue={newNumber} setStateChange={setNewNumber} />
            <div>
            <button type="submit" onClick={addContact}>add</button>
            </div>
        </form>
    )
}

export { Form }