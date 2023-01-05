import { Request, Response } from "express";

export class FilmController {
    async create(req: Request, res: Response){
        return res.json('cheguei no controlador')
    }
}