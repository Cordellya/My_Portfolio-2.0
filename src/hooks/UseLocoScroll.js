import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("#main-container");

    new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: "container",
    });

    return;
  }, []);
}
