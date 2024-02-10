import { Slide } from "@/data/types";

import styles from "./info.module.css";
import Link from "next/link";

type InfoProps = {
  slide: Slide;
};

export function Info({ slide }: InfoProps) {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{slide.title || "Hunted Horse"}</h1>
      {slide.cta && slide.link && (
        <Link className={styles.link} href={slide.link} target="_blank">
          {slide.cta}
        </Link>
      )}
    </div>
  );
}
