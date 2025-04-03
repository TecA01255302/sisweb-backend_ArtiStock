import { RequestHandler, Request, Response } from "express";
import { Tag } from "../models/tag";

// Create and Save a new Product
export const createTag: RequestHandler = (req: Request, res: Response) => {
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
  Tag.create(user)
    .then((data: Tag | null) => {
      res.status(200).json({
        status: "Success",
        message: "Tag successfully created",
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
  Tag.findAll()
    .then((data: Tag[]) => {
      res.status(200).json({
        status: "Success",
        message: "Tag successfully retrieved",
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
  Tag.findByPk(req.params.id)
    .then((data: Tag | null) => {
      res.status(200).json({
        status: "Success",
        message: "Tag successfully retrieved",
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
export const modifyTag: RequestHandler = async (
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
  Tag.update({ ...req.body }, { where: { id: req.params.id } })
    .then((isUpdated) => {
      if (isUpdated) {
        res.status(200).json({
          status: "Success",
          message: "Tag successfully updated",
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
    await Tag.destroy({ where: { id } });
    res.status(200).json({ message: "Tag deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error,
    });
  }
};