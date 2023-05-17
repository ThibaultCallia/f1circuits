import mongoose from 'mongoose';

const circuitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Circuit name is required'],
    trim: true,
    maxlength: [100, 'Circuit name cannot be more than 100 characters'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
    trim: true,
    maxlength: [100, 'Country name cannot be more than 100 characters'],
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
  },
  first_gp: {
    type: Number,
    required: [true, 'First GP year is required'],
    min: [1950, 'First GP year cannot be less than 1950'],
  },
  length: {
    type: Number,
    required: [true, 'Circuit length is required'],
    min: [0, 'Circuit length cannot be less than 0'],
  },
  laps: {
    type: Number,
    required: [true, 'Number of laps is required'],
    min: [0, 'Number of laps cannot be less than 0'],
  },
  race_distance: {
    type: Number,
    required: [true, 'Race distance is required'],
    min: [0, 'Race distance cannot be less than 0'],
  },
  lap_record: {
    driver: {
      type: String,
      required: false,
    },
    team: {
      type: String,
      required: false,
    },
    time: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: false,
    },
  },
});

export const Circuit = mongoose.model('Circuit', circuitSchema);
