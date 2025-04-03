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
exports.deleteUser = exports.modifyUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
// Crear un nuevo usuario.
const createUser = (req, res) => {
    // Verificar que la solicitud sea válida.
    if (!req.body) {
        res.status(400).json({
            status: "Error",
            message: "El contenido no puede estar vacío.",
            payload: null,
        });
        return;
    }
    //Guardar en db
    const user = Object.assign({}, req.body);
    user_1.User.create(user)
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Usuario creado exitosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Algo salió mal al crear el usuario: " + err.message,
            payload: null,
        });
    });
};
exports.createUser = createUser;
// Buscar a todos los usuarios.
const getAllUsers = (req, res) => {
    user_1.User.findAll()
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Usuario encontrado existosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al buscar el usuario: " + err.message,
            payload: null,
        });
    });
};
exports.getAllUsers = getAllUsers;
// Buscar a un usuario por su ID.
const getUserById = (req, res) => {
    user_1.User.findByPk(req.params.id)
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Usuario encontrado existosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió al buscar el usuario: " + err.message,
            payload: null,
        });
    });
};
exports.getUserById = getUserById;
// Actualizar la información de un usuario.
const modifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    user_1.User.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((actualizado) => {
        if (actualizado) {
            res.status(200).json({
                status: "Éxito",
                message: "Usuario actualizado exitosamente.",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "Error",
                message: "Algo salió mal al actualizar el usuario.",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al actualizar el usuario: " + err.message,
            payload: null,
        });
    });
});
exports.modifyUser = modifyUser;
// Eliminar a un usuario, especificando su ID.
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield user_1.User.destroy({ where: { id } });
        res.status(200).json({ message: "Usuario eliminado." });
    }
    catch (error) {
        res.status(500).json({
            message: "Hubo un error al eliminar el usuario.",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
