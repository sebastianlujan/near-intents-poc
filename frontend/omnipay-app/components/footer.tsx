import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-3">
          <span className="font-electrolize text-base font-normal tracking-[0.12em] uppercase text-gray-400">BY:</span>
          <img src="/logo.png" alt="OMNILANE" className="m-8 h-4 opacity-90" />
        </div>
      </div>
    </footer>
  )
}