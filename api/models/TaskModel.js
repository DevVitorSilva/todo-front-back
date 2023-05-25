"use strict"

import { Schema, model } from "mongoose";

const taskSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        }
    }
);

const TaskModel = model('task', taskSchema);

export {
    TaskModel,
}