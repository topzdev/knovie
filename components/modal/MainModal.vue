<template>
  <div
    class="modal"
    v-if="show"
    @keydown.esc="closeModal"
    :style="
      `--primary:${color.primaryColor}; --secondary:${color.secondaryColor};`
    "
  >
    <div class="modal__action">
      <slot name="actions" />
      <button
        aria-label="close button"
        title="close modal"
        class="btn modal__exit"
        @click="closeModal"
      >
        <vue-icon size="50" :svg="icons.close" />
      </button>
    </div>
    <slot name="content" />
  </div>
</template>

<script>
import { mdiClose } from "@mdi/js";
export default {
  props: ["show", "color"],
  data() {
    return {
      icons: {
        close: mdiClose
      }
    };
  },
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

<style></style>
