const express = require('express')
const app = express()   
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()


// Config 

const PORT = process.env.PORT || 8000
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', function(){
    console.log('connection has been made')    
}).on('err', function(err) {
    console.log('error', err)
})
// Routes files import

const videoRoutes = require('./routes/videos')
const commentRoutes = require('./routes/comments')



// Middleware

app.use(express.json())
app.use(cors())

// Routes

app.use(express.static('public/images'))

app.use('/api/videos', videoRoutes).use('/api/videos', commentRoutes)

app.listen(PORT, () => {
    console.log(`express is running on ${PORT}
    `)
})