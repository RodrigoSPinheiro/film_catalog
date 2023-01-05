import "reflect-metadata"; //10.1k (gzipped: 3k)

import express from "express";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express();

    app.listen(3000, () => console.log(`Server is running!`));
})