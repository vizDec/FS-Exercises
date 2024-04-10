const Content = ({ parts }) => {
    return (
        <div>
            {
                parts.map((part) => (
                    <p key={part.index}>{part.partTitle} {part.exercises}</p>
                ))
            }
        </div>
    )
}

export { Content }