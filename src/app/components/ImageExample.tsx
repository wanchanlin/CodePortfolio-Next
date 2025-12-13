'use client'

import Image from 'next/image'
import React from 'react'

export function ImageExample() {
  return (
    <div className="relative w-full h-64">
      {/* Local image from public directory */}
      <Image
        src="/images/your-image.jpg"
        alt="Description of your image"
        fill
        className="object-cover"
        priority
      />
      
      {/* Remote image */}
      <Image
        src="https://example.com/your-image.jpg"
        alt="Description of remote image"
        width={500}
        height={300}
        className="rounded-lg"
      />
    </div>
  )
} 