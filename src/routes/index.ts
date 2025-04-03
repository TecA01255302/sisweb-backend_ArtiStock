import { Router, Request, Response } from 'express'; 
import productRoutes from './productRoutes';
import userRoutes from './userRoutes';

const apiRouter:Router = Router(); 

apiRouter.use('/product', productRoutes); 
apiRouter.use('/user', userRoutes); 


apiRouter.get('/', (req:Request, res: Response) => { 
res.send('Bienvenido a Artistock!') 
}) 

export default apiRouter;
