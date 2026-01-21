'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


const FeaturedOfferingsSection = () => {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const featuredOfferings = [
    {
      id: 1,
      title: "AI Receptionist",
      description: "24/7 intelligent customer service that handles inquiries, schedules appointments, and routes calls.",

      demoUrl: "https://x.com/use_jarvis/status/2009926856766787833?s=20"
    },
    {
      id: 2,
      title: "Twitter/X Scrapper Automation",
      description: "Automated Twitter/X scrapper that converts prospects into customers.",

      demoUrl: "https://x.com/use_jarvis/status/2007421130651631630?s=20"
    },
    {
      id: 3,
      title: "Products Ad Creator Agent",
      description: "AI-powered content creation for social media, blogs, and marketing materials.",

      demoUrl: "https://x.com/use_jarvis/status/2012083133244674364?s=20"
    }
  ];



  const [selectedOffering, setSelectedOffering] = useState<typeof featuredOfferings[0] | null>(null);

  const handleBookDemo = (offering: typeof featuredOfferings[0]) => {
    setSelectedOffering(offering);
  };

  useEffect(() => {
    if (selectedOffering) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, [selectedOffering]);

  const getEmailContent = (offeringTitle: string) => {
    return {
      subject: `Enquiry about ${offeringTitle}`,
      body: `Hello MyJarvis Team,

I am interested in the ${offeringTitle} and would like to know more about the purchase process.

Please get back to me with the details.

Best regards,`
    };
  };

  return (
    <section id="featured-offerings" className="w-full py-6 md:py-12 lg:py-16 bg-gradient-to-b from-blue-950/20 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Featured Offerings</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover powerful AI solutions designed to streamline your operations.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredOfferings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <Card className="relative flex flex-col h-full overflow-hidden rounded-xl border-none bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <CardHeader>
                  <CardTitle className="text-xl">{offering.title}</CardTitle>
                  <CardDescription className="text-sm">{offering.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <Button className="w-full" onClick={() => handleBookDemo(offering)}>Book a Live Demo</Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={offering.demoUrl} target="_blank" rel="noopener noreferrer">
                        Watch Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" onClick={handleScrollToContact}>
            Contact Us <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>



        <Dialog open={!!selectedOffering} onOpenChange={(open) => !open && setSelectedOffering(null)}>
          <DialogContent className="sm:max-w-[1000px] h-[800px] overflow-hidden flex flex-col">
            <DialogHeader>
              <DialogTitle>Book a Demo for {selectedOffering?.title}</DialogTitle>
            </DialogHeader>
            <div className="flex-1 w-full h-full relative flex justify-center items-center">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/wlddrickmorty/30"
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              ></div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeaturedOfferingsSection;