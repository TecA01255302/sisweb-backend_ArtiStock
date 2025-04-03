import {Table, Model, Column, DataType, ForeignKey, HasMany} from 'sequelize-typescript';
import {Optional} from 'sequelize';
import {tag_product} from './tag_product'

interface TagAttributes{
  id: number;
  name: string;
}

interface TagCreationAttributes extends Optional<TagAttributes, 'id'>{}

@Table ({
  tableName: "Tags"
})
export class Tag extends Model<TagAttributes, TagCreationAttributes>{

  // Here, TS infers Data Type from the JS Type
  // The ! means that the variable name wont be null or undefine. 
   @Column
   name!: string;

   //relación de muchos a uno con tag_product
   @HasMany(()=>tag_product)
      products!:tag_product[];
}