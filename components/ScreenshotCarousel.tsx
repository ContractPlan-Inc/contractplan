'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type ScreenshotCarouselProps = {
  images: string[];
};

export function ScreenshotCarousel({ images }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      setIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={src} className="relative h-[440px] min-w-full">
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              priority={i === 0}
              className="rounded-lg object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 800px"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

