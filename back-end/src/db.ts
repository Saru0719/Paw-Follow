//Conexion a la base de datos
import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "db",
  user: "root",
  password: "12345",
  database: "paw_follow",
});
