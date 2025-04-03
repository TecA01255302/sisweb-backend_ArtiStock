"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tagController_1 = require("../controllers/tagController");
// Crear rutas de las categorías.
const tagRouter = (0, express_1.Router)();
// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
tagRouter.get('/', tagController_1.getAllTags);
tagRouter.get('/:id', tagController_1.getTagById);
tagRouter.post('/', tagController_1.createTag);
tagRouter.patch('/:id', tagController_1.modifyTag);
tagRouter.delete('/', tagController_1.deleteTag);
// Exportar las rutas de las categorías.
exports.default = tagRouter;
