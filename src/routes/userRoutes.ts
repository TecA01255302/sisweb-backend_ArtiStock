import { Router, Request, Response } from 'express'; 
import{createUser,deleteUser,getAllUsers,
    getAllUsersBasicInfo, getUserById,
    getUserNameById, modifyUser
}from '../controllers/userController';

// Crear ruta de usuarios.
const userRouter:Router = Router(); 

// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
userRouter.get('/', getAllUsers); 
userRouter.get('/basic', getAllUsersBasicInfo); 
userRouter.get('/:id', getUserById);
userRouter.get('/username/:id', getUserNameById); 
userRouter.post('/', createUser); 
userRouter.patch('/:id', modifyUser); 
userRouter.delete('/:id', deleteUser); 

// Exportar rutas de usuarios.
export default userRouter;