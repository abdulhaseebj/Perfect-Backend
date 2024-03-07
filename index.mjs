import express from 'express'
const app = express()
const port = process.env.PORT
import cors from "cors";
import 'dotenv/config'
import ConnectDB from './config/mongodb.mjs'
import routes from './routes/index.mjs'

app.use(cors());
app.use(express.json());
app.use('/', routes)
ConnectDB()


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})