import 'dotenv/config'
import express from 'express'
import { createServer } from 'node:http'
import { join } from 'node:path'

const port = process.env.PORT || 3000
const app = express()
const server = createServer(app)

app.use(express.static(join(__dirname, '..', 'public')))

app.get('/', async (_, response) => {
  response.sendFile('index.html')
})

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

