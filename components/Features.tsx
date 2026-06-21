import Image from "next/image";
import { siteConfig } from "@/config/site";

const features = [
  { label: "Motorized Mechanism", description: "The electric motor handles the scooping action automatically. Simply position, press, and the K9 Claw does the rest." },
  { label: "5-Stage Collapsible Design", description: "Goes from fully closed to ready-to-use in seconds. Five stages for a completely clean and hands-free experience." },
  { label: "Universal Bag Compatibility", description: "Works with standard dog waste bags of all sizes. Feed the bag through the top and the retraction system seals it automatically." },
  { label: "Ergonomic Grip Handle", description: "Soft-touch handle with wrist strap for secure, comfortable holding during walks." },
];

const stages = [
  { number: "01", label: "Full Closed", image: "/stage-1.jpg" },
  { number: "02", label: "Open Stage 1", image: "/stage-2.jpg" },
  { number: "03", label: "Open with Bag", image: "/stage-3.jpg" },
  { number: "04", label: "Extended with Bag", image: "/stage-4.jpg" },
  { number: "05", label: "Closing after Bag is removed", image: "/stage-5.jpg" },
];

export default function Features() {
  return (
    <section className="section-py bg-brand-muted/40" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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
              <a href={siteConfig.shopifyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Order Now
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              Smart Design
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-6">
              Five Stages. One Seamless Experience.
            </h3>
            <p className="text-gray-500 leading-relaxed">
              The K9 Claw operates in five intuitive stages: fully closed for transport,
              open stage for bag loading, open with bag, extended with bag for pickup, and
              closing after bag is removed. Completely clean every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {stages.map((stage, i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="relative w-full aspect-square bg-gray-100 border-b border-gray-100">
                  <Image
                    src={stage.image}
                    alt={`K9 Claw stage ${stage.number}: ${stage.label}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-display font-bold text-brand mb-1">
                    {stage.number}
                  </div>
                  <div className="text-xs font-semibold text-gray-700 leading-snug">
                    {stage.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}