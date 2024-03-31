const Content = (props) => {
    return (
        <div>
            {
                props.parts.map((part) => (
                    <p key={part.index}>{part.partTitle} {part.exercises}</p>
                ))
            }
        </div>
    )
}

export { Content }