import { CSSProperties, memo, useCallback, useEffect, useState } from "react";

type Slide = {
  title: string;
  src: string;
};

type CarouselProps = {
  slides: Slide[];
  slideInterval?: number | undefined;
  maxWidth: number;
  maxHeight?: number;
  controlsPadding?: number;
  borderRadius?: number;

  previousButton?: React.ReactNode;
  nextButton?: React.ReactNode;

  showTitle?: boolean;
  titleStyles?: CSSProperties;

  showControls?: boolean;
};

export const Carousel = memo(
  ({
    slides,
    slideInterval = undefined,
    maxWidth,
    maxHeight,
    controlsPadding = 16,
    borderRadius = 10,

    previousButton = <p aria-label="Previous Slide">Previous</p>,
    nextButton = <p aria-label="Next Slide">Next</p>,

    showTitle = true,
    titleStyles,

    showControls = true,
  }: CarouselProps) => {
    const [currentSlideIndex, setSlideIndex] = useState(0);

    const handleNext = useCallback(() => {
      setSlideIndex((prev) => (prev + 1 >= slides.length ? 0 : prev + 1));
    }, [slides.length]);

    const handlePrevious = useCallback(() => {
      setSlideIndex((prev) => (prev - 1 <= -1 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    /*Clears interval on currentSlideIndex update as well, to prevent auto slide interrupting user.*/
    useEffect(() => {
      if (slideInterval) {
        const interval = setInterval(() => handleNext(), slideInterval);

        return () => {
          clearInterval(interval);
        };
      }
    }, [handleNext, slideInterval, currentSlideIndex]);

    return (
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: borderRadius,
          width: "100%",
          height: "100%",
          maxWidth: maxWidth,
          maxHeight: maxHeight,

          userSelect: "none",
        }}
      >
        {showControls && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: controlsPadding,
              zIndex: 1,
            }}
          >
            <div
              className="carousel-control"
              onClick={handlePrevious}
              style={{ cursor: "pointer" }}
            >
              {previousButton}
            </div>
            <div
              className="carousel-control"
              onClick={handleNext}
              style={{ cursor: "pointer" }}
            >
              {nextButton}
            </div>
          </div>
        )}

        {showTitle && (
          <div
            style={{
              position: "absolute",
              bottom: 5,
              left: "50%",
              translate: "-50%",
              zIndex: 1,
              ...titleStyles,
            }}
          >
            {slides[currentSlideIndex].title}
          </div>
        )}

        <div
          style={{
            display: "flex",
            overflow: "hidden",
          }}
        >
          {slides.map((slide) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.title}
              style={{
                minWidth: "100%",
                minHeight: "100%",
                transition: "transform 0.5s ease-in-out",
                transform: `translateX(${-100 * currentSlideIndex}%)`,

                objectFit: "fill",
              }}
            />
          ))}
        </div>
      </div>
    );
  }
);
