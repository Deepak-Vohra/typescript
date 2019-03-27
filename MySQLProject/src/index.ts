
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Edition} from "./entity/Edition";
import {Section} from "./entity/Section";
import {serialize} from "class-transformer"; 

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "mysql",
    database: "mysql",
    entities: [
        __dirname + "/entity/*.ts"
    ],
    synchronize: true,
    logging: false
}).then(async connection => {
let edition1 = new Edition();
edition1.name = "January February 2019"; 
await connection.manager.save(edition1);

let edition2 = new Edition();
edition2.name = "November December 2018"; 
await connection.manager.save(edition2);

let section = new Section();
section.name = "Application Development";
 
section.editions = [edition1, edition2];
await connection.manager.save(section);


let section2 = new Section();
section2.name = "DBA";
 
section2.editions = [edition1];
await connection.manager.save(section2);


let section3 = new Section();
section3.name = "Database Developer";
 
section3.editions = [edition1];
await connection.manager.save(section3);

const loadedSection = await connection
    .getRepository(Section)
    .findOne(1, { relations: ["editions"] });
    
    console.log(serialize(loadedSection));
}).catch(error => console.log(error));
