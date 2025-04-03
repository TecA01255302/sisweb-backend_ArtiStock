"use strict";
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
const sequelize_typescript_1 = require("sequelize-typescript");
const product_1 = require("../models/product");
<<<<<<< HEAD
const user_1 = require("../models/user");
const tag_1 = require("../models/tag");
const tag_product_1 = require("../models/tag_product");
const connection = new sequelize_typescript_1.Sequelize({
    database: 'artistock_db',
    dialect: 'mysql',
    username: 'artistock_user',
    password: 'artistock2608',
    storage: ':memory:',
    models: [product_1.Product, user_1.User, tag_1.Tag, tag_product_1.Tag_Product]
=======
const connection = new sequelize_typescript_1.Sequelize({
    database: "sisweb_db",
    dialect: "mysql",
    username: "sisweb_user",
    password: "HDK#$%Ljkwerff.89",
    storage: ':memory:',
    models: [product_1.Product]
>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
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
