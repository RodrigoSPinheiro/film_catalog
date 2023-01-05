import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('films')
export class Film {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    title: string

    @Column({ type: 'text' })
    author: string

    @Column({ type: 'text' })
    description: string
}