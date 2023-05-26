"use strict";

import mongoose from "mongoose";

async function main () {
    await mongoose.connect('mongodb://localhost/task',
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        } 
    );
}

export {
    main,
}