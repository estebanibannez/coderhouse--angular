import env from "dotenv";

env.config();
// tipo = "MONGO_LOCAL";
export class Configuration {
  static VERSION = "v1.0.0";
  static SECRET_KEY = "patitofeo";

  static TIPO_PERSISTENCIA = process.env.TIPO_PERSISTENCIA || "MONGO_DBaaS";

  static get(tipo) {
    switch (tipo) {
      case "MONGO_LOCAL":
        return {
          persistencia: {
            tipo: "mongo",
            descripcion: "base mongo local",
            URL: "mongodb://localhost:27017/elvideoclub",
          },
        };
      case "MONGO_DBaaS":
        return {
          persistencia: {
            tipo: "mongo",
            descripcion: "base mongo atlas",
            URL: "mongodb+srv://coder:coder@cluster0.jdgnu.mongodb.net/videoclubcoder?retryWrites=true&w=majority",
          },
        };

      default:
        throw new Error(`no hay persistencia seleccionada`);
    }
  }
}
