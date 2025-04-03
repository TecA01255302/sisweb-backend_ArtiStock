import { Router, Request, Response } from 'express'; 
import{createUser,deleteUser,getAllUsers,
    getUserById,modifyUser
}from '../controllers/userController';

// Crear ruta de usuarios.
const userRouter:Router = Router(); 

// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
userRouter.get('/', getAllUsers); 
userRouter.get('/:id', getUserById); 
userRouter.post('/', createUser); 
userRouter.patch('/:id', modifyUser); 
userRouter.delete('/', deleteUser); 

// Exportar rutas de usuarios.
export default userRouter;