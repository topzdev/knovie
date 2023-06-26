<template>
  <img
    class="lazy-image"
    v-lazy="imagePath(path, size)"
    draggable="false"
    loading="lazy"
    :height="height"
    :width="width"
  />
</template>

<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["path", "size", "width", "height"],
  methods: { imagePath }
};
</script>

<style></style>
