const express = require('express')
require('dotenv').config()
const stitchedRoutes = require('./Routes/stitchedRoutes')
const unstitchedRoutes = require('./Routes/unStitchedRoutes')

const app = express()

// ======= middlewares =========
app.use(express.json())
app.use('/inventory/stitched', stitchedRoutes)
app.use('/inventory/stitched', stitchedRoutes)



const PORT=process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log('Server running on Port: '+ PORT)
})