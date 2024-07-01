const express = require('express')
const { allUnstitchedCloths, getByIdUnstitchedCloth, printedWear, embroderedWear, chickKaryWear } = require('../Controllers/unStitched.controller')


const route = express.Router()

route.route('/').get(allUnstitchedCloths)
route.route('/printed').get(printedWear)
route.route('/embrodered').get(embroderedWear)
route.route('/chickkary').get(chickKaryWear)
route.route('/:id').get(getByIdUnstitchedCloth)


module.exports = route