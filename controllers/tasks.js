import { v4 as uuidv4 } from 'uuid';

let tasks = [];


export const getTasks = (req, res) => {
    res.send(tasks);
}

export let createTask = (req, res) => {

    const { taskContent, deadline } = req.body;


    tasks.push({ taskContent, deadline, id: uuidv4() });

    res.send(`Task added  to the database`);
}

export const getTask = (req, res) => {
    const { id } = req.params;

    const foundTask = tasks.find((task) => task.id === id)
    res.send(foundTask);
}

export const deleteTask = (req, res) => {
    const { id } = req.params;

    tasks = tasks.filter((task) => task.id !== id);

    res.send(`task with the id ${id} deleted from the database.`)
}

export const updateTask = (req, res) => {
    const { id } = req.params;
    const { taskContent } = req.body;

    const task = tasks.find((task) => task.id === id)

    if (taskContent) {
        task.taskContent = taskContent;
    }


    res.send(`Task with the id ${id} has been updated`)
}