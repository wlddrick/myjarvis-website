'use client'

import { motion } from "framer-motion";
import { Brain, Zap, ShieldCheck, Scale, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const features = [
  {
    icon: Brain,
    title: "Intelligent AI Agents",
    description: "Deploy AI 'employees' that learn, adapt, and handle complex tasks like customer service and content creation.",
  },
  {
    icon: Zap,
    title: "Powerful Automations",
    description: "Streamline repetitive workflows with one-time purchase automations for lead generation, data scraping, and more.",
  },
  {
    icon: TrendingUp,
    title: "Boost Productivity",
    description: "Free up valuable time and resources by letting AI handle the mundane, allowing you to focus on growth.",
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    description: "We integrate our agents into your existing systems, scaling effortlessly from individuals to growing teams and marketers.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Built with robust security measures and reliable infrastructure to protect your data and ensure continuous operation.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "AI agents work around the clock, ensuring your business operates efficiently even outside of traditional hours.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-gradient-to-b from-background via-background to-blue-950/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose My Jarvis?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock unparalleled efficiency and innovation with our cutting-edge AI solutions.
            </p>
          </div>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
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
              <Card className="relative flex flex-col items-center text-center h-full p-6 border-none bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
