<template>
  <div class="card--gallery">
    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.download }}</v-icon>
      </button>
    </div>
    <img :src="image" alt class="fit-image" draggable="false" />
  </div>
</template>

<script>
import { mdiDownloadOutline } from "@mdi/js";
export default {
  props: ["image"],
  data() {
    return {
      icons: {
        download: mdiDownloadOutline
      }
    };
  }
};
</script>

<style>
</style>