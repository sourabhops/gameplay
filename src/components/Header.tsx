import { ArrowUpRight } from 'lucide-react';
import { AFFILIATE_URL } from '../data/stakeData';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#0B111A]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single clean text wordmark */}
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1] rounded"
        >
          StakeRewards
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#how-to-play"
            className="hover:text-white hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            How to Play
          </a>
          <a
            href="#games"
            className="hover:text-white hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            All Games
          </a>
          <a
            href="#sportsbook"
            className="hover:text-white hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Sportsbook
          </a>
          <a
            href="#vip-rewards"
            className="hover:text-white hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            VIP Rewards
          </a>
          <a
            href="#faq"
            className="hover:text-white hover:underline underline-offset-4 transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Single primary action button with hidden affiliate link */}
        <div className="flex items-center shrink-0">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#1475E1] px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D82F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B111A]"
          >
            <span>Play &amp; Win</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
