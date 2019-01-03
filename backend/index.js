const bodyParser = require('body-parser')
const express = require('express')
const errorHandler = require('./handlers/error')
const PORT = process.env.PORT || 8000;
const routes = require('./routes');

const app = express();

// body parser
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

app.use(routes)
app.use(errorHandler)

// server initialization
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})