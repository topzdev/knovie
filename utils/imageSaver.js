import FileSaver from "file-saver";
import imagePath from "./imagePath";
let site_name = process.env.SITE_NAME;
export default filepath => {
  FileSaver.saveAs(
    imagePath(filepath, "original"),
    site_name + ".com" + "-" + filepath.replace(" ", "_")
  );
};
