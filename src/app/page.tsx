import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProjectOverview } from '@/components/sections/ProjectOverview'
import { VisionSection } from '@/components/sections/VisionSection'
import { ImpactStats } from '@/components/sections/ImpactStats'
import { GrowthProjections } from '@/components/sections/GrowthProjections'
import { EventsSection } from '@/components/sections/EventsSection'
import { BenefitsSection } from '@/components/sections/BenefitsSection'
import { MultimediaSection } from '@/components/sections/MultimediaSection'
import { RadioSection } from '@/components/sections/RadioSection'
import { DocumentsSection } from '@/components/sections/DocumentsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectOverview />
        <VisionSection />
        <ImpactStats />
        <GrowthProjections />
        <EventsSection />
        <BenefitsSection />
        <MultimediaSection />
        <RadioSection />
        <DocumentsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
