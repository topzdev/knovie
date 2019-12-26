<template>
  <section>
    <h1 class="heading--primary mb-1">Reviews</h1>

    <v-row>
      <v-col
        cols="12"
        class="mb-2"
        v-for="review in reviews.slice(0, 3)"
        :key="review.id"
      >
        <ReviewCard :review="review" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="place-end">
        <MoreButton :title="title + ' Reviews'" />
      </v-col>
    </v-row>
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

  props: ["title", "reviews"],
  data() {
    return {
      icons: {
        star: mdiStar
      }
    };
  }
};
</script>
