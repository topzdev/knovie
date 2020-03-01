<template>
  <section aria-label="Collection" class="mt-5">
    <div class="movie__collection" :style="backgroundColor">
      <div class="movie__collection-image">
        <lazy-img
          class="fit-image"
          v-if="collection.backdrop_path != null"
          :path="collection.backdrop_path"
          size="w780"
          onerror="this.style.display='none'"
        />
      </div>

      <div class="container">
        <div class="movie__collection-content">
          <h1 class="movie__collection-header">Part of the {{ collection.name }}</h1>

          <nuxt-link
            :to="collectionLink"
            class="btn btn--primary mt-2"
            :style="collectionColor"
          >View {{ collection.name }}'s</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import parseLink from "@/utils/parseLink";
import imagePath from "@/utils/imagePath";

export default {
  props: ["collection", "color"],
  methods: {
    imagePath,
    parseLink
  },
  computed: {
    backgroundColor() {
      return `--background-color: ${this.color.primaryColor};
          --text-color: ${this.color.textColor}`;
    },
    collectionColor() {
      return `background-color:rgb(${this.color.primaryColor});
            border-color: rgb(${this.color.primaryColor});
            color: rgba(${this.color.textColor})`;
    },
    collectionLink() {
      return `/view/collection/${parseLink(
        this.collection.name,
        this.collection.id,
        true
      )}`;
    }
  }
};
</script>
