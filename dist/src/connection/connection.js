"use strict";
// import { Sequelize } from "sequelize-typescript";
// import { Product } from "../models/product";
// import { User } from "../models/user";
// import { Tag } from "../models/tag";
// import { Tag_Product } from "../models/tag_product";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
const user_1 = require("../models/user");
const tag_1 = require("../models/tag");
const tag_product_1 = require("../models/tag_product");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    models: [product_1.Product, user_1.User, tag_1.Tag, tag_product_1.Tag_Product]
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield connection.sync();
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.default = connectionDB;
