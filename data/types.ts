export type Vector = {
  d: string;
  fill: string;
  fillOpacity: string;
};

export type Slide = {
  cta?: string;
  image: Vector[];
  link?: string;
  title: string;
  uri?: string;
};
