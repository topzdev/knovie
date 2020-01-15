<template>
  <paginate
    v-model="currentPage"
    :page-count="totalPage"
    :page-range="visible ? visible : 4"
    :containerClass="'pagination'"
    :page-class="'pagination__item'"
    :prev-class="'pagination__item'"
    :next-class="'pagination__item'"
    :prev-text="'<'"
    :next-text="'>'"
    :break-view-class="'pagination__break'"
    :active-class="'pagination__item--active'"
  >
  </paginate>
</template>

<script>
import Paginate from "vuejs-paginate/src/components/Paginate";
import { mdiChevronRight, mdiChevronLeft } from "@mdi/js";
export default {
  props: ["totalPage", "visible"],
  components: {
    Paginate
  },
  data() {
    return {
      currentPage: 1,
      totalResult: 0,
      icons: {
        right: mdiChevronRight,
        left: mdiChevronLeft
      }
    };
  },
  watch: {
    $route() {
      this.currentPage = parseInt(this.$route.query.page || 1);
    },
    currentPage() {
      this.$router.push({
        path: this.$route.path,
        query: { page: this.currentPage }
      });
    }
  },

  created() {
    console.log(this.$route.query);
    this.currentPage = parseInt(this.$route.query.page || 1);
  }
};
</script>

<style></style>
