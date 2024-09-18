import { Router } from "express";
import { authRequired } from "../middleswares/validateToken";
import { addHealth, deleteHealth, getHealth } from "../controllers/health";

const router = Router();

// Rutas

router.get("/health/:id", authRequired, getHealth);
router.post("/health", authRequired, addHealth);
router.delete("/health/:id", authRequired, deleteHealth);

export default router;
