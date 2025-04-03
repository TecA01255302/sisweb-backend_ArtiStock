"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const tagRoutes_1 = __importDefault(require("./tagRoutes"));
// Creación del API del router.
const apiRouter = (0, express_1.Router)();
// Crear rutas de producto, usuario y categoría (tag).
apiRouter.use('/product', productRoutes_1.default);
apiRouter.use('/user', userRoutes_1.default);
apiRouter.use('/category', tagRoutes_1.default);
// Verificar que funcione la conexión del router.
apiRouter.get('/', (req, res) => {
    res.send('Bienvenido a Artistock!');
});
// Exportar el API del router.
exports.default = apiRouter;
