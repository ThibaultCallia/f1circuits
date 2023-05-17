import { Circuit } from '../models/circuitModel.js';

const getAllCircuits = async (req, res) => {
  try {
    const circuits = await Circuit.find({});
    res.status(200).json({ circuits });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCircuitById = async (req, res) => {
  try {
    const { id: circuitID } = req.params;
    const foundCircuit = await Circuit.findOne({ _id: circuitID });
    if (!foundCircuit)
      return res
        .status(404)
        .json({ error: `Circuit with id ${circuitID} not found` });
    res.status(200).json({ foundCircuit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCircuit = async (req, res) => {
  try {
    const circuit = await Circuit.create(req.body);
    res.status(200).json({ circuit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCircuit = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCircuit = async (req, res) => {
  try {
    const { id: circuitID } = req.params;
    const foundCircuit = await Circuit.findOneAndDelete({ _id: circuitID });
    if (!foundCircuit)
      return res
        .status(404)
        .json({ error: `Circuit with id ${circuitID} not found` });
    res.status(200).json({ foundCircuit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  getAllCircuits,
  getCircuitById,
  createCircuit,
  updateCircuit,
  deleteCircuit,
};
