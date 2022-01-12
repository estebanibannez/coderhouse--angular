import express from "express";
const app = express();
import cors from "cors";
import env from "dotenv";
import routerUsuarios from "./routes/usuarios.js";

import { Configuration } from "./config.js";
import { MongoDB } from "./database/db.js";

env.config();
/* Servidor instancia */

/* Servidor cors */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* Servidor public */
// app.use(express.static("public/cliente/dist/cliente"));

app.get("*", (req, res) => res.redirect("/"));

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
  console.error(err.message);
  return res.status(500).send("Algo se rompio!");
});

let fyhReset = new Date().toLocaleString();
app.get("/version", (req, res) => {
  res.send({
    version: Configuration.VERSION,
    timestamp: Date.now(),
    fyhReset,
  });
});

app.use("/usuarios", routerUsuarios);

/* Servidor listen */

const PERSISTENCIA = Configuration.get(
  Configuration.TIPO_PERSISTENCIA,
).persistencia;

if (PERSISTENCIA.tipo == "mongo") {
  MongoDB.conectar(PERSISTENCIA.URL);
}

const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en el puerto :${server.address().port}`);
  console.log("PERSISTENCIA ACTUAL: ", PERSISTENCIA);
});
server.on("error", (error) =>
  console.log(`Ocurrió un error en el servidor: ${error}`),
);
