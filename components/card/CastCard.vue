<template>
  <div class="card--secondary">
    <nuxt-link :to="castLink" class="card--secondary__img">
      <lazy-img
        :path="cast.profile_path"
        class="fit-image"
        size="w185"
        height="210"
        width="143"
        :alt="`${cast.name} as ${cast.character}`"
        :title="`${cast.name} as ${cast.character}`"
        aria-label="Cast profiles"
      />
    </nuxt-link>

    <div class="card--secondary__content">
      <nuxt-link
        :to="castLink"
        class="card--secondary__name"
        aria-label="Actors/Actress of the movie"
        v-text="cast.name"
      />
      <p
        class="card--secondary__film-name"
        v-if="cast.character"
        aria-label="Movie role/character"
      >
        as {{ cast.character }}
      </p>
    </div>
  </div>
</template>

<script>
import parseLink from "@/utils/parseLink";
export default {
  props: ["cast"],
  methods: {
    parseLink
  },
  computed: {
    castLink() {
      return {
        name: "view-person-id",
        params: { id: parseLink(this.cast.name, this.cast.id, true) }
      };
    }
  }
};
</script>

<style></style>
