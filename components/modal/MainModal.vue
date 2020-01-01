<template>
  <div
    class="modal"
    v-if="show"
    @keydown.esc="closeModal"
    @click="closeModal"
    :style="`--primary:${color.primaryColor}; --secondary:${color.secondaryColor};`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["show", "color"],
  methods: {
    closeModal() {
      this.$emit("toggle-modal", false);
    }
  },
  watch: {
    show: function() {
      const { show, color } = this.$props;

      if (show) {
        document.documentElement.style.overflow = "hidden";
        return;
      }
      document.documentElement.style.overflow = "auto";
    }
  }
};
</script>

<style>
</style>