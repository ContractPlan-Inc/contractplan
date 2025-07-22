'use client'
import Image from 'next/image'
import { useState } from 'react'

const screenshots = [
  '/screens/dashboard.png',
  '/screens/contracts.png',
  '/screens/files.png',
]

export function ScreenshotCarousel() {
  const [index, setIndex] = useState(0)
  return (
    <div className="w-full overflow-hidden rounded-2xl shadow-xl">
      <div className="relative w-full h-[480px]">
        <Image
          src={screenshots[index]}
          alt="ContractPlan screenshot"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex justify-center mt-4 gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-emerald' : 'bg-gray-300'}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
