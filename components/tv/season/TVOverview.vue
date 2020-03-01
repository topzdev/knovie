<template>
  <div>
    <h1 class="heading--primary mb-2">Overview</h1>
    <p v-show="overview_trucate" class="paragraph--primary">
      {{overview_trucate.text}}
      <button
        v-if="overview_trucate.length > official_lenght"
        class="btn btn--peek"
        aria-label="read more"
        @click="toggle_more = !toggle_more"
      >see {{ toggle_more ? "more" : "less" }}</button>
    </p>
  </div>
</template>

<script>
import truncate from "cli-truncate";

export default {
  props: ["overview"],
  data() {
    return {
      toggle_more: true,
      official_lenght: 500
    };
  },
  computed: {
    overview_trucate() {
      const { overview } = this.$props;
      const { toggle_more, official_lenght } = this;

      if (overview == null) return false;

      return {
        length: overview.length,
        text: truncate(
          overview,
          toggle_more ? official_lenght : overview.length
        )
      };
    }
  }
};
</script>

<style>
</style>