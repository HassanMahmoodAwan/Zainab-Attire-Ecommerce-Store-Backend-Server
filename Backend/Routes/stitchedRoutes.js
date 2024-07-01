const express = require('express')
const { allStitchedCloths, getByIdStitchedCloth, partyWear, casualWear, traditionalWear } = require('../Controllers/stitched.controller')

const route = express.Router()

route.route('/').get(allStitchedCloths)
route.route('/').get(getByIdStitchedCloth)
route.route('/').get(partyWear)
route.route('/').get(casualWear)
route.route('/').get(traditionalWear)


module.exports = route