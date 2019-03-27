
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import {Edition} from "./Edition";
  

@Entity()
export class Section {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => Edition, edition => edition.sections)
    editions: Edition[];
}
