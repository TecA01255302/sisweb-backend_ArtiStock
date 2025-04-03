import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import {User} from './user'

interface ProductAttributes{
  id: number;
  title: string;
  description: string;
  price: number ;
  stock: number ;
  image: string; //guardara la direccion
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}

@Table ({
  tableName: "Tags_Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{

   //Relacion muchos a uno con User
   @BelongsTo(()=>Tags)
   user!: Tags;
}
