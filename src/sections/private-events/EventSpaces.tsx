import { H2, H3, Paragraph } from "@/components/ui/typography";
import Image from "next/image";

export default function EventSpaces() {
  const spaces = [
    {
      name: "Cozy Private Dining Room",
      capacity: "Up to 20 guests",
      description:
        "A warm and intimate space perfect for family gatherings, birthday celebrations, or small business dinners.",
      features: [
        "Comfortable seating",
        "Private service",
        "AV equipment",
        "Air-conditioned",
      ],
      image:
        "https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762953/imgi_22_482910852_17874706050290372_6254805543613275719_n_qk2s3k.webp",
    },
    {
      name: "Garden Terrace",
      capacity: "Up to 50 guests",
      description:
        "Open-air terrace surrounded by greenery, ideal for casual parties, cocktail receptions, and outdoor celebrations.",
      features: [
        "Garden views",
        "Outdoor seating",
        "Flexible setup",
        "Weather protection",
      ],
      image:
        "https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762952/imgi_23_482861797_17874574620290372_1707356993823858096_n_wxz9xc.webp",
    },
    {
      name: "Full Cafe Buyout",
      capacity: "Up to 100 guests",
      description:
        "Exclusive use of Kitchen&#39;s Delight Cafe for your special event, including all indoor and outdoor spaces.",
      features: [
        "Exclusive access",
        "Full kitchen services",
        "Multiple seating areas",
        "Convenient parking",
      ],
      image:
        "https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762947/imgi_29_482729554_17874159654290372_5565691367087164429_n_i4jsvo.webp",
    },
  ];
  return (
    <section className="section bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <H2 className="mb-2">Event Spaces</H2>
          <Paragraph>
            Discover our versatile event spaces, each offering unique ambiance
            and stunning coastal views
          </Paragraph>
        </div>

        <div className="space-y-16">
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Image
                  src={space.image || "/placeholder.svg"}
                  alt={space.name}
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <H3 className="font-serif text-3xl font-bold mb-3">
                  {space.name}
                </H3>
                <p className="font-medium mb-4">{space.capacity}</p>
                <p className="leading-relaxed mb-6">{space.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {space.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
