<template>
  <div class="card--gallery">
    <div class="card__actions" @click="openModal">
      <button @click="saveFile()">
        <vue-icon size="30" :svg="icons.download" />
      </button>
    </div>
    <img
      @click="show=!show"
      v-lazy="imagePath(image.file_path, size)"
      :alt="`${title} Images`"
      class="fit-image"
      draggable="false"
    />

    <Modal :show="show" v-on:toggle-modal="toggleModal" :color="color">
      <ImagePreviewer :image="imagePath(image.file_path, 'original')" :show="show" />
    </Modal>
  </div>
</template>

<script>
import { mdiDownloadOutline } from "@mdi/js";
import imagePath from "~/utils/imagePath";
import FileSaver from "file-saver";
import Modal from "@/components/modal/MainModal";
import ImagePreviewer from "@/components/image/ImagePreviewer";
import colorMatcher from "@/utils/colorMatcher";

export default {
  props: ["image", "size", "title"],
  components: {
    Modal,
    ImagePreviewer
  },
  data() {
    return {
      show: false,
      color: {
        primaryColor: "",
        secondaryColor: "",
        textColor: ""
      },
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
    },
    toggleModal(state) {
      console.log("Close the modal");
      this.show = state;
    },
    async openModal() {
      if (process.browser) {
        const { file_path } = this.$props.image;
        console.log(file_path);
        this.color = await colorMatcher(file_path);
        this.show = true;
      }
    }
  }
};
</script>

<style></style>
