<template>
  <section aria-label="Movie Gallery">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="heading--primary">Gallery</h1>
        </v-col>
      </v-row>
    </v-container>
    <div class="gallery--full" :style="`height: ${gallerySize}`">
      <v-row no-gutters>
        <v-col
          lg="4"
          height="100%"
          :style="`max-height:${gallerySize / (12 / 12)}px`"
        >
          <GalleryCard :image="bigImage()" size="w780" />
        </v-col>
        <v-col lg="8" height="100%">
          <v-row no-gutters>
            <v-col
              lg="4"
              :style="`max-height:${gallerySize / (12 / 4)}px`"
              v-for="image in smallImage()"
              :key="image.file_path"
            >
              <GalleryCard :image="image" size="w780" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-container>
      <v-row>
        <v-col cols="9" class="place-end">
          <MoreButton :title="title + ' Images'" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import GalleryCard from "../card/ImageCard";
import MoreButton from "../button/MoreButton";
export default {
  components: {
    GalleryCard,
    MoreButton
  },
  props: ["title", "images"],
  data() {
    return {
      gallerySize: 500
    };
  },

  methods: {
    bigImage() {
      return this.$props.images.backdrops[0];
    },
    smallImage() {
      return this.$props.images.backdrops.slice(1);
    }
  }
};
</script>
