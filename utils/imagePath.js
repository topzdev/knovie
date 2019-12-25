require("dotenv").config();

// Sizes

const img_size = "original";
const imdb_path = process.env.TMDB_IMAGE_PATH;

export default (img_path, size) => {
  return imdb_path + size + img_path;
};
