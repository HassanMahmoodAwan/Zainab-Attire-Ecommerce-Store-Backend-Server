const express = require('express')
const { allStitchedCloths } = require('../Controllers/stitched.controller')

const route = express.Router()

route.route('/').get(allStitchedCloths)


module.exports = route