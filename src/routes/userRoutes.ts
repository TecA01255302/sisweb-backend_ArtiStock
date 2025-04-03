import { Router, Request, Response } from 'express'; 
import{createUser,deleteUser,getAllUsers,
    getUserById,modifyUser
}from '../controllers/userController';


const userRouter:Router = Router(); 

userRouter.get('/', getAllUsers); 

userRouter.get('/:id', getUserById); 

userRouter.post('/', createUser); 

userRouter.patch('/:id', modifyUser); 

userRouter.delete('/', deleteUser); 

export default userRouter;