// @/sections/reservations/hero.tsx

import { ImageWithFallback } from "@/components/ui/image";

export const HeroSection = () => (
  <section className="relative aspect-3/1 overflow-hidden">
    <ImageWithFallback
      src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762831/imgi_28_oYiuI1KIjopeHF70YAOTtgjZgAMTQhGeTrfDLC_tplv-tiktokx-origin_tvomy2.jpg"
      fill
      alt="Image of Kitchen&#39;s Delight Cafe table that is to be reserved"
      className="object-cover"
    />
    <div className="absolute inset-0 bg-linear-to-r from-black/30 via-black/40 to-black/30" />
    <div className="relative z-10 h-full flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-cinzel font-bold text-white mb-6">
          Reserve Your Table
        </h1>
        <p className="text-xl text-white/70 font-chivo max-w-3xl mx-auto">
          Secure your seat at Kitchen&#39;s Delight Cafe in Nyeri for a
          delicious and hearty dining experience.
        </p>
      </div>
    </div>
  </section>
);
