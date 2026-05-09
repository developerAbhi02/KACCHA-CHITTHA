'use client'

import Hero from './Hero'
import PosterSection from './PosterSection'
import About from './About'
import IssueGrid from './IssueGrid'
import CallForSpeakers from './CallForSpeakers'
import ImageGallery from './ImageGallery'
import Footer from './Footer'

export default function Home() {
  return (
    <main className="bg-dark-bg">
      <Hero />
      <PosterSection />
      <About />
      <IssueGrid />
      <CallForSpeakers />
      <ImageGallery />
      <Footer />
    </main>
  )
}
