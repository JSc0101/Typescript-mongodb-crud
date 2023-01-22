import { prop, getModelForClass } from "@typegoose/typegoose";
class Products {
  @prop()
  name: string;

  @prop()
  price: number;

  @prop()
  amount: number;

  @prop()
  date: string;
}
const Modelproducts = getModelForClass(Products);
export default Modelproducts;
