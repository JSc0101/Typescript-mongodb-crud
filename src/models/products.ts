import { prop, getModelForClass } from "@typegoose/typegoose";
class Products {
  @prop({ required: true, trim: true })
  name: string;

  @prop({ required: true, trim: true })
  price: number;

  @prop({ required: true, trim: true })
  amount: number;

  @prop({ required: true, trim: true })
  date: string;
}
const Modelproducts = getModelForClass(Products);
export default Modelproducts;
