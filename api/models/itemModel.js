import mongoose from "mongoose";


const itemSchema = new mongoose.Schema({
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

 const Item = mongoose.model("Item", itemSchema);

 export default Item;
