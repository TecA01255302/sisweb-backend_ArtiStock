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
exports.deleteTag = exports.modifyTag = exports.getTagById = exports.getAllTags = exports.createTag = void 0;
const tag_1 = require("../models/tag");
// Crear un nuevo tag.
const createTag = (req, res) => {
    // Verificar que la solicitud sea válida.
    if (!req.body) {
        res.status(400).json({
            status: "Error",
            message: "El contenido no puede estar vacío.",
            payload: null,
        });
        return;
    }
    //Guardar en db.
    const tag = Object.assign({}, req.body);
    tag_1.Tag.create(tag)
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Categoría creada exitosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al crear la categoría: " + err.message,
            payload: null,
        });
    });
};
exports.createTag = createTag;
// Buscar a todos los tags.
const getAllTags = (req, res) => {
    tag_1.Tag.findAll()
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Categoría encontrada existosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al buscar la categoría: " + err.message,
            payload: null,
        });
    });
};
exports.getAllTags = getAllTags;
// Buscar a un tag por su ID.
const getTagById = (req, res) => {
    tag_1.Tag.findByPk(req.params.id)
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Categoría encontrada exitosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió al buscar la categoría: " + err.message,
            payload: null,
        });
    });
};
exports.getTagById = getTagById;
// Actualizar a un tag por su ID.
const modifyTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validar que sí hay tag.
    if (!req.body) {
        res.status(400).json({
            status: "Error",
            message: "El contenido no puede estar vacío.",
            payload: null,
        });
        return;
    }
    //Guardar en db.
    tag_1.Tag.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((actualizado) => {
        if (actualizado) {
            res.status(200).json({
                status: "Éxito",
                message: "Categoría actualizada exitosamente.",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "Error",
                message: "Algo salió mal al actualizar la categoría.",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al actualizar la categoría: " + err.message,
            payload: null,
        });
    });
});
exports.modifyTag = modifyTag;
// Eliminar a un tag, especificando su ID.
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield tag_1.Tag.destroy({ where: { id } });
        res.status(200).json({ message: "Categoría eliminada." });
    }
    catch (error) {
        res.status(500).json({
            message: "Hubo un error al eliminar la categoría.",
            error,
        });
    }
});
exports.deleteTag = deleteTag;
