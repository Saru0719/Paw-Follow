//Importacion de express
import express from "express";
import loginRoutes from "./routes/login.routes";
import cors from "cors";
import homeRoutes from "./routes/home.routes";

//Importacion de cookieParser

import cookieParser from "cookie-parser";
//Instanciacion de express
const app = express();

//Middleware que parsea los JSON en las peticiones
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  })
);
app.use(cookieParser());

//Ruta para autenticación
app.use(loginRoutes);
app.use(homeRoutes);

const PORT: number = 3000;

//Ejecución
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
