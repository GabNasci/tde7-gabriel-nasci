const express = require("express");
const router = express.Router()

let tasks = [
    {
        id: 1,
        name: "Passear no lago",
        description: "Ir no lago passear",
        isDone: false
    },
    {
        id: 2,
        name: "Estudar",
        description: "Estudar javascript",
        isDone: false
    },
    {
        id: 3,
        name: "Trabalhar",
        description: "ir para o trabalho",
        isDone: false
    }
]

router.get('/tasks', (req, res) => {
    res.json(tasks)
})

router.post('/tasks', (req, res) => {
    const data = req.body
    const task = {
        id: tasks.length + 1,
        name: data.name,
        description: data.description,
        isDone: data.isDone
    }
    tasks.push(task)
    res.status(201).json(task)
})

router.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const {name, description, isDone} = req.body
    const task = tasks.find((task) => task.id === id)
    if(!task) return res.json({message: "Não tem essa task carai"})
    task.name = name
    task.description = description
    task.isDone = isDone
    res.json(task)
})

router.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find((task) => task.id === id)
    if(!task) return res.json({message: "Não tem essa task carai"})
    tasks = tasks.filter((task) => task.id !== id)
    res.json({message: `Task com o id: ${id} deletada`})
})






module.exports = {
    router
}