<template>
  <nuxt-link
    :to="{
      name: 'view-people-id',
      params: { id: parseLink(people.name, people.id) }
    }"
    class="card--primary"
    style="--box-shadow: var(--primary-color)"
  >
    <div class="card--primary__img">
      <img v-lazy="imagePath(people.profile_path, 'w185')" :alt="people.name" draggable="false" />
    </div>

    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.heart }}</v-icon>
      </button>
    </div>

    <div class="card--primary__body">
      <h1 class="card--primary__title" v-text="cliTruncate(people.name, 40)" />
      <div class="card--primary__genre">
        <span
          v-for="known in people.known_for.slice(0, 2)"
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
import moment from "moment";
import cliTruncate from "cli-truncate";

export default {
  props: ["people"],
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
    moment,
    parseLink
  }
};
</script>

<style></style>
