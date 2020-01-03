export default (title, id) => {
  return `${title
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/ /g, "-")
    .toLowerCase()}-${id}`;
};
