"use strict"

import e, { Router } from "express";
import { TaskModel } from "../models/TaskModel.js";

const route = Router();

route.get('/api', (req, res) => {
    res.send('hello tarefas');
});

route.post('/api', e.json(), (req, res) => {
    const {task} = req.body;

    const tarefa = new TaskModel({task});

    // tarefa.save().
    // then((doc) => {
    //     console.log(doc);
    // }).
    // catch((err) => {
    //     console.log(`Erro ao salvar o documento: ${err}`);
    // });

    res.send('200');
});



export {
    route,
}