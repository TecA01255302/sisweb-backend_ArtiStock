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
  tableName: "Products"
})
export class Product extends Model<ProductAttributes, ProductCreationAttributes>{

  // Here, TS infers Data Type from the JS Type
  // The ! means that the variable title wont be null or undefine. 
   @Column
   title!: string;

  // Here, we set the Data Type explicity
  // The ? means the variable can be null or undefined
   @Column({
      type: DataType.STRING
   })
   description?: string;

   @Column
   price!: number;

   @Column
   stock!: number;

   @Column
   image?: string;

   @CreatedAt
   @Column
   createdAt!: Date;

   @UpdatedAt
   @Column
   updatedAt!: Date;

   //Relacion muchos a uno con User
   @ForeignKey(()=> User)
   @Column
   userId!:number;
   @BelongsTo(()=>User)
   user!: User;
}
