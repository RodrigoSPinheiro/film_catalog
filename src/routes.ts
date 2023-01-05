import { Router } from "express";
import { FilmController } from "./controllers/FilmController";

const routes = Router()

routes.post('/film', new FilmController().create)

routes.post('/film/:id/update', new FilmController().update)

export default routes