<template>
  <nuxt-link :to="personLink" class="card--primary">
    <div class="card--primary__img">
      <lazy-img :path="person.profile_path" size="w185" :alt="person.name" />
    </div>

    <div class="card__actions"></div>

    <div class="card--primary__body">
      <h1 class="card--primary__title" v-text="truncateTitle" />
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
    imagePath,
    parseLink
  },
  computed: {
    truncateTitle() {
      return cliTruncate(this.person.name, 40);
    },
    personLink() {
      return {
        name: "view-person-id",
        params: { id: parseLink(this.person.name, this.person.id, true) }
      };
    }
  }
};
</script>

<style></style>
