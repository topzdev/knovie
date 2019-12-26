<template>
  <div class="previewer">
    <div class="previewer__cover shadow-overlay">
      <img
        class="fit-image"
        :src="imagePath(movie.backdrop_path, 'w1280')"
        :alt="movie.title + ' official wallpaper'"
        draggable="false"
        aria-label="Movie Wallpaper"
      />
    </div>
    <v-container>
      <div class="previewer__content">
        <div
          class="previewer__poster backdrop-gradient"
          :style="
            `--first: rgb(${color.primaryColor}); --second: rgb(${color.secondaryColor})`
          "
        >
          <img
            class="fit-image"
            :src="imagePath(movie.poster_path, 'w342')"
            :title="movie.title"
            :alt="movie.title + ' poster'"
            draggable="false"
            aria-label="Movie Poster"
          />
        </div>

        <div class="previewer__body">
          <h1 class="slider__title">{{ movie.title }}</h1>
          <ul class="previewer__list mb-1">
            <li v-for="genre in movie.genres" :key="genre.id">
              <nuxt-link
                :to="`/search/${genre.name}`"
                class="badge badge--primary badge--outlined"
                >{{ genre.name }}</nuxt-link
              >
            </li>
          </ul>

          <ul class="previewer__critic mb-1">
            <li>
              <p
                class="slider__rating"
                aria-label="ratings"
                title="IMdb rating"
              >
                {{
                  movie.imdb_rating !== "N/A"
                    ? movie.imdb_rating
                    : movie.vote_average
                }}
                <span>/10</span>
              </p>
            </li>
            <li>
              <div class="previewer__critic-item">
                <img
                  src="../../assets/img/like.png"
                  alt
                  title="Likes"
                  draggable="false"
                />
                <p>{{ movie.imdb_vote || movie.vote_count }}</p>
              </div>
            </li>
            <li>
              <div class="previewer__critic-item">
                <img
                  src="../../assets/img/popcorn.png"
                  alt
                  title="Rotten Tomatoes Critics | Upright"
                  draggable="false"
                />

                <p>66% Audience</p>
              </div>
            </li>

            <li>
              <div class="previewer__critic-item">
                <img
                  src="../../assets/img/rotten.png"
                  alt
                  title="Rotten Tomatoes Critics | Rotten"
                  draggable="false"
                />
                <p>33% Critics</p>
              </div>
            </li>
          </ul>

          <!-- <p class="slider__description" aria-label="sypnosis">{{description}}</p> -->

          <div class="slider__actions mt-2">
            <button class="btn btn--primary mr-1 px-3">
              Watch Trailer
              <v-icon>{{ icons.play }}</v-icon>
            </button>

            <button class="btn btn--favorite">
              <v-icon>{{ icons.heart }}</v-icon>
            </button>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mdiHeartOutline, mdiPlay } from "@mdi/js";
import imagePath from "@/utils/imagePath";
export default {
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        play: mdiPlay
      }
    };
  },
  props: ["movie", "color"],
  methods: {
    imagePath
  }
};
</script>

<style></style>
