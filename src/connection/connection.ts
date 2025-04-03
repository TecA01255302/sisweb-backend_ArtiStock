import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
import { User } from "../models/user";

const connection = new Sequelize({
database: 'artistock_db',
dialect: 'mysql',
username: 'artistock_user',
password: 'artistock2608',
storage: ':memory:',
models: [
Product, User
]
});

async function connectionDB(){
try{
await connection.sync();
}catch(e){
console.log(e);
}
} 

export default connectionDB;
