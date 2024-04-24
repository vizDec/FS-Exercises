const Alert = ({alert, setAlert}) => {
    const alertStyle = {
        fontSize: 24,
        color: alert.completed ? 'green' : 'red'
    }

    return <p style={alertStyle}>{alert.text}</p>
}

export { Alert }