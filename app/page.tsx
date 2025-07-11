import React from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <div className="w-full h-px bg-cream-50" />
      <Footer />
    </main>
  )
} 