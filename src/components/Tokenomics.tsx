'use client'

import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Flame } from 'lucide-react';
import { InteractivePieChart } from "@/components/ui/interactive-pie-chart";
import { CopyButton } from "@/components/ui/copy-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const Tokenomics = () => {
  const tokenDistributionData = [
    {
      name: "Virtuals Public Liquidity",
      value: 72.5,
      color: "#1e293b"
    },
    {
      name: "Team Locked Tokens for 1 year",
      value: 24,
      color: "#3b82f6"
    },
    {
      name: "Marketing Tokens",
      value: 3.5,
      color: "#93c5fd"
    }
  ];

  return (
    <section id="tokenomics" className="w-full py-6 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative z-10">
        {/* Token Distribution Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            💎 TOKEN DISTRIBUTION
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Token Distribution
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
            {/* Interactive Pie Chart */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-md"
            >
              <InteractivePieChart data={tokenDistributionData} />

              {/* Legend */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 bg-slate-800 rounded-sm"></div>
                  <span className="text-sm font-medium">Virtuals Public Liquidity (72.5%)</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                  <span className="text-sm font-medium">Team Locked Tokens for 1 year (24%)</span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
                  <span className="text-sm font-medium">Marketing Tokens (3.5%)</span>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                This token distribution model is designed to ensure long-term stability and growth. A significant portion of tokens is allocated to public liquidity to facilitate trading and market access, while a strategic amount is locked to prevent early dilution. Marketing tokens are reserved to drive adoption and engagement within the ecosystem.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">Dev Wallet</h4>
                    <CopyButton
                      text="0xeC93Eb5A2E07fE30d6658321B8fAa33B6D588cA8"
                      displayText=""
                      variant="ghost"
                      className="h-8"
                    />
                  </div>
                  <p className="text-sm font-mono text-muted-foreground break-all">
                    0xeC93Eb5A2E07fE30d6658321B8fAa33B6D588cA8
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">Marketing Wallet</h4>
                    <CopyButton
                      text="0x3ecb7498500b53da1d13e403c37c42fb1e2c685"
                      displayText=""
                      variant="ghost"
                      className="h-8"
                    />
                  </div>
                  <p className="text-sm font-mono text-muted-foreground break-all">
                    0x3ecb7498500b53da1d13e403c37c42fb1e2c685
                  </p>
                </div>

                <div className="p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">1 Year locked tokens</h4>
                  <a
                    href="https://www.pinksale.finance/pinklock/base/record/1028416"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline break-all"
                  >
                    https://www.pinksale.finance/pinklock/base/record/1028416
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Ecosystem Section */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              🚀 TOKEN ECOSYSTEM
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              The $JARVIS Ecosystem
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
              Our innovative buyback and burn model creates a direct, sustainable connection between platform growth and token value appreciation.
            </p>
          </motion.div>

          {/* Ecosystem Diagram - Simplified Grid Layout */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Platform Revenue", icon: TrendingUp, variant: "green", description: "Generated through Agents as a service, Automations as one time buy, and other premium features" },
                { title: "Buyback Mechanism", icon: DollarSign, variant: "blue", description: "A percentage of profit generated is used to purchase tokens from the market" },
                { title: "Burn Mechanism", icon: Flame, variant: "fire", description: "50% percent of buyback tokens gets burned permanently" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={3}
                    variant={item.variant as any}
                  />
                  <Card className="relative flex flex-col h-full overflow-hidden rounded-xl border-none bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto bg-foreground rounded-full flex items-center justify-center mb-4">
                        <item.icon className="h-8 w-8 text-background" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
