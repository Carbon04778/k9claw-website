import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-muted/60 via-white to-white pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #837262 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-20 lg:py-0 lg:min-h-[calc(100vh-64px)]">
          {/* Left: Text */}
          <div className="flex flex-col items-start animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              Introducing K9 Claw
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-display font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Dog Cleanup{" "}
              <span className="text-brand">Without</span>{" "}
              Bending Over.
            </h1>

            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-8">
              The fully motorized pooper scooper designed for comfort,
              convenience, and modern pet owners.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={siteConfig.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4 text-center"
              >
                Get K9 Claw
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="btn-outline text-base px-8 py-4 text-center"
              >
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No bending required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Hands-free operation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Motorized &amp; compact
              </div>
            </div>
          </div>

          {/* Right: Product Image */}
          <div className="flex items-center justify-center lg:justify-end animate-fade-in">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Glow behind product */}
              <div className="absolute inset-0 rounded-3xl bg-brand/10 blur-3xl scale-90 translate-y-4" />
              <div className="relative rounded-3xl overflow-hidden bg-brand-muted/50 shadow-2xl border border-brand/10">
                <Image
                  src="/hero-product.jpg"
                  alt="K9 Claw Motorized Dog Pooper Scooper"
                  width={600}
                  height={680}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Fully</p>
                  <p className="text-sm font-bold text-gray-800">Motorized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-300">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
