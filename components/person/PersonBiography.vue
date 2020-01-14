<template>
  <div class="person__bio mt-2">
    <p class="paragraph--primary" v-text="truncateBiography" />
  </div>
</template>

<script>
import cliTruncate from "cli-truncate";
export default {
  props: ["biography"],
  computed: {
    truncateBiography() {
      return cliTruncate(this.$props.biography, 550);
    }
  }
};
</script>

<style></style>
