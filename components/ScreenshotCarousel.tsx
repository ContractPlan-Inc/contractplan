'use client';

import { useState } from 'react';
import Image from 'next/image';

const screenshots = [
  '/screens/dashboard.png',
  '/screens/contracts.png',
  '/screens/files.png',
];

export default function ScreenshotCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-[#1E2235]">
      <div className="relative w-full h-[480px]">
        <Image
          src={screenshots[index]}
          alt={`Screenshot ${index + 1}`}
          fill
          className="object-cover transition-all duration-700 ease-in-out"
          priority
        />
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-emerald-500' : 'bg-gray-300'}`}
            aria-label={`Show screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

