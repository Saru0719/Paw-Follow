import { Router } from 'express';
import { Login, Register, logout } from '../controllers/login';

//Instanciacion de router
const router = Router();

//rutas
router.post('/register', Register);

router.post('/login', Login);

router.post('/logout', logout);

export default router;