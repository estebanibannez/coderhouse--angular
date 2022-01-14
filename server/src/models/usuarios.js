import mongoose from "mongoose";

const schema = mongoose.Schema(
  {
    nombre: { type: String, require: true, max: 100 },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: { type: String, require: true, max: 100 },
    direccion: {
      type: String,
    },
    telefono: {
      type: String,
    },
    foto: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Users", schema);
