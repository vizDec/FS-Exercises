const Input = ({newValue, setStateChange, text}) => {
    
    const changeName = (event, setter) => {
        setter(event.target.value)
    }

    return (
        <div>
            {text} <input value={newValue} onChange={(e) => changeName(e, setStateChange)} />
        </div>
    )
}

export { Input }