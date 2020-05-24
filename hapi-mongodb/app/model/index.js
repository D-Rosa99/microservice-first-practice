import mongoose from 'mongoose';

const Genre = mongoose.model(
  'genre',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  })
);

export default Genre;
