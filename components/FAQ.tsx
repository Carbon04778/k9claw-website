"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does the motorized mechanism work?",
    answer:
      "The K9 Claw uses a small rechargeable motor to drive the scoop head. When you press the button, the head opens to position around the waste, then closes and retracts — all automatically. The entire motion takes about 2 seconds.",
  },
  {
    question: "What type of bags does it use?",
    answer:
      "K9 Claw is compatible with standard dog waste bags of all sizes, including biodegradable options. Simply thread the bag through the top opening and the mechanism feeds it into position automatically.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "A single charge lasts for approximately 150–200 uses, depending on conditions. The rechargeable battery charges via USB-C and takes about 90 minutes to reach full charge.",
  },
  {
    question: "Is it easy to clean?",
    answer:
      "Yes. The scoop head is detachable and fully washable. The main body is water-resistant. A quick rinse after use keeps the K9 Claw hygienic and ready for the next walk.",
  },
  {
    question: "What is the full extended length?",
    answer:
      "The K9 Claw extends to approximately 90–100 cm (35–40 inches) in its fully extended Stage 2 position — ideal for most adults at a comfortable standing posture. It compacts to about 30 cm for transport.",
  },
  {
    question: "Is it suitable for large dogs?",
    answer:
      "Absolutely. The K9 Claw is designed to handle waste from dogs of all sizes. The scoop head is generously sized to ensure a clean collection every time, regardless of your dog's breed.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you are not completely satisfied, contact us at info@getK9claw.com and we will make it right with a replacement or full refund.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-gray-800 group-hover:text-brand transition-colors leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-300 ${
            open ? "bg-brand border-brand text-white rotate-45" : "group-hover:border-brand group-hover:text-brand"
          }`}
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-500 leading-relaxed pr-10">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section-py bg-brand-muted/30" id="faq">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-xs font-semibold text-brand uppercase tracking-widest mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-5">
              Common Questions Answered
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Have a question not listed here? Reach out to our team — we are happy to help.
            </p>
            <a
              href="mailto:info@getK9claw.com"
              className="btn-outline inline-flex"
            >
              Contact Support
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-5 sm:px-7 py-2">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
