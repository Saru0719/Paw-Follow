//Importacion de express
import express from 'express';

//Instanciacion de express
const app = express();

//Middleware que parsea los JSON en las peticiones
app.use(express.json());

const PORT: number = 3000;

//Ejecución
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
