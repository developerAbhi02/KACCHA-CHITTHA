'use client'

import React from 'react'

export default function FormSection() {
  return (
    <section id="form-section" className="section-padding bg-dark-bg border-t border-dark-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-center">
          <span className="text-gradient">Speaker & Whistleblower Application</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Tell us about your investigation, expertise, or story.
        </p>

        <div className="text-center">
          <p className="text-gray-400 mb-6">To apply or nominate, please open the application form using the link below.</p>

          <a
            href="https://forms.gle/oKiqnDA4bSn9MueFA"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-block btn-primary text-lg"
          >
            Open Application Form
          </a>

          <p className="text-gray-500 text-center text-sm mt-8">
            Having trouble with the form? Email us: <a href="mailto:skus8055@gmail.com" className="text-lime hover:underline">skus8055@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  )
}
