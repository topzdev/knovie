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
        <v-col lg="4" height="100%" :style="`max-height:${(gallerySize/(12/12))}px`">
          <GalleryCard :image="bigImage()" />
        </v-col>
        <v-col lg="8" height="100%">
          <v-row no-gutters>
            <v-col
              lg="4"
              :style="`max-height:${(gallerySize/(12/4))}px`"
              v-for="image in smallImage()"
              :key="image"
            >
              <GalleryCard :image="image" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

    <v-container>
      <v-row>
        <v-col cols="9" class="place-end">
          <MoreButton :title="title+ ' Images'" />
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
  props: ["title"],
  data() {
    return {
      images: [
        "https://image.tmdb.org/t/p/w500_and_h282_face//91iy9F1JOG1dvM6M6JNYgvScZpK.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//dVSMKPEaiwujXE7kQkvixPLieHR.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//sa4iZ5QpvWmuGT2sDjfgfqy7ArE.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//euFbK14mZe1lYOTiQF95tjyJlgL.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//A8PnjuNZkp5SnBiVWAKBd27fK6N.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//eFzIlCERjyrp2z2YpZo8yaETGWx.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//1l83SChf1u9weyf9z16kiaUL3cH.jpg",
        "https://image.tmdb.org/t/p/w500_and_h282_face//rue7sGRlZVIgRlA4tMOKjN8296.jpg",
        "https://image.tmdb.org/t/p/w185_and_h278_face//5wwfS59CTzc4tlF1GHWy7KUIULc.jpg"
      ],
      gallerySize: 500
    };
  },

  methods: {
    bigImage() {
      return this.images[0];
    },
    smallImage() {
      return this.images.slice(1);
    }
  }
};
</script>
