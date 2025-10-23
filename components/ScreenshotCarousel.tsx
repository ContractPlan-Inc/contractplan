'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type ScreenshotCarouselProps = {
  images: string[];
  autoAdvanceInterval?: number;
};

const DEFAULT_INTERVAL = 4000;

export function ScreenshotCarousel({
  images,
  autoAdvanceInterval = DEFAULT_INTERVAL,
}: ScreenshotCarouselProps) {
  const slides = useMemo(() => images.filter(Boolean), [images]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex((current) =>
      slides.length === 0 ? 0 : Math.min(current, slides.length - 1),
    );
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoAdvanceInterval);

    return () => window.clearInterval(interval);
  }, [autoAdvanceInterval, slides.length]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((src, slideIndex) => (
          <div key={src} className="relative h-[440px] min-w-full">
            <Image
              src={src}
              alt={`Product screenshot ${slideIndex + 1}`}
              fill
              priority={slideIndex === 0}
              sizes="(max-width: 1024px) 100vw, 960px"
              className="rounded-lg object-contain"
            />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              type="button"
              onClick={() => setIndex(slideIndex)}
              className={`h-3 w-3 rounded-full ${
                slideIndex === index ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
              aria-pressed={slideIndex === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
