<template>
  <header class="slider">
    <v-container>
      <div class="slider__details">
        <h1 class="slider__title">{{ title }}</h1>

        <p class="slider__rating mb-2">
          9.4
          <span>/10</span>
        </p>

        <p class="slider__description">
          After Thanos, an intergalactic warlord, disintegrates half of the
          universe, the Avengers must reunite and assemble again to reinvigorate
          their trounced allies and restore balance.
        </p>

        <div class="slider__actions mt-2">
          <nuxt-link :to="setLink()" class="btn btn--primary mr-1"
            >View more</nuxt-link
          >

          <button class="btn btn--favorite">
            <v-icon>{{ icons.heart }}</v-icon>
          </button>
        </div>
      </div>
    </v-container>
    <div class="slider__cover shadow-overlay">
      <img
        class="fit-image"
        src="../../assets/img/sample.jpg"
        alt="Avenger Endgame"
        draggable="false"
        aria-label="Movie Image slider"
      />
    </div>
  </header>
</template>

<script>
import { mdiHeartOutline } from "@mdi/js";
export default {
  data: () => {
    return {
      icons: {
        heart: mdiHeartOutline
      },

      title: "Avenger Endgame"
    };
  },

  methods: {
    setLink() {
      return `/movie/${this.title}`;
    }
  },
  created() {}
};
</script>
