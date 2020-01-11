<template>
  <div class="container navbar-padding">
    <Showcase
      class="mt-0"
      title="Movies you liked"
      :result="tv_liked"
      type="Movies"
    />
    <Showcase
      class="mt-3"
      title="TV Shows you liked"
      :result="movie_liked"
      type="TV Shows"
    />
  </div>
</template>

<script>
import Showcase from "@/components/layout/Showcase";
export default {
  components: {
    Showcase
  },
  data() {
    return {
      tv_liked: null,
      movie_liked: null
    };
  },
  watch: {
    liked() {
      this.tv_liked = this.liked.filter(like => like.type === "movie");

      this.movie_liked = this.liked.filter(like => like.type === "tv");

      console.log(this.tv_liked, this.movie_liked);
    }
  },

  computed: {
    liked() {
      return this.$store.getters["like/getAllLiked"];
    }
  },

  created() {
    this.$store.dispatch("like/fetchStorage");
  }
};
</script>

<style></style>
