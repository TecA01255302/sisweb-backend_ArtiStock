import { RequestHandler, Request, Response } from "express";
import { User } from "../models/user";

// Crear un nuevo usuario.
export const createUser: RequestHandler = (req: Request, res: Response) => {
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
  const user = { ...req.body };
  User.create(user)
    .then((data: User | null) => {
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

// Buscar a todos los usuarios.
export const getAllUsers: RequestHandler = (req: Request, res: Response) => {
  User.findAll()
    .then((data: User[]) => {
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

// Buscar a un usuario por su ID.
export const getUserById: RequestHandler = (req: Request, res: Response) => {
  User.findByPk(req.params.id)
    .then((data: User | null) => {
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

// Actualizar la información de un usuario.
export const modifyUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
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
  User.update({ ...req.body }, { where: { id: req.params.id } })
    .then((actualizado) => {
      if (actualizado) {
        res.status(200).json({
          status: "Éxito",
          message: "Usuario actualizado exitosamente.",
          payload: { ...req.body },
        });
      } else {
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
};

// Eliminar a un usuario, especificando su ID.
export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    await User.destroy({ where: { id } });
    res.status(200).json({ message: "Usuario eliminado." });
  } catch (error) {
    res.status(500).json({
      message: "Hubo un error al eliminar el usuario.",
      error,
    });
  }
};