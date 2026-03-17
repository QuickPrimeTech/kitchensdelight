import Image from "next/image";

export default function OurStory() {
  return (
    <section className="section bg-white" aria-labelledby="our-story-title">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2
            id="our-story-title"
            className="font-serif text-4xl font-bold text-gray-900 mb-6"
          >
            Our Story
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From a small local spot to Nyeri’s go-to for generous, satisfying
            meals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              The Beginning
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Kitchen’s Delight Cafe was founded with a simple mission: to serve
              delicious, filling meals that bring people together. Located in
              Nyeri, the cafe started as a humble eatery focused on one thing—
              making sure every customer leaves full and satisfied.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What set Kitchen’s Delight apart from the start was its generous
              portions and consistent quality. Word quickly spread across Nyeri,
              and soon the cafe became a favorite for students, families, and
              anyone looking for great value and hearty meals. Today, its
              growing presence on TikTok has made it even more popular, with
              food lovers sharing their experiences and showcasing the famously
              large servings.
            </p>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762944/imgi_21_483314818_17875098924290372_2271472929425626432_n_qhj3to.webp"
              alt="Kitchen’s Delight Cafe beginnings – a simple and welcoming local eatery in Nyeri"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="https://res.cloudinary.com/quick-prime-tech/image/upload/v1773762831/imgi_28_oYiuI1KIjopeHF70YAOTtgjZgAMTQhGeTrfDLC_tplv-tiktokx-origin_tvomy2.jpg"
              alt="Kitchen’s Delight Cafe today – a vibrant and busy spot known for its large portions"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Today
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today, Kitchen&apos;s Delight Cafe is known across Nyeri for its
              generous portions, affordable meals, and consistent taste. From
              local favorites to everyday comfort food, every plate is served
              with the same commitment to quality and value.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The cafe continues to grow its community both offline and online,
              especially through TikTok, where customers share the experience of
              enjoying meals that truly satisfy. Whether you&apos;re stopping by
              for a quick bite or a full meal, Kitchen&apos;s Delight Cafe
              remains a place where good food and big portions always come
              first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
