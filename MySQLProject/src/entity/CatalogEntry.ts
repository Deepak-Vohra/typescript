
import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {CatalogEdition} from "./CatalogEdition";


@Entity()
export class CatalogEntry {

    @PrimaryGeneratedColumn()
     id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    isPublished: boolean;

    @ManyToOne(type => CatalogEdition, catalogEdition => catalogEdition.catalogEntries)
    catalogEdition: CatalogEdition;

  
}