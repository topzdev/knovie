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
        <v-col height="100%" :style="`max-height:${gallerySize / (12 / 12)}px`">
          <GalleryCard :image="{ ...bigImage(), title }" size="w780" />
        </v-col>
        <v-col :lg="smallImage().divider" height="100%">
          <v-row no-gutters style="height: 100%">
            <v-col
              :lg="smallImage().size"
              :style="`max-height:${gallerySize / smallImage().row }px`"
              v-for="image in smallImage().images"
              :key="image.file_path"
            >
              <GalleryCard :image="{ ...image, title }" size="w780" :title="title" />
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
      let { backdrops } = this.$props.images;
      let length = backdrops.length - 1;
      let setBackdrop = {
        size: "",
        images: [],
        divider: 8,
        row: 3
      };
      console.log(length)
      if (length >= 9) {
        setBackdrop.size = 4;
        setBackdrop.images = backdrops.slice(1, 10);
      } else if (length >= 6 && length < 9) {
        setBackdrop.size = 6;
        setBackdrop.images = backdrops.slice(1, 7);
        setBackdrop.divider = 6;
        setBackdrop.row = 3;
      } else if (length >= 2 && length < 6) {
        setBackdrop.size = 6;
        setBackdrop.images = backdrops.slice(1, 5);
        setBackdrop.divider = 6;
        setBackdrop.row = 2;
      } else {
        setBackdrop.divider = 0;
      }

      return setBackdrop;
    }
  }
};
</script>
