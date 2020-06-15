
<script>
import VueSlickCarousel from "vue-slick-carousel";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      mainSlickOption: {
        autoplaySpeed: 10000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        swipe: false,
        pauseOnHover: false
      }
    };
  },
  computed: {
    limitWatch() {
      return this.watch.slice(0, 10);
    }
  }
};
</script>
<style>
.slick-track{
  display: flex;
}
</style>