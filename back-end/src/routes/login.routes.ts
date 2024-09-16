import { Router } from 'express';
import { Login, Register } from '../controllers/login';

//Instanciacion de router
const router = Router();

//rutas
router.post('/register', Register);

router.post('/login', Login);

export default router;