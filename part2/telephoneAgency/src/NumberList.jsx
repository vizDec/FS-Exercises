import React from 'react'

const NumberList = ({persons, eraseContact}) => {

  const confirmErase = (name, id) => {
    if(confirm(`Do you really want to delete ${name}?`)){
      eraseContact(id)
    }
  }

  return (
    <div>
        {
            persons.map((person) => (
            <div key={person.name}>
              <p>{person.name}  {person.number}</p>
              <button onClick={() => confirmErase(person.name, person.id)}>Delete</button>
            </div>
            ))
        }
    </div>
  )
}

export { NumberList }