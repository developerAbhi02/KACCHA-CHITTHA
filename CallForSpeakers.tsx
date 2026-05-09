'use client'

import React from 'react'

export default function CallForSpeakers() {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('form-section')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-dark-bg to-dark-bg border-t border-dark-border">
      <div className="max-w-5xl mx-auto">
        <div className="bg-dark-card border border-lime/30 rounded-2xl p-8 md:p-16 text-center animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            <span className="text-gradient">Invitation</span> to Speakers
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            We are seeking intellectuals, auditors, & whistleblowers.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Help us break the loop of suffering through rational thinking. Share your investigation, findings, and truth.
          </p>

          <button
            onClick={handleScrollToForm}
            className="btn-primary text-xl"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  )
}
