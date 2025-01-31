import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

const Menu = mongoose.model("menu", menuSchema);

export default Menu;
