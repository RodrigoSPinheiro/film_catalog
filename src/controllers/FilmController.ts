import { Request, Response } from "express";
import { filmRepository } from "../repositories/filmRepository";

export class FilmController {
    async create(req: Request, res: Response){
        const {title, author, description} = req.body

        if(!title){
            return res.status(400).json({ message: 'O titulo é obrigatório'})
        }

        if(!author){
            return res.status(400).json({ message: 'O autor é obrigatório'})
        }

        if(!description){
            return res.status(400).json({ message: 'O descrição é obrigatório'})
        }

        try {
                const newFilm = filmRepository.create({ title, author, description })

                await filmRepository.save(newFilm)

                return res.status(201).json(newFilm)

                
        } catch (error){
            console.log(error);
            return res.status(500).json ({ message: 'Internal Server Error'})
        }
    }
}