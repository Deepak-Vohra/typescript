
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Catalog} from "./Catalog";

@Entity()
export class CatalogTimestamp {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstAdded: string;

    @Column()
    firstUpdated: string;

    @Column()
    lastUpdated: string;

    @OneToOne(type => Catalog, catalog => catalog.timestamp)
    @JoinColumn()
    catalog: Catalog;
}
