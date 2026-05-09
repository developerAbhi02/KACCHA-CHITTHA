'use client'

import React from 'react'

export default function Hero() {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('form-section')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-dark-bg overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-lime/5 to-transparent opacity-50"></div>
      
      <div className="relative z-10 text-center max-w-5xl px-4 md:px-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight">
          <span className="text-gradient">KACHHA</span>
          <br />
          <span className="text-white">CHITTHA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          An Intellectual Audit of the Indian Reality
        </p>
        
        <p className="text-sm md:text-base text-gray-400 mb-12 max-w-2xl mx-auto">
          We are seeking intellectuals, auditors & whistleblowers
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToForm}
            className="btn-primary text-lg md:text-xl"
          >
            Apply / Nominate
          </button>
          <button
            onClick={handleScrollToForm}
            className="btn-secondary text-lg md:text-xl"
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
