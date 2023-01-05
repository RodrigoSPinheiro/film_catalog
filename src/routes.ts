import { Router } from "express";
import { FilmController } from "./controllers/FilmController";

const routes = Router()

routes.post('/film', new FilmController().create)

export default routes