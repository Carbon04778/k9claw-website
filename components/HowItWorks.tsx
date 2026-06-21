import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Extend the K9 Claw",
    description: "Press the button to reveal the claw and bag. Feed the bag around the claw and then press the button again to fully extend the handle.",
  },
  {
    number: "02",
    title: "Feed the Bag Through",
    description: "The waste bag is fed through the hole in the bag holder compartment under the claw. Simply open it up and stretch it around the claw. The sticky adhesive tips on each claw's end hold the bag open and in place.",
  },
  {
    number: "03",
    title: "Position & Press",
    description: "Position the open bag over the waste. Press the single button and the motorized mechanism captures and secures the waste instantly.",
  },
  {
    number: "04",
    title: "Retract & Dispose",
    description: "Press again to retract the handle with the claw clutching the feces inside the bag. Once fully retracted tie the bag off and toss the feces in the garbage.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-py bg-white" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">Four Steps to Effortless Cleanup</h2>
          <p className="text-base md:text-lg text-gray-500 leading-relaxed">From walk to done in under 10 seconds. The K9 Claw makes the least enjoyable part of dog ownership the easiest.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 group-hover:bg-brand flex items-center justify-center shrink-0 transition-all duration-300">
                    <span className="text-sm font-bold text-brand group-hover:text-white transition-colors duration-300">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-3 bg-gradient-to-b from-brand/20 to-transparent min-h-6" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative sticky top-24">
            <div className="absolute inset-0 rounded-3xl bg-brand/10 blur-2xl scale-90" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand/10">
              <Image src="/product-3.jpg" alt="K9 Claw mechanism detail" width={560} height={640} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm font-semibold">Bag fed through — Retracted with bag sealed</p>
                <p className="text-white/70 text-xs mt-1">Two-position motorized mechanism</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}