'use client';

import { useState, useEffect } from 'react';

export default function HomeLightClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--magenta)] via-purple-500 to-[var(--teal)]">
        {/* Emergency Bar */}
        <div className="bg-red-600 text-white py-2 px-4 text-sm">
          <div className="max-w-[var(--content)] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span>📞 Emergency: 01273 453109</span>
              <span>📍 Shoreham-by-Sea, West Sussex</span>
              <span>🕒 24/7 Emergency Care</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-[var(--content)] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--magenta)] to-[var(--teal)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  SMH
                </div>
                <div>
                  <div className="font-bold text-lg text-[var(--ink)]">St Mary's House</div>
                  <div className="text-sm text-[var(--ink-soft)]">Dental Care</div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Home</a>
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">About ▼</a>
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Treatments ▼</a>
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Team</a>
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Patient Stories</a>
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Blog</a>
                <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Contact</a>
              </nav>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-[var(--ink)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface)] transition-colors">
                  📞 Call Now
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-[var(--magenta)] to-[var(--teal)] text-white rounded-lg hover:opacity-90 transition-opacity">
                  📅 Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Loading Hero */}
        <div className="flex-1 flex items-center justify-center min-h-[80vh]">
          <div className="text-center text-white">
            {/* Loading Spinner */}
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-6"></div>
            <h1 className="text-2xl font-semibold">Loading Luxury Experience...</h1>
          </div>
        </div>

        {/* Floating Action Buttons */}
        <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors text-sm">
            Emergency: 01273 453109
          </button>
          <button className="bg-gradient-to-r from-[var(--magenta)] to-[var(--teal)] text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-sm">
            Quick Actions
          </button>
          <div className="bg-white text-[var(--ink)] px-4 py-2 rounded-lg shadow-lg text-sm border">
            🕒 Open Today 9AM-5PM
          </div>
        </div>

        {/* Issues Notification */}
        <div className="fixed bottom-6 left-6 z-50">
          <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            3 Issues ✕
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Emergency Bar */}
      <div className="bg-red-600 text-white py-2 px-4 text-sm">
        <div className="max-w-[var(--content)] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span>📞 Emergency: 01273 453109</span>
            <span>📍 Shoreham-by-Sea, West Sussex</span>
            <span>🕒 24/7 Emergency Care</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-[var(--surface)] shadow-sm">
        <div className="max-w-[var(--content)] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--magenta)] to-[var(--teal)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                SMH
              </div>
              <div>
                <div className="font-bold text-lg text-[var(--ink)]">St Mary's House</div>
                <div className="text-sm text-[var(--ink-soft)]">Dental Care</div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Home</a>
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">About ▼</a>
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Treatments ▼</a>
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Team</a>
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Patient Stories</a>
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Blog</a>
              <a href="#" className="text-[var(--ink)] hover:text-[var(--magenta)] transition-colors">Contact</a>
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-[var(--ink)] border border-[var(--border)] rounded-lg hover:bg-[var(--surface)] transition-colors">
                📞 Call Now
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-[var(--magenta)] to-[var(--teal)] text-white rounded-lg hover:opacity-90 transition-opacity">
                📅 Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[var(--magenta)] via-purple-500 to-[var(--teal)] text-white text-center">
          <div className="max-w-[var(--content)] mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experience Luxury
              <span className="block text-4xl md:text-5xl font-light mt-2">Coastal Dental Care</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Where advanced 3D dentistry meets the tranquil beauty of Shoreham-by-Sea. 
              Discover your perfect smile in our luxury coastal practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[var(--magenta)] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                ▶ Watch Our Story
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--magenta)] transition-colors">
                📅 Book Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[var(--surface)]">
          <div className="max-w-[var(--content)] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-2">CQC Outstanding</h3>
                <p className="text-[var(--ink-soft)]">Highest possible rating for quality and safety</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-2">98% Satisfaction</h3>
                <p className="text-[var(--ink-soft)]">Based on over 1,000 patient reviews</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚑</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-2">24/7 Emergency</h3>
                <p className="text-[var(--ink-soft)]">Always here when you need us most</p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Cards */}
        <section className="py-24 bg-[var(--bg)]">
          <div className="max-w-[var(--content)] mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--ink)] mb-4">
                Luxury Coastal Dentistry
              </h2>
              <p className="text-xl text-[var(--ink-soft)]">Where Innovation Meets Elegance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[var(--surface)] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--teal)] to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🦷</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-4">3D Digital Dentistry</h3>
                <p className="text-[var(--ink-soft)] mb-6">
                  Experience the future with our cutting-edge 3D scanning and treatment planning.
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-[var(--teal)] to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Explore 3D Tech
                </button>
              </div>

              <div className="bg-[var(--surface)] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--magenta)] to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-4">Porcelain Veneers</h3>
                <p className="text-[var(--ink-soft)] mb-6">
                  Transform your smile with our luxury porcelain veneers and cosmetic treatments.
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-[var(--magenta)] to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Perfect Your Smile
                </button>
              </div>

              <div className="bg-[var(--surface)] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🦷</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--ink)] mb-4">Dental Implants</h3>
                <p className="text-[var(--ink-soft)] mb-6">
                  Restore your confidence with our premium dental implant solutions.
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                  Restore Your Smile
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[var(--magenta)] via-purple-500 to-[var(--teal)] text-white">
          <div className="max-w-[var(--content)] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Luxury Coastal Dentistry?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Join thousands of satisfied patients who have transformed their smiles 
              with our award-winning dental care in beautiful Shoreham-by-Sea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[var(--magenta)] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                📞 Call Now: 01273 453109
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[var(--magenta)] transition-colors">
                📅 Book Online 24/7
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors text-sm">
          Emergency: 01273 453109
        </button>
        <button className="bg-gradient-to-r from-[var(--magenta)] to-[var(--teal)] text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity text-sm">
          Quick Actions
        </button>
        <div className="bg-[var(--surface)] text-[var(--ink)] px-4 py-2 rounded-lg shadow-lg text-sm border">
          🕒 Open Today 9AM-5PM
        </div>
      </div>
    </div>
  );
}
