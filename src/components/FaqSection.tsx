import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/stakeData';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-white/[0.07] py-16 sm:py-20">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
        <div className="text-left">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Quick answers on game RTP, winning rewards, instant crypto withdrawals, and provably
            fair verification.
          </p>
        </div>

        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-white transition-colors duration-150 hover:text-[#4DA3FF] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1]"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-150 ${
                      isOpen ? 'rotate-180 text-[#4DA3FF]' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 pr-8 text-sm leading-relaxed text-slate-300">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
