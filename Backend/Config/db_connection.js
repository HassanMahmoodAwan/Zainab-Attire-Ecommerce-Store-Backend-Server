const mongoose = require('mongoose')
const DB_URL = process.env.DB_CONNECTION

async function db_connection(){
    try {
        const connect = await mongoose.connect(DB_URL)
        console.log(`DB Connected Successfully, ${connect.connection.host}`)
    } catch (error) {
        console.error('DB doesnot Connected')
    }
}

module.exports = db_connection