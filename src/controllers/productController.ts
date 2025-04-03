import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product";

// Crear un nuevo producto.
export const createProduct: RequestHandler = (req: Request, res: Response) => {
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
  const product = { ...req.body };
  Product.create(product)
    .then((data: Product | null) => {
      res.status(200).json({
        status: "Éxito",
        message: "Producto creado exitosamente.",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "Algo salió mal al crear el usuario: " + err.message,
        payload: null,
      });
    });
};

// Encontrar a todos los productos.
export const getAllProducts: RequestHandler = (req: Request, res: Response) => {
  Product.findAll()
    .then((data: Product[]) => {
      res.status(200).json({
        status: "Éxito",
        message: "Producto encontrado existosamente.",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "Algo salió mal al buscar el producto: " + err.message,
        payload: null,
      });
    });
};

// Encontrar a un producto por su ID.
export const getProductById: RequestHandler = (req: Request, res: Response) => {
  Product.findByPk(req.params.id)
    .then((data: Product | null) => {
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

// Actualizar la información de un producto.
export const modifyProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {

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
  Product.update({ ...req.body }, { where: { id: req.params.id } })
  .then((actualizado) => {
    if (actualizado) {
      res.status(200).json({
        status: "Éxito",
        message: "Producto actualizado exitosamente.",
        payload: { ...req.body },
      });
    } else {
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
};

// Eliminar a un producto, especificando su ID.
export const deleteProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    await Product.destroy({ where: { id } });
    res.status(200).json({ message: "Producto eliminado." });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al eliminar el producto.",
      error,
    });
  }
};
