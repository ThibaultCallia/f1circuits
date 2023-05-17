import { Circuit } from '../models/circuitModel.js';
import { asyncWrapper } from '../helpers.js';

const getAllCircuits = asyncWrapper(async (req, res) => {
  let query = Circuit.find();

  // Search by name
  if (req.query.name) {
    query = query.where('name', new RegExp(req.query.name, 'i'));
  }

  // Sort by first_gp
  if (req.query.sort) {
    query = query.sort({ first_gp: req.query.sort });
  }

  // Limit
  if (req.query.limit) {
    query = query.limit(parseInt(req.query.limit));
  }

  const circuits = await query.exec();

  res.status(200).json({ circuits });
});

const getCircuitById = asyncWrapper(async (req, res) => {
  const { id: circuitID } = req.params;
  const foundCircuit = await Circuit.findOne({ _id: circuitID });
  if (!foundCircuit)
    return res
      .status(404)
      .json({ error: `Circuit with id ${circuitID} not found` });
  res.status(200).json({ foundCircuit });
});

const createCircuit = asyncWrapper(async (req, res) => {
  const circuit = await Circuit.create(req.body);
  res.status(200).json({ circuit });
});

const patchCircuit = asyncWrapper(async (req, res) => {
  const { id: circuitId } = req.params;
  const foundCircuit = await Circuit.findOneAndUpdate(
    { _id: circuitId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!foundCircuit)
    return res
      .status(404)
      .json({ error: `Circuit with id ${circuitId} not found` });
  res.status(200).json({ foundCircuit });
});

const deleteCircuit = asyncWrapper(async (req, res) => {
  const { id: circuitID } = req.params;
  const foundCircuit = await Circuit.findOneAndDelete({ _id: circuitID });
  if (!foundCircuit)
    return res
      .status(404)
      .json({ error: `Circuit with id ${circuitID} not found` });
  res.status(200).json({ foundCircuit });
});

const updateCircuit = asyncWrapper(async (req, res) => {
  const { id: circuitId } = req.params;
  const updatedCircuit = await Circuit.findByIdAndUpdate(
    { _id: circuitId },
    req.body,
    {
      new: true,
      runValidators: true,
      overwrite: true,
    }
  );
  if (!updatedCircuit)
    return res
      .status(404)
      .json({ error: `Circuit with id ${circuitId} not found` });
  res.status(200).json({ updatedCircuit });
});

export {
  getAllCircuits,
  getCircuitById,
  createCircuit,
  updateCircuit,
  deleteCircuit,
  patchCircuit,
};
