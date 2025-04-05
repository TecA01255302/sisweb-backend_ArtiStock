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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database")); // Asegúrate de que esta instancia está correctamente exportada
const product_1 = require("../models/product");
const tag_1 = require("../models/tag");
const tag_product_1 = require("../models/tag_product");
const user_1 = require("../models/user");
const products = [
    {
        id: 1,
        title: "Smartphone X200",
        description: "Potente smartphone con pantalla OLED de 6.5 pulgadas.",
        price: 799.99,
        stock: 50,
        image: "https://example.com/images/smartphone-x200.jpg",
        userId: 1, // Asociado a un usuario
    },
    {
        id: 2,
        title: "Auriculares Noise Cancelling",
        description: "Auriculares con cancelación activa de ruido y sonido HD.",
        price: 249.99,
        stock: 100,
        image: "https://example.com/images/headphones-nc.jpg",
        userId: 2, // Asociado a otro usuario
    },
];
const tags = [
    { id: 1, name: "Electrónica" },
    { id: 2, name: "Accesorios" },
];
const tag_products = [
    { id: 1, tagId: 1, productId: 1 }, // Smartphone → Electrónica
    { id: 2, tagId: 2, productId: 2 }, // Auriculares → Accesorios
];
const users = [
    {
        id: 1,
        name: "Sasha Developer",
        email: "sasha@example.com",
        password: "securepassword123",
        profilePic: "https://example.com/images/sasha-profile.jpg",
    },
    {
        id: 2,
        name: "Alex Dev",
        email: "alex@example.com",
        password: "password456",
        profilePic: "https://example.com/images/alex-profile.jpg",
    },
];
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.sync({ force: true }); // 🔥 Esto asegura que las tablas existen
            console.log("Base de datos sincronizada.");
            yield user_1.User.bulkCreate(users);
            yield product_1.Product.bulkCreate(products);
            yield tag_1.Tag.bulkCreate(tags);
            yield tag_product_1.Tag_Product.bulkCreate(tag_products);
            console.log("Base de datos poblada correctamente.");
        }
        catch (error) {
            console.error("Error al insertar datos:", error);
        }
        finally {
            yield database_1.default.close(); // Opcional, para cerrar conexión
        }
    });
}
seedDatabase();
