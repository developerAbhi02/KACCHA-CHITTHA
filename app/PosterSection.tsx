'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import posterImage from '../assets/Invitation.png'

export default function PosterSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('poster-section')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="poster-section" className="section-padding bg-dark-bg">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-lime/30 w-full">
            <Image
              src={posterImage}
              alt="KACHHA CHITTHA Invitation"
              className="w-full h-auto object-contain"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
