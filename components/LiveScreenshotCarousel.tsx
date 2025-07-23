'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function LiveScreenshotCarousel() {
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/demo-images');
      const data = await res.json();
      if (Array.isArray(data.images)) {
        setImages(data.images);
      }
    }
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return <div className="text-center p-10">Waiting for demo...</div>;
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-md border border-gray-200 bg-white">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-[440px] relative">
            <Image src={src} alt={`Screenshot ${i + 1}`} layout="fill" objectFit="contain" className="rounded-lg" priority={i === 0} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-emerald-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
