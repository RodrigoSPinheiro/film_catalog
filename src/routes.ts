import { Router } from "express";
import { FilmController } from "./controllers/FilmController";

const routes = Router()

routes.post('/film', new FilmController().create)
routes.post('/film/:id/update', new FilmController().update)
routes.delete('/film/:id/delete', new FilmController().delete)
routes.get('/film/list', new FilmController().list)

export default routes