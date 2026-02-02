const Task = require ('../models/tasks')

const taskController = {
    createTask: async (req, res)=>{
        try{
            const task = await Task.create (req.body)
            res.json(task)
        }catch (error){
            console.error(error)
            res.status (500).json ('Error')
        }
    }, 
    getAllTask: async (req, res)=>{
        try{
            const task = await Task.find ()
            res.json(task)
        }catch (error){
            console.error(error)
            res.status (500).json ('Error')
        }
    }, 
    getTaskById: async (req, res)=>{
        try{
            const _id= req.params._id
            const task = await Task.findById (_id)
            res.json(task)
        }catch (error){
            console.error(error)
            res.status (500).json ('Error')
        }
    }, 
    markAsCompleted: async (req, res)=>{
        try{
            const _id= req.params._id
            const task = await Task.findById (_id)
            task.completed = true
            await task.save()
            res.json(task)
        }catch (error){
            console.error(error)
            res.status (500).json ('Error')
        }
    }, 
    changeTitle: async (req, res)=>{
        try{
            const _id= req.params._id
            const task = await Task.findById (_id)
            const newTitle= req.body.newTitle
            task.title= newTitle
            await task.save()
            res.json(task)
        }catch (error){
            console.error(error)
            res.status (500).json ('Error')
        }
    }, 
    deleteTask: async (req, res)=>{
        try{
            const _id= req.params._id
            const task = await Task.findByIdAndDelete(_id)
            res.json(task)
        }catch (error){
            console.error(error)
            res.status (500).json ('Error')
        }
    }, 
}

module.exports = taskController