'use client'

import React from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import authorImage from '../assets/ChatGPT Image May 3, 2026, 07_38_31 PM.png'

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-lime/30">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Author Section */}
          <div className="mb-20 pb-16 border-b border-dark-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-4xl md:text-5xl font-black text-gradient mb-6 leading-tight">
                  About the <br/>Creator
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6 text-lg font-medium">
                  Driven by a passion for <strong>truth</strong> and <strong>intellectual rigor</strong>, we bring decades of expertise to auditing India's foundational systems.
                </p>
                <p className="text-gray-300 leading-relaxed text-base">
                  Our mission is to break the loop of suffering through <strong>rational thinking</strong>, <strong>evidence-based investigation</strong>, and <strong>uncompromising scrutiny</strong>.
                </p>
              </div>
              <div className="order-1 md:order-2 relative rounded-xl overflow-hidden shadow-2xl shadow-lime/40 border border-lime/30">
                <Image
                  src={authorImage}
                  alt="Creator - Kachha Chittha"
                  className="w-full h-auto object-cover"
                  priority
                  quality={100}
                />
              </div>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-gradient mb-4">KACHHA CHITTHA</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                An Intellectual Audit of the Indian Reality
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-black text-white mb-6">Contact Us</h4>
              <div className="space-y-4">
                <a
                  href="mailto:skus8055@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-lime transition-colors text-base md:text-lg font-medium"
                >
                  <Mail size={24} className="text-lime" />
                  <span>skus8055@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <p className="text-gray-400 font-medium">
                © 2024 KACHHA CHITTHA. All rights reserved.
              </p>
              <p className="text-lime font-bold text-lg">
                Breaking the loop. Building truth. For India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
