<template>
  <div class="card--gallery">
    <div class="card__actions">
      <button @click="saveFile()">
        <v-icon size="30">{{ icons.download }}</v-icon>
      </button>
    </div>
    <img
      v-lazy="imagePath(image.file_path, size)"
      alt
      class="fit-image"
      draggable="false"
    />
  </div>
</template>

<script>
import { mdiDownloadOutline } from "@mdi/js";
import imagePath from "~/utils/imagePath";
import FileSaver from "file-saver";

export default {
  props: ["image", "size", "title"],
  data() {
    return {
      icons: {
        download: mdiDownloadOutline
      }
    };
  },
  methods: {
    imagePath,
    saveFile() {
      const { file_path, title } = this.$props.image;
      FileSaver.saveAs(
        imagePath(file_path, "original"),
        "knovie.com" + "-" + file_path.replace(" ", "_")
      );
    }
  }
};
</script>

<style></style>
