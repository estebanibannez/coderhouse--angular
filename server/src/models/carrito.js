import mongoose from "mongoose";

// -------------------------------------------------------------
//                         SCHEMA
// -------------------------------------------------------------
const schema = mongoose.Schema({
  id_item: String,
  usuario: Object,
  carrito: Array,
});

export default mongoose.model("Users", schema);
