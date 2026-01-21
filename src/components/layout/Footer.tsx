import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
      <div className="container py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="My Jarvis Logo"
                width={32}
                height={32}
                className="rounded-lg object-contain"
                unoptimized
              />
              <h3 className="font-bold text-xl text-white">
                My Jarvis
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transform your business with intelligent AI agents and powerful automations.
              Empower your team with 24/7 AI assistants and streamlined workflows.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </a> */}
              <a href="https://x.com/use_jarvis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Image
                  src="/twitter-icon.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                  unoptimized
                />
              </a>
              <a href="https://t.me/+9vEyNYK4aiw0ZGNl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Image
                  src="/telegram-icon.png"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                  unoptimized
                />
              </a>
              <a href="https://app.virtuals.io/prototypes/0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Image
                  src="/virtuals-icon.png"
                  alt="Virtuals"
                  width={24}
                  height={24}
                  className="w-5 h-5 object-contain"
                  unoptimized
                />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <span>help@myjarvis.tech</span>
              </div>
              {/* <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-5 w-5 text-white flex-shrink-0" />
                <span>San Francisco, CA</span>
              </div> */}
            </div>
          </div>

          {/* Token Information */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg text-white">$JARVIS Token</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="leading-relaxed">
                Join the ecosystem and benefit from our innovative buyback and burn mechanism.
              </p>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-gray-400">Contract Address:</p>
                  <CopyButton
                    text="0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE"
                    displayText=""
                    variant="ghost"
                    className="h-6 w-6 p-0 hover:bg-transparent"
                  />
                </div>
                <p className="font-mono text-xs break-all text-white">
                  0xE8d90739ACf0f7Dcbc4e573d61c85555B17Fd8aE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} My Jarvis. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Tokenomics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;