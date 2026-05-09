'use client'

import React from 'react'
import Image from 'next/image'
import heroImage from '../assets/3.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-14 pb-8 sm:pb-12">
      <Image
        src={heroImage}
        alt="Kachha Chittha Header"
        fill
        className="absolute inset-0 object-cover object-center opacity-70"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/30 sm:bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-lime/10 to-transparent opacity-40"></div>
      
      <div className="relative z-10 text-center max-w-5xl px-4 md:px-8 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 leading-tight tracking-tight">
          <span className="text-gradient text-shadow">KACHHA</span>
          <br className="hidden md:block" />
          <span className="text-white">CHITTHA</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-2 sm:mb-3 font-bold leading-snug">
          An Intellectual Audit of the Indian Reality
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-5 sm:mb-6 max-w-2xl mx-auto font-medium leading-relaxed">
          We are seeking intellectuals, auditors & whistleblowers
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8">
          <a
            href="https://forms.gle/oKiqnDA4bSn9MueFA"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex justify-center"
          >
            Apply / Nominate
          </a>
          <a
            href="https://wa.me/918957536528?text=Hello%20curious%20thinker%2C%20I%20want%20to%20learn%20more%20about%20your%20initiative.%20Please%20send%20me%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex justify-center"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
