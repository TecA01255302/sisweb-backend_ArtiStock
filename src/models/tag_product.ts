import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Product } from './product'
import { Tag } from './tag'

// Interfaz con las propiedades de Tag_Product.
export interface Tag_ProductAttributes {
  id: number;  // ID de la relación del tag con el producto al que pertenece.
  tagId: number;
  productId: number;
}

// El ID a ingresar es opcional.
interface Tag_ProductCreationAttributes extends Optional<Tag_ProductAttributes, 'id'> { }

// Crear la tabla Tag_Product.
@Table({
  tableName: "Tags_Products"
})
export class Tag_Product extends Model<Tag_ProductAttributes, Tag_ProductCreationAttributes> {

  // LLave foránea tagID que pertenece a la tabla Tags.
  @ForeignKey(() => Tag)
  @Column
  tagId!: number;

  // LLave foránea productID que pertenece a la tabla Products.
  @ForeignKey(() => Product)
  @Column
  productId!: number;
};