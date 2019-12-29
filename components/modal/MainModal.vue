<template>
  <div class="modal" v-if="show" @keydown.esc="closeModal" @click="closeModal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["show"],
  methods: {
    closeModal() {
      this.$emit("toggle-modal", false);
    }
  },
  watch: {
    show: function() {
      if (this.show) {
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