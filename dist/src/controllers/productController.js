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
exports.deleteProduct = exports.modifyProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
const product_1 = require("../models/product");
// Create and Save a new Product
const createProduct = (req, res) => {
    //Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Cpntent can not be empty",
            payload: null,
        });
        return;
    }
    //Guardar en db
    const product = Object.assign({}, req.body);
    product_1.Product.create(product)
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "Product successfully created",
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
exports.createProduct = createProduct;
// Retrieve all Products from the database.
const getAllProducts = (req, res) => {
    product_1.Product.findAll()
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "Products successfully retrieved",
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
exports.getAllProducts = getAllProducts;
// Find a single Product with an id
const getProductById = (req, res) => {
    product_1.Product.findByPk()
        .then((data) => {
        res.status(200).json({
            status: "Success",
            message: "Products successfully retrieved",
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
exports.getProductById = getProductById;
// Update a Product by the id in the request
const modifyProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Cpntent can not be empty",
            payload: null,
        });
        return;
    }
    //Guardar en db
    product_1.Product.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            res.status(200).json({
                status: "Success",
                message: "Product successfully updated",
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
exports.modifyProduct = modifyProduct;
// Delete a Product with the specified id in the request
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield product_1.Product.destroy({ where: { id } });
        res.status(200).json({ message: "Product deleted" });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting products",
            error,
        });
    }
});
exports.deleteProduct = deleteProduct;
