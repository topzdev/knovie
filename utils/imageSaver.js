import FileSaver from "file-saver";
import imagePath from "./imagePath";
export default filepath => {
  FileSaver.saveAs(
    imagePath(filepath, "original"),
    "knovie.com" + "-" + filepath.replace(" ", "_")
  );
};
