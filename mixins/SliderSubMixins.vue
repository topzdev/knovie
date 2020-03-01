<script>
import imagePath from "@/utils/imagePath";
import HeartButton from "@/components/button/HeartButton";
import { mdiHeartOutline } from "@mdi/js";
import parseLink from "@/utils/parseLink";
import cliTruncate from "cli-truncate";
export default {
  components: {
    HeartButton
  },
  computed: {
    titleTruncate() {
      return cliTruncate(this.watch.title || this.watch.name, 30);
    },
    descriptionTruncate() {
      return cliTruncate(this.watch.overview, 190);
    },
    imgSrcSet() {
      return `${imagePath(this.watch.backdrop_path, "w780")} 600w,${imagePath(
        this.watch.backdrop_path,
        "w1280"
      )} 1940w, ${imagePath(this.watch.backdrop_path, "original")} 1945w`;
    }
  },
  methods: {
    watchLink(name) {
      return {
        name,
        params: {
          id: parseLink(
            this.watch.title || this.watch.name,
            this.watch.id,
            true
          )
        }
      };
    }
  }
};
</script>