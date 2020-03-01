<template>
  <div class="previewer--primary">
    <div class="previewer--primary__cover shadow-overlay">
      <lazy-img
        class="fit-image"
        :path="movie.backdrop_path"
        size="w780"
        :data-srcset="imgSrcset"
        :alt="movie.title + ' official wallpaper'"
        aria-label="Movie Wallpaper"
      />
    </div>
    <div class="container">
      <div class="previewer--primary__content">
        <div class="previewer--primary__poster backdrop-gradient" :style="gradientBackground">
          <lazy-img
            class="fit-image"
            :path="movie.poster_path"
            size="w342"
            :title="movie.title"
            :alt="movie.title + ' poster'"
            aria-label="Movie Poster"
          />
        </div>

        <div class="previewer--primary__body">
          <h1 class="slider__title" v-text="titleTruncate" />
          <ul class="previewer--primary__list mb-1">
            <li v-for="genre in movie.genres" :key="genre.id">
              <nuxt-link
                :to="`/discover?genre=${genre.name}&type=movie`"
                class="badge badge--primary badge--outlined"
              >{{ genre.name }}</nuxt-link>
            </li>
          </ul>

          <ul class="previewer--primary__critic mb-1">
            <li class="previewer--primary__rating">
              <p class="slider__rating" aria-label="ratings" title="IMdb rating">
                {{movieRating}}
                <span>/10</span>
              </p>
            </li>
            <li>
              <div class="previewer--primary__critic-item">
                <img src="../../assets/img/like.png" alt title="Likes" draggable="false" />
                <p>{{ movie.imdb_vote || movie.vote_count }}</p>
              </div>
            </li>
            <template v-if="rotten_tomato">
              <li v-if="rotten_tomato >= 60">
                <div class="previewer--primary__critic-item">
                  <img
                    src="../../assets/img/popcorn.png"
                    alt
                    title="Rotten Tomatoes Critics | Upright"
                    draggable="false"
                  />

                  <p>{{rotten_tomato}}%</p>
                </div>
              </li>

              <li v-else-if="rotten_tomato < 60">
                <div class="previewer--primary__critic-item">
                  <img
                    src="../../assets/img/rotten.png"
                    alt
                    title="Rotten Tomatoes Critics | Rotten"
                    draggable="false"
                  />
                  <p>{{rotten_tomato}}%</p>
                </div>
              </li>
            </template>
          </ul>

          <!-- <p class="slider__description" aria-label="sypnosis">{{description}}</p> -->

          <Modal :show="show" v-on:toggle-modal="toggleModal" :color="movie.color">
            <MovieTrailer :trailer="movie.videos" :show="show" slot="content" />
          </Modal>

          <div class="slider__actions mt-1 mt-lg-2">
            <button
              aria-label="watch trailer"
              class="btn btn--primary mr-1 px-3"
              @click="show = !show"
            >
              Watch trailer
              <vue-icon :svg="icons.play" />
            </button>
            <client-only>
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
import cliTruncate from "cli-truncate";

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
  computed: {
    rotten_tomato() {
      const rotten = this.$props.movie.other_rate.filter(
        data => data.Source === "Rotten Tomatoes"
      )[0];
      return rotten != undefined
        ? parseInt(rotten.Value.replace("%", ""))
        : null;
    },

    imgSrcset() {
      return `${imagePath(this.movie.backdrop_path, "w300")} 600w,
            ${imagePath(this.movie.backdrop_path, "w780")} 1940w, ${imagePath(
        this.movie.backdrop_path,
        "original"
      )} 1280w`;
    },

    gradientBackground() {
      return `--first: rgb(${this.color.primaryColor}); --second: rgb(${this.color.secondaryColor})`;
    },

    movieRating() {
      return this.movie.imdb_rating !== "N/A"
        ? this.movie.imdb_rating
        : this.movie.vote_average;
    },

    titleTruncate() {
      return cliTruncate(this.movie.title, 30);
    }
  },
  methods: {
    imagePath,
    toggleModal(state) {
      this.show = state;
    }
  }
};
</script>

<style></style>
