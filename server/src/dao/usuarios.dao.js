import model from "../models/usuarios.js";
import { Configuration } from "../config.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UsuariosDao {
  async create(newUser) {
    return new Promise((resolve, reject) =>
      model.create(newUser, (err, user) => {
        if (err) reject(err);
        if (err?.code === 11000) return reject(err);
        const expiresIn = 120;
        const accessToken = jwt.sign(
          { id: user.id },
          Configuration.SECRET_KEY,
          {
            expiresIn: expiresIn,
          },
        );
        const dataUser = {
          name: user.name,
          email: user.email,
          accessToken: accessToken,
          expiresIn: expiresIn,
        };
        return resolve(dataUser);
      }),
    );
  }

  async login(userData) {
    return new Promise((resolve, reject) =>
      model.findOne({ email: userData.email }, (err, user) => {
        if (err) reject(err);

        if (!user) {
          // email does not exist
          reject(err);
        } else {
          const resultPassword = bcrypt.compareSync(
            userData.password,
            user.password,
          );
          if (resultPassword) {
            const expiresIn = 120;
            const accessToken = jwt.sign(
              { id: user.id },
              Configuration.SECRET_KEY,
              {
                expiresIn: expiresIn,
              },
            );
            return resolve({
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
            });
          } else {
            // password erronea
            reject(err);
          }
        }
      }),
    );
  }

  async getDataUser(req) {
    return new Promise((resolve, reject) => {
      let id = req.decoded.id;
      model.findOne({ _id: id }, (err, user) => {
        if (err) reject(err);

        if (!user) {
          // id does not exist
          reject(err);
        } else {
          const expiresIn = 120;
          const accessToken = jwt.sign(
            { id: user.id },
            Configuration.SECRET_KEY,
            {
              expiresIn: expiresIn,
            },
          );

          return resolve({
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
    });
  }
}

export default new UsuariosDao();
