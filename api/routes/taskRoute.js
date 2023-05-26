"use strict"

import e, { Router } from "express";
import { TaskModel } from "../models/TaskModel.js";

const route = Router();

route.get('/api', async (req, res) => {
    const tasks = await TaskModel.find({});
    res.json(tasks);
});

route.post('/api', e.json(),async (req, res) => {
    const {task} = req.body;
    const tarefa = new TaskModel({task});
    await tarefa.save()
    res.send('200');
});

route.put('/api', e.json(), async (req, res) => {
    const {id, task} = req.body;
    await TaskModel.findOneAndUpdate({_id: id}, {task: task});
    res.send('200');
});

route.delete('/api', e.json(), async (req, res) => {
    const {id} = req.body;
    await TaskModel.findByIdAndDelete(id);
    res.send('200');
});



export {
    route,
}