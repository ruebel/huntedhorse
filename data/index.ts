import { Slide } from "@/data/types";
import ebos from "./ebos";
import isa from "./isa";
import mark from "./mark";
import randy from "./randy";
import shadow from "./shadow";
import shane from "./shane";

export const slides = [shane, mark, randy, isa, ebos, shadow];
export const defaultSlide: Slide = {
  image: Array.from({ length: 209 }, (_, i) => ({
    d: "M88,167L57,161L57,174Z",
    fill: "rgb(255, 255, 255)",
    fillOpacity: "0.5",
  })),
  title: "Hunted Horse",
};
