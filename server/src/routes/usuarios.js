import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import { Configuration } from "../config.js";
import controller from "../controller/usuarios.js";

const rutasProtegidas = (req, res, next) => {
  const token = req.headers["access-token"];

  if (token) {
    jwt.verify(token, Configuration.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("Token no válida");
        //res.redirect('/')
        res.send({ mensaje: "Token no válida" });
      } else {
        req.decoded = decoded;
        console.log(decoded);
        console.log("Token OK.");
        next();
      }
    });
  } else {
    console.log("Token no provista");
    //res.redirect('/')
    res.send({ mensaje: "Token no provista" });
  }
};

//Le configuro las rutas

router.post("/register", async (req, res) => {
  try {
    let result = await controller.createUser(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});
// router.post("/login", controller.loginUser);
// router.get("/datos", rutasProtegidas, controller.datosUser);
// router.get("/logout", controller.logoutUser);

export default router;
