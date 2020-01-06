<template>
  <div class="person">
    <div class="person__previewer">
      <div class="container py-0">
        <div class="person__header">
          <div class="row">
            <div class="col-3"></div>
            <div class="col">
              <div class="person__body">
                <h1 class="person__title">{{ person.name }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["person"],
  methods: {
    imagePath
  }
};
</script>

<style></style>
