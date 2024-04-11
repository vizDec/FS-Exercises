const Button = ({eventHandler, name}) => {
    return (
        <button onClick={eventHandler}>{name}</button>
    )
}

export { Button }