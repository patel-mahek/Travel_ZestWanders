'use client'

import { MapPin, Users, Calendar, Flame, CheckCircle2, AlertCircle, ChevronDown, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { ContactModal } from '@/components/contact-modal'

export default function SpitiValleyPage() {
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
              Spiti Valley<br />with Chandratal
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 font-light text-muted-foreground leading-relaxed">
              The Spiti Valley Road Trip is perfect for travellers seeking an authentic journey through the dramatic cold desert of the Himalayas. This 10-day, comfortably curated experience takes you across Spiti's most iconic landscapes in sturdy Tempo Travellers, covering ancient monasteries, high-altitude villages, and the breathtaking Chandrataal Lake—leaving you spellbound at every turn.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</div>
                <div className="text-xl sm:text-2xl font-bold text-accent">10 Days</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Age Group</div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">16-37 yrs</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-lg sm:text-xl font-bold text-foreground">Spiti Valley</div>
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
                  <div className="text-2xl sm:text-3xl font-bold">₹27,999</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 flex-1">
                <div className="text-foreground">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Batch Dates</div>
                  <div className="text-sm sm:text-base font-bold text-accent">2nd-11th July, 6th-15th Aug, 27th Aug-5th Sept, 24th Sept-3rd Oct, 1st-10th Oct</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Complete 10-Day Itinerary */}
        <section className="mb-6 sm:mb-8">
          <button
            onClick={() => toggleSection('itinerary')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate">Complete 10-Day Itinerary</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.itinerary ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.itinerary && (
            <div className="mt-4 space-y-4">
              {/* Days 1-10 */}
              {[
                {
                  day: 1,
                  title: 'MUMBAI/PUNE - CHANDIGARH/DELHI',
                  content: 'The beautiful journey to Himachal will commence from Mumbai. Assemble railway station and Meet our Coordinators. Departure by Train no. 12925/22451/12216. Pune people will travel by Shivshahi bus/Train & then Board the train from Mumbai.'
                },
                {
                  day: 2,
                  title: 'DELHI/CHANDIGARH - SHIMLA/SHOGHI',
                  content: 'Pickup from Chandigarh by around 2:00 PM in a private tempo. As we begin our drive, watch the scenery slowly transform, winding roads, cool mountain air, and snow-capped peaks drawing closer with every turn. Soon, we arrive in Shimla, the Queen of Himachal (or Shoghi). Check in to the hotel, unwind, and enjoy a warm dinner as the hills welcome you.'
                },
                {
                  day: 3,
                  title: 'SHIMLA - SANGLA',
                  content: 'Today, we travel through the scenic hill towns of Narkanda and Sarahan before entering the breathtaking Kinnaur Valley. As we ascend towards Sangla (7,500 ft), you may catch glimpses of the stunning Rakcham Meadows, one of the most beautiful and romantic valleys in the region. Sangla Valley, also known as Baspa Valley, welcomes you with serene riverside views and snow-clad peaks, where we will spend the night. (Breakfast & Dinner included)'
                },
                {
                  day: 4,
                  title: 'SANGLA - CHITKUL - KALPA',
                  content: 'Today, we journey towards Chitkul, India\'s last inhabited village near the Indo–Tibet border, known for its raw beauty and untouched Himalayan charm. As we continue towards Kalpa, the landscape opens up to spectacular views of the majestic Kinner Kailash Peak, draped in snow and revered for its spiritual significance. En route, we also witness the dramatic Suicide Point at Kalpa, offering breathtaking views of the deep valleys below. The day concludes with our arrival in Kalpa for an overnight stay. (Breakfast & Dinner included)'
                },
                {
                  day: 5,
                  title: 'KALPA - NAKO - TABO - KAZA',
                  content: 'Today, we set off on the legendary Hindustan–Tibet Highway, renowned for its dramatic landscapes and close proximity to the Indo–Tibetan border. Our first stop is Khab, where the mighty Spiti and Sutlej rivers meet—a striking confluence where the contrasting colours of the two rivers can be clearly seen. We then continue towards Nako, the last village of the Kinnaur district, celebrated for its serene blue Nako Lake and tranquil surroundings. By evening, we arrive at Kaza, the headquarters and cultural heart of Spiti Valley, where we check into a local homestay for the night. (Breakfast & Dinner included)'
                },
                {
                  day: 6,
                  title: 'KI - KIBBER - HIKKIM - LANGZA - CHICHAM',
                  content: 'We start the day with a scenic drive to the iconic Key Monastery, perched dramatically at 13,668 ft. Our vehicle stops at the base of the hill for that classic Spiti postcard photograph, before we explore this 1,000-year-old monastery steeped in history and spirituality. From here, we continue our high-altitude circuit of Spiti Valley, visiting Hikkim, home to the world\'s highest post office, followed by Langza and Komic, where vast landscapes and snow-draped views create a surreal mountain experience. We also stop at the engineering marvel of Chicham Bridge, suspended high above the gorge. Return to Kaza by evening for a warm meal and well-earned rest. Overnight stay in a homestay at Kaza | Breakfast & Dinner included.'
                },
                {
                  day: 7,
                  title: 'KAZA - LOSAR - CHANDRATAAL',
                  content: 'Today, we head towards the breathtaking Chandratal Lake, located at an altitude of 4,300 meters in the heart of the high Himalayas. A short 30-minute trek leads us to this magical alpine lake, best experienced under a full moon when the surroundings feel truly surreal. Chandratal derives its name from "Chandra" (Moon) and "Taal" (Lake), inspired by its stunning crescent shape. We spend the night amidst this raw Himalayan landscape, staying in Swiss tents near the lake. (Breakfast & Dinner included)'
                },
                {
                  day: 8,
                  title: 'CHANDRATAAL - MANALI',
                  content: 'The final leg of the journey takes us to the beautiful hill town of Manali. Carrying a bag full of delightful memories and stories from the mountains, we arrive by afternoon. The evening is free for leisurely sightseeing—explore local markets, enjoy cozy cafés, or simply soak in the mountain vibes. We then check into our hotel for an overnight stay. (Breakfast & Dinner included)'
                },
                {
                  day: 9,
                  title: 'MANALI - CHANDIGARH',
                  content: 'After checking out from Manali, we set off with one last burst of adventure—an exhilarating river rafting experience in Kullu. Feel the rush of the rapids as we soak in the scenic river views, wrapping up the mountain journey on a high note. Later, we drive towards Chandigarh, beginning our return journey home with memories to last a lifetime. (Breakfast included) Train No.: 12450'
                },
                {
                  day: 10,
                  title: 'RETURN TRAIN JOURNEY',
                  content: 'We board the return train from Chandigarh at 2:40 AM. The day is spent enjoying the long journey—chatting, playing cards, and sharing memories along the way. We arrive at Vasai Railway Station by 11:30 PM, followed by arrival at Panvel Railway Station by 12:40 AM (Day 11). Participants traveling to Pune will continue their onward journey by bus or train from Vasai.'
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
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">3AC / 3E train travel to & fro Chandigarh/Delhi</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Private transport for entire Spiti Valley trip</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">7 nights in premium hotels and handpicked homestays (3–4 sharing basis)</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">7 breakfasts & 7 dinners with local flavors (Jain option available)</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">All entry fees & permits for different locations</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">First aid kit and basic medical assistance</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">24/7 on-call travel assistance & trip coordinator</span></li>
                  <li className="flex gap-2 sm:gap-3"><CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Heated beds in Kaza & Tabo (subject to availability)</span></li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  Not Included
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Personal expenses</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Insurance</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Meals during road journey & lunch on all days</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Train meals</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Additional costs due to road blocks or unforeseen circumstances</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Adventure activities not in inclusions</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">Loss, damage, or theft of personal belongings</span></li>
                  <li className="flex gap-2 sm:gap-3"><AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" /><span className="text-xs sm:text-sm text-muted-foreground">River rafting charges</span></li>
                </ul>
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
                <div><span className="font-bold text-foreground">Pickup & Drop:</span> Pickup: 2:00 PM from Chandigarh Railway station | Drop: 10:00 PM at Chandigarh Railway station. Any transfers requested outside the scheduled timings will incur additional charges.</div>
                <div><span className="font-bold text-foreground">Chandrataal Route:</span> The route to Chandrataal Lake is an off-road stretch and is generally accessible only between June and September. However, the route may close at any time due to landslides, adverse weather conditions. If closed, alternate route: Kaza → Tabo → Shimla → Chandigarh will be taken.</div>
                <div><span className="font-bold text-foreground">Spiti Contingency:</span> Spiti is a remote and high-altitude region with limited infrastructure. The area is highly susceptible to natural disruptions such as landslides, heavy snowfall, black ice. In extreme cases, participants may be required to stay overnight in their vehicles or nearby settlements.</div>
                <div><span className="font-bold text-foreground">Backpacking Nature:</span> This is a true backpacking experience designed for adventure seekers. Expect decent comfort, not luxury. Food and accommodation will be simple & basic — that's the charm of the journey.</div>
                <div><span className="font-bold text-foreground">Winter Washroom Facilities:</span> During peak winter in Kaza & Tabo, extreme cold causes water pipelines to freeze. Guests will be provided with clean, shared/common washrooms with limited hot water only for freshening up.</div>
                <div><span className="font-bold text-foreground">Train Ticket Policy:</span> Train ticket bookings start 2 months before departure. There are chances tickets will be RAC/Waiting. For RAC/Waiting List, ₹600–₹800 per person will be charged for Tatkal confirmation (approx. 90% success rate).</div>
                <div><span className="font-bold text-foreground">Trip Extension:</span> In case of trip extension due to weather or unforeseen situations, clients must pay ₹2,500 per day (cash) directly to the Trip/Trek Coordinator. Any additional expenses caused due to such situations will be borne by the client.</div>
                <div><span className="font-bold text-foreground">Comprehensive Cancellation & Refund Policy:</span> All detailed cancellation policies, terms & conditions, adventure risk clauses, and financial authority clauses apply as per the standard Zestwanders policy document.</div>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent to-secondary rounded-xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready for this Adventure?</h3>
          <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable 10-day journey through the dramatic landscapes of Spiti Valley. Experience ancient monasteries, high-altitude villages, and the magical Chandratal Lake.
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
