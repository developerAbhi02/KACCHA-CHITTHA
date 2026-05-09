'use client'

import React, { useState, useEffect } from 'react'
import { BookOpen, Heart, Droplet, Briefcase, Cloud, Leaf } from 'lucide-react'

const issues = [
  {
    icon: BookOpen,
    title: 'Education',
    description: 'Who learns? What are they learning? At what cost?',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'Health as commodity or right? Access vs. myth.',
  },
  {
    icon: Droplet,
    title: 'Water',
    description: 'From abundance to scarcity. The broken infrastructure.',
  },
  {
    icon: Briefcase,
    title: 'Jobs',
    description: 'Employment, dignity, and the wage myth.',
  },
  {
    icon: Cloud,
    title: 'Climate',
    description: 'Crisis by design or denial? Accountability.',
  },
  {
    icon: Leaf,
    title: 'Agriculture',
    description: 'Feeding a nation. The unheard farmer.',
  },
]

export default function IssueGrid() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setVisibleCards((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('[data-index]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-dark-bg border-t border-dark-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
          Issue Areas We Audit
        </h2>
        <p className="text-gray-400 mb-16 text-lg max-w-2xl">
          Six critical systems. Six urgent investigations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, index) => {
            const Icon = issue.icon
            return (
              <div
                key={index}
                data-index={index}
                className={`card-dark group cursor-pointer transition-all duration-500 ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="mb-4 text-lime group-hover:scale-110 transition-transform duration-300">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{issue.title}</h3>
                <p className="text-gray-400 leading-relaxed">{issue.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
