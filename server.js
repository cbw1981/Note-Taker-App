const express = require('express')
const notesRoutes = require('./routes/notes')
const apiRoutes = require('./routes/apiRoutes')


const app = express()
// express() stored in variable 

const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/api', apiRoutes)

app.use('/', notesRoutes)

app.listen(PORT, () => 
    console.log(`Listening on PORT: ${PORT}`));