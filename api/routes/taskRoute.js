"use strict"

import e, { Router } from "express";
import { TaskModel } from "../models/TaskModel.js";
import cors from "cors";

const route = Router();
const corsOptins = {
    origin: ["http://localhost:9000", 'http://127.0.0.1:5500']
}

route.use(cors(corsOptins));

route.get('/api/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const task = await TaskModel.findById(id);

        res.send(JSON.stringify(task));
    } catch (err) {
        res.send(err);
    }
    
})

route.get('/api', async (req, res) => {
    const tasks = await TaskModel.find({});
    res.json(tasks);
});

route.post('/api', e.json(), async (req, res) => {
    const { task } = req.body;
    const tarefa = new TaskModel({ task });
    await tarefa.save()
    res.send('200');
});

route.put('/api', e.json(), async (req, res) => {
    const { id, task } = req.body;
    await TaskModel.findOneAndUpdate({ _id: id }, { task: task });
    res.send('200');
});

route.delete('/api', e.json(), async (req, res) => {
    const { id } = req.body;
    await TaskModel.findByIdAndDelete(id);
    res.send('200');
});



export {
    route,
}