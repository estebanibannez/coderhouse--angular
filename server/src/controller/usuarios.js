import usuariosDao from "../dao/usuarios.dao.js";
import bcrypt from "bcrypt";
class ControllerUsuarios {
  // crea un nuevo usuario
  async createUser(req) {
    const newUser = {
      nombre: req.nombre,
      email: req.email,
      isAdmin: req.isAdmin,
      direccion: req.direccion,
      telefono: req.telefono,
      foto: req.foto,
      password: bcrypt.hashSync(req.password, 10),
    };
    console.log(newUser);

    return await usuariosDao.create(newUser);
  }

  //logea un usuario
  async loginUser(req) {
    try {
      const userData = {
        email: req.email,
        password: req.password,
      };

      return await usuariosDao.login(userData);
    } catch (error) {
      throw error;
    }
  }

  //obtiene la data de un usuario
  async datosUser(req) {
    try {
      return await usuariosDao.getDataUser(req);
    } catch (error) {
      throw error;
    }
  }

  logoutUser = async (req, res, next) => {
    res.json({ logout: "ok" });
  };
}

export default new ControllerUsuarios();
