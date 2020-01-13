<template>
  <section aria-label="Collection" class="mt-5">
    <div
      class="movie__collection"
      :style="  
      `--background-color: ${color.primaryColor};
          --text-color: ${color.textColor}`"
    >
      <div class="movie__collection-image">
        <img
          alt
          draggable="false"
          class="fit-image"
          v-if="collection.backdrop_path != null"
          :src="imagePath(collection.backdrop_path, 'w1280')"
        />
      </div>

      <div class="container">
        <div class="movie__collection-content">
          <h1 class="movie__collection-header">Part of the {{ collection.name }}</h1>

          <nuxt-link
            :to="`/view/collection/${parseLink(collection.name, collection.id)}`"
            class="btn btn--primary mt-2"
            :style="`background-color:rgb(${color.primaryColor});
            border-color: rgb(${color.primaryColor});
            color: rgba(${color.textColor})`
            "
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
  }
};
</script>
