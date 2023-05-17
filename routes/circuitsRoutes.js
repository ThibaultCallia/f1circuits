import express from 'express';
import {
  getAllCircuits,
  getCircuitById,
  createCircuit,
  updateCircuit,
  deleteCircuit,
  patchCircuit,
} from '../controllers/circuitControllers.js';

const router = express.Router();

router.route('/').get(getAllCircuits).post(createCircuit);
router
  .route('/:id')
  .get(getCircuitById)
  .delete(deleteCircuit)
  .patch(patchCircuit)
  .put(updateCircuit);

export { router as circuitsRouter };
