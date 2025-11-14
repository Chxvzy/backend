import express from "express"
import cors from "cors"
import mysql from "mysql2"

const { DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env

const app = express()
const port = 3333

app.use(cors())

app.use(express.json())

app.get("/", (request, response) => {
  const selectCommand =  "SELECT name, email, age FROM felipelorenzo_02mc"
  
  database.query(selectCommand, (error, users) => {

    if (error) {
      console.log(error)
      return

    }
    response.json(users)
  }) 
  
})

  app.post("/cadastrar", (request, response) => {
    const {name, age, email, password} = request.body.user

    const insertCommand = `
    INSERT INTO felipelorenzo_02mc (name, age, email, password)
    VALUES (?, ?, ?, ?)
`

    database.query(insertCommand, [name, age, email, password], (error) => {
      if (error) {
        console.log(error)
        return
      }

      response.status(201).json({message: "Usuário cadastrado com sucesso!"})
    })
  })

  app.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
  })

  const database = mysql.createPool({
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    connectionLimit: 10
  })