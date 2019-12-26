<template
  ><div class="card--slider shadow-overlay mb-2">
    <img
      class="fit-image"
      :src="imagePath(trend.backdrop_path, 'w300')"
      alt="Avenger Endgame"
      draggable="false"
      aria-label="Movie Image slider"
    />

    <div class="card--slider__description ">
      <div class="badge badge--primary">{{ trend.vote_average }}</div>
      <h1 class="card--primary__title">{{ trend.title }}</h1>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["trend"],
  methods: {
    imagePath
  }
};
</script>
