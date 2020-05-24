import mongoose from 'mongoose';

const dbConection = () =>
  mongoose
    .connect('mongodb://db/playground', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connected successfully'))
    .catch((err) => console.log('Someting went wrong', err));

export default dbConection;
