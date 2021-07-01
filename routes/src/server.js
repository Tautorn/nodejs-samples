// Necessary to read .env file
require('dotenv').config()
const express = require('express')
const cors = require('cors')

// Initialzing all api routes
const routes = require('./routes')
// Creating express application
const app = express()
// Catch up the application project, necessary to execute the application, for example: http://localhost:3000
const port = process.env.PORT

// Allowed CORS
app.use(cors())

// Necessary to body parse
app.use(express.json())

// Using all application routes
app.use(routes)

// Turn on the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})