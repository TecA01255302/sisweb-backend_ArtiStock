<<<<<<< HEAD
import { Router, Request, Response } from 'express'; 
import{createProduct,deleteProduct,getAllProducts,
    getProductById,modifyProduct
}from '../controllers/productController';

// Crear ruta de productos. 
const productRouter:Router = Router(); 

// Operaciones CRUD con protocolos GET, POST, PATCH y DELETE.
productRouter.get('/', getAllProducts); 
productRouter.get('/:id', getProductById); 
productRouter.post('/', createProduct); 
productRouter.patch('/:id', modifyProduct); 
productRouter.delete('/', deleteProduct); 

// Exportar rutas de productos.
=======
import { Router, Request, Response } from 'express';
import { createProduct,
         deleteProduct,
         getAllProducts,
         getProductById,
         modifyProduct } from "../controller/productController"

const productRouter:Router = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductById);

productRouter.post('/', createProduct);

productRouter.patch('/:id', modifyProduct);

productRouter.delete('/', deleteProduct);

>>>>>>> a9bca52fd14f199076c0976eaa1302b506490727
export default productRouter;