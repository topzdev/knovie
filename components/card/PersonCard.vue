<template>
  <nuxt-link
    :to="{
      name: 'view-person-id',
      params: { id: parseLink(person.name, person.id) }
    }"
    class="card--primary"
    style="--box-shadow: var(--primary-color)"
  >
    <div class="card--primary__img">
      <img v-lazy="imagePath(person.profile_path, 'w185')" :alt="person.name" draggable="false" />
    </div>

    <div class="card__actions">
      <button>
        <vue-icon size="30" :svg="icons.heart" />
      </button>
    </div>

    <div class="card--primary__body">
      <h1 class="card--primary__title" v-text="cliTruncate(person.name, 40)" />
      <div class="card--primary__genre">
        <span
          v-for="known in person.known_for.slice(0, 2)"
          :key="known.title"
          v-text="known.title"
        />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import imagePath from "@/utils/imagePath";
import parseLink from "@/utils/parseLink";
import cliTruncate from "cli-truncate";

export default {
  props: ["person"],
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        heartFull: mdiHeart
      }
    };
  },
  methods: {
    cliTruncate,
    imagePath,
    parseLink
  }
};
</script>

<style></style>
