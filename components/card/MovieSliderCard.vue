<template
  >
  <div>
    <div class="container">
      <div class="slider__details">
        <h1 class="slider__title" v-text="movie.title" />

        <p class="slider__rating mb-1">
          {{ movie.vote_average }}
          <span>/10</span>
        </p>

        <p class="slider__description" v-text="descriptionTruncate" />

        <div class="slider__actions mt-2">
          <nuxt-link :to="movieLink" class="btn btn--primary mr-1">View more</nuxt-link>

          <client-only>
            <HeartButton :data="movie" type="movie" />
          </client-only>
        </div>
      </div>
    </div>
    <div class="slider__cover shadow-overlay">
      <lazy-img
        class="fit-image"
        v-lazy="backdrop"
        :path="movie.backdrop_path"
        size="w780"
        :data-srcset="imgSrcSet"
        :alt="movie.title"
        aria-label="Movie Image slider"
      />
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import cliTruncate from "cli-truncate";
import HeartButton from "@/components/button/HeartButton";
import { mdiHeartOutline } from "@mdi/js";
export default {
  props: ["movie"],

  data() {
    return {
      icons: {
        heart: mdiHeartOutline
      }
    };
  },
  components: {
    HeartButton
  },
  computed: {
    titleTruncate() {
      return cliTruncate(this.movie.title, 30);
    },
    descriptionTruncate() {
      return cliTruncate(this.movie.overview, 190);
    },
    movieLink() {
      return {
        name: "view-movie-id",
        params: { id: parseLink(this.movie.title, this.movie.id, true) }
      };
    },
    imgSrcSet() {
      return `${imagePath(this.movie.backdrop_path, "w780")} 600w,
            ${imagePath(this.movie.backdrop_path, "w1280")} 1940w, ${imagePath(
        this.movie.backdrop_path,
        "original"
      )} 1945w`;
    }
  }
};
</script>
