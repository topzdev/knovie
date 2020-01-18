<template>
  <div class="card--gallery">
    <div class="card__actions">
      <button
        aria-label="download button"
        title="Download Image"
        @click="imageSaver(image.file_path)"
      >
        <vue-icon size="30" :svg="icons.download" />
      </button>
    </div>
    <img
      @click="show = !show"
      v-lazy="imagePath(image.file_path, size)"
      :data-srcset="`${imagePath(image.file_path, 'w300')} 600w,
            ${imagePath(image.file_path, 'w780')} 1940w, ${imagePath(image.file_path, 'original')} 1280w`
            "
      :alt="`${title} Images`"
      class="fit-image"
      draggable="false"
    />

    <div class="card--gallery__open" @click="openModal" />

    <Modal :show="show" v-on:toggle-modal="toggleModal" :color="color">
      <ImagePreviewer :image="image.file_path" :show="show" slot="content" />

      <button
        aria-label="download button"
        title="Download Image"
        class="btn"
        @click="imageSaver(image.file_path)"
        slot="actions"
      >
        <vue-icon size="50" :svg="icons.download" />
      </button>
    </Modal>
  </div>
</template>

<script>
import { mdiDownloadOutline } from "@mdi/js";
import imagePath from "~/utils/imagePath";
import imageSaver from "~/utils/imageSaver";
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
    imageSaver,
    toggleModal(state) {
      this.show = state;
    },
    async openModal() {
      if (process.browser) {
        const { file_path } = this.$props.image;
        this.color = await colorMatcher(file_path);
        this.show = true;
      }
    }
  }
};
</script>

<style></style>
