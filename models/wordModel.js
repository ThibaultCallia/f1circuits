// lib/models/Word.js
import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  userId: {
    type: String,
    ref: 'User',
    required: true,
  },
  wordText: {
    type: String,
    required: true,
  },
  definitions: [
    {
      definitionText: String,
      exampleSentence: String,
    },
  ],
  exerciseResults: [
    {
      correct: Boolean,
      date: Date,
    },
  ],
});

export const Word = mongoose.model('Word', wordSchema);
