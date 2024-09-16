import { Router } from "express";
import {
  Add_pets,
  Get_all_pets,
  Get_pet_byId,
  Update_pet,
  Delete_pet,
} from "../controllers/home";
import { authRequired } from "../middleswares/validateToken";

//Instanciacion de router
const router = Router();

//Rutas
router.post("/pets", authRequired, Add_pets);

router.get("/pets", authRequired, Get_all_pets);

router.get("/pets/:id", authRequired, Get_pet_byId);

router.put("/pets/:id", authRequired, Update_pet);

router.delete("/pets/:id", authRequired, Delete_pet);

export default router;
