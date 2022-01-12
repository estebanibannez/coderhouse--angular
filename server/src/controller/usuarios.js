import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Model from "../models/usuarios.js";
import { Configuration } from "../config.js";

class ControllerUsuarios {
  createUser = async (req, res, next) => {
    const newUser = {
      nombre: req.body.nombre,
      email: req.body.email,
      isAdmin: req.body.isAdmin,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
      foto: req.body.foto,
      password: bcrypt.hashSync(req.body.password),
    };

    Model.create(newUser, (err, user) => {
      if (err && err.code === 11000)
        return res.send({ message: "Email already exists" });
      if (err)
        return res.send({ message: "Server error!", error: err.message });
      const expiresIn = 60;
      const accessToken = jwt.sign({ id: user.id }, Configuration.SECRET_KEY, {
        expiresIn: expiresIn,
      });
      const dataUser = {
        name: user.name,
        email: user.email,
        accessToken: accessToken,
        expiresIn: expiresIn,
      };
      // response
      res.send({ dataUser });
    });
  };

  loginUser = async (req, res, next) => {
    const userData = {
      email: req.body.email,
      password: req.body.password,
    };
    Model.findOne({ email: userData.email }, (err, user) => {
      if (err) return res.send({ message: "Server error!" });

      if (!user) {
        // email does not exist
        res.send({
          message: "Something is wrong",
          error: "usuario no encontrado",
        });
      } else {
        const resultPassword = bcrypt.compareSync(
          userData.password,
          user.password,
        );
        if (resultPassword) {
          const expiresIn = 60;
          const accessToken = jwt.sign({ id: user.id }, Configuration.SECRET_KEY, {
            expiresIn: expiresIn,
          });

          const dataUser = {
            email: user.email,
            nombre: user.nombre,
            direccion: user.direccion,
            telefono: user.telefono,
            foto: user.foto,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            accessToken: accessToken,
            expiresIn: expiresIn,
          };
          res.send({ dataUser });
        } else {
          // password wrong
          res.send({
            message: "Something is wrong",
            error: "contraseña errónea",
          });
        }
      }
    });
  };

  datosUser = async (req, res, next) => {
    let id = req.decoded.id;
    //console.log(id)

    Model.findOne({ _id: id }, (err, user) => {
      if (err) return res.send({ message: "Server error!" });

      if (!user) {
        // id does not exist
        res.send({ message: "Something is wrong" });
      } else {
        const expiresIn = 60;
        const accessToken = jwt.sign({ id: user.id }, Configuration.SECRET_KEY, {
          expiresIn: expiresIn,
        });

        res.json({
          user: {
            email: user.email,
            nombre: user.nombre,
            direccion: user.direccion,
            telefono: user.telefono,
            foto: user.foto,
            isAdmin: user.isAdmin,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            accessToken,
          },
        });
      }
    });
  };

  logoutUser = async (req, res, next) => {
    res.json({ logout: "ok" });
  };
}

export default new ControllerUsuarios();
