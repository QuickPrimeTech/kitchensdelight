// app/components/about-section.tsx

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { H2, Paragraph } from "@/components/ui/typography";

export default function AboutSection() {
  return (
    <section
      className="section bg-background py-16"
      aria-labelledby="about-ziwa-heading"
      aria-label="About Kitchen's Delight Cafe section"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center container">
        <div>
          <H2 id="about-ziwa-heading" className="mb-6">
            Welcome to Kitchen's Delight Cafe
          </H2>
          <Paragraph className="text-muted-foreground text-lg leading-relaxed mb-6">
            Located in the heart of Nyeri, Kitchen's Delight Cafe is your go-to
            spot for hearty, generously portioned meals. From flavorful Kenyan
            classics to creative daily specials, our chefs combine fresh,
            quality ingredients with passion to deliver meals that satisfy both
            appetite and soul.
          </Paragraph>
          <Button asChild size="lg">
            <Link
              href="/about"
              aria-label="Learn more about Kitchen's Delight Cafe"
            >
              Learn More
            </Link>
          </Button>
        </div>

        <div className="relative w-full aspect-3/2">
          <Image
            fill
            src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1774460384/kitchen1_ln3pey.jpg"
            alt="Chef preparing dishes at Kitchen's Delight Cafe"
            className="rounded-lg shadow-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
