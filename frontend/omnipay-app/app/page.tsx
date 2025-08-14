"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

export default function OmnipayLandingPage() {
  const [activeTab, setActiveTab] = useState<"buyer" | "seller">("seller")

  return (
    <div className="min-h-screen text-white flex flex-col bg-gradient-radial from-[#23203E] via-[#23203E] to-[#0C0C17]">

      <Navigation />
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="flex flex-col justify-center items-center gap-8 w-[800px] h-[662px] flex-none">
        </div>
      </div>
    </div>
  )
}