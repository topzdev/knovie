export default (title, description) => {
  return {
    titleTemplate: "%s | Knowvie",
    title: title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: description
      }
    ]
  };
};
