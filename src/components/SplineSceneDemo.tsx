'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export function SplineSceneDemo() {
  const handleScrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('featured-offerings');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="w-full min-h-[600px] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[600px] gap-8">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left py-12">
            <div className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1 text-sm font-medium text-white mb-6">
              🤖 AI-Powered Business Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              AI Infrastructure to Scale Your Business Without Hiring </h1>

            <p className="text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Our AI Infra drive upto 40% cost savings while increasing efficiency by reducing manual work across business processes.</p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                onClick={handleScrollToFeatures}
                size="lg"
                className="bg-white text-black px-8 py-3 text-base font-medium shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all duration-300 hover:bg-gray-100 group"
              >
                Explore Features
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform ml-2" />
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-500/20 text-white hover:bg-blue-500/10 px-8 py-3 text-base font-medium transition-all duration-300 group shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-500/40"
              >
                <Link
                  href="https://x.com/use_jarvis/status/2006742876831801500?s=20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </div>


          </div>

          {/* Right content - Spline Scene */}
          <div className="flex-1 relative min-h-[400px] w-full">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />

              {/* Overlay glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}