'use client'

import { MapPin, Calendar, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ContactModal } from '@/components/contact-modal'

const treks = [
  {
    id: 'fireflies-prabalmachi',
    name: 'Fireflies Camping',
    location: 'Prabalmachi, Panvel',
    price: '₹1599',
    dates: '23rd - 24th May',
    ageGroup: '15-37 yrs',
    duration: '2 Days',
    description: 'Experience the mesmerizing glow of fireflies in a captivating dance of light. Join our guided 2-day camping adventure through monsoon jungles.',
    image: 'from-orange-600 to-red-600'
  },
  {
    id: 'fireflies-bhandardara',
    name: 'Fireflies Camping',
    location: 'Bhandardara',
    price: '₹1899',
    dates: 'Available Soon',
    ageGroup: '16-37 yrs',
    duration: '2 Days',
    description: 'Magical escape into nature where you can witness thousands of glowing insects light up the night. Perfect for nature lovers and photographers.',
    image: 'from-amber-600 to-yellow-600'
  },
  {
    id: 'spiti-valley-chandratal',
    name: 'Spiti Valley with Chandratal',
    location: 'Shimla to Chandigarh',
    price: '₹27,999',
    dates: '2nd-11th July, 6th-15th Aug, 27th Aug-5th Sept, 24th Sept-3rd Oct, 1st-10th Oct',
    ageGroup: '16-37 yrs',
    duration: '10 Days',
    description: 'Experience the dramatic cold desert of the Himalayas. An authentic 10-day road trip through Spiti\'s iconic monasteries, high-altitude villages, and breathtaking Chandrataal Lake.',
    image: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'himachal-backpacking',
    name: 'Himachal Backpacking',
    location: 'Chandigarh to Amritsar',
    price: '₹26,999',
    dates: '28th May-7th June, 5th-15th June, 13th-23rd Aug, 2nd-12th Oct',
    ageGroup: '16-37 yrs',
    duration: '11 Days',
    description: 'Journey through Himachal\'s stunning landscapes and vibrant culture. From Kasol\'s serene valleys to Manali\'s adventure, Bir\'s monasteries to Amritsar\'s heritage.',
    image: 'from-green-600 to-teal-600'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg font-bold">Z</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">Zestwanders</h1>
                <p className="text-xs text-muted-foreground">Seeking New Adventures</p>
              </div>
            </div>
            <ContactModal />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-secondary text-foreground py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-accent">
              Explore More,<br />Spend Less,<br />Travel in Style
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Discover unforgettable adventures with Zestwanders. From firefly-lit jungles to mountain treks, we curate experiences that create lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Explore Treks
              </button>
              <a
                href="https://wa.me/9699055968"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Treks Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Featured Treks</h3>
          <p className="text-muted-foreground">Choose your next adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {treks.map((trek) => (
            <Link
              key={trek.id}
              href={`/trek/${trek.id}`}
              className="group block"
            >
              <div className="h-full bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors hover:shadow-lg hover:shadow-accent/20">
                {/* Trek Image/Gradient */}
                <div className={`h-40 sm:h-48 bg-gradient-to-br ${trek.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Trek Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-accent mb-2">{trek.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
                      {trek.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{trek.location}</span>
                    </div>
                  </div>

                  {/* Trek Details */}
                  <div className="grid grid-cols-3 gap-3 mb-6 py-4 border-t border-b border-border">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Duration</div>
                      <div className="font-semibold text-accent text-sm">{trek.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Age</div>
                      <div className="font-semibold text-foreground text-sm">{trek.ageGroup}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Dates</div>
                      <div className="font-semibold text-foreground text-sm">{trek.dates}</div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-muted-foreground">Per Person</div>
                      <div className="text-2xl sm:text-3xl font-bold text-accent">{trek.price}</div>
                    </div>
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <section className="bg-secondary/50 border-t border-border py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-accent flex-shrink-0 mt-1 text-lg">📞</div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                    <a href="tel:9699055968" className="text-accent font-semibold hover:opacity-80">
                      +91 9699055968
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-accent flex-shrink-0 mt-1 text-lg">✉️</div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:zestwanders@gmail.com" className="text-accent font-semibold hover:opacity-80">
                      zestwanders@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">Why Zestwanders?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Budget-friendly with premium experiences
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Expert trip leaders & curated itineraries
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Focus on offbeat & experiential travel
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Strong community vibe & group bonding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-foreground py-6 sm:py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center space-y-2">
          <p className="font-semibold text-sm sm:text-base">Zestwanders – Travel Beyond Ordinary</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Explore More, Spend Less, Travel in Style</p>
          <p className="text-xs text-muted-foreground/60 pt-2">© 2026 Zestwanders. All rights reserved.</p>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal />
    </div>
  )
}
