'use client'

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
    <section id="featured-offerings" className="w-full py-6 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
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
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Enquire about {selectedOffering?.title}</DialogTitle>
              <DialogDescription>
                Send us an email to finalize your purchase. We've prepared a draft for you.
              </DialogDescription>
            </DialogHeader>
            {selectedOffering && (
              <div className="grid gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email-preview" className="text-sm font-medium">
                    To:
                  </label>
                  <div className="p-2 border rounded-md text-sm bg-muted text-muted-foreground">
                    help@myjarvis.tech
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Message Preview:</label>
                  <div className="p-3 border rounded-md text-sm bg-muted/50 whitespace-pre-wrap h-[150px] overflow-y-auto">
                    {getEmailContent(selectedOffering.title).body}
                  </div>
                </div>
              </div>
            )}
            <DialogFooter className="flex-col sm:flex-row gap-2">
              {selectedOffering && (
                <Button className="w-full sm:w-auto" asChild>
                  <a
                    href={`mailto:help@myjarvis.tech?subject=${encodeURIComponent(getEmailContent(selectedOffering.title).subject)}&body=${encodeURIComponent(getEmailContent(selectedOffering.title).body)}`}
                  >
                    Open Mail App
                  </a>
                </Button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default FeaturedOfferingsSection;