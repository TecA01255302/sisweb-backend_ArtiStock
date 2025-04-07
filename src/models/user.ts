import { Table, Model, Column, CreatedAt, UpdatedAt, DataType, HasMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Product } from './product'

// Interfaz con las propiedades de la tabla Users.
export interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  profilePic: string;  //Contiene la dirección de la imagen del perfil del usuario.
}

// El ID es un valor opcional a ingresar.
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

// Crear la tabla Users.
@Table({
  tableName: "Users"
})
export class User extends Model<UserAttributes, UserCreationAttributes> {

  // La llave primaria es el ID, auto incrementado por Sequelize.

  @Column
  name!: string;        // Nombre del usuario.

  @Column
  email!: string;       // Email.

  @Column
  password!: string;    // Contraseña.

  @Column
  profilePic?: string;  // Imagen de perfil ("../img/algo.jpg").

  @CreatedAt
  @Column
  createdAt!: Date;     // Fecha de creación del usuario.

  @UpdatedAt
  @Column
  updatedAt!: Date;    // Fecha de actualización del usuario.

  //Relación muchos a uno con Product.
  @HasMany(() => Product)
  products!: Product[];
}
