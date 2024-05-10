const express = require('express')
const app = express()
var morgan = require("morgan")
const cors = require("cors")

morgan.token('postData', (req, res) => {
  return JSON.stringify(req.body)
})

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())
app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :postData"))

let persons = [
    { 
      "id": 1,  
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
  res.send("Welcome to this backend application")
})

app.get('/info',(req, res) => {
    res.send(
        `<p>Phonebook has info for ${persons.length} people</p>   
        <p>${new Date}</p>`
    )
})  

app.get('/api/persons',(req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id
    const person = persons.find(person => person.id == id)

    if(person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  const verifiedContent = persons.find(person => person.name === body.name || person.number === body.number)

  if(!body.name || !body.number) {
    return res.status(400).json({
      error: "Name or Number missing"
    })
  } else if(verifiedContent) {
    return res.status(400).json({
      error: "Name or Number has to be unique"
    })
  }

  const person = {
    "id": Math.floor(Math.random() * 10000000000),
    "name": body.name,
    "number": body.number,
  }
  
  persons = persons.concat(person)

  res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})