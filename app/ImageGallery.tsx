'use client'

import React from 'react'
import Image from 'next/image'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img4 from '../assets/4.jpeg'
import img5 from '../assets/5.jpeg'
import img6 from '../assets/6.jpeg'
import img7 from '../assets/7.jpeg'

const images = [
  img1,
  img2,
  img4,
  img5,
  img6,
  img7
]

export default function ImageGallery() {
  return (
    <section className="section-padding bg-dark-bg border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${index > 2 ? 'hidden md:block' : ''} relative overflow-hidden rounded-xl border border-dark-border hover:border-lime/50 transition-all duration-300 hover:shadow-xl hover:shadow-lime/30`}
            >
              <div className="relative w-full h-56 sm:h-64 md:h-72">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

