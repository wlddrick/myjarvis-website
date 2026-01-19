import Features from "@/components/Features";
import FeaturedOfferingsSection from "@/components/FeaturedOfferingsSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/ui/testimonial-v2"; 
import { SplineSceneDemo } from "@/components/SplineSceneDemo"; 
import { MarketingBadges } from "@/components/ui/marketing-badges";
import Tokenomics from "@/components/Tokenomics"; 

//added first  hello world

export default function Home() {
  return (
    <div className="">
      <SplineSceneDemo />
      <Features />
      <FeaturedOfferingsSection />
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-12">Boost Your Marketing Efforts</h2>
          <MarketingBadges />
        </div>
      </section> */} 
      
      <HowItWorks />
      <Tokenomics />
      {/* <TestimonialsSection /> */}
    </div>
  );
}
