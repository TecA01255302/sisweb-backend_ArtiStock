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
// Create and Save a new Product
const createUser = (req, res) => {
    //Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
        return;
    }
    //Guardar en db
    const user = Object.assign({}, req.body);
    user_1.User.create(user)
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "User successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something is wrong" + err.message,
            payload: null,
        });
    });
};
exports.createUser = createUser;
// Retrieve all Products from the database.
const getAllUsers = (req, res) => {
    user_1.User.findAll()
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "User successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something is wrong retrieving" + err.message,
            payload: null,
        });
    });
};
exports.getAllUsers = getAllUsers;
// Find a single Product with an id
const getUserById = (req, res) => {
    user_1.User.findByPk(req.params.id)
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "User successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something is wrong retrieving" + err.message,
            payload: null,
        });
    });
};
exports.getUserById = getUserById;
// Update a Product by the id in the request
const modifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
        return;
    }
    //Guardar en db
    user_1.User.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            res.status(200).json({
                status: "Success",
                message: "User successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "error",
                message: "Something is wrong updating",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something is wrong updating" + err.message,
            payload: null,
        });
    });
});
exports.modifyUser = modifyUser;
// Delete a Product with the specified id in the request
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield user_1.User.destroy({ where: { id } });
        res.status(200).json({ message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting user",
            error,
        });
    }
});
exports.deleteUser = deleteUser;
