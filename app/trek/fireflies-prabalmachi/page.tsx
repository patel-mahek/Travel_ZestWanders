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
      <section className="relative overflow-hidden bg-gradient-to-b from-card to-secondary text-foreground py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-accent">
              Fireflies Camping - Prabalmachi
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 font-light text-muted-foreground leading-relaxed">
              As the monsoon approaches, Mumbai & Pune eagerly anticipates the enchanting Fireflies Festival. These bioluminescent beetles, grace the jungles with their mesmerizing glow. In a captivating dance of light, they communicate their desires, using their luminous display to court potential mates.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Duration</div>
                <div className="text-xl sm:text-2xl font-bold text-accent">2 Days</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Age Group</div>
                <div className="text-lg sm:text-2xl font-bold text-foreground">15-37 yrs</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 sm:p-4 border border-border">
                <div className="text-xs sm:text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-lg sm:text-xl font-bold text-foreground">Panvel - Panvel</div>
              </div>
              {/* Difficulty removed per request */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="bg-accent rounded-lg p-4 flex-1">
                <div className="text-white">
                  <div className="text-sm font-semibold opacity-90">Price per person</div>
                  <div className="text-2xl sm:text-3xl font-bold">₹1599</div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-4 flex-1">
                <div className="text-foreground">
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Dates</div>
                  <div className="text-lg sm:text-xl font-bold text-accent">23rd - 24th May</div>
                </div>
              </div>
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
                      <div className="font-semibold text-accent">Local Train Timings:</div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">2:54pm</div>
                        <div className="text-muted-foreground">THANE - PANVEL</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">2:34pm</div>
                        <div className="text-muted-foreground">CSMT - PANVEL</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">3:03pm</div>
                        <div className="text-muted-foreground">KURLA - PANVEL</div>
                      </div>
                      <div className="border-t border-border pt-2 sm:pt-3 mt-2 sm:mt-3">
                        <div className="flex gap-2 sm:gap-3">
                          <div className="font-semibold text-accent flex-shrink-0">4:00pm</div>
                          <div className="text-muted-foreground">Everyone Report to Trek Leader at Panvel Station & travel to the starting points by Jeeps</div>
                        </div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">18:00</div>
                        <div className="text-muted-foreground">Reach the starting point & Start ascending to Prabalmachi.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">19:30am</div>
                        <div className="text-muted-foreground">Reach at our Campsite and On arrival, Set yourself free. Hop in for the team games or just chill out near the plateau. Relax with the cold breeze at the camp.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">21:00</div>
                        <div className="text-muted-foreground">Taste the yummy local cuisines in dim light ambiance of the campsite. Post dinner we will take a walk for watching fireflies & try capturing them onto your phone.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">23:00</div>
                        <div className="text-muted-foreground">Let that night have no end Let the fun going on and on meanwhile, let the night take charge of you. Off to your tents for sweet dreams. Day ends.</div>
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
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Day 2: Descend from Camp - Back to Mumbai</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">5:00am</div>
                        <div className="text-muted-foreground">Start Trekking to Kalavantin durg which is a 1 - 2 hour trek from the camp (Not a Compulsion)</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">7:00am</div>
                        <div className="text-muted-foreground">Reach Summit and wait for the magical sunrise and descend back to our Camp</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">10:00 am</div>
                        <div className="text-muted-foreground">Post breakfast at Machi, start descend to the base village</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">11:30 am</div>
                        <div className="text-muted-foreground">Reach starting point of the trek and proceed back to Panvel & Pune.</div>
                      </div>
                      <div className="flex gap-2 sm:gap-3">
                        <div className="font-semibold text-accent flex-shrink-0">17:00pm</div>
                        <div className="text-muted-foreground">Reach back Mumbai with great memories of the camp.</div>
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
              <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">What&apos;s Included & Excluded</h3>
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
                    <span className="text-xs sm:text-sm text-muted-foreground">Transportation from Panvel Railway Station to & from</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Veg/Jain Dinner + Breakfast</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Camping tents with foam mats (3 sharing)</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Offbeat experience</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Team Captain from Zestwanders</span>
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
                    <span className="text-xs sm:text-sm text-muted-foreground">Soft drinks, Beverages</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Any cost arising due to unforeseen circumstances like landslides, road blocks, bad weather etc</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Insurance</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Any kind of cost which is not mentioned in the inclusions</span>
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-muted-foreground">Train tickets till Panvel</span>
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
                  <span className="text-xs sm:text-sm text-muted-foreground">Ready to eat food/snacks</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Torch</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Water bottle</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Blankets & Personal mat if needed</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Sun cream & mosquito repellant</span>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-muted-foreground">Extra pair of clothes</span>
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
              <h3 className="text-lg sm:text-2xl font-bold text-foreground truncate">Refund & Cancellation Policies</h3>
            </div>
            <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${expandedSections.policy ? 'rotate-180' : ''}`} />
          </button>

          {expandedSections.policy && (
            <div className="mt-4 bg-card rounded-xl p-4 sm:p-6 border border-border">
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

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-3">Important Notes:</h4>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
                  <div>
                    <span className="text-accent font-bold">Firefly Sightings: </span>
                    <span>Experiencing the glow of fireflies is a captivating natural phenomenon. The ideal time to witness this spectacle typically falls between Mid May and the 1st week of June; however, its occurrence is subject to various environmental factors such as climate conditions and rainfall. Please note that Zestwanders cannot guarantee firefly sightings and shall not be held responsible if the phenomenon is not visible during the visit. No Refund request shall be entertained.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">1) </span>
                    <span>This is a complete offbeat experience in remote Village with very limited resources, still we try our best to provide utmost good services.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">2) </span>
                    <span>Basic Washroom Facilities are provided near to our campsite.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">3) </span>
                    <span>If any natural calamity happens or any accident , death , illness occurred Zestwanders or organizers are not responsible for any loss.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">4) </span>
                    <span>Avoid wearing precious Jewellery while trekking, as Zestwanders won't be responsible for any losses for the same.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">5) </span>
                    <span>Mobile connectivity is limited in the area</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">6) </span>
                    <span>Consuming liquor or any kind of Alcoholic substance is prohibited. Carrying any kind of substance that's illegal is not allowed. Smoking is strictly not allowed. Incase anybody is found consuming then Zestwanders has rights to Expell without Refund.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">7) </span>
                    <span>Zestwanders holds the right to make final decisions related to trip location / timing etc. in case of natural calamities / unexpected events for betterment, safety & best experience of participants.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">8) </span>
                    <span>Trek schedule is subject change/delay due to unavoidable circumstances like Vehicle break down, Extreme rush during the Trek, overall group speed and Zestwanders is not responsible for the delay.</span>
                  </div>
                  <div>
                    <span className="text-accent font-bold">9) </span>
                    <span>Age group is strictly 18-35yrs. If people of above or below that age group register in that case 3% will be charged in refund amount.</span>
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
