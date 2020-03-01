<template>
  <div class="card--gallery">
    <div class="card__actions">
      <button
        aria-label="Download Image"
        title="Download Image"
        @click="imageSaver(image.file_path)"
      >
        <vue-icon size="30" :svg="icons.download" />
      </button>
    </div>
    <lazy-img
      @click="show = !show"
      :path="image.file_path"
      :data-srcset="imageSrcset"
      :size="size"
      :alt="`${title} Images`"
      class="fit-image"
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
  },
  computed: {
    imageSrcset() {
      return `${imagePath(this.image.file_path, "w300")} 600w,
            ${imagePath(this.image.file_path, "w780")} 1940w, ${imagePath(
        this.image.file_path,
        "original"
      )} 1280w`;
    }
  }
};
</script>

<style></style>
