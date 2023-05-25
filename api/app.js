"use strict"

import e from "express";

const app = e();
const port = 9000;

app.get('/', (req, res) => {
    res.send('Hello everybody');
});

app.listen(port, () => {
    console.log(200);
});

