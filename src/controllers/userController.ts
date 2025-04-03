import { RequestHandler, Request, Response } from "express";
import { User } from "../models/user";

// Create and Save a new Product
export const createUser: RequestHandler = (req: Request, res: Response) => {
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
  const user = { ...req.body };
  User.create(user)
    .then((data: User | null) => {
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

// Retrieve all Products from the database.
export const getAllUsers: RequestHandler = (req: Request, res: Response) => {
  User.findAll()
    .then((data: User[]) => {
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

// Find a single Product with an id
export const getUserById: RequestHandler = (req: Request, res: Response) => {
  User.findByPk(req.params.id)
    .then((data: User | null) => {
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

// Update a Product by the id in the request
export const modifyUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
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
  User.update({ ...req.body }, { where: { id: req.params.id } })
    .then((isUpdated) => {
      if (isUpdated) {
        res.status(200).json({
          status: "Success",
          message: "User successfully updated",
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
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    await User.destroy({ where: { id } });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error,
    });
  }
};