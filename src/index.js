import express from "express"
import cors from "cors"
import {people} from "./people.js"

const app = express()
const port = 3333

app.use(cors())

app.use(express.json())

app.get("/", (request, response) => {
  response.json (people)

  })

  app.post("/cadastrar", (request, response) => {
    const {name, age, email, password} = request.body.user

    console.log(`
      Nome: ${name}, 
      Idade: ${age},
      Email: ${email}, 
      Senha: ${password} 
      `)
    response.status(201).json({message: "Usuário cadastrado com sucesso!"})
  })

  app.listen(port, () =>{
    console.log(`Servidor rodando na porta: ${port}`)
  })