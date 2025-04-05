// import { Sequelize } from "sequelize-typescript";
// import { Product } from "../models/product";
// import { User } from "../models/user";
// import { Tag } from "../models/tag";
// import { Tag_Product } from "../models/tag_product";

// const connection = new Sequelize({
//     database: 'artistock_db',
//     dialect: 'mysql',
//     username: 'artistock_user',
//     password: 'artistock2608',
//     storage: ':memory:',
//     models: [Product, User, Tag, Tag_Product]
// });

// async function connectionDB() {
//     try {
//         await connection.sync();
//     } catch (e) {
//         console.log(e);
//     }
// }

// export default connectionDB;

import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product";
import { User } from "../models/user";
import { Tag } from "../models/tag";
import { Tag_Product } from "../models/tag_product";

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', 
    models: [Product, User, Tag, Tag_Product]
});

async function connectionDB() {
    try {
        await connection.sync();
    } catch (e) {
        console.log(e);
    }
}

export default connectionDB;
