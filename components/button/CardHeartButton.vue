<template>
  <button :class="{ 'card-liked': like }" @click="toggleLike({ type, data })">
    <vue-icon size="30" :svg="like ? icons.heartFull : icons.heart " />
  </button>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import { mapActions } from "vuex";
export default {
  props: ["data", "type"],
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        heartFull: mdiHeart
      },
      like: false
    };
  },

  watch: {
    liked() {
      this.like = this.liked.some(like => this.$props.data.id === like.id);
    }
  },

  computed: {
    liked() {
      return this.$store.getters["like/getAllLiked"];
    }
  },

  methods: {
    ...mapActions({
      toggleLike: "like/likeMovie"
    })
  },

  created() {
    this.$store.dispatch("like/fetchStorage");
  }
};
</script>

<style></style>
