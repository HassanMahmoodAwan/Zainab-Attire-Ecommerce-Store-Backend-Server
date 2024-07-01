const express = require('express')
const { allStitchedCloths, getByIdStitchedCloth, partyWear, casualWear, traditionalWear } = require('../Controllers/stitched.controller')

const route = express.Router()

route.route('/').get(allStitchedCloths)
route.route('/partywear').get(partyWear)
route.route('/casual').get(casualWear)
route.route('/traditional').get(traditionalWear)
route.route('/:id').get(getByIdStitchedCloth)


module.exports = route