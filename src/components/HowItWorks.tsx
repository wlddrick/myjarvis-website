import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Lightbulb, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discover Your AI Solution",
    description: "Browse our extensive catalog of AI Agents and Automations tailored for various business needs.",
  },
  {
    icon: Settings,
    title: "Easy Setup & Customization",
    description: "Integrate your chosen AI with simple setup wizards and customize it to fit your unique workflow.",
  },
  {
    icon: Rocket,
    title: "Automate & Grow",
    description: "Launch your AI to handle tasks, engage customers, and streamline operations, driving efficiency and growth.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How My Jarvis Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get started with AI in three simple steps.
            </p>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;