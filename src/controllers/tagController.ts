import { RequestHandler, Request, Response } from "express";
import { Tag } from "../models/tag";

// Crear un nuevo tag.
export const createTag: RequestHandler = (req: Request, res: Response) => {
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
  const tag = { ...req.body };
  Tag.create(tag)
    .then((data: Tag | null) => {
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

// Buscar a todos los tags.
export const getAllTags: RequestHandler = (req: Request, res: Response) => {
  Tag.findAll()
    .then((data: Tag[]) => {
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

// Buscar a un tag por su ID.
export const getTagById: RequestHandler = (req: Request, res: Response) => {
  Tag.findByPk(req.params.id)
    .then((data: Tag | null) => {
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

// Actualizar a un tag por su ID.
export const modifyTag: RequestHandler = async (
  req: Request,
  res: Response
) => {
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
  Tag.update({ ...req.body }, { where: { id: req.params.id } })
    .then((actualizado) => {
      if (actualizado) {
        res.status(200).json({
          status: "Éxito",
          message: "Categoría actualizada exitosamente.",
          payload: { ...req.body },
        });
      } else {
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
};

// Eliminar a un tag, especificando su ID.
export const deleteTag: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
      await Tag.destroy({ where: { id } });
      res.status(200).json({ message: "Categoría eliminada." });
    } catch (error) {
      res.status(500).json({
        message: "Hubo un error al eliminar la categoría.",
        error,
      });
    }
};