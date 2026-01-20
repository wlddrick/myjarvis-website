import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Brain, Zap, ShieldCheck, Scale, TrendingUp, Clock } from "lucide-react";

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
    description: "Our platform grows with your business, offering flexible solutions for individuals, small businesses, and marketers.",
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
    <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose My Jarvis?</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock unparalleled efficiency and innovation with our cutting-edge AI solutions.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;