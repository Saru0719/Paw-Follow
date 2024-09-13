import { Router } from 'express';
import { Add_pets, Get_all_pets, Get_pet_byId, Update_pet, Delete_pet } from '../controllers/home';

//Instanciacion de router
const router = Router();

//Rutas
router.post('/pets', Add_pets);

router.get('/pets', Get_all_pets);

router.get('/pets/:id', Get_pet_byId);

router.put('/pets/:id', Update_pet);

router.delete('/pets/:id', Delete_pet);