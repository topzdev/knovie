<template>
  <div class="card--gallery">
    <div class="card__actions">
      <button>
        <v-icon size="30">{{ icons.download }}</v-icon>
      </button>
    </div>
    <img
      :src="imagePath(image.file_path, size)"
      alt
      class="fit-image"
      draggable="false"
    />
  </div>
</template>

<script>
import { mdiDownloadOutline } from "@mdi/js";
import imagePath from "~/utils/imagePath";
export default {
  props: ["image", "size"],
  data() {
    return {
      icons: {
        download: mdiDownloadOutline
      }
    };
  },
  methods: { imagePath }
};
</script>

<style></style>
