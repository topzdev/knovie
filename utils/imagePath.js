const img_size = "original";
require("dotenv").config();
import not_found from "~/assets/img/not_found.png";

export default (img_path, size) => {
  if (img_path === null) {
    return not_found;
  }

  return process.env.TMDB_IMAGE_PATH + size + img_path;
};
