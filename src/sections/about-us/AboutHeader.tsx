import Image from "next/image";

export default function AboutHeader() {
  return (
    <section className="relative section mt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762830/imgi_36_oYEuUFDjREBolQ4t0YEQqKBAhDVgezvLjpfgiU_tplv-tiktokx-origin_tfek6o.jpg"
          alt="Kitchens Delight meals"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 text-center text-background">
        <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4">
          About Kitchens Delight Cafe
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Big Portions. Real Satisfaction.
        </h1>
        <p className="text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
          Kitchens Delight is quickly becoming Nyeri&apos;s go-to spot for
          generous portions, great taste, and unbeatable value. We&apos;re all
          about serving satisfying meals that bring people together and leave
          you fully content every single time.
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold">New</div>
            <div>In Nyeri</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100%</div>
            <div>Full Plates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">🔥</div>
            <div>Viral Spot</div>
          </div>
        </div>
      </div>
    </section>
  );
}
