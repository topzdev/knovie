<template>
  <section aria-label="Collection" class="mt-5">
    <div
      class="movie__collection"
      :style="
        '--background-color:' +
          color.primaryColor +
          ' ;' +
          '--text-color:' +
          color.textColor
      "
    >
      <div class="movie__collection-image">
        <div v-if="collection.backdrop_path != null">
          <img
            alt
            draggable="false"
            class="fit-image"
            :src="imagePath(collection.backdrop_path, 'w1280')"
          />
        </div>
      </div>

      <div class="container">
        <div class="movie__collection-content">
          <h1 class="movie__collection-header">
            Part of the {{ collection.name }}
          </h1>
          <!-- <p
            class="paragraph--primary"
          >Includes The Avengers, Avengers: Age of Ultron, Avengers: Infinity War</p> -->

          <nuxt-link
            :to="'/movie/collection/' + collection.id"
            class="btn btn--primary mt-2"
            :style="
              `background-color:rgb(${color.secondaryColor}); 
              border-color: rgb(${color.secondaryColor});
              color: rgba(${color.textColor})`
            "
            >View {{ collection.name }}'s</nuxt-link
          >
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
  }
};
</script>
