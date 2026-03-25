"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { H2, Paragraph } from "@/components/ui/typography";

const instagramPosts = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774460384/kitchen1_ln3pey.jpg",
    caption: "signature food and generous portions",
    likes: 234,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774460382/kitchen3_gtpsik.jpg",
    caption: "Generous portions, unforgettable flavors! ",
    likes: 189,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774460383/kitchen2_ewodp1.jpg",
    caption: "Our signature seafood platter",
    likes: 312,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1774460382/kitchen6_nhfwzq.jpg",
    caption: "refreshing drinks",
    likes: 156,
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762961/imgi_27_482505863_17874201015290372_3886575768562654948_n_sxhgbs.webp",
    caption: "cool drink",
    likes: 278,
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762953/imgi_22_482910852_17874706050290372_6254805543613275719_n_qk2s3k.webp",
    caption: "tasty burger",
    likes: 201,
  },
];

export default function InstagramSection() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <section
      className="section bg-grey-bg"
      id="follow-us"
      aria-labelledby="follow-us-header"
    >
      <div className="text-center mb-12">
        <H2 className="mb-4" id="follow-us-header">
          Follow Us on Instagram
        </H2>
        <Paragraph>
          Stay connected with our latest meals, generous portions, and updates
          from our TikTok and in-store moments.
        </Paragraph>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {instagramPosts.map((post) => (
            <CarouselItem
              key={post.id}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden transition-colors duration-300 group py-0 pb-3">
                <CardHeader className="px-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      fill
                      src={post.image}
                      alt={`Instagram post ${post.id}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/50 text-foreground">
                      <div className="text-center p-4">
                        <Instagram className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm font-medium">
                          {post.likes} likes
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardFooter className="p-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>

      <div className="text-center mt-12">
        <Button asChild className="w-auto">
          <Link
            href="https://www.instagram.com/kitchendelightsnyeri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-4 w-4" />
            Follow Us
          </Link>
        </Button>
      </div>
    </section>
  );
}
