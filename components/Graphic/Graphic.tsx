import { Vector } from "@/data/types";
import { Spring, animated } from "react-spring";

import styles from "./graphic.module.css";

type GraphicProps = {
  path: Vector[];
};

const defaultOpacity = 0.501961;

export function Graphic({ path }: GraphicProps) {
  return (
    <svg viewBox="0 0 400 256" height="100vh">
      {path.map((p, i) => (
        <Spring config={{ friction: 18, tension: 30 }} key={i} to={p}>
          {(t) => (
            <animated.path
              className={styles.path}
              d={t.d}
              fill={t.fill}
              fillOpacity={t.fillOpacity || defaultOpacity}
            />
          )}
        </Spring>
      ))}
    </svg>
  );
}
