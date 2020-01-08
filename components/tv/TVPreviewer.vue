<template>
  <div class="previewer--primary">
    <div class="previewer--primary__cover shadow-overlay">
      <img
        class="fit-image"
        :src="imagePath(tv_show.backdrop_path, 'w780')"
        :alt="tv_show.name + ' official wallpaper'"
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
            v-if="tv_show.poster_path"
            class="fit-image"
            :src="imagePath(tv_show.poster_path, 'w342')"
            :title="tv_show.name"
            :alt="tv_show.name + ' poster'"
            draggable="false"
            aria-label="Movie Poster"
          />
        </div>

        <div class="previewer--primary__body">
          <p
            v-if="tv_show.in_production"
            class="badge badge__rated badge__rated--g mb-1"
            title="TV Show is in production mode"
            v-text="'In Production'"
          />
          <h1 class="slider__title">{{ tv_show.name }}</h1>
          <ul class="previewer--primary__list mb-1">
            <li v-for="genre in tv_show.genres" :key="genre.id">
              <nuxt-link
                :to="`/search/${genre.name}`"
                class="badge badge--primary badge--outlined"
                >{{ genre.name }}</nuxt-link
              >
            </li>
          </ul>

          <ul class="previewer--primary__critic mb-1">
            <li>
              <p
                class="slider__rating"
                aria-label="ratings"
                title="IMdb rating"
              >
                {{ tv_show.vote_average }}
                <span>/10</span>
              </p>
            </li>
            <li>
              <div class="previewer--primary__critic-item">
                <img
                  src="../../assets/img/like.png"
                  alt
                  title="Likes"
                  draggable="false"
                />
                <p>{{ tv_show.vote_count }}</p>
              </div>
            </li>
          </ul>

          <!-- <p class="slider__description" aria-label="sypnosis">{{description}}</p> -->

          <Modal
            :show="show"
            v-on:toggle-modal="toggleModal"
            :color="tv_show.color"
          >
            <MovieTrailer
              :trailer="tv_show.videos"
              :show="show"
            />
          </Modal>

          <div class="slider__actions mt-2">
            <button class="btn btn--primary mr-1 px-3" @click="show = !show">
              Watch Trailer
              <v-icon>{{ icons.play }}</v-icon>
            </button>
            <HeartButton :id="tv_show.id" />
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
  props: ["tv_show", "color"],
  methods: {
    imagePath,
    toggleModal(state) {
      this.show = state;
    }
  }
};
</script>

<style></style>
