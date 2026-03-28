"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="SD Communication"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplit
      background={{
        variant: "gradient-bars",
      }}
      title="Best Deals on Open Box & Used Phones"
      description="Premium quality smartphones at unbeatable prices. Senapati's trusted source for reliable mobile tech, fully tested and ready to go."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "WhatsApp Us",
          href: "https://wa.me/919362436136",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/modern-high-end-smartphone-display-minim-1774683126103-12223230.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "iPhone 15 Pro (Open Box)",
          price: "₹95,000",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/clean-isolated-shot-of-iphone-15-pro-met-1774683126089-9fa4a9b7.png",
        },
        {
          id: "p2",
          name: "Samsung S23 Ultra (Used)",
          price: "₹65,000",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/samsung-galaxy-series-phone-minimal-back-1774683129053-c24d3ede.png",
        },
        {
          id: "p3",
          name: "Premium Charging Kit",
          price: "₹1,200",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/minimalist-wireless-earbuds-or-charger-c-1774683126157-25c954a3.png",
        },
      ]}
      title="Today's Limited Deals"
      description="Exclusive stock available now. Order via WhatsApp before it's gone."
    />
  </div>

  <div id="trust" data-section="trust">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "500+ Happy Customers",
        "Verified Seller",
        "Quality Checked",
        "Warranty Included",
        "Senapati Trusted",
        "Same Day Support",
        "Easy Exchange",
      ]}
      title="Why Choose Us"
      description="Verified reliability and trusted service in Senapati."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "David",
          role: "Student",
          company: "Senapati",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/professional-happy-customer-portrait-neu-1774683125831-36f7aab5.png",
        },
        {
          id: "2",
          name: "Sarah",
          role: "Professional",
          company: "Senapati",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/professional-happy-customer-portrait-neu-1774683126289-f4a69916.png",
        },
        {
          id: "3",
          name: "Robert",
          role: "Teacher",
          company: "Senapati",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/professional-happy-customer-portrait-neu-1774683126337-6e4e9399.png",
        },
        {
          id: "4",
          name: "Emily",
          role: "Designer",
          company: "Senapati",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/professional-happy-customer-portrait-neu-1774683126945-3a1e3bc6.png",
        },
        {
          id: "5",
          name: "Vikram",
          role: "Business Owner",
          company: "Senapati",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/professional-happy-customer-portrait-neu-1774683125831-36f7aab5.png",
        },
      ]}
      title="Trusted by Locals"
      description="Hear from our happy customers in Manipur."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact Us"
      title="Visit Our Store"
      description="Located at Opposite Traffic Point, Senapati. Reach out via WhatsApp or call us directly."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BMNzyZqcPDzQIjFIeVa3riraQM/modern-store-interior-minimalist-aesthet-1774683126508-bf332c85.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="SD Communication"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "© 2024 SD Communication",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
