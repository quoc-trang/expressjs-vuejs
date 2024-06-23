const Movies = require("../models/movies.model");

exports.getMovies = async (_, res) => {
  try {
    const movies = await Movies.find({}).limit(10);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
