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
const user_1 = require("../models/user");
const tag_1 = require("../models/tag");
// Crear un nuevo producto.
const createProduct = (req, res) => {
    if (!req.body) {
        res.status(400).json({
            status: "Error",
            message: "El contenido no puede estar vacío.",
            payload: null,
        });
        return;
    }
    const { title, description, price, stock, image, userId, tags } = req.body;
    product_1.Product.create({
        title,
        description,
        price,
        stock,
        image,
        userId,
    })
        .then((product) => {
        if (tags && tags.length > 0) {
            // Asociar los tags directamente por sus IDs
            product.$set("tags", tags)
                .then(() => {
                res.status(201).json({
                    status: "Éxito",
                    message: "Producto creado y tags asociados exitosamente.",
                    payload: product,
                });
            })
                .catch((err) => {
                res.status(500).json({
                    status: "Error",
                    message: "Error al asociar los tags: " + err.message,
                    payload: null,
                });
            });
        }
        else {
            res.status(201).json({
                status: "Éxito",
                message: "Producto creado exitosamente sin tags.",
                payload: product,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al crear el producto: " + err.message,
            payload: null,
        });
    });
};
exports.createProduct = createProduct;
// Encontrar a todos los productos.
const getAllProducts = (req, res) => {
    product_1.Product.findAll({
        include: [
            {
                model: user_1.User,
                attributes: ["id", "name"], // Solo los atributos relevantes del usuario
                required: false, // Permite productos sin usuario
            },
            {
                model: tag_1.Tag,
                attributes: ["id", "name"], // Solo los atributos relevantes de los tags
                through: { attributes: [] }, // Excluye el modelo intermedio Tag_Product
                required: false, // Permite productos sin tags
            },
        ],
    })
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Productos encontrados exitosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al buscar los productos: " + err.message,
            payload: null,
        });
    });
};
exports.getAllProducts = getAllProducts;
// Encontrar a un producto por su ID.
const getProductById = (req, res) => {
    product_1.Product.findByPk(req.params.id)
        .then((data) => {
        res.status(200).json({
            status: "Éxito",
            message: "Producto encontrado existosamente.",
            payload: data,
        });
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió al buscar el producto: " + err.message,
            payload: null,
        });
    });
};
exports.getProductById = getProductById;
// Actualizar la información de un producto.
const modifyProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Validar que sí hay producto.
    if (!req.body) {
        res.status(400).json({
            status: "Error",
            message: "El contenido no puede estar vacío.",
            payload: null,
        });
        return;
    }
    //Guardar en db.
    product_1.Product.update(Object.assign({}, req.body), { where: { id: req.params.id } })
        .then((actualizado) => {
        if (actualizado) {
            res.status(200).json({
                status: "Éxito",
                message: "Producto actualizado exitosamente.",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            res.status(500).json({
                status: "Error",
                message: "Algo salió mal al actualizar el producto.",
                payload: null,
            });
        }
    })
        .catch((err) => {
        res.status(500).json({
            status: "Error",
            message: "Algo salió mal al actualizar el producto: " + err.message,
            payload: null,
        });
    });
});
exports.modifyProduct = modifyProduct;
// Eliminar a un producto, especificando su ID.
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    try {
        yield product_1.Product.destroy({ where: { id } });
        res.status(200).json({ message: "Producto eliminado." });
    }
    catch (error) {
        res.status(500).json({
            message: "Hubo un error al eliminar el producto.",
            error,
        });
    }
});
exports.deleteProduct = deleteProduct;
