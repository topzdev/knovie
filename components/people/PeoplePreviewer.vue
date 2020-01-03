<template>
  <div class="people">
    <v-containe>
      <div class="people__previewer">
        <div
          class="previewer--primary__poster backdrop-gradient"
          :style="
            `--first: rgb(${people.color.primaryColor}); --second: rgb(${people.color.secondaryColor})`
          "
        >
          <img
            class="fit-image"
            :src="imagePath(people.profile, 'w342')"
            :title="people.name"
            :alt="people.name + ' poster'"
            draggable="false"
            aria-label="Movie Poster"
          />
        </div>
        <div class="previewer--primary__body">
          <h1 class="slider__title">{{ people.name }}</h1>
        </div>
      </div>
    </v-containe>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["people"],
  methods: {
    imagePath
  }
};
</script>

<style>
</style>