require("dotenv").config();

// Sizes

const img_size = "original";
const imdb_path = process.env.TMDB_IMAGE_PATH;

export default (img_path, size) => {
  if (img_path === null) {
    return "https://www.uh.edu/pharmacy/_images/directory-faculty/no-image-available.jpg";
  }

  return imdb_path + size + img_path;
};
