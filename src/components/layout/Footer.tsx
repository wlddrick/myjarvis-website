import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { CopyButton } from "@/components/ui/copy-button";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="container py-12">
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
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://t.me/+9vEyNYK4aiw0ZGNl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.891 7.02l-2.003 9.441c-.151.666-.545.83-.1.1.583-.15 3.016-1.921 4.542-1.228-.314.164-.536.416-.536.416-.43 1.102-1.62 1.053-1.62 1.053-1.587-.066-2.427-1.066-2.427-1.066-.703-.865-.1.1-.113.14-.01.033-.11.14-.11.14l-3.21 2.323c-.391.282-.676.121-.861-.122l-1.928-2.52c-.173-.227-.13-.497.1-.641l7.635-4.814c.338-.213.648-.1.4.162z" />
                  <path d="M11.944 0C5.352 0 0 5.352 0 11.944s5.352 11.944 11.944 11.944 11.944-5.352 11.944-11.944S18.536 0 11.944 0zm5.437 8.3c-.157.854-1.341 5.794-1.946 8.525-.256 1.155-.76 1.541-1.171 1.579-.893.081-1.571-.591-2.435-1.157-1.354-.887-2.118-1.439-3.433-2.304-1.521-1-0.535-1.551.332-2.451.227-.235 4.169-3.819 4.245-4.14.009-.041.018-.194-.074-.275-.092-.081-.227-.053-.325-.031-.139.031-2.355 1.493-6.643 4.385-.628.432-1.198.644-1.708.633-.563-.012-1.644-.319-2.451-.581-.987-.321-1.775-.491-1.706-.827.036-.176.278-.356.726-.541 2.834-1.233 4.706-2.046 5.613-2.378 2.628-1.002 3.174-1.171 3.53-1.171.078 0 .252.019.366.064.095.038.227.106.29.171.063.065.122.152.122.305 0 .1-.002.176-.008.23z" />
                </svg>
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