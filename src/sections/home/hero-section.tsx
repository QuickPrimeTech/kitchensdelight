import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  // Replace this with your actual Cloudinary video public ID or full URL
  // Added f_auto (auto format) and q_auto (auto quality) for optimization
  const videoUrl =
    "https://res.cloudinary.com/meshack-kipkemoi/video/upload/v1774461363/kitchenvideo_vrmzx3.mp4";

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Welcome section of Kitchen's Delight Cafe"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-white text-center sm:text-left sm:mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Kitchen&apos;s Delight Cafe &ndash; Big Meals, Big Satisfaction
        </h1>
        <p className="text-lg md:text-2xl mb-8 font-light">
          Enjoy hearty, delicious meals at Kitchen&apos;s Delight Cafe &mdash;
          famous in Nyeri for generous portions, great taste, and a dining
          experience loved both in person and across TikTok.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Button asChild size="lg">
            <Link href="/menu" className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" /> Order Now
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent hover:bg-white hover:text-black"
          >
            <Link href="/reservations" className="flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Book a Table
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
