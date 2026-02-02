const express = require ('express')
const router = express.Router()
const TaskRouter = require ('./tasks')

router.use ('/', TaskRouter)

module.exports=router