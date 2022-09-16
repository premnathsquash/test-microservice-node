import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    image: string;

    @Column({default: 0})
    likes: number;
}