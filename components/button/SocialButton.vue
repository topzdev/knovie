<template>
  <ul class="social" aria-label="social links">
    <li class="social__item" aria-label="website link" v-if="web">
      <a
        :href="web"
        class="social__link"
        target="_blank"
        title="Official Website"
        aria-label="Visit Official Website"
        rel="noreferrer"
      >
        <vue-icon size="40" :svg="icons.web" />
      </a>
    </li>
    <li class="social__item" aria-label="facebook link" v-if="links.facebook_id">
      <a
        :href="`https://www.facebook.com/${links.facebook_id}`"
        class="social__link"
        target="_blank"
        title="Facebook"
        aria-label="Visit Official Facebook"
        rel="noreferrer"
      >
        <vue-icon size="40" :svg="icons.facebook" />
      </a>
    </li>

    <li class="social__item" aria-label="social link" v-if="links.instagram_id">
      <a
        :href="`https://www.instagram.com/${links.instagram_id}`"
        class="social__link"
        target="_blank"
        title="Instagram"
        aria-label="Visit Intagram"
        rel="noreferrer"
      >
        <vue-icon size="40" :svg="icons.instagram" />
      </a>
    </li>

    <li class="social__item" aria-label="social link" v-if="links.twitter_id">
      <a
        :href="`https://twitter.com/${links.twitter_id}`"
        class="social__link"
        target="_blank"
        title="Twitter"
        aria-label="Visit Twitter"
        rel="noreferrer"
      >
        <vue-icon size="40" :svg="icons.twitter" />
      </a>
    </li>

    <li class="social__item" aria-label="social link" v-if="links.imdb_id">
      <a
        :href="`https://www.imdb.com/${type}/${links.imdb_id}`"
        class="social__link"
        target="_blank"
        title="IMDB"
        aria-label="Visit IMDB"
        rel="noreferrer"
      >
        <vue-icon size="40" :svg="icons.imdb" />
      </a>
    </li>
  </ul>
</template>

<script>
import {
  mdiFacebook,
  mdiInstagram,
  mdiWeb,
  mdiTwitter,
  mdiMovieOpen
} from "@mdi/js";

export default {
  props: ["links", "type", "web"],
  data() {
    return {
      icons: {
        facebook: mdiFacebook,
        instagram: mdiInstagram,
        web: mdiWeb,
        twitter: mdiTwitter,
        imdb: mdiMovieOpen
      }
    };
  }
};
</script>

<style></style>
