
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import {Section} from "./Section";
  

@Entity()
export class Edition {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Section, section => section.editions)
    @JoinTable()
    sections: Section[];
}