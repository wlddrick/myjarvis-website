'use client'

import { motion } from "framer-motion";
import { Lightbulb, Settings, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
  {
    icon: Lightbulb,
    title: "Discover Your AI Solution",
    description: "Browse our extensive catalog of AI Agents and Automations tailored for various business needs.",
  },
  {
    icon: Settings,
    title: "Easy Setup & Customization",
    description: "We integrate your chosen AI into your existing infrastructure, ensuring it fits smoothly into your established workflows.",
  },
  {
    icon: Rocket,
    title: "Automate & Grow",
    description: "Use your AI to handle tasks, engage customers, and streamline operations, driving efficiency and growth. All in house",
  },
];

const HowItWorks = () => {
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How My Jarvis Works</h2>

          </div>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="flex flex-col items-center text-center h-full p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
