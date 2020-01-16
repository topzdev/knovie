export default (title, id) => {
  return `${title
    .replace(/[^a-zA-Z1-9 ]/g, "")
    .replace(/ /g, "-")
    .toLowerCase()}-${id}`;
};
