<template>
  <div class="card--secondary">
    <nuxt-link
      :to="{
      name: 'view-people-id',
      params: { id: parseLink(cast.name, cast.id) }
    }"
      class="card--secondary__img"
    >
      <img
        v-lazy="imagePath(cast.profile_path, 'w185')"
        class="fit-image"
        :alt="`${cast.name} as ${cast.character}`"
        :title="`${cast.name} as ${cast.character}`"
        draggable="false"
        aria-label="Cast profiles"
      />
    </nuxt-link>

    <div class="card--secondary__content">
      <nuxt-link
        :to="{
      name: 'view-people-id',
      params: { id: parseLink(cast.name, cast.id) }
    }"
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
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
export default {
  props: ["cast"],
  methods: {
    imagePath,
    parseLink
  }
};
</script>

<style></style>
