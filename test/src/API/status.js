import express from "express"

const statusRouter = express.Router()
statusRouter.get('/status',async(req,res) =>{
    res.send()
})

export {statusRouter as status} 