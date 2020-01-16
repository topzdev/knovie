import imagePath from "@/utils/imagePath";
import cliTruncate from "cli-truncate";
require("dotenv").config();

let site_name = process.env.SITE_NAME;
let site_description = process.env.SITE_NAME;
let site_url = process.env.SITE_URL;

export default (data, route) => {
  const { biography, profile_path, poster_path, external_ids } = data;
  const { facebook_id, instagram_id, twitter_id } = external_ids;
  const title = data.name;
  console.log(route);
  return {
    title,
    titleTemplate: "%s | " + site_name,
    meta: [
      {
        hid: "description",
        name: "description",
        content: cliTruncate(biography, 150)
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "actor,actres,cast,director,birthday,movies,tvshows,birth,gender,known as,credits,place of birth,biography,death,dead,facebook,instagram,twitter,account,profile"
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
        hid: "og:url",
        property: "og:url",
        content: `${site_url}${route.fullPath}`
      },
      {
        hid: "og:image",
        property: "og:image",
        content: imagePath(profile_path, "w780")
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Know more about your favourite movies and tv shows right here in knovie.com"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Knovie"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: `${title} | ${site_name}`
      },
      {
        hid: "twitter:site",
        property: "twitter:site",
        content: "@" + twitter_id
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: cliTruncate(biography, 197)
      },
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: imagePath(profile_path, "w300")
      },
      {
        hid: "itemprop:name",
        itemprop: "name",
        content: `${title} | ${site_name}`
      },
      {
        hid: "itemprop:name",
        itemprop: "description",
        content: cliTruncate(biography, 150)
      },
      {
        hid: "itemprop:image",
        itemprop: "image",
        content: imagePath(poster_path, "w185")
      }
    ]
  };
};
