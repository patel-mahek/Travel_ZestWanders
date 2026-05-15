'use client'

import { AlertCircle, ArrowLeft, Calendar, CheckCircle2, ChevronDown, Flame, MapPin, Users } from 'lucide-react'

import { ContactModal } from '@/components/contact-modal'
import Link from 'next/link'
import { useState } from 'react'

export default function TrekDetailsPage() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    itinerary: true,
    inclusions: false,
    checklist: false,
    policy: false,
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
            <Link href="/" className="flex items-center gap-3 min-w-0 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5 flex-shrink-0 text-accent" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">Zestwanders</h1>
                <p className="text-xs text-muted-foreground">Seeking New Adventures</p>
              </div>
            </Link>
            <ContactModal />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-secondary text-foreground py-12 sm:py-16" style={{backgroundImage: 'url(/fireflies_bg.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-accent">
              Fireflies Camping - Bhandardara
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 font-light text-muted-foreground leading-relaxed">
              Fireflies camping offers a magical escape into nature, where you can witness thousands of glowing insects light up the night in a breathtaking natural display. Set against the backdrop of serene forests and peaceful surroundings, it&apos;s a unique experience that combines adventure, tranquility, and the wonder of nature&apos;s own light show. Perfect for nature lovers and photographers alike, fireflies camping is a moment of pure enchantment under the stars.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</div>
                <div className="text-xl sm:text-2xl font-bold text-accent">2 Days</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Age Group</div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">16 - 37 yrs</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-lg sm:text-xl font-bold text-foreground">Bhandardara</div>
              </div>
              {/* Difficulty removed per request */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="bg-accent rounded-lg p-4 flex-1">
                <div className="text-white">
                  <div className="text-sm font-semibold opacity-90 mb-2">Pricing (per person)</div>
                  <div className="space-y-1 text-sm sm:text-base">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold">Kasara - Kasara</span>
                      <span className="font-bold">Rs 2199/-</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold">Camp (Reach campsite by your own)</span>
                      <span className="font-bold">Rs 1699/-</span>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-semibold">Dual Person (Select one per person)</span>
                      <span className="font-bold">Rs 200</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status card removed per request */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Itinerary Section */}
        <section className="mb-6 sm:mb-8">
          <button
            onClick={() => toggleSection('itinerary')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <Calendar className="w-6 h-6 text-accent flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground truncate">Detailed Itinerary</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.itinerary ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.itinerary && (
            <div className="mt-4 space-y-4">
              {/* Day 1 */}
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      1
                    </div>
                    <div className="w-1 h-24 bg-accent/30 mt-2"></div>
                  </div>
                  <div className="flex-1 min-w-0 pb-4">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Day 1: Departure from Mumbai</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="font-semibold text-accent">Tentative Schedule</div>
                      <div className="font-semibold text-accent">12:30pm (Saturday) : Participants have to catch local train :</div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">12:30</div>
                        <div className="text-muted-foreground">CSMT - KASARA Train</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">12:37pm</div>
                        <div className="text-muted-foreground">Byculla</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">12:43pm</div>
                        <div className="text-muted-foreground">Dadar</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">12:50pm</div>
                        <div className="text-muted-foreground">Kurla</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">12:54pm</div>
                        <div className="text-muted-foreground">Ghatkopar</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">13:06pm</div>
                        <div className="text-muted-foreground">Mulund</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">13:12pm</div>
                        <div className="text-muted-foreground">Mulund</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">13:12pm</div>
                        <div className="text-muted-foreground">Thane</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">13:28pm</div>
                        <div className="text-muted-foreground">Dombivli</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">14:47pm</div>
                        <div className="text-muted-foreground">Kasara</div>
                      </div>
                      <div className="border-t border-border pt-2 sm:pt-3 mt-2 sm:mt-3">
                        <div className="flex gap-2 sm:gap-3">
                          <div className="font-semibold text-accent flex-shrink-0">15:00 pm</div>
                          <div className="text-muted-foreground">We proceed to our Campsite at Bhandardara from Kasara by Private Jeeps</div>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">18:30 pm</div>
                        <div className="text-muted-foreground">Let your soul feel the beautiful sunset near the waterfront with majestic views & later proceed to our camping location followed by evening snacks</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">20:30 pm</div>
                        <div className="text-muted-foreground">Settle down and enjoy the cold breeze with some fun games.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">22:30pm</div>
                        <div className="text-muted-foreground">Taste the yummy Veg/Jain delicious meal in dim light ambiance of the campsite. Post dinner its our Campfire time! Its time to unfold your own life and know others life as well. Goodnight & rest for the night.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">23:00pm</div>
                        <div className="text-muted-foreground">Its time to head into the Jungle where Fireflies might be visible, Explore the surrounding & if Visible sit back watch them & take some good Photos. Our team leaders will help you taking photos.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <div className="flex gap-3 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                      2
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Day 2: Back to Mumbai</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">8:00 AM</div>
                        <div className="text-muted-foreground">Wake up to the breathtaking views of Bhandardara, surrounded by lush greenery and serene landscapes. After a delicious breakfast, gather for a memorable group photo to capture the essence of your adventure.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">10:00 AM</div>
                        <div className="text-muted-foreground">Begin your journey back to Kasara station, cherishing the memories of your refreshing escape.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">4:00 PM - 6:00 PM</div>
                        <div className="text-muted-foreground">Arrive in Mumbai, marking the end of an unforgettable trip.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Inclusions Section */}
        <section className="mb-6 sm:mb-8">
          <button
            onClick={() => toggleSection('inclusions')}
            className="w-full flex items-center justify-between bg-card rounded-xl p-4 sm:p-6 hover:bg-secondary transition-colors border border-border"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
              <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">Inclusions & Exclusions</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.inclusions ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.inclusions && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  What is included in this tour
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Tents along with mattresses on 3 Sharing (limited Double sharing at extra cost)</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Private Transport/Jeep from Kasara/Pune.</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Veg/Jain Meals during Camping (1 Dinner, 1 Breakfast)</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Sunset near a lake</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Bonfire</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Offbeat experience</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Short Trek in the Jungle for Fireflies watching</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Team Captain from Team Zestwanders</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-4 sm:p-6 border border-border">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                  What is not included in this tour
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Soft drinks, beverages</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Any costs arising out of unforeseen circumstances like landslides, road blocks, bad weather, etc.</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Insurance & Rappelling cost</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Any kind of cost which is not mentioned in the "Inclusions" column</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Any meals/services not mentioned in the inclusions</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Train tickets till Kasara to & fro is not included</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* What to Carry Section */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Ready to eat food</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Blanket & Pillow if needed</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Jacket/Sweatshirt</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">2 Litres of Water.</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Snacks.</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Bag</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">A Good pair of shoe.</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Extra pair of clothes</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Torch</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Important Policy Section */}
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
                <div className="pb-4 border-b border-border">
                  <h4 className="text-base font-bold text-foreground mb-3">Important Note:</h4>
                  <span>Experiencing the glow of fireflies is a captivating natural phenomenon. The ideal time to witness this spectacle typically falls between Mid May and the 1st week of June; however, its occurrence is subject to various environmental factors such as climate conditions and rainfall. Please note that Zestwanders cannot guarantee firefly sightings and shall not be held responsible if the phenomenon is not visible during the visit. No Refund request shall be entertained.</span>
                </div>

                <div className="pt-2">
                  <div className="font-bold text-foreground mb-3">Notes:</div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-accent font-bold">1) </span>
                      <span>We don&apos;t provide Private bus option from Mumbai for this Camping because it nearly takes 6 hours from Mumbai considering the ghat roads & you wont be making the most of this amazing experience.</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">2) </span>
                      <span>This is a complete offbeat experience in remote area with very limited resources but we try our best to provide utmost good services but please dont expect any kind of luxury.</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">3) </span>
                      <span>Washrooms are available at the Campsite</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">4) </span>
                      <span>WhatsApp group will be formed a night before for further communication.</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">5) </span>
                      <span>Event schedule is subject to change/delay due to unavoidable circumstances like Vehicle break down, Extreme rush during the Trek, overall group speed and Zestwanders is not responsible for the delay.</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">6) </span>
                      <span>Food provided on all local treks are local delicacies prepared by the local villagers in the remote areas of Maharashtra.</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">7) </span>
                      <span>If any natural calamity happens or any accident , death , illness occurred Zestwanders or organizers are not responsible for any loss.</span>
                    </div>
                    <div>
                      <span className="text-accent font-bold">8) </span>
                      <span>Age group is strictly 18-35yrs. If people of above or below that age group register in that case 3% will be charged in refund amount.</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="text-base font-bold text-foreground mb-3">Refund & Cancellation Policies</h4>
                    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
                      <div>
                        <span className="font-bold text-foreground">1) </span>
                        <span>Registration amount is non refundable & non transferable in any condition.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">2) </span>
                        <span>Registrations will be considered after full payment of the cost and after payment give a confirmation of that on Whatsapp</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">3) </span>
                        <span>If any natural calamity happens or any accident , death , illness occurs, Zestwanders or organizers are not responsible for any loss in any case.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">4) </span>
                        <span>Schedule can be changed and Zestwanders has the sole rights to change schedule without any Prior Notice.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">5) </span>
                        <span>None of the amount is transferrable to any other trip or treks & no credit notes will be given.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">6) </span>
                        <span>If the Trip is cancelled from our end, Minimal 7% amount will be deducted & for the remaining amount a Credit Note will be Provided to use on any other Treks & Trips (Cash refund wont be provided and cancellation due to reasons not in or control like natural calamity, man made incidents etc or any other reason is not applicable here)</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">7) </span>
                        <span>Itinerary/Entire location for Trip/Trek/Event is subject to change due to Weather Condition or any other reasons & it is Zestwanders Decision and not liable for any prior notice to participants. We value everyone's safety over the Trip. No refund or Credit shall be provided in such situation.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">8) </span>
                        <span>Zestwanders can send back any Participants who is caught doing mischiefs, OR if you're found drinking/smoking or breaking rules of the trek and no refund or credit will be provided.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">9) </span>
                        <span>In case of any health issue/injury or any other condition where participant requires special care, Zestwanders will try our best to provide assistance and make necessary arrangements. Although all the expenses incurred will be paid by participant or his/her Family Members.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">10) </span>
                        <span>In any other Scenarios other then the above mentioned, Zestwanders has the sole right to alter/Change/Make Decisions. We Value Everyone's Safety over other things.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">11) </span>
                        <span>Some participants anticipate receiving a voucher/refund if they descend from a trek for any reason. However, we do not provide vouchers in such cases. This situation arises if your trek leader decides to send you back due to reasons such as insufficient fitness, any other health issues, or injuries. It also applies if you are caught drinking, smoking, or violating trek rules, or if you voluntarily decide to quit the trek for personal reasons.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">12) </span>
                        <span>If your entire group is compelled to terminate the trek/event after starting the trip for reasons such as sudden bad weather, trail interruptions, government restrictions, or unforeseen circumstances. Please note that no voucher/refund will be provided in this scenario.</span>
                      </div>
                      <div>
                        <span className="font-bold text-foreground">13) </span>
                        <span>The company vehicle will only be responsible for travel from starting point to the locations and back. Any travel beyond that will be chargeable if we are managing it for you all or if there is any unavoidable circumstances like natural calamity, road block, strike or any other reason. Any additional cost in such situations will be beared by participants.</span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-accent to-secondary rounded-xl p-6 sm:p-8 text-white text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready for an Adventure?</h3>
          <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable 2-day experience watching fireflies dance in the monsoon jungles. Limited spots available!
          </p>
          <a href="tel:9699055968" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-bold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base">
            Call or WhatsApp to Register
          </a>
          <p className="text-xs sm:text-sm opacity-75 mt-4">Contact: 9699055968 | zestwanders@gmail.com</p>
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
