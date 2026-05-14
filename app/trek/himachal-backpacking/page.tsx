'use client'

import { MapPin, Users, Calendar, Flame, CheckCircle2, AlertCircle, ChevronDown, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { ContactModal } from '@/components/contact-modal'

export default function HimachalBackpackingPage() {
  const [expandedSections, setExpandedSections] = useState({
    itinerary: true,
    inclusions: false,
    checklist: false,
    policy: false
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <Link href="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </Link>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-secondary text-foreground py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-accent">
              Himachal<br />Backpacking
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 font-light text-muted-foreground leading-relaxed">
              Embark on an unforgettable journey through Himachal Pradesh, where stunning landscapes and vibrant culture await! Start your adventure in Kasol, nestled in the Parvati Valley, known for its serene beauty and charming cafes. Next, head to Manali, a haven for thrill-seekers, offering breathtaking views, snow-capped mountains, and exciting activities. Then, experience the tranquil vibes of Bir, famous for its monasteries and as a paragliding hotspot. Finally, immerse yourself in the rich heritage of Amritsar with the iconic Golden Temple and delicious Punjabi cuisine. This trip promises a perfect blend of nature, adventure, and culture!
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</div>
                <div className="text-xl sm:text-2xl font-bold text-accent">11 Days</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Age Group</div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">16-37 yrs</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-lg sm:text-xl font-bold text-foreground">Chandigarh to Amritsar</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Level</div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">Moderate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="bg-accent rounded-lg p-4 flex-1">
                <div className="text-white">
                  <div className="text-sm font-semibold opacity-90">Price per person</div>
                  <div className="text-2xl sm:text-3xl font-bold">₹26,999</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 flex-1">
                <div className="text-foreground">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Batch Dates</div>
                  <div className="text-sm sm:text-base font-bold text-accent">28th May-7th June, 5th-15th June, 13th-23rd Aug, 2nd-12th Oct</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* 11-Day Complete Itinerary */}
        <section className="mb-6 sm:mb-8">
          <button
            onClick={() => toggleSection('itinerary')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate">Complete 11-Day Itinerary</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.itinerary ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.itinerary && (
            <div className="mt-4 space-y-4">
              {[
                {
                  day: 1,
                  title: 'MUMBAI/PUNE - CHANDIGARH',
                  content: 'The beautiful journey to Himachal will commence from Mumbai. Assemble railway station and Meet our Coordinators. Departure by Train no. 22451/12903'
                },
                {
                  day: 2,
                  title: 'CHANDIGARH - JIBHI',
                  content: 'We will arrive in Chandigarh by 3-4 PM, where we will begin our scenic journey to Jibhi. Along the way, enjoy a lively atmosphere with engaging games and pleasant interactions, making the ride both fun and memorable. We are expected to reach Jibhi by 11 PM, where we will check in and unwind for the night, preparing for the adventures that lie ahead.'
                },
                {
                  day: 3,
                  title: 'EXPLORE JIBHI',
                  content: 'After a delicious breakfast, we will embark on a scenic exploration of Tirthan Valley. Our first stop will be the picturesque Jalori Pass, followed by a visit to the serene Serolsar Lake, nestled amidst stunning landscapes. In the evening, we will return to the hotel to relax and unwind, reflecting on the day\'s adventures. (Breakfast & Dinner included)'
                },
                {
                  day: 4,
                  title: 'KASOL & PARVATI VALLEY EXPLORATION',
                  content: 'Arrive in Kasol, After checking in and freshening up, it\'s time to explore this vibrant town. Whether you\'re fulfilling your travel dreams or simply relaxing, Kasol offers something for everyone. Spend the day chilling by the Parvati River, and indulge in local delicacies like Himachali momos, Maggi, and brownies. Visit the Manikaran Gurudwara and experience the soothing hot springs. After a day of exploration at your own pace, regroup for dinner. Overnight stay in Kasol. (Breakfast + Dinner Included)'
                },
                {
                  day: 5,
                  title: 'KASOL TO MANALI VIA KULLU',
                  content: 'After breakfast, check out and begin the journey to Manali. On the way, stop in Kullu for an exhilarating white water rafting experience. Arrive in Manali by evening and visit the Hadimba Devi Temple. The rest of the evening is free for you to explore Mall Road and the famous cafes of Old Manali. Overnight stay in Manali. (Breakfast + Dinner Included)'
                },
                {
                  day: 6,
                  title: 'MANALI SIGHTSEEING',
                  content: 'Start the day with a hearty breakfast before heading out to Solang Valley and the Atal Tunnel, weather permitting. Spend the morning enjoying adventure activities, and if time allows, visit the Vashisht Temple and its hot springs on the way back to Manali. Return to the hotel by evening and relax for the rest of the day. Breakfast & Dinner included.'
                },
                {
                  day: 7,
                  title: 'MANALI TO BIR',
                  content: 'After breakfast, check out and depart for Bir. Arrive in the evening and take some time to explore the lively cafes with live music. Gather around a bonfire with your group and enjoy the evening. Overnight stay in Bir. (Breakfast & Dinner included)'
                },
                {
                  day: 8,
                  title: 'EXPLORE BIR BILLING',
                  content: 'Rise early for a chance to experience paragliding at Asia\'s highest paragliding site, subject to weather conditions (at your own cost). Spend the rest of the day exploring Bir on Cycle/Bike (by your own) visiting Tibetan monasteries, hiking to nearby scenic spots, and enjoying cafe hopping. Later in the evening, embark on an overnight journey to Amritsar. Note: After breakfast, we will check out from the hotel. Today is a self exploration day, giving everyone the freedom to explore Bir at their own pace. Those interested can opt for paragliding, while others can enjoy cafés, monasteries, and the laid-back vibe of the town. We will depart from Bir for amritsar around 11:00 PM for our onward journey. (Breakfast included)'
                },
                {
                  day: 9,
                  title: 'GOLDEN TEMPLE, AMRITSAR',
                  content: 'We arrive at the hotel around 8:00 AM. Since the standard check-in time is 11:00 AM, you may relax in the hotel lobby or step out to explore the nearby areas of the city until your room is ready. Later we visit Golden Temple and Jallianwala Bagh, followed by a lunch of local delicacies. In the evening, head to Wagah Border to witness the Parade & Flag Ceremony, a truly patriotic experience. Return to Amritsar by evening. Overnight stay in Amritsar. (Dinner included)'
                },
                {
                  day: 10,
                  title: 'RETURN JOURNEY TO MUMBAI',
                  content: 'After breakfast, check out and head to Amritsar Railway Station to catch your train back to Mumbai. Spend the day on the train reminiscing about the trip, sharing photos, and making plans for future adventures. Train no. 11058 / 12904 (Breakfast included)'
                },
                {
                  day: 11,
                  title: 'MUMBAI ARRIVAL',
                  content: 'Arrival in Mumbai with Sweet memories and it\'s time for farewell.'
                }
              ].map(item => (
                <div key={item.day} className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                  <h4 className="text-lg sm:text-xl font-bold text-accent mb-2">Day {item.day}: {item.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Inclusions & Exclusions */}
        <section className="mb-6 sm:mb-8">
          <button
            onClick={() => toggleSection('inclusions')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">What's Included & Excluded</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.inclusions ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.inclusions && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  Included
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">3AC / 3E train travel to & fro Chandigarh/Ambala</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Private transport throughout the journey</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">6 nights in premium hotels / camps (3–4 sharing basis)</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">6 breakfasts & 5 dinners with local flavors (Jain option available)</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">All entry fees & permits for different locations</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">First aid kit & medical assistance</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Expert Trip leader with fun games & best service</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Extra mattresses provided at all stays for guest comfort</span></li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  Not Included
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Personal expenses</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Adventure activities (Paragliding ₹3000 approx, River rafting ₹500 approx)</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Insurance</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Meals during train & road journey & lunch on all days</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Additional costs due to road blocks or unforeseen circumstances</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Loss, damage, or theft of personal belongings</span></li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Things to Carry */}
        <section className="mb-6 sm:mb-8">
          <button
            onClick={() => toggleSection('checklist')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Flame className="w-6 h-6 text-accent flex-shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">Things to Carry</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.checklist ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.checklist && (
            <div className="mt-4 bg-card rounded-xl p-4 sm:p-6 border border-border">
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
                <div><span className="font-bold text-foreground">BAGS:</span> 1 Medium Backpack/1 Medium Trolley Bag for all clothes and main luggage, 1 Small Day Pack (15–20 L) for daily sightseeing</div>
                <div><span className="font-bold text-foreground">FOOTWEAR:</span> Comfortable shoes with good grip (Trekking/waterproof not compulsory), Slippers or sandals for hotel/homestay use (optional)</div>
                <div><span className="font-bold text-foreground">CLOTHING:</span> 3–4 T-shirts / full-sleeve tops, 3 pairs of comfortable pants, 2 fleece jackets / warm mid-layers, 1 padded or warm winter jacket (mandatory), Thermal innerwear (top & bottom), Cap / hat for sun protection, Monkey cap / woollen cap, Raincoat or poncho, 4–5 pairs of socks, Gloves – thermal/warm</div>
                <div><span className="font-bold text-foreground">ACCESSORIES:</span> Torch / Headlamp with extra batteries, Goggles, Towel, napkin, toiletries, tissues, Camera, Power bank & charging cables, Lock for luggage (optional), Extra shoelace (optional), Multipurpose adhesive (optional), Original Government ID + photocopy</div>
                <div><span className="font-bold text-foreground">HEALTH & SAFETY:</span> Personal medicines, Mycoderm powder, band-aids, Medicines for headache, cold, fever, motion sickness, ORS/electrolyte packets, Lip balm, sun protection cream (SPF 30+), Hand sanitizer, cold cream</div>
                <div><span className="font-bold text-foreground">FOOD & DRINKS:</span> Water bottles (2 litres), Dry fruits, biscuits, chocolates, dry food (mandatory)</div>
              </div>
            </div>
          )}
        </section>

        {/* Important Notes & Policies */}
        <section className="mb-8 sm:mb-12">
          <button
            onClick={() => toggleSection('policy')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">Important Notes & Policies</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.policy ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.policy && (
            <div className="mt-4 bg-card rounded-xl p-4 sm:p-6 border border-border">
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
                <div><span className="font-bold text-foreground">Balance Payment:</span> BALANCE PAYMENT HAS TO CLEARED ATLEAST 15 DAYS PRIOR TO THE TRIP. UPON FAILING TO PAY, YOUR REGISTERATION WILL BE CANCELLED WITHOUT ANY REFUND OR TRANSFER.</div>
                <div><span className="font-bold text-foreground">Age Group:</span> Age group for the trip is strictly 16yrs - 37yrs only. If people of above or below that age group register in that case 3% will be charged in refund amount.</div>
                <div><span className="font-bold text-foreground">Pickup & Drop:</span> Pickup: 2:00 PM from Chandigarh Railway station | Drop: 6:00 PM at Amritsar Railway station. Any transfers requested outside the scheduled timings will incur additional charges.</div>
                <div><span className="font-bold text-foreground">Flight Booking Policy:</span> Zestwanders packages include land arrangements only. Flight booking is the responsibility of the client. After paying ₹8,000 booking amount, you may book flights directly or request our assistance.</div>
                <div><span className="font-bold text-foreground">Backpacking Nature:</span> This is a true backpacking experience designed for adventure seekers who love raw, authentic travel. Expect decent comfort, not luxury. Food and accommodation will be simple & basic.</div>
                <div><span className="font-bold text-foreground">Train Ticket Policy:</span> Train ticket bookings start 2 months before departure. There are chances tickets will be RAC/Waiting. For RAC/Waiting List, ₹600–₹800 per person will be charged for Tatkal confirmation (approx. 90% success rate).</div>
                <div><span className="font-bold text-foreground">Trip Extension:</span> In case of trip extension due to weather or unforeseen situations, clients must pay ₹2,500 per day (cash) directly to the Trip/Trek Coordinator.</div>
                <div><span className="font-bold text-foreground">Comprehensive Cancellation & Refund Policy:</span> Before 45 Days: 50% refund | 45–30 Days: No refund on booking | 30–20 Days: 25% refund on total trip | 20–10 Days: 10% refund | After 10 Days: No refund. All detailed terms, conditions, and adventure risk clauses apply per standard Zestwanders policy document.</div>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent to-secondary rounded-xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready for this Adventure?</h3>
          <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable 11-day journey through Himachal Pradesh's stunning landscapes and vibrant culture. From Kasol's serene valleys to Amritsar's golden heritage, experience adventure and nature at their finest.
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto">
            Register Now
          </button>
          <p className="text-xs sm:text-sm opacity-75 mt-4">Contact: WhatsApp 9699055968 for registration & inquiries</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-foreground py-6 sm:py-8 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-2">
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
