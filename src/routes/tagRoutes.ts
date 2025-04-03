import { Router, Request, Response } from 'express';
import {createTag, deleteTag, getAllTags,getTagById, modifyTag} from '../controllers/tagController';

// Crear rutas de las categorías.
const tagRouter: Router = Router();

// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
tagRouter.get('/', getAllTags);
tagRouter.get('/:id', getTagById);
tagRouter.post('/', createTag);
tagRouter.patch('/:id', modifyTag);
tagRouter.delete('/', deleteTag);

// Exportar las rutas de las categorías.
export default tagRouter;