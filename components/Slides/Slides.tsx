"use client";

import { Graphic } from "@/components/Graphic/Graphic";
import { Info } from "@/components/Info/Info";
import { defaultSlide, slides } from "@/data";
import { useEffect, useState } from "react";

export function Slides() {
  const [index, setIndex] = useState(-1);
  const slide = index === -1 ? defaultSlide : slides[index];

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
    // Starter shape so just advance to the first slide
    if (index === -1) {
      setIndex(0);
      return;
    }

    // Advance to the next slide every 4 seconds
    const timer = setTimeout(() => setIndex((index + 1) % slides.length), 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <Graphic path={slide.image} />
      <Info slide={slide} />
    </div>
  );
}
