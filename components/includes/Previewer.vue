<template>
  <div class="previewer">
    <div class="previewer__cover shadow-overlay">
      <img
        class="fit-image"
        src="../../assets/img/sample.jpg"
        :alt="title+' official wallpaper'"
        draggable="false"
        aria-label="Movie Wallpaper"
      />
    </div>
    <v-container>
      <div class="previewer__content">
        <div class="previewer__poster backdrop-gradient">
          <img
            class="fit-image"
            src="../../assets/img/sample-poster.jpg"
            :alt="title+' poster'"
            draggable="false"
            aria-label="Movie Poster"
          />
        </div>

        <div class="previewer__body">
          <h1 class="slider__title">{{title}}</h1>
          <ul class="previewer__list mb-1">
            <li>
              <nuxt-link to="/" class="badge badge--primary badge--outlined">Action</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/" class="badge badge--primary badge--outlined">War</nuxt-link>
            </li>
          </ul>

          <ul class="previewer__critic mb-1">
            <li>
              <p class="slider__rating" aria-label="ratings" title="IMdb rating">
                {{rating}}
                <span>/10</span>
              </p>
            </li>
            <li>
              <div class="previewer__critic-item">
                <img src="../../assets/img/like.png" alt title="Likes" draggable="false" />
                <p>338</p>
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
export default {
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        play: mdiPlay
      },
      title: "Avenger Endgame",
      rating: "9.4",
      description:
        " After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
      cover: "",
      poster: ""
    };
  }
};
</script>

<style></style>
