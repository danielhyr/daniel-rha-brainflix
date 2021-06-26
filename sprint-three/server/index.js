const express = require('express')
const app = express()   
const cors = require('cors')
// Config 

require('dotenv').config()
const PORT = process.env.PORT

// Routes files import

const videoRoutes = require('./routes/videos')
const commentRoutes = require('./routes/comments')



// Midware

app.use(express.json())
app.use(cors())

// Routes

app.use(express.static('public/images'))

app.use('/api/videos', videoRoutes).use('/api/videos', commentRoutes)


app.listen(PORT, () => {
    console.log(`express is running on ${PORT}
    `)
})