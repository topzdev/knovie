<template>
  <section aria-label="Collection" class="mt-5">
    <div class="movie__collection" :style="backgroudColor">
      <div class="movie__collection-image">
        <div v-if="collection.backdrop_path != null">
          <lazy-img
            :path="collection.backdrop_path"
            size="w1280"
            draggable="false"
            class="fit-image"
          />
        </div>
      </div>

      <div class="container">
        <div class="movie__collection-content">
          <h1 class="movie__collection-header">Part of the {{ collection.name }}</h1>
          <!-- <p
            class="paragraph--primary"
          >Includes The Avengers, Avengers: Age of Ultron, Avengers: Infinity War</p>-->

          <nuxt-link
            :to="'/movie/collection/' + collection.id"
            class="btn btn--primary mt-2"
            :style="collectionColor"
          >View {{ collection.name }}'s</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["collection", "color"],
  methods: {
    imagePath
  },
  computed: {
    collectionColor() {
      return `background-color:rgb(${this.color.secondaryColor}); 
              border-color: rgb(${this.color.secondaryColor});
              color: rgba(${this.color.textColor})`;
    },
    backgroundColor() {
      return `--background-color:" ${this.color.primaryColor};
        --text-color:" ${this.color.textColor}`;
    }
  }
};
</script>
