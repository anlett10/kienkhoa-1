"use client";

import clsx from "clsx";
import { useCallback, useMemo, useRef, useState } from "react";
import { Chevron } from "@/components/icons/chevronN";

const slides = [
  {
    title: "One Tap Setup",
    img: "/slide-img/one-tap.jpeg",
    imageWidth: 343,
    imageHeight: 375,
  },
  {
    title: "Personalized Spatial Audio",
    img: "/slide-img/spatial-audio.jpeg",
    imageWidth: 211,
    imageHeight: 375,
  },
  {
    title: "Macbook Pro",
    img: "/slide-img/mbp16-silver-select-202110.jpeg",
    imageWidth: 343,
    imageHeight: 375,
    centered: true,
  },
  {
    title: "iPhone 14 Pro",
    img: "/slide-img/iphone-card-40-iphone14pro-202209.jpeg",
    imageWidth: 343,
    imageHeight: 375,
    centered: true,
  },
  {
    title: "Apple Watch",
    img: "/slide-img/watch-s8-digitalmat-gallery-1-202209_GEO_US.png",
    imageWidth: 343,
    imageHeight: 375,
    centered: true,
  },
  {
    title: "AirPods Pro",
    img: "/slide-img/MQD83.jpeg",
    imageWidth: 343,
    imageHeight: 375,
    centered: true,
  },
  {
    title: "AirPods Max",
    img: "/slide-img/airpods-max-select-skyblue-202011.png",
    imageWidth: 343,
    imageHeight: 375,
  },
  {
    title: "Audio Sharing",
    img: "/slide-img/audio-sharing.jpeg",
    imageWidth: 265,
    imageHeight: 352,
    centered: true,
  },
  {
    title: "Automatic Switching",
    img: "/slide-img/automatic-switching.jpeg",
    imageWidth: 336,
    imageHeight: 100,
    centered: true,
  },
  {
    title: "Siri",
    img: "/slide-img/siri.jpeg",
    imageWidth: 168,
    imageHeight: 168,
    centered: true,
  },
  {
    title: "Accessibility",
    img: "/slide-img/a11y.jpeg",
    imageWidth: 135,
    imageHeight: 135,
    centered: true,
  },
];

const slideWidth = 400;
const slideMargin = 20;

const scrollToSlide = (slider: HTMLUListElement | null, slideIndex: number) => {
  if (!slider) return;
  slider.scrollTo({
    left: slideIndex * (slideWidth + slideMargin),
    behavior: "smooth",
  });
};

function Slider() {
  const sliderRef = useRef<HTMLUListElement | null>(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  const currentSlide = useMemo(() => {
    return Math.floor(sliderPosition / (slideWidth + slideMargin));
  }, [sliderPosition]);

  const scrolledToEndOfSlider = useMemo(() => {
    if (!sliderRef.current) return false;
    return (
      sliderRef.current.scrollWidth -
        sliderRef.current.scrollLeft -
        sliderRef.current.clientWidth ===
      0
    );
  }, [sliderPosition]);

  const goToNextSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide + 1);
  }, [currentSlide]);

  const goToPreviousSlide = useCallback(() => {
    scrollToSlide(sliderRef.current, currentSlide - 1);
  }, [currentSlide]);

  return (
    <div className="bg-muted rounded-2xl py-12 px-6">
      <h2 className="mx-auto mb-16 max-w-[800px] text-center text-4xl md:text-6xl font-semibold text-foreground">
        Collection of Apple devices and software products.
      </h2>

      <div className="h-[500px] overflow-hidden">
        <ul
          ref={sliderRef}
          onScroll={(ev) => {
            setSliderPosition(ev.currentTarget.scrollLeft);
          }}
          className="flex h-[540px] snap-x snap-mandatory overflow-x-auto pb-10"
        >
          {slides.map((slide) => (
            <li
              className="mr-5 shrink-0 snap-start snap-always last:mr-0"
              key={slide.title}
            >
              <div className="slide-center relative flex h-full w-[400px] flex-col rounded-2xl bg-card border border-border shadow-lg">
                <div
                  className={clsx(
                    "flex h-full justify-center",
                    slide.centered ? "items-center" : "items-start"
                  )}
                >
                  <img
                    src={slide.img}
                    alt={slide.title}
                    width={slide.imageWidth}
                    height={slide.imageHeight}
                  />
                </div>
                <h3 className="mt-auto p-6 text-2xl font-semibold text-foreground">
                  {slide.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          disabled={currentSlide === 0}
          onClick={() => goToPreviousSlide()}
          className="mr-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground disabled:border-muted-foreground/30 disabled:text-muted-foreground/50 disabled:hover:bg-background disabled:hover:text-muted-foreground/50 transition-colors duration-200"
        >
          <span className="sr-only">Previous slide</span>
          <Chevron className="h-4 w-4" />
        </button>
        <button
          disabled={scrolledToEndOfSlider || currentSlide === slides.length}
          onClick={() => goToNextSlide()}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground disabled:border-muted-foreground/30 disabled:text-muted-foreground/50 disabled:hover:bg-background disabled:hover:text-muted-foreground/50 transition-colors duration-200"
        >
          <span className="sr-only">Next slide</span>
          <Chevron className="h-4 w-4 rotate-180" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
