"use strict"

import e from "express";
import { main } from "./database/db.js";

const app = e();
const port = 9000;

main().
catch((err) => {
    console.log(`houve erro connect: ${err}`);
});

app.get('/', (req, res) => {
    res.send('Hello everybody');
});

app.listen(port, () => {
    console.log(200);
});

