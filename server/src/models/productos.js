import mongoose from "mongoose";

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const schema = mongoose.Schema({
  id_item: String,
  titulo: String,
  genero: String,
  year: Number,
  precio: Number,
  stock: Number,
  foto: String,
});

export default mongoose.model("Users", schema);
