import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
<<<<<<< HEAD
import { User } from "../models/user";
import { Tag } from "../models/tag";
import { Tag_Product } from "../models/tag_product";

const connection = new Sequelize({
    database: 'artistock_db',
    dialect: 'mysql',
    username: 'artistock_user',
    password: 'artistock2608',
    storage: ':memory:',
    models: [Product, User, Tag, Tag_Product]
});

async function connectionDB() {
    try {
        await connection.sync();
    } catch (e) {
=======

const connection = new Sequelize({
    database: "sisweb_db",
    dialect: "mysql",
    username: "sisweb_user",
    password: "HDK#$%Ljkwerff.89",
    storage: ':memory:',
    models: [Product]
});

async function connectionDB() {
    try{
        await connection.sync();
    }catch(e){
>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
        console.log(e);
    }
}

<<<<<<< HEAD
export default connectionDB;
=======
export default connectionDB;
>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
