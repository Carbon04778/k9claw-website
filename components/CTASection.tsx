import { siteConfig } from "@/config/site";

export default function CTASection() {
  return (
    <section className="section-py bg-white" id="order">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 px-6 py-14 sm:px-12 sm:py-20 text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand/20 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand/10 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-4">
              Limited Availability
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-5">
              Ready to Transform Your Daily Walk?
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-10">
              Join thousands of dog owners who have already made cleanup effortless. 
              Order the K9 Claw today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <a
                href={siteConfig.shopifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:bg-brand-light hover:shadow-xl active:scale-95"
              >
                Get K9 Claw Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-200 hover:bg-white/10 active:scale-95"
              >
                Ask a Question
              </a>
            </div>

            {/* Trust line */}
            <p className="text-gray-500 text-xs mt-8">
              30-day satisfaction guarantee &bull; Free shipping on orders over $50 &bull; Secure checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
