import { ArrowUpRight } from 'lucide-react';
import { AFFILIATE_URL, HERO_METRICS } from '../data/stakeData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section id="top" className="border-b border-white/[0.07] pt-12 pb-12 sm:pt-16 sm:pb-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* 2-Column Hero Split with balanced stretch */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                <span>Provably Fair Originals</span>
                <span aria-hidden="true">·</span>
                <span>Live Casino &amp; Slots</span>
                <span aria-hidden="true">·</span>
                <span>Global Sportsbook</span>
              </div>

              <h1
                className="font-bold tracking-tight text-white"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
              >
                Play Top Crypto Games &amp; Win Real Rewards
              </h1>

              <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-slate-300 sm:text-lg">
                Play high-RTP <strong className="font-semibold text-white">Plinko, Mines, Crash, Dice, and Limbo</strong>, spin
                popular slots like <strong className="font-semibold text-white">Gates of Olympus</strong> and{' '}
                <strong className="font-semibold text-white">Sweet Bonanza</strong>, or bet live on Cricket and Football to earn
                instant payouts and VIP rewards.
              </p>
            </div>

            {/* Single Dominant Primary CTA Button */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-lg bg-[#1475E1] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D82F5] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B111A]"
              >
                <span>Play Now &amp; Win Rewards</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#games"
                className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-white/15 bg-[#121B28] px-6 py-3.5 text-sm font-medium text-slate-100 transition-colors duration-150 hover:border-white/30 hover:bg-[#182334] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1]"
              >
                Browse All Games
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Instant account setup · Automated crypto payouts · 18+ Play Responsibly
            </p>
          </div>

          {/* Dominant 16:9 High-Priority Visual */}
          <div className="lg:col-span-6">
            <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[#121B28]">
              <ResilientImage
                src="/src/assets/images/hero_stake_arena_1795601574262.jpg"
                alt="Online crypto casino games, Plinko, Mines, Crash, and sportsbook rewards workstation"
                width={1600}
                height={900}
                priority
                fallbackTitle="Play Games & Win Rewards"
                className="aspect-video w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Key Facts Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {HERO_METRICS.map((item) => (
            <div key={item.label} className="bg-[#121B28] px-6 py-5">
              <div className="text-xs font-medium text-slate-400">{item.label}</div>
              <div className="mt-1.5 font-mono text-xl font-semibold text-white tabular-nums">
                {item.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
