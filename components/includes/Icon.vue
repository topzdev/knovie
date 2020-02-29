<template>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :height="iconSize"
      :width="iconSize"
      role="img"
      aria-hidden="true"
    >
      <path :d="svg" />
    </svg>
  </span>
</template>

<script>
export default {
  props: ["svg", "size"],
  computed: {
    iconSize() {
      return `${this.size ? this.size : 24}px`;
    }
  }
};
</script>

<style>
</style>