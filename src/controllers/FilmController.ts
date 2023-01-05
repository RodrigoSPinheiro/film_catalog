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

    async update(req: Request, res: Response){
        const {id} = req.params;
        const {title, author, description} = req.body;

        try {
                const film = filmRepository.findOneBy({ id: Number(id) })

                if(!film){
                    return res.status(404).json({ message: 'O filme não existe'})
                }

                await filmRepository.update(id, { 
                    title, author, description
                })

                return res.status(200).json({ message: 'Filme atualizado com sucesso!' })                
        } catch (error){
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error'})
        }
    }
}