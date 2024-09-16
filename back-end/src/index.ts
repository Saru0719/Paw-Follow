//Importacion de express
import express from 'express';
import loginRoutes from './routes/login.routes'

//Instanciacion de express
const app = express();

//Middleware que parsea los JSON en las peticiones
app.use(express.json());

//Ruta para autenticación 
 app.use(loginRoutes);

const PORT: number = 3000;

//Ejecución
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
