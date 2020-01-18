export default (title, id, lowercased) => {
  let parsed = `${title
    .replace(/[^a-zA-Z1-9& ]/g, "")
    .replace(/ /g, "-")}-${id}`;

  if (lowercased) parsed.toLowerCase();

  return parsed;
};
