"use strict"

import mongoose from "mongoose"

async function main () {
    await mongoose.connect('mongodb://localhost/tarefas')
}

export {
    main,
}