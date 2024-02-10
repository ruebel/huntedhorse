"use client";

import { useEffect, useState } from "react";
import { slides } from "@/data";
import { Info } from "@/components/Info/Info";
import { Graphic } from "@/components/Graphic/Graphic";

export function Slides() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
        case "Enter":
        case " ":
          setIndex((index + 1) % slides.length);
          break;
        case "ArrowLeft":
        case "ArrowUp":
          setIndex((index - 1 + slides.length) % slides.length);
          break;
        default:
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((index + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <Graphic path={slide.image} />
      <Info slide={slide} />
    </div>
  );
}
