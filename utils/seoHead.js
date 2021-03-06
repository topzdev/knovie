import imagePath from "@/utils/imagePath";
import cliTruncate from "cli-truncate";

let site_name = process.env.SITE_NAME;
let site_description = process.env.SITE_NAME;
let site_url = process.env.SITE_URL;

export const titleHead = title => {
  return {
    title,
    titleTemplate: "%s | " + site_name
  };
};

export const moviePreviewHead = (data, route, page_name) => {
  const { keywords, overview, backdrop_path, poster_path, external_id } = data;
  const { facebook_id, instagram_id, twitter_id } = external_id;
  const title = `${page_name != "" ? page_name + " - " : ""} ${data.title ||
    data.name}`;
  return {
    title,
    titleTemplate: "%s | " + site_name,
    meta: [
      {
        hid: "description",
        name: "description",
        content: cliTruncate(overview, 150)
      },
      {
        hid: "keywords",
        name: "keywords",
        content: `${
          // keywords || keywords.keywords
          //   ? keywords.keywords.map(key => key.name).toString()
          //   : keywords.results.map(key => key.name).toString()
          "hello"
        },
           ${title
             .replace(/[^a-zA-Z ]/g, "")
             .split(" ")
             .toString()
             .toLowerCase()}, director, movie, tv shows, collections, information, poster, backdrops, wallpaper, background, genre, release date, runtime, revenue, budget, language, cast, gallery, crew, reviews, collection, related, rated, plot,trailer, ratings, rotten, tomatoes, overview, production countries, release companies`
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
        content: imagePath(backdrop_path, "w780")
      },
      {
        hid: "og:description",
        property: "og:description",
        content: cliTruncate(overview, 150)
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: site_name
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: `${title} | ${site_name}`
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@" + twitter_id
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: cliTruncate(overview, 197)
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
        content: cliTruncate(overview, 150)
      },
      {
        hid: "itemprop:image",
        itemprop: "image",
        content: imagePath(poster_path, "w185")
      }
    ]
  };
};
