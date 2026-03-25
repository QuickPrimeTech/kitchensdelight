// @/config/site-config.ts
import { Instagram, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const contact = {
  phone: "0799030516",
  whatsapp: "0799030516",
  email: "orders@kitchensdelight.co.ke",
  address: "Nyeri Town, Nyeri, Kenya",
};

export const site = {
  logo: "https://res.cloudinary.com/quick-prime-tech/image/upload/v1750685108/Flux_Dev_A_minimalistic_logo_for_a_coastal_restaurant_featurin_0_yyrx6o.jpg",
  restaurantName: "Kitchen’s Delight Cafe",
  restaurantDescription:
    "Karibu Kitchen’s Delight Cafe — whether you're craving a hearty meal, a quick bite, or a cozy spot to relax, we’ve got generous, delicious portions waiting just for you.",
  contact,
  links: {
    whatsappUrl: `https://wa.me/${contact.whatsapp.replace("+", "")}`,
    callUrl: `tel:${contact.phone}`,
    googleMapsUrl: "https://maps.google.com/?q=Ziwa+Restaurant+Ngong+Road",
  },
  hours: {
    weekdays: "10:00 AM – 10:00 PM",
    weekends: "9:00 AM – 11:00 PM",
    closedOn: "Public Holidays",
  },
  socials: [
    {
      icon: Instagram,
      href: "https://www.instagram.com/quickprimetech/",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/quickprimetech/",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/quickprimetech/",
    },
  ],
  address: "Sir Mbarak Hinawy Road, Mombasa 80100, Kenya",
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About Us", href: "/about" },
    { label: "Private Events", href: "/private-events" },
    { label: "Gallery", href: "/gallery" },
    { label: "Reserve Table", href: "/reserve" },
  ],
};
