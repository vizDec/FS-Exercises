import { Part } from "./Part"

const Content = ({ parts }) => {
    {
        if(parts) {
            return(
                <div>
                   {parts.map((part) => (
                        <Part part={part} key={part.id}/>
                   ))}
                </div>
            )
        }
    }

    return <p>This course don't have parts</p>
}


export { Content }