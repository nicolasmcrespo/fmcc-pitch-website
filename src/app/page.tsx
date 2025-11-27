import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProjectOverview } from '@/components/sections/ProjectOverview'
import { VisionSection } from '@/components/sections/VisionSection'
import { ImpactStats } from '@/components/sections/ImpactStats'
import { GrowthProjections } from '@/components/sections/GrowthProjections'
import { EventsSection } from '@/components/sections/EventsSection'
import { FairModulesSection } from '@/components/sections/FairModulesSection'
import { CursorEffect } from '@/components/animations'

export default function Home() {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <main>
        <Hero />
        <EventsSection />
        <ProjectOverview />
        <VisionSection />
        <ImpactStats />
        <GrowthProjections />
        <FairModulesSection />
      </main>
      <Footer />
    </>
  )
}
