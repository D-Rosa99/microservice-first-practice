import Genre from '../model/index';

export default [
  {
    method: 'GET',
    path: '/api/genre',
    handler: async (request, h) => {
      const getAllGenre = await Genre.find();
      return getAllGenre;
    },
  },
  {
    method: 'POST',
    path: '/api/genre',
    handler: async (req, h) => {
      const genre = new Genre(req.payload);
      await genre.save();
      return genre;
    },
  },
];
