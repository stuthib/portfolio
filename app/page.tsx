"use client"

import { useEffect, useState } from "react"
import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import WorkSection from "@/components/WorkSection"
import PaintingSection from '@/components/PaintingSections'
import Modal from 'react-modal';

export default function Home() {
  const [showPaintings, setShowPaintings] = useState(false)

  useEffect(() => {
    Modal.setAppElement('#__next')
  }, [])

  return (
    <main id="__next" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection setShowPaintings={setShowPaintings} />
      <WorkSection />
      {
        showPaintings && <PaintingSection isOpen={showPaintings} onClose={() => setShowPaintings(false)} />
      }
    </main>
  )
}
