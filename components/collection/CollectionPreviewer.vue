<template>
  <div
    class="previewer--secondary"
    :style="{
      '--primary': color.primaryColor, '--secondary': color.secondaryColor, '--text-color': color.textColor
  }"
  >
    <div class="previewer--secondary__cover">
      <img
        class="fit-image"
        :src="imagePath(collection.backdrop_path, 'w1280')"
        :alt="collection.name + ' official wallpaper'"
        draggable="false"
        aria-label="Collection Wallpaper"
      />
    </div>
    <v-container>
      <div class="previewer--secondary__content">
        <div
          class="previewer--secondary__poster backdrop-gradient"
          :style="
            `--first: rgb(${color.primaryColor}); --second: rgb(${color.secondaryColor})`
          "
        >
          <img
            class="fit-image"
            :src="imagePath(collection.poster_path, 'w342')"
            :title="collection.name"
            :alt="collection.name + ' poster'"
            draggable="false"
            aria-label="Collection Poster"
          />
        </div>

        <div class="previewer--secondary__body">
          <h1
            class="previewer--secondary__title"
            aria-label="Collection title"
          >{{ collection.name }} 
          ({{collection.year_min+'-'+ collection.year_max}})
          </h1>
          <ul class="previewer--primary__critic">
            <li>
              <p class="slider__rating" aria-label="ratings" title="IMdb rating">
                {{collection.vote_average }}
                <span>/10</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
import moment from "moment";
export default {
  props: ["collection", "color"],
  methods: {
    imagePath,
    moment
  }
};
</script>

<style>
</style>