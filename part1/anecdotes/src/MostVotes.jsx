const MostVotes = ({ votes, anecdotes }) => {
    const mostVoted = Math.max(...votes)
    const mostVotedIndex = votes.indexOf(mostVoted)

    const content = anecdotes[mostVotedIndex]

    if(mostVoted === 0) {
        return <div></div>
    }

    return (
        <div>
            <h2>Anecdote with Most Votes</h2>

            <p>{ content }</p>

            <p>Votes: { mostVoted }</p>
        </div>
    )
}

export { MostVotes }