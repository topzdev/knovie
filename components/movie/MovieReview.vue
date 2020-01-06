<template>
  <section>
    <h1 class="heading--primary mb-1">Reviews</h1>

    <div class="row">
      <div
        class="col-12 mb-2"
        v-for="review in reviews.slice(0, 3)"
        :key="review.id"
      >
        <ReviewCard :review="review" />
      </div>
    </div>

    <div class="row">
      <div class="col-12 place-end">
        <MoreButton :url="url" :title="title + ' Reviews'" />
      </div>
    </div>
  </section>
</template>

<script>
import { mdiStar } from "@mdi/js";
import MoreButton from "../button/MoreButton";
import ReviewCard from "@/components/card/ReviewCard";
export default {
  components: {
    MoreButton,
    ReviewCard
  },

  props: ["title", "reviews", "url"],
  data() {
    return {
      icons: {
        star: mdiStar
      }
    };
  }
};
</script>
