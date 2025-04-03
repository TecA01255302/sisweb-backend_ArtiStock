import { Table, Model, Column, DataType, ForeignKey, HasMany } from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { Tag_Product } from './tag_product'

// Interfaz con las propiedades de la tabla Tags.
interface TagAttributes {
  id: number;
  name: string;
}

// El ID es un valor opcional a ingresar.
interface TagCreationAttributes extends Optional<TagAttributes, 'id'> { }

// Creación de la tabla Tags.
@Table({
  tableName: "Tags"
})
export class Tag extends Model<TagAttributes, TagCreationAttributes> {

  // Nombre (palabra clave) del tag (categoría).
  @Column
  name!: string;

  //Relación de muchos a uno con Tag_Product
  @HasMany(() => Tag_Product)
  products!: Tag_Product[];
}