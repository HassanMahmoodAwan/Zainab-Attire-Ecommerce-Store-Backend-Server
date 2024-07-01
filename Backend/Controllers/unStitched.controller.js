const asyncHandler = require('express-async-handler')

const allUnstitchedCloths = asyncHandler(async (req, res)=>{
    res.status(200).json({msg:"Get all unstitched cloths"})
})

const getByIdUnstitchedCloth = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Cloth by Id ${req.params.id}`})
})

const chickKaryWear = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Party Wear Cloths`})
})

const printedWear = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Casual Wear Cloths`})
})

const embroderedWear = asyncHandler( async(req, res)=>{
    res.status(200).json({msg:`Traditional Wear Cloths`})
})

module.exports = {allUnstitchedCloths, getByIdUnstitchedCloth, chickKaryWear, printedWear, embroderedWear}