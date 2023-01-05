import "reflect-metadata"; //10.1k (gzipped: 3k)

import express from "express";
import { AppDataSource } from "./data-source";
import routes from './routes';

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json())
    app.use(routes)

    app.listen(3000, () => console.log(`Server is running!`));
})