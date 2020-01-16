<template>
  <div class="page404">
    <img :src="current" alt="404 Image Lost Signal" class="fit-image" />
    <div
      class="page404__message"
      @mouseenter="change_bg(distorted)"
      @mouseleave="change_bg(lost_signal)"
    >{{title}}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      current: "https://i.ytimg.com/vi/vM-sjiEFN7M/maxresdefault.jpg",
      lost_signal: "https://i.ytimg.com/vi/vM-sjiEFN7M/maxresdefault.jpg",
      distorted:
        "https://ak3.picdn.net/shutterstock/videos/24973403/thumb/1.jpg"
    };
  },

  methods: {
    change_bg(image) {
      this.current = image;
    }
  }
};
</script>

<style>
</style>