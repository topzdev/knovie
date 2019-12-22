<template>
  <div class="card--secondary">
    <nuxt-link to="/" class="card--secondary__img">
      <img
        src="../../assets/img/sample-cast.jpg"
        class="fit-image"
        alt="Tony Stark Cast"
        draggable="false"
      />
    </nuxt-link>

    <div class="card--secondary__content">
      <nuxt-link to="/" class="card--secondary__name">{{name}}</nuxt-link>
      <p class="card--secondary__film-name">as {{film_name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Robery Downey Jr.",
      film_name: "Tony Stark",
      img: "tony-stark.png"
    };
  }
};
</script>

<style>
</style>