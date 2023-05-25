"use strict"

import e from "express";
import { main } from "./database/db.js";
import { route } from "./routes/taskRoute.js";

const app = e();
const port = 9000;

main().
catch((err) => {
    console.log(`houve erro connect: ${err}`);
});

app.use(route);

app.listen(port, () => {
    console.log(200);
});

