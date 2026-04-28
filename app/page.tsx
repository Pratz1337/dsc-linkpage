"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Globe,
  Instagram,
} from "lucide-react"
import { HugeiconsIcon } from '@hugeicons/react';
import { WhatsappIcon } from '@hugeicons/core-free-icons';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true)

    // Track mouse movement for the interactive spotlight
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#020205] text-white flex flex-col items-center relative overflow-hidden">
      
      {/* =========================================
        THE "HAIL MARY" MASTER BACKGROUND
        =========================================
      */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* 1. Deep Core Space Gradient (Base Depth) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0a1128] via-[#010205] to-black opacity-90"></div>

        {/* 2. Ethereal Cyan Glow (Slow breathing animation - left side) */}
        <div className="absolute -bottom-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-cyan-600/15 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[7000ms]"></div>

        {/* 3. Crimson Glow (Slow breathing animation - right side) */}
        <div className="absolute top-[5%] -right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-red-600/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[10000ms]"></div>

        {/* 4. Sci-Fi Tech Grid (Faded at edges via radial mask) */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"
        ></div>

        {/* 5. Distant Starfield */}
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', 
            backgroundSize: '35px 35px',
            maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
          }}
        ></div>

        {/* 6. INTERACTIVE LAYER: Moving Cursor Spotlight */}
        <div 
          className="absolute inset-0 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`
          }}
        ></div>
        
        {/* 7. Cinematic Vignette (Darkens the borders heavily) */}
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>
      </div>

      {/* =========================================
        THE FOREGROUND CONTENT
        =========================================
      */}
      <div className="container max-w-md px-4 py-12 z-10 flex flex-col items-center relative">
        
        {/* Logo and Header */}
        <div className={`mb-8 flex flex-col items-center transition-all duration-700 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <div className="w-24 h-24 relative mb-4 animate-logo-pulse">
            <Image
              src="/dsc-logo.png"
              alt="DSC RIT Logo"
              width={96}
              height={96}
              className="rounded-full p-1 border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent animate-logo-ring"></div>
          </div>
          <h1 className="text-2xl font-bold mb-1 text-center animate-text-reveal tracking-wide">Developer Students Club</h1>
          <h2 className="text-xl font-semibold mb-3 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            RIT
          </h2>
          <p className="text-sm text-center text-gray-400 max-w-xs animate-fade-in leading-relaxed">
            A technical club conducting workshops, contests, and much more to impart industry skills to all students!
          </p>
        </div>

        {/* Featured Event Card - Hail Mary Theme */}
        <Card
          className={`w-full mb-6 bg-[#050914]/60 border border-blue-500/20 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-700 delay-100 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="p-5">
            <div className="flex flex-col gap-2 mb-3">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-bold text-white tracking-widest drop-shadow-md">DSC ICEBREAKER</h3>
                <span className="text-[10px] px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full animate-pulse whitespace-nowrap">
                  30th APR 2026 • 3:00 PM
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Step into the void. Join us for an out-of-this-world introductory session to the Developer Students Club.
            </p>
            <div className="flex items-center text-xs text-gray-400 pt-3 border-t border-white/10">
              <span className="mr-2 text-red-500">📍</span> DES SEMINAR HALL
            </div>
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
              color: "bg-green-500",
              delay: 300,
            },
            {
              href: "https://www.instagram.com/dsc.rit/",
              icon: <Instagram className="h-4 w-4 mr-2" />,
              text: "Instagram",
              color: "bg-gradient-to-r from-purple-500 to-pink-500",
              delay: 400,
            }
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
                className="w-full h-12 border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm flex items-center justify-between group transition-all duration-300"
              >
                <span className="flex items-center text-gray-200 group-hover:text-white transition-colors">
                  <span className={`w-2 h-2 ${link.color} rounded-full mr-3 shadow-[0_0_8px_currentColor] group-hover:animate-ping-once`}></span>
                  {link.icon}
                  {link.text}
                </span>
                <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <footer className={`mt-8 text-center text-xs text-gray-500 transition-all duration-700 delay-500 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <p className="tracking-wide">© {new Date().getFullYear()} Developer Students Club - RIT</p>
          <div className="mt-2 flex justify-center items-center space-x-1 opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-red-500 font-mono">{"{}"}</span>
            <span className="text-gray-400 px-1">with</span>
            <span className="text-red-500 font-mono">{"</"}</span>
            <span className="text-blue-500 animate-pulse">❤</span>
            <span className="text-red-500 font-mono">{">"}</span>
          </div>
        </footer>
      </div>
    </main>
  )
}