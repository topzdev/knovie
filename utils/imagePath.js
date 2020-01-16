import not_found from "~/assets/img/not_found.png";

export default (img_path, size) => {
  if (img_path === null) {
    return not_found;
  }

  return "http://image.tmdb.org/t/p/" + size + img_path;
};
