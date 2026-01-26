'use client'

export function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-primary/20 py-6 sm:py-8">
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
          {/* Left Side - Agent Info */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-[oklch(0.08_0_0)] tracking-tight">Clayton Padzarandara</h3>
            <p className="text-xs sm:text-sm text-[oklch(0.48_0_0)] font-light">Premium Real Estate Property Consultant</p>
          </div>

          {/* Center - Company Name */}
          <div className="text-center">
            <p className="text-xs sm:text-sm font-medium text-[oklch(0.25_0_0)]">
              Deen Properties
            </p>
          </div>

          {/* Right Side - Contact */}
          <div className="text-center md:text-right space-y-1">
            <a
              href="mailto:clayton@deenpropertiesuae.com"
              className="text-[oklch(0.65_0.19_81.4)] hover:text-[oklch(0.55_0.15_81.4)] transition-colors text-xs sm:text-sm font-medium block break-all"
            >
              clayton@deenpropertiesuae.com
            </a>
             <a href="tel:+971589633827" className="w-full">
            <p className="text-xs sm:text-sm text-[oklch(0.48_0_0)] font-light">+971 58 963 3827</p>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 mt-5 sm:mt-6 pt-5 sm:pt-6">
          <p className="text-xs text-center px-2 text-[oklch(0.55_0_0)] font-light">
            © 2026 Clayton Padzarandara. All rights reserved. | Premium Real Estate Property Consultant
          </p>
        </div>
      </div>
    </footer>
  )
}
