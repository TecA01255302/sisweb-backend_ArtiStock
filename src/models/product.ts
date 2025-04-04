import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo, BelongsToMany, HasMany} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import {User} from './user'
import {Tag} from './tag'
import { Tag_Product } from './tag_product';

// Intefaz con las propiedades de la tabla Products.
interface ProductAttributes{
  id: number;
  title: string;
  description: string;
  price: number ;
  stock: number ;
  image: string; // Contiene la dirección de la imagen del producto.
}

// El ID es un valor opcional a ingresar.
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}

// Crear la tabla Products.
@Table ({
  tableName: "Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{
  // La llave primaria es el ID, auto incrementado por Sequelize.

   @Column
   title!: string;    // Título del producto.

  // La descripción del producto es opcional.
  @Column({
      type: DataType.STRING
   })
   description?: string;

   @Column
   price!: number;    // Precio del producto.

   @Column
   stock!: number;    // Cantidad de productos en stock.

   @Column
   image?: string;    // Ruta de la imagen del producto.

   @CreatedAt
   @Column
   createdAt!: Date;  // Fecha de creación del producto.

   @UpdatedAt
   @Column
   updatedAt!: Date;  // Fecha de actualización del producto.

   //Relación muchos a uno (N:1) con User.
   @ForeignKey(()=> User)
   @Column
   userId!:number;
   @BelongsTo(()=>User)
   user!: User;

   //Relación de muchos a uno con Tag_Product
  @BelongsToMany(()=> Tag, () => Tag_Product)
  products!: Product[];
}
