<template>
  <div class="card--secondary">
    <nuxt-link :to="'/people/' + cast.cast_id" class="card--secondary__img">
      <img
        :src="imagePath(cast.profile_path, 'w185')"
        class="fit-image"
        :alt="`${cast.name} as ${cast.character}`"
        :title="`${cast.name} as ${cast.character}`"
        draggable="false"
        aria-label="Cast profiles"
      />
    </nuxt-link>

    <div class="card--secondary__content">
      <nuxt-link
        :to="'/people/' + cast.cast_id"
        class="card--secondary__name"
        aria-label="Actors/Actress of the movie"
      >{{ cast.name }}</nuxt-link>
      <p
        class="card--secondary__film-name"
        v-if="cast.character"
        aria-label="Movie role/character"
      >as {{ cast.character }}</p>
    </div>
  </div>
</template>

<script>
import imagePath from "~/utils/imagePath";
export default {
  props: ["cast"],
  methods: {
    imagePath
  }
};
</script>

<style></style>
