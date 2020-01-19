import imagePath from "@/utils/imagePath";
import backdrop_path from "@/static/knowvie_bg.jpg";
import poster_path from "@/static/knowvie-logo.png";
let site_name = process.env.SITE_NAME;
let site_url = process.env.SITE_URL;

export default (title, description) => {
  console.log(title, description);
  return {
    titleTemplate: "%s | Knowvie",
    title,
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
        hid: "og:type",
        property: "og:type",
        content: "movie"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: imagePath(backdrop_path, "w780")
      },
      {
        hid: "og:description",
        name: "og:description",
        content: description
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: site_name
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: `${title} | ${site_name}`
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: imagePath(backdrop_path, "w780")
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@_christop_"
      },
      {
        hid: "itemprop:name",
        itemprop: "name",
        content: `${title} | ${site_name}`
      },
      {
        hid: "itemprop:name",
        itemprop: "description",
        content: description
      },
      {
        hid: "itemprop:image",
        itemprop: "image",
        content: imagePath(poster_path, "w185")
      }
    ]
  };
};
