import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import { Configuration } from "../config.js";
import controller from "../controller/usuarios.js";

const rutasProtegidas = (req, res, next) => {
  var token = req.headers.authorization.split(" ")[1];

  if (token) {
    jwt.verify(token, Configuration.SECRET_KEY, (err, decoded) => {
      if (err) {
        console.log("Token no válida");
        //res.redirect('/')
        res.json({ mensaje: "Token no válida" });
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
    res.json({ mensaje: "Token no provista" });
  }
};

router.post("/register", async (req, res) => {
  try {
    let result = await controller.createUser(req.body);
    console.log(result);
    return res.json({
      status: 200,
      message: "Usuario creado éxitosamente",
      data: result,
    });
  } catch (error) {
    if (error.code === 11000)
      return res
        .status(200)
        .json({
          message: "email ya se encuentra registrado, intente con otro",
        });
    return res.status(500).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let result = await controller.loginUser(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/datos", rutasProtegidas, async (req, res) => {
  try {
    let result = await controller.datosUser(req);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/logout", async (req, res) => {
  try {
    let result = await controller.logoutUser();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
