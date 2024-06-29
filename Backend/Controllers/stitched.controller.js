const asyncHandler = require('express-async-handler')

const allStitchedCloths = (req, res)=>{
    res.status(200).json({msg:"Get all cloths"})
}


module.exports = {allStitchedCloths}