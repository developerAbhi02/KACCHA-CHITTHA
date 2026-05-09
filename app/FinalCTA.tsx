'use client'

import React from 'react'

export default function FinalCTA() {
  const handleScrollToForm = () => {
    const formSection = document.getElementById('form-section')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-dark-bg via-lime/5 to-dark-bg border-t border-dark-border">
      <div className="max-w-5xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Know Someone Who Must <span className="text-gradient">Platform</span> the Root Cause?
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Nominate an expert, researcher, whistleblower, or auditor. Help us amplify truth.
          </p>

          <button
            onClick={handleScrollToForm}
            className="btn-primary text-xl mb-8"
          >
            Nominate an Expert
          </button>

          <p className="text-gray-500 text-base">
            Your recommendation matters. Help us find the next voice we need to hear.
          </p>
        </div>
      </div>
    </section>
  )
}
