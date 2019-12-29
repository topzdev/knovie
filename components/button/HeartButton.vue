<template>
  <button
    class="btn btn--favorite"
    :class="{'btn--favorite--liked': like}"
    @click="toggleLike({type: 'movie', id})"
  >
    <v-icon>{{ like ? icons.fullHeart : icons.heart }}</v-icon>
  </button>
</template>

<script>
import { mdiHeartOutline, mdiHeart } from "@mdi/js";
import { mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      icons: {
        heart: mdiHeartOutline,
        fullHeart: mdiHeart
      },

      like: false
    };
  },

  watch: {
    process() {
      console.log("Hello");
    },
    liked() {
      this.like = this.liked.some(like => this.$props.id === like.id);
      console.log(this.like);
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
    console.log(this.$store.getters["like/getAllLiked"]);
  }
};
</script>

<style>
</style>