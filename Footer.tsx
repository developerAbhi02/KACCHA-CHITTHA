'use client'

import React from 'react'
import { MessageCircle, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-dark-border">
      <div className="section-padding px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
            <div className="min-w-0">
              <h3 className="text-xl md:text-2xl font-black text-gradient mb-3 md:mb-4">KACHHA CHITTHA</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                An Intellectual Audit of the Indian Reality
              </p>
            </div>

            <div className="min-w-0">
              <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-gray-400 hover:text-lime transition-colors text-sm md:text-base"
                  >
                    Back to Top
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:skus8055@gmail.com"
                    className="text-gray-400 hover:text-lime transition-colors text-sm md:text-base"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/8957536528"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center gap-2 text-gray-400 hover:text-lime transition-colors text-sm md:text-base"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp: 8957536528</span>
                </a>
                <a
                  href="tel:8957536528"
                  className="flex flex-wrap items-center gap-2 text-gray-400 hover:text-lime transition-colors text-sm md:text-base"
                >
                  <Phone size={18} />
                  <span>Call: 8957536528</span>
                </a>
                <a
                  href="mailto:skus8055@gmail.com"
                  className="flex flex-wrap items-center gap-2 text-gray-400 hover:text-lime transition-colors text-sm md:text-base"
                >
                  <Mail size={18} />
                  <span>skus8055@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-border pt-6">
            <div className="flex flex-col gap-3 text-center md:text-left md:flex-row md:justify-between md:items-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                © 2024 KACHHA CHITTHA. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Breaking the loop. Building truth. For India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
