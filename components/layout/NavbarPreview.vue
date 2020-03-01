<template>
  <div class="navbar-preview">
    <div class="container p-0">
      <ul class="navbar-preview__list">
        <li class="navbar-preview__item" v-for="(link, idx) in links" :key="idx">
          <nuxt-link
            :to="{ name: name + link.path, params: { id: $route.params.id } }"
            class="navbar-preview__link"
            v-text="link.text"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "season"],
  data() {
    return {
      links: [
        { path: "", text: "Season" },
        { path: "-season", text: "Season" },
        { path: "-cast", text: "Cast" },
        { path: "-gallery", text: "Gallery" },
        { path: "-reviews", text: "Reviews" }
      ]
    };
  }
};
</script>

<style></style>
