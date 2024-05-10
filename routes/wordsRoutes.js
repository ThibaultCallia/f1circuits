import express from 'express';
import {
  getAllWords,
  getWordById,
  createWord,
  updateWord,
  deleteWord,
  patchWord,
} from '../controllers/wordControllers.js';

const router = express.Router();

router.route('/').get(getAllWords);
router
  .route('/:id')
  .get(getWordById)
  .delete(deleteWord)
  .patch(patchWord)
  .put(updateWord);

export { router as wordsRouter };
