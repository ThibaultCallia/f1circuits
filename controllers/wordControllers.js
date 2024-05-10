import { Word } from '../models/wordModel.js';
import { asyncWrapper } from '../helpers.js';

const getAllWords = asyncWrapper(async (req, res) => {
  let query = Word.find();

  const words = await query.exec();
  res.status(200).json({ words });
});

const getWordById = asyncWrapper(async (req, res) => {
  const { id: wordID } = req.params;
  const word = await Word.findById(wordID);
  if (!word) {
    return res.status(404).json({ error: `Word with id ${wordID} not found` });
  }
  res.status(200).json({ word });
});

const createWord = asyncWrapper(async (req, res) => {
  const word = await Word.create(req.body);
  res.status(201).json({ word });
});

const updateWord = asyncWrapper(async (req, res) => {
  const { id: wordId } = req.params;
  const word = await Word.findOneAndUpdate({ _id: wordId }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true, // be cautious with overwrite as it replaces the entire document
  });
  if (!word) {
    return res.status(404).json({ error: `Word with id ${wordId} not found` });
  }
  res.status(200).json({ word });
});

const patchWord = asyncWrapper(async (req, res) => {
  const { id: wordId } = req.params;
  const word = await Word.findOneAndUpdate({ _id: wordId }, req.body, {
    new: true,
    runValidators: true, // does not replace the entire document
  });
  if (!word) {
    return res.status(404).json({ error: `Word with id ${wordId} not found` });
  }
  res.status(200).json({ word });
});

const deleteWord = asyncWrapper(async (req, res) => {
  const { id: wordID } = req.params;
  const word = await Word.findOneAndDelete({ _id: wordID });
  if (!word) {
    return res.status(404).json({ error: `Word with id ${wordID} not found` });
  }
  res.status(200).json({ message: 'Word successfully deleted' });
});

export {
  getAllWords,
  getWordById,
  createWord,
  updateWord,
  deleteWord,
  patchWord,
};
