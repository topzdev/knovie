<template>
  <section aria-label="Movie Gallery">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="heading--primary">Gallery</h1>
        </div>
      </div>
    </div>
    <div class="gallery--full" :style="`height: ${gallerySize}`">
      <div class="row no-gutters">
        <div class="col" height="100%" :style="`max-height:${gallerySize / (12 / 12)}px`">
          <GalleryCard :image="{ ...bigImage(), title }" size="w780" />
        </div>
        <div :class="`col-lg-${smallImage().divider}`" height="100%">
          <div class="row no-gutters" style="height: 100%">
            <div
              :class="`col-lg-${smallImage().size}`"
              :style="`max-height:${gallerySize / smallImage().row}px`"
              v-for="image in smallImage().images"
              :key="image.file_path"
            >
              <GalleryCard :image="{ ...image, title }" size="w780" :title="title" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-if="url">
      <div class="row">
        <div class="col-9 place-end">
          <MoreButton :url="url" :title="title + ' Images'" />
        </div>
      </div>
    </div>
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
  props: ["title", "images", "url"],
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
