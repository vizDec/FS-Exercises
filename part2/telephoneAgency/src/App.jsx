import { useEffect, useState } from 'react'
import noteService from './services/notes'

import { Form } from './Form'
import { NumberList } from './NumberList'
import { Search } from './Search'
import { Alert } from './components/Alert'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [alert, setAlert] = useState({completed: null, text: ''})

  useEffect(() => {
      noteService
        .getAll()
        .then(response => {
          setPersons(response)
        })
  }, [])

  useEffect(() => {
    setTimeout(() => setAlert({completed: null, text:''}), 10000)
  }, [alert, setAlert])

  const addVerification = (e) => {
    e.preventDefault()
    const isRepeated = persons.some(person => person.name === newName)
    if(isRepeated) {
      editNumber()
    } else {
      addContact()
    }
  }

  const addContact = () => {
    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('')
    setNewNumber('')

    noteService
      .create({name: newName, number: newNumber})
      .then(response => {
        setAlert({completed: true, text: `${response.name} was added`})
      })
      .catch(err => {
        setAlert({completed: false, text: err.message})
      })
  }

  const editNumber = () => {
    setNewName('')
    setNewNumber('')
    
    const text = `${newName} is already added to Phonebook, replace the old number with the new one?`
    const objectId = persons.filter(person => person.name === newName)[0]
    if(confirm(text)) {
      noteService
        .update(objectId.id, { ...objectId, number: newNumber})
        .then( response => {
          setPersons(prev => prev.map(person =>
            person.id === response.id ? { ...objectId, number: newNumber} : person
          ))
          setAlert({completed: true, text: `${response.name} was edited`})
        })
        .catch(err => {
          setAlert({completed: false, text: err.message})
        })
    }
  }

  const eraseContact = (id) => {
    noteService
      .erase(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== response.id))
      })
      .then(response => {
        setAlert({completed: true, text: `Was deleted`})
      })
      .catch(err => {
        setAlert({completed: false, text: err.message})
      })
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>

      <Alert alert={alert} setAlert={setAlert}/>

      <Search search={search} setSearch={setSearch}/>

      <h2>Add New</h2>

      <Form 
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        addContact={addVerification}/>

      <h2>Numbers</h2>

      <NumberList persons={filteredPersons} eraseContact={eraseContact}/>

    </>
  )
}

export default App