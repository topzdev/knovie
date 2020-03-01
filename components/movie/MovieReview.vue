<template>
  <section>
    <h1 class="heading--primary mb-2">Reviews</h1>

    <div class="row">
      <div class="col-12">
        <template v-if="reviews.length > 0">
          <ReviewCard
            class="mb-2"
            v-for="review in reviews.slice(0, 3)"
            :key="review.id"
            :review="review"
          />
        </template>
        <template v-else>
          <h2 class="heading--secondary">No reviews yet</h2>
        </template>
      </div>
    </div>

    <div class="row">
      <div class="col-12 place-end">
        <MoreButton :url="url" title="Reviews" />
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
