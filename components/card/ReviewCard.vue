<template>
  <div class="card--review">
    <div class="card--review__content">
      <!-- <h3 class="heading--secondary mb-1">What an amazing movie!!!</h3> -->
      <p class="paragraph--primary">
        <span v-html="truncateReview"></span>

        <button
          class="btn btn--peek"
          aria-label="read more"
          v-if="review.content.length > official_lenght"
          @click="toggle_more = !toggle_more"
        >
          see {{ toggleText }}
        </button>
      </p>
    </div>

    <div class="card--review__user">
      <div class="card--review__user-profile">
        <p
          class="card--review__user-name"
          aria-label="Reviewers username"
          v-html="review.author"
        ></p>
        <!-- TODO Integrate the name date of the review here -->
        <!-- <p class="card--review__date">December 20, 2019</p> -->
      </div>
      <!-- <div class="badge badge--primary badge--outlined color-yellow">
        9.8
        <vue-icon :svg="icons.star" />
      </div>-->
    </div>
  </div>
</template>

<script>
import { mdiStar } from "@mdi/js";
import cliTruncate from "cli-truncate";

export default {
  props: ["review"],
  data() {
    return {
      content: "",
      official_lenght: 400,
      toggle_more: true,
      icons: {
        star: mdiStar,
      },
    };
  },
  computed: {
    truncateReview() {
      return cliTruncate(
        this.review.content,
        this.toggle_more ? this.official_lenght : this.review.content.length,
        { position: "end" }
      );
    },
    toggleText() {
      return this.toggle_more ? "more..." : "less";
    },
  },
};
</script>
