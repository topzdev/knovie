<template>
  <div class="previewer--secondary" :style="colorStyle">
    <div class="previewer--secondary__cover">
      <lazy-img
        class="fit-image"
        :path="collection.backdrop_path"
        size="w1280"
        :alt="collection.name + ' official wallpaper'"
        draggable="false"
        aria-label="Collection Wallpaper"
      />
    </div>
    <div class="container">
      <div class="previewer--secondary__content">
        <div class="previewer--secondary__poster backdrop-gradient" :style="gradientBackground">
          <lazy-img
            class="fit-image"
            :path="collection.poster_path"
            size="w342"
            :title="collection.name"
            :alt="collection.name + ' poster'"
            draggable="false"
            aria-label="Collection Poster"
          />
        </div>

        <div class="previewer--secondary__body">
          <h1
            class="previewer--secondary__title"
            aria-label="Collection title"
            v-text="collectionTitle"
          />
          <ul class="previewer--primary__critic">
            <li class="previewer--primary__rating">
              <p class="slider__rating" aria-label="ratings" title="IMdb rating">
                {{collection.vote_average }}
                <span>/10</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["collection", "color"],

  computed: {
    gradientBackground() {
      return `--first: rgb(${this.color.primaryColor}); --second: rgb(${this.color.secondaryColor})`;
    },
    colorStyle() {
      return {
        "--primary": this.color.primaryColor,
        "--secondary": this.color.secondaryColor,
        "--text-color": this.color.textColor
      };
    },
    collectionTitle() {
      return `${this.collection.name} (${this.collection.year_min +
        "-" +
        this.collection.year_max})`;
    }
  }
};
</script>

<style>
</style>