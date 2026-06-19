import mongoose
from "mongoose";

const OrderSchema=
new mongoose.Schema({

productId:String,

productName:String,

price:Number,

quantity:Number,

status:String

},{
timestamps:true
});

export default
mongoose.models.Order
||
mongoose.model(
"Order",
OrderSchema
);