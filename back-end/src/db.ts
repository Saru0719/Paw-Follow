//Conexion a la base de datos
import { createPool, Pool } from "mysql2/promise";

let pool: Pool;
(async () => {
  try {
    pool = createPool({
      host: "db",
      user: "root",
      password: "12345",
      database: "paw_follow",
      port: 3306,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to the database: ", error);
  }
})();

export { pool };
