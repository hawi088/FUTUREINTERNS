const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 5000;
const app = express()
const contactRoute = require('../Backend/routes/contactRoutes')
const analyticsRoute = require('./routes/analyticsRoute')
require('dotenv').config()
app.use(cors({
    origin:process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log('MongonDB successfully connected'))
.catch(err=>console.error(err))
app.use('/api/contact',contactRoute)
app.use('api/analytics',analyticsRoute)
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})