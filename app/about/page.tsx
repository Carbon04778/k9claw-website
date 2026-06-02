import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.siteName} and our mission to make dog ownership cleaner, easier, and more dignified.`,
};

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Innovation",
    description: "We rethink everyday tools to make them smarter, cleaner, and easier to use.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Pet Welfare",
    description: "Everything we build starts with a love of dogs and a commitment to the communities they live in.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Sustainability",
    description: "Designed to work with eco-friendly bags and built to last — reducing single-use waste in pet care.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Community",
    description: "We believe cleaner neighborhoods start with better tools for the people who care most.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-brand-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              About K9 Claw
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
              We Made Dog Cleanup Dignified.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              {siteConfig.companyName} was founded on a simple belief: technology should make every part of pet ownership better — even the parts nobody talks about.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-py bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 leading-tight mb-6">
                Born From Frustration. Built With Purpose.
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Every dog owner knows the moment — you reach into your pocket for a bag, crouch down, 
                  and do what needs to be done. It works, but it has never been pleasant. 
                  For pet owners with mobility issues, back pain, or arthritis, it can be genuinely painful.
                </p>
                <p>
                  We asked: what if there was a smarter way? A way to clean up after your dog 
                  that was completely hands-free, required no bending, and took less than ten seconds?
                </p>
                <p>
                  The answer is the K9 Claw — a fully motorized, precision-engineered pooper scooper 
                  that combines thoughtful design with cutting-edge mechanics. Built for everyday dog 
                  owners and engineered to handle the task with complete dignity.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-brand/10 blur-2xl scale-95" />
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand/10 bg-brand-muted/50">
                <Image
                  src="/hero-product.jpg"
                  alt="K9 Claw product"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-py bg-brand-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-5">
              Cleaner Communities. Happier Owners.
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              Our mission is to create tools that make responsible dog ownership easier for every person, 
              of every age and ability. The K9 Claw is just the beginning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-3xl px-6 py-14 sm:px-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand/10 blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-5">
                Ready to Experience K9 Claw?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Join the growing community of dog owners who have transformed their daily walk. 
                Order today and feel the difference on your first use.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
                <a
                  href={siteConfig.shopifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:bg-brand-light active:scale-95"
                >
                  Shop K9 Claw
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:bg-white/10 active:scale-95"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
