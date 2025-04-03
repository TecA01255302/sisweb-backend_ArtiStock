"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
<<<<<<< HEAD
const productController_1 = require("../controllers/productController");
// Crear ruta de productos. 
const productRouter = (0, express_1.Router)();
// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
=======
const productController_1 = require("../controller/productController");
const productRouter = (0, express_1.Router)();
>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
productRouter.get('/', productController_1.getAllProducts);
productRouter.get('/:id', productController_1.getProductById);
productRouter.post('/', productController_1.createProduct);
productRouter.patch('/:id', productController_1.modifyProduct);
productRouter.delete('/', productController_1.deleteProduct);
<<<<<<< HEAD
// Exportar rutas de productos.
=======
>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
exports.default = productRouter;
