<template>
  <section aria-label="Movie Gallery">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="heading--primary mb-2">Gallery</h1>
        </div>
      </div>
    </div>

    <div class="gallery--full" :style="`height: ${gallerySize}`">
      <div class="row no-gutters">
        <div class="col-12 col-lg" height="100%" :style="bigImageClass">
          <GalleryCard :image="{ ...bigImage(), title }" size="w780" />
        </div>

        <div :class="dividerClass" height="100%">
          <div class="row no-gutters" style="height: 100%">
            <div
              :class="smallImageClass"
              :style="smallImageStyle"
              v-for="image in smallImage().images"
              :key="image.file_path"
            >
              <GalleryCard :image="{ ...image, title }" size="w300" :title="title" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-9 place-end mt-3">
          <MoreButton :url="url" title="Images" />
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
  },
  computed: {
    bigImageClass() {
      return `max-height:${this.gallerySize / (12 / 12)}px`;
    },
    smallImageStyle() {
      return `max-height:${this.gallerySize / this.smallImage().row}px`;
    },
    smallImageClass() {
      return `col-6 col-sm-4 col-md-3 col-lg-${this.smallImage().size}`;
    },
    dividerClass() {
      return `col-md-12 col-lg-${this.smallImage().divider}`;
    }
  }
};
</script>
