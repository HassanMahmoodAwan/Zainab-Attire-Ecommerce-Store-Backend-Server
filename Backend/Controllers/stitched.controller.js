const asyncHandler = require('express-async-handler')

const allStitchedCloths = asyncHandler(async (req, res)=>{
    res.status(200).json({msg:"Get all cloths"})
})

const getByIdStitchedCloth = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Cloth by Id ${req.params.id}`})
})

const partyWear = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Party Wear Cloths`})
})

const casualWear = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Casual Wear Cloths`})
})

const traditionalWear = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Traditional Wear Cloths`})
})

module.exports = {allStitchedCloths, getByIdStitchedCloth, partyWear, casualWear, traditionalWear}