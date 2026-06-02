import Image from "next/image";
import { siteConfig } from "@/config/site";

const features = [
  {
    label: "Motorized Mechanism",
    description:
      "The electric motor handles the scooping action automatically. Simply position, press, and the K9 Claw does the rest.",
  },
  {
    label: "3-Stage Collapsible Design",
    description:
      "Goes from fully closed to ready-to-use in seconds. Three stages: closed, open, and extended for maximum reach.",
  },
  {
    label: "Universal Bag Compatibility",
    description:
      "Works with standard dog waste bags of all sizes. Feed the bag through the top and the retraction system seals it automatically.",
  },
  {
    label: "Ergonomic Grip Handle",
    description:
      "Soft-touch handle with wrist strap for secure, comfortable holding during walks.",
  },
];

export default function Features() {
  return (
    <section className="section-py bg-brand-muted/40" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-3">
            Product Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">
            Engineered for Every Walk
          </h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed">
            Premium materials, thoughtful mechanics, and intuitive design come together in one tool.
          </p>
        </div>

        {/* Feature 1: Image Left + Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-brand/10 blur-2xl scale-95" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand/10">
              <Image
                src="/product-1.jpg"
                alt="K9 Claw in use with dog"
                width={600}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div>
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              In Action
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 leading-tight mb-6">
              Cleanup Made Simple — No Bending, No Touching
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              The K9 Claw extends to a comfortable standing height so you maintain your posture 
              while picking up after your dog. The motorized head positions the bag, collects waste, 
              and retracts — all without you touching anything.
            </p>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-brand/15 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-brand" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">{f.label}: </span>
                    <span className="text-sm text-gray-500">{f.description}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href={siteConfig.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Feature 2: Text Left + Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-2 relative">
            <div className="absolute inset-0 rounded-3xl bg-brand/10 blur-2xl scale-95" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand/10">
              <Image
                src="/product-2.jpg"
                alt="K9 Claw stages diagram"
                width={600}
                height={480}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:order-1">
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              Smart Design
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 leading-tight mb-6">
              Three Stages. One Seamless Experience.
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              The K9 Claw operates in three intuitive stages: fully closed for transport, 
              open stage for bag loading, and extended for pickup. The retractable head 
              seals the bag automatically for a completely clean experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {["Full Closed", "Open Stage 1", "Extended Stage 2"].map((stage, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                  <div className="text-2xl font-display font-bold text-brand mb-1">
                    0{i + 1}
                  </div>
                  <div className="text-xs font-semibold text-gray-700">{stage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
