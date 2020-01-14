<template>
  <div class="person">
    <div class="person__previewer"></div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["person"],
  methods: {
    imagePath
  }
};
</script>

<style></style>
