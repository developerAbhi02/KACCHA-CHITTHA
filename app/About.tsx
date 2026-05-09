'use client'

import React from 'react'

export default function About() {
  return (
    <section className="section-padding bg-dark-bg border-t border-dark-border">
      <div className="max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 tracking-tight">
            What is <span className="text-gradient">Kachha Chittha?</span>
          </h2>

          <div className="space-y-5 sm:space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>
              <strong className="text-lime">Kachha Chittha</strong> is a rigorous intellectual investigation into the foundational realities shaping the Indian experience. We audit systems, structures, and narratives—not to blame, but to understand.
            </p>

            <p>
              We believe meaningful change requires intellectual honesty. This is a platform for auditors, thinkers, researchers, and whistleblowers who refuse to accept surface-level explanations.
            </p>

            <p>
              Our focus: <strong>Education</strong>, <strong>Healthcare</strong>, <strong>Water Security</strong>, <strong>Employment</strong>, <strong>Climate Reality</strong>, and <strong>Agriculture</strong>—the core systems that determine dignity and survival.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
