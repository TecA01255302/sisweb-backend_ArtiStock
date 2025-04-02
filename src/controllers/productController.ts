import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product";

// Create and Save a new Product
export const createProduct: RequestHandler = (req: Request, res: Response) => {
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
  const product = { ...req.body };
  Product.create(product)
    .then((data: Product | null) => {
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

// Retrieve all Products from the database.
export const getAllProducts: RequestHandler = (req: Request, res: Response) => {
  Product.findAll()
    .then((data: Product[]) => {
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

// Find a single Product with an id
export const getProductById: RequestHandler = (req: Request, res: Response) => {
  Product.findByPk()
    .then((data: Product | null) => {
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

// Update a Product by the id in the request
export const modifyProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
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
  Product.update({ ...req.body }, { where: { id: req.params.id } })
    .then((isUpdated) => {
      if (isUpdated) {
        res.status(200).json({
          status: "Success",
          message: "Product successfully updated",
          payload: { ...req.body },
        });
      } else {
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
};

// Delete a Product with the specified id in the request
export const deleteProduct: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    await Product.destroy({ where: { id } });
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting products",
      error,
    });
  }
};
