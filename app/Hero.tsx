'use client'

import React from 'react'
import Image from 'next/image'
import heroImage from '../assets/3.jpeg'

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-16">
      <Image
        src={heroImage}
        alt="Kachha Chittha Header"
        fill
        className="absolute inset-0 object-cover object-top sm:object-center opacity-70"
        priority
        quality={100}
      />
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-lime/10 to-transparent opacity-40"></div>
      
      <div className="relative z-10 text-center max-w-5xl px-4 md:px-8 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-5 leading-tight tracking-tight">
          <span className="text-gradient text-shadow">KACHHA</span>
          <br className="hidden md:block" />
          <span className="text-white">CHITTHA</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-3 sm:mb-4 font-bold leading-relaxed">
          An Intellectual Audit of the Indian Reality
        </p>
        
        <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
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
