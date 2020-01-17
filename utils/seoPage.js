let site_name = process.env.SITE_NAME;

export default (title, description) => {
  return {
    titleTemplate: "%s | Knowvie",
    title: title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: description
      },
      {
        hid: "og:title",
        property: "og:title",
        content: `${title} | ${site_name}`
      },
      {
        hid: "og:description",
        property: "og:description",
        content: description
      }
    ]
  };
};
