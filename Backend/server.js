const express = require('express')
require('dotenv').config()
const stitchedRoutes = require('./Routes/stitchedRoutes')
const unstitchedRoutes = require('./Routes/unStitchedRoutes')
const db_connection = require('./Config/db_connection')

const app = express()

// ======= middlewares =========
app.use(express.json())
app.use('/inventory/stitched', stitchedRoutes)
app.use('/inventory/unstitched', unstitchedRoutes)
db_connection()



app.get('/', (req, res)=>{
    res.status(200).send('<h1>Zainab Attire Ecommerce Store Backend Server.</h1>')
})


const PORT=process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('Server running on Port: '+ PORT)
})