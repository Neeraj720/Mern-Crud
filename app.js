import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import userRoute from './routes/userRoutes.js'
dotenv.config({})
let app = express()

// Cors for same port 
app.use(cors())
// bodyPaerser 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 4000

// Route

app.use('/', userRoute)
app.listen(port, () => {
  console.log("Server Start SuccessFully at : http://localhost:9090/")
})