const express = require('express')
const { allUnstitchedCloths, getByIdUnstitchedCloth, printedWear, embroderedWear, chickKaryWear } = require('../Controllers/unStitched.controller')


const route = express.Router()

route.route('/').get(allUnstitchedCloths)
route.route('/').get(getByIdUnstitchedCloth)
route.route('/').get(printedWear)
route.route('/').get(embroderedWear)
route.route('/').get(chickKaryWear)


module.exports = route