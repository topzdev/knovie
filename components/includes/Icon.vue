<template>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      :height="`${size ? size : 24}px`"
      :width="`${size ? size : 24}px`"
      role="img"
      aria-hidden="true"
    >
      <path :d="svg" />
    </svg>
  </span>
</template>

<script>
export default {
  props: ["svg", "size"]
};
</script>

<style>
</style>