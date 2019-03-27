

import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {CatalogEntry} from "./CatalogEntry";
 

@Entity()
export class CatalogEdition {

    @PrimaryGeneratedColumn()
     id: number;

    @Column()
    edition: string;

   
    @Column()
    isPublished: boolean;

   @OneToMany(type => CatalogEntry, catalogEntry => catalogEntry.catalogEdition)  
    catalogEntries: CatalogEntry[];

}