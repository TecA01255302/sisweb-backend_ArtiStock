"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
// Crear ruta de usuarios.
const userRouter = (0, express_1.Router)();
// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
userRouter.get('/', userController_1.getAllUsers);
userRouter.get('/:id', userController_1.getUserById);
userRouter.post('/', userController_1.createUser);
userRouter.patch('/:id', userController_1.modifyUser);
userRouter.delete('/', userController_1.deleteUser);
// Exportar rutas de usuarios.
exports.default = userRouter;
