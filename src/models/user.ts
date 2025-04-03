import {Table, Model, Column, CreatedAt, UpdatedAt, DataType, HasMany} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import {Product} from './product'

interface UserAttributes{
  id: number;
  name: string;
  email: string;
  password: string ;
  profilePic: string ; //guardara la direccion
  image: string; 
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'>{}

@Table ({
  tableName: "Users"
})
export class User extends Model<UserAttributes, UserCreationAttributes>{
 
    //Primary key is added as auto-increment by sequilize

   @Column
   name!: string;

   @Column
   email!: string;

   @Column
   password!: string;

   @Column
   //Podriamos agregar default a una ruta usando @Default("ruta/img algo nose")
   profilePic?: string;

   @CreatedAt
   @Column
   createdAt!: Date;

   @UpdatedAt
   @Column
   updatedAt!: Date;

   //Realacion muchos a uno con Product
   @HasMany(()=>Product)
   products!:Product[];
}
