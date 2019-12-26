import * as Vibrant from "node-vibrant";
import imagePath from "./imagePath";
import Color from "color";
export default async image => {
  let returnColor = {};
  await Vibrant.from(imagePath(image, "w780")).getPalette((err, palette) => {
    const { Vibrant, DarkMuted } = palette;
    console.log(palette);
    let color = Color(Vibrant._rgb);
    returnColor.primaryColor = Vibrant._rgb.toString();
    returnColor.secondaryColor = DarkMuted._rgb.toString();
    returnColor.textColor = color.isDark() ? "255,255,255" : "0,0,0";
  });

  return returnColor;
};
