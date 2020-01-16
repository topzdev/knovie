<template>
  <img v-lazy="imagePath(image, 'original')" class="modal__image" />
</template>

<script>
import imagePath from "~/utils/imagePath";
export default {
  props: ["image"],
  methods: {
    imagePath
  }
};
</script>

<style>
</style>