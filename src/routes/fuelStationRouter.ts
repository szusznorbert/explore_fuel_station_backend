import { Router } from "express";
import * as Controller from "@controllers/fuelStationController";
import AuthMiddleware from "@middlewares/authMiddleware";

const router = Router();

router.get('/', [AuthMiddleware], Controller.fetchFuelStations);
router.post('/', [AuthMiddleware], Controller.addFuelStation);
router.put('/:id', [AuthMiddleware], Controller.updateFuelStation);
router.delete('/:id', [AuthMiddleware], Controller.deleteFuelStation);

export default router;
