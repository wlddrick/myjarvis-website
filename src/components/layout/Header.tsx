'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ComingSoonDialog } from "@/components/ui/coming-soon-dialog";
import { CopyButton } from "@/components/ui/copy-button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  const handleScrollToTokenomics = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById('tokenomics');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleOpenAppClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    setIsComingSoonOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-50 w-full bg-blue-950/20 backdrop-blur supports-[backdrop-filter]:bg-blue-950/20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40"></div>
        <div className="container flex h-16 items-center justify-between relative z-10">
          <div className="flex items-center">
            <div className="mr-6 flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="My Jarvis Logo"
                  width={32}
                  height={32}
                  className="rounded-lg object-contain"
                  unoptimized
                />
                <span className="font-bold text-xl text-foreground">
                  My Jarvis
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <CopyButton
              text="0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE"
              displayText="Contract 0xE8..."
              variant="ghost"
              className="hover:bg-accent"
            />
            <Button variant="ghost" className="hover:bg-accent" onClick={handleScrollToTokenomics}>
              Tokenomics
            </Button>
            <Button asChild variant="ghost" className="hover:bg-accent">
              <Link
                href="https://app.virtuals.io/prototypes/0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy on Virtuals
              </Link>
            </Button>
            {/* <Button
              className="bg-white text-black hover:bg-gray-200"
              onClick={handleOpenAppClick}
            >
              Open App
            </Button> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 top-16 bg-background border-b md:hidden"
          >
            <div className="container py-6 flex flex-col space-y-4">
              <div className="flex justify-center">
                <CopyButton
                  text="0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE"
                  displayText="Contract 0xE8..."
                  variant="outline"
                  className="w-full justify-center"
                />
              </div>
              <Button variant="ghost" className="w-full justify-start text-lg" onClick={handleScrollToTokenomics}>
                Tokenomics
              </Button>
              <Button asChild variant="ghost" className="w-full justify-start text-lg">
                <Link
                  href="https://app.virtuals.io/prototypes/0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Buy on Virtuals
                </Link>
              </Button>
              {/* <Button
                className="w-full bg-white text-black hover:bg-gray-200 text-lg"
                onClick={handleOpenAppClick}
              >
                Open App
              </Button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ComingSoonDialog
        open={isComingSoonOpen}
        onOpenChange={setIsComingSoonOpen}
      />
    </>
  );
};

export default Header;