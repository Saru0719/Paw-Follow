//Importacion de express
import express from "express";
import loginRoutes from "./routes/login.routes";
import cors from "cors";
import homeRoutes from "./routes/home.routes";
import HealthRoutes from "./routes/health.routes";
import morgan from "morgan";
import helmet from "helmet";

//Importacion de cookieParser

import cookieParser from "cookie-parser";
//Instanciacion de express
const app = express();

// Cors
app.use(
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  })
);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(helmet());

//Ruta para autenticación
app.use(loginRoutes);
app.use(homeRoutes);
app.use(HealthRoutes);

const PORT = 3000;

//Ejecución
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
