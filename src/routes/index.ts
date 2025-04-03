import { Router, Request, Response } from 'express';
import productRoutes from './productRoutes';
<<<<<<< HEAD
import userRoutes from './userRoutes';
import tagRoutes from './tagRoutes';

// Creación del API del router.
const apiRouter: Router = Router();

// Crear rutas de producto, usuario y categoría (tag).
apiRouter.use('/product', productRoutes);
apiRouter.use('/user', userRoutes);
apiRouter.use('/category', tagRoutes);

// Verificar que funcione la conexión del router.
apiRouter.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido a Artistock!')
})

// Exportar el API del router.
=======

const apiRouter:Router = Router();

apiRouter.use('/product', productRoutes);
apiRouter.get('/', (req:Request, res: Response) => {
    res.send('Hello World!')
})

>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
export default apiRouter;