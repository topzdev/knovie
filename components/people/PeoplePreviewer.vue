<template>
  <div class="people">
    <div class="people__previewer">
      <v-container class="py-0">
        <div class="people__header">
          <v-row>
            <v-col cols="3">
              <div class="people__poster">
                <img
                  class="fit-image"
                  :src="imagePath(people.profile_path, 'w342')"
                  :title="people.name"
                  :alt="people.name + ' poster'"
                  draggable="false"
                  aria-label="Movie Poster"
                />
              </div>
            </v-col>
            <v-col>
              <div class="people__body">
                <h1 class="people__title">{{ people.name }}</h1>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>



<script>
import imagePath from "@/utils/imagePath";
export default {
  props: ["people"],
  methods: {
    imagePath
  }
};
</script>

<style>
</style>