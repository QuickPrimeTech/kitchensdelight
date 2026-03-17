"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2 } from "@/components/ui/typography";
import { Testimonial } from "@/types/testimonial";
import { useState } from "react";
import { TestimonialDialog } from "@/components/testimonials/testimonial-dialog";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjV1vv9evIElYUomNLQlu9m91MG42X6s62EJRoMtlQmEoAdYPZ07=w72-h72-p-rp-mo-ba4-br100",
      name: "Shahriar Shakil Shuvo",
      text: "Kitchen’s Delight Cafe in Nyeri is an absolute favorite! The portions are huge, the flavors are bold, and everything tastes freshly made. I tried the grilled chicken with sides, and the servings were generous and perfectly cooked. The café has a cozy and welcoming vibe, making it perfect for lunch with friends or family. The staff are friendly, attentive, and always ready to make great recommendations. Highly recommended if you want a hearty, satisfying meal in Nyeri!",
      rating: 5,
    },
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWsFI54HN1_h5MbbO1Xai5Xvo_d_GMjaJwESKPn-Mtnhr8QYb88iQ=w36-h36-p-rp-mo-ba3-br100",
      name: "Michel Libamira",
      text: "Amazing food and generous portions! The ambiance is casual and perfect for catching up with friends. Everything I tried was delicious, and the staff are very welcoming. I love coming here for a quick bite or a full meal!",
      rating: 4,
    },
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVOeut2Xs6yphx8cBquunIC4voAoFMfuHKiQUcLLS2PtZDEnOen6Q=w36-h36-p-rp-mo-ba4-br100",
      name: "Henry Ochieng",
      text: "Cozy spot in Nyeri with huge portions and great flavors. The meals are always fresh and filling, and the staff make you feel right at home. Perfect for lunch or dinner.",
      rating: 4,
    },
    {
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUs0rxk50PSltlmeml5It8GEknB5wnYTRdVZzjQXjP-lK6VvS3lVA=w36-h36-p-rp-mo-ba6-br100",
      name: "Kit Teguh",
      text: "I visited Kitchen’s Delight Cafe for a relaxed lunch and was blown away by the portion sizes and flavors. The staff are punctual and friendly, and the café has a really cozy vibe. I had their signature chicken platter with sides, and it was more than enough to satisfy my appetite. Definitely a must-visit in Nyeri!",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-grey-bg py-20 px-4">
      <H2 className="text-center mb-8">What Our Guests Say</H2>

      <div className="relative w-full max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <CardHeader className="pt-4 pb-0 rounded-t-lg flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Avatar className="size-12">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover"
                        />
                        <AvatarFallback>
                          {testimonial.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Local Guide
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-5 ${
                            testimonial.rating > i
                              ? "fill-current"
                              : "stroke-current"
                          } text-yellow-500`}
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-4 pt-0">
                    <div>
                      <p className="text-muted-foreground font-chivo leading-relaxed line-clamp-4">
                        &quot;{testimonial.text}&quot;
                      </p>
                      {testimonial.text.length > 150 && (
                        <Button
                          className="px-0 cursor-pointer"
                          variant="link"
                          onClick={() => setSelectedTestimonial(testimonial)}
                        >
                          See more
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {selectedTestimonial && (
        <TestimonialDialog
          isOpen={!!selectedTestimonial}
          testimonial={selectedTestimonial}
          onOpenChange={(open: boolean) =>
            setSelectedTestimonial((prev) => (open ? prev : null))
          }
        />
      )}
    </section>
  );
}
