"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  MessageSquare,
  Globe,
  Linkedin,
  Instagram,
  
  Send,
} from "lucide-react"
import { HugeiconsIcon } from '@hugeicons/react';
import { WhatsappIcon } from '@hugeicons/core-free-icons';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Circuit lines background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 L200,50 M50,0 L50,200" stroke="white" strokeWidth="0.5" fill="none" />
              <circle cx="50" cy="50" r="3" fill="#3B82F6" />
              <circle cx="0" cy="50" r="3" fill="#EF4444" />
              <circle cx="100" cy="50" r="3" fill="#3B82F6" />
              <circle cx="50" cy="0" r="3" fill="#EF4444" />
              <circle cx="50" cy="100" r="3" fill="#3B82F6" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      </div>


      <div className="container max-w-md px-4 py-12 z-10 flex flex-col items-center">
        {/* Logo and Header */}
        <div
          className={`mb-8 flex flex-col items-center transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
        >
          <div className="w-24 h-24 relative mb-4 animate-logo-pulse">
            <Image
              src="/dsc-logo.png"
              alt="DSC RIT Logo"
              width={96}
              height={96}
              className="rounded-full p-1 border-2 border-white/10"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent animate-logo-ring"></div>
          </div>
          <h1 className="text-2xl font-bold mb-1 text-center animate-text-reveal">Developer Students Club</h1>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            RIT
          </h2>
          <p className="text-sm text-center text-gray-300 max-w-xs animate-fade-in">
            A technical club conducting workshops, contests, and much more to impart industry skills to all students!
          </p>
        </div>

        {/* Featured Event Card */}
        <Card
          className={`w-full mb-6 bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm transition-all duration-700 delay-100 ease-out hover:shadow-glow ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-white">Capture the Flag🚩</h3>
              
              <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full animate-pulse-slow">
                13th November 1:00PM!
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-3">
             This spooky season DSC RIT invites you to its flagship showdown - Capture the Flag
            </p>
          </div>
        </Card>

        {/* Social Links */}
        <div className="w-full space-y-3">
          {[
            {
              href: "https://rit-dsc.vercel.app/",
              icon: <Globe className="h-4 w-4 mr-2" />,
              text: "Our Website",
              color: "bg-blue-500",
              delay: 200,
            },
            {
              href: "https://chat.whatsapp.com/Eu6GjTChtMs7dwsdhX9pvl",
              icon: <HugeiconsIcon icon={WhatsappIcon} size={24} color="white" strokeWidth={1.5} className="h-4 w-4 mr-2" />,
              text: "WhatsApp",
              color: "bg-green-500", // Changed to WhatsApp green
              delay: 300,
            },
            {
              href: "https://www.instagram.com/dsc.rit/",
              icon: <Instagram className="h-4 w-4 mr-2" />,
              text: "Instagram",
              color: "bg-gradient-to-r from-purple-500 to-pink-500",
              delay: 400,
            },
            {
              href: "https://t.me/dscrit",
              icon: <Send className="h-4 w-4 mr-2" />,
              text: "Telegram",
              color: "bg-blue-500",
              delay: 500,
            },
            
            {
              href: "https://www.linkedin.com/company/dsc-rit/",
              icon: <Linkedin className="h-4 w-4 mr-2" />,
              text: "LinkedIn",
              color: "bg-blue-500",
              delay: 600,
            },
            
            
          ].map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: `${link.delay}ms` }}
            >
              <Button
                variant="outline"
                className="w-full border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-between group transition-all duration-300 hover:scale-[1.02]"
              >
                <span className="flex items-center">
                  <span className={`w-2 h-2 ${link.color} rounded-full mr-3 group-hover:animate-ping-once`}></span>
                  {link.icon}
                  {link.text}
                </span>
                <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          ))}
        </div>

        {/* Contact Button */}

        {/* Footer */}
        <footer
          className={`mt-5 text-center text-xs text-gray-400 transition-all duration-700 delay-900 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <p>© {new Date().getFullYear()} Developer Students Club - RIT</p>
          <div className="mt-2 flex justify-center space-x-1 animate-bounce-slow">
            <span className="text-red-500">{"{}"}</span>
            <span className="text-blue-500">with</span>
            <span className="text-red-500">{"</"}</span>
            <span className="text-white"></span>
            <span className="text-blue-500">❤</span>
            <span className="text-red-500">{">"}</span>
          </div>
        </footer>
      </div>
    </main>
  )
}

