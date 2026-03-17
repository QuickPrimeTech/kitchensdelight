import Image from "next/image";

export default function GalleryHeader() {
  return (
    <section className="relative pt-24 pb-12 bg-header-foreground/10 text-background">
      <Image
        src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762830/imgi_25_o45EIHwaAqYjAIvaT6ISWPL2IeD14ieFCfC6GE_tplv-tiktokx-origin_afmrzu.jpg"
        alt="Gallery background"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-20 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4  ">
              Gallery
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Moments at Kitchen&#39;s Delight Cafe
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Explore the experience at Kitchen&#39;s Delight Cafe through our
              collection of hearty meals, generous portions, and happy moments
              shared by our community in Nyeri and beyond, including highlights
              from our TikTok journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
