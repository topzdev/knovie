<template>
  <v-pagination
    v-model="currentPage"
    :length="totalPage"
    :total-visible="totalVisible"
    prev-icon="mdi-chevron-left"
    next-icon="mdi-chevron-right"
  ></v-pagination
></template>

<script>
export default {
  props: ["currentPage", "totalPage", "totalVisible"]
};
</script>

<style></style>
