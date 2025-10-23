'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type ScreenshotCarouselProps = {
  images: string[]
}

export function ScreenshotCarousel({ images }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (!hasMultipleImages) {
      return
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [hasMultipleImages, images.length])

  if (images.length === 0) {
    return null
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live="polite"
      >
        {images.map((src, i) => (
          <div key={src} className="relative min-w-full">
            <div className="relative h-[420px] w-full bg-slate-900/5">
              <Image
                src={src}
                alt={`Screenshot ${i + 1}`}
                fill
                className="object-contain"
                priority={i === 0}
                sizes="(min-width: 1024px) 960px, 100vw"
              />
            </div>
          </div>
        ))}
      </div>
      {hasMultipleImages && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 shadow">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-emerald-500' : 'bg-slate-300'}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </div>
      )}
    </div>
  )
}
