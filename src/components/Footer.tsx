import { ArrowUpRight } from 'lucide-react';
import { AFFILIATE_URL } from '../data/stakeData';

export function Footer() {
  return (
    <footer className="bg-[#0B111A] pt-16 pb-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Final Conversion Callout */}
        <div className="flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-[#121B28] p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              Ready to Play &amp; Win Instant Crypto Rewards?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Jump straight into Plinko, Mines, Crash, top slots, live blackjack, or live sports
              markets and earn VIP rewards on every win.
            </p>
          </div>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#1475E1] px-7 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D82F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1]"
          >
            <span>Play &amp; Win Now</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Quiet Footer Links & Responsible Gaming Notice */}
        <div className="mt-12 flex flex-col gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-lg">
            <div className="text-base font-bold text-white">StakeRewards</div>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Independent online crypto casino and sportsbook game hub. Online gaming involves
              financial risk and is strictly restricted to individuals aged 18+ (or legal age in
              your jurisdiction). Play responsibly.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-6 text-xs text-slate-400">
            <a href="#how-to-play" className="hover:text-white transition-colors">
              How to Play
            </a>
            <a href="#games" className="hover:text-white transition-colors">
              All Games
            </a>
            <a href="#sportsbook" className="hover:text-white transition-colors">
              Sportsbook
            </a>
            <a href="#vip-rewards" className="hover:text-white transition-colors">
              VIP Rewards
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
        </div>

        <div className="mt-8 text-xs text-slate-500">
          © 2026 StakeRewards · Provably Fair Gaming &amp; Instant Crypto Rewards
        </div>
      </div>
    </footer>
  );
}
