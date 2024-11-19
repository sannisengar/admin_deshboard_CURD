const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const web = require('./routes/web')
const connectDb = require('./db/connectDb')

connectDb();//connect database
const cors = require('cors')
app.use(cors())

// for datget in api
app.use(express.json())

// route load//
app.use('/api', web)
//localhiost:4000/api




//server create//
app.listen(process.env.PORT, () => {
    console.log(`server running on localhost:${process.env.PORT}`)
})