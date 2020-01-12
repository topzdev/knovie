<template>
  <div class="previewer--primary">
    <div class="previewer--primary__cover shadow-overlay">
      <img
        class="fit-image"
        :src="imagePath(movie.backdrop_path, 'w780')"
        :alt="movie.title + ' official wallpaper'"
        draggable="false"
        aria-label="Movie Wallpaper"
      />
    </div>
    <div class="container">
      <div class="previewer--primary__content">
        <div
          class="previewer--primary__poster backdrop-gradient"
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

        <div class="previewer--primary__body">
          <h1 class="slider__title">{{ movie.title }}</h1>
          <ul class="previewer--primary__list mb-1">
            <li v-for="genre in movie.genres" :key="genre.id">
              <nuxt-link
                :to="`/search/${genre.name}`"
                class="badge badge--primary badge--outlined"
              >{{ genre.name }}</nuxt-link>
            </li>
          </ul>

          <ul class="previewer--primary__critic mb-1">
            <li class="previewer--primary__rating">
              <p class="slider__rating" aria-label="ratings" title="IMdb rating">
                {{
                movie.imdb_rating !== "N/A"
                ? movie.imdb_rating
                : movie.vote_average
                }}
                <span>/10</span>
              </p>
            </li>
            <li>
              <div class="previewer--primary__critic-item">
                <img src="../../assets/img/like.png" alt title="Likes" draggable="false" />
                <p>{{ movie.imdb_vote || movie.vote_count }}</p>
              </div>
            </li>
            <li>
              <div class="previewer--primary__critic-item">
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
              <div class="previewer--primary__critic-item">
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

          <Modal :show="show" v-on:toggle-modal="toggleModal" :color="movie.color">
            <MovieTrailer :trailer="movie.videos" :show="show" />
          </Modal>

          <div class="slider__actions mt-1 mt-lg-2">
            <button class="btn btn--primary mr-1 px-3" @click="show = !show">
              Watch Trailer
              <v-icon>{{ icons.play }}</v-icon>
            </button>
            <client-only placeholder="like this movie...">
              <HeartButton :data="movie" type="movie" />
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiHeartOutline, mdiPlay } from "@mdi/js";
import imagePath from "@/utils/imagePath";
import HeartButton from "@/components/button/HeartButton";
import MovieTrailer from "@/components/movie/MovieTrailer";
import Modal from "@/components/modal/MainModal";

export default {
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        play: mdiPlay
      },
      show: false
    };
  },
  components: {
    HeartButton,
    MovieTrailer,
    Modal
  },
  props: ["movie", "color"],
  methods: {
    imagePath,
    toggleModal(state) {
      this.show = state;
    }
  }
};
</script>

<style></style>
