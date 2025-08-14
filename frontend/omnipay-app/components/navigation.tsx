"use client"

import Image from "next/image";

export function Navigation() {
    return (
        <nav className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    { /* Logo and title */ }
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 flex items-center justify-center">
                            <Image src="/logo.svg" alt="OmniPay Logo" width={44} height={44} />
                        </div>
                        <div className="w-0.5 h-11 bg-white/20"></div>
                         <span className="font-electrolize text-2xl font-normal tracking-[0.15em] uppercase text-white">
                            OMNIPAY
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}