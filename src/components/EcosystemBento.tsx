import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AFFILIATE_URL, CRYPTO_RAILS, GAME_DIRECTORY, type GameEntry } from '../data/stakeData';
import { ResilientImage } from './ResilientImage';

type FilterCategory = 'all' | GameEntry['category'];

const CATEGORY_TABS: { id: FilterCategory; label: string }[] = [
  { id: 'all', label: 'All Games' },
  { id: 'originals', label: 'Originals' },
  { id: 'slots', label: 'Top Slots' },
  { id: 'live', label: 'Live Casino' },
  { id: 'sports', label: 'Sportsbook' },
];

export function EcosystemBento() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');

  const visibleGames =
    activeCategory === 'all'
      ? GAME_DIRECTORY
      : GAME_DIRECTORY.filter((g) => g.category === activeCategory);

  return (
    <section id="games" className="border-b border-white/[0.07] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Provably Fair Originals, Top Slots, Live Casino &amp; Sportsbook
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Play Plinko, Mines, Crash, Dice, Limbo, Gates of Olympus, Sweet Bonanza, Live Blackjack,
            Lightning Roulette, and global sports betting with instant crypto payouts.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Card 1: Stake Originals (col-span-2) */}
          <article className="overflow-hidden rounded-xl border border-white/10 bg-[#121B28] lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5">
                <ResilientImage
                  src="/src/assets/images/originals_provably_fair_1795601575324.jpg"
                  alt="Provably fair titanium dice and platinum tokens for Plinko, Mines, Crash, and Dice"
                  width={1200}
                  height={900}
                  fallbackTitle="Provably Fair Originals"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 md:col-span-7 sm:p-7">
                <div>
                  <div className="text-xs font-medium text-slate-400">
                    Cryptographically Verifiable · Up to 99.0% RTP
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Originals &amp; High-Multiplier Games
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Fast, transparent casino games verified by server and client seed hashing. Play
                    Plinko, Mines, Crash, Dice, Limbo, Keno, Hilo, Dragon Tower, and Wheel with
                    instant win settlement.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                  <div className="text-xs text-slate-400">
                    1.00% House Edge · Instant Round Verification
                  </div>
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DA3FF] hover:text-white transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>Play Originals</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: Fast Crypto Settlements (col-span-1) */}
          <article className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#121B28] p-6 sm:p-7">
            <div>
              <div className="text-xs font-medium text-slate-400">
                Multi-Chain Deposits &amp; Payouts
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Instant Win Withdrawals
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Cash out your game winnings across 20+ supported blockchain networks with zero
                holding delays.
              </p>

              <ul className="mt-5 divide-y divide-white/[0.07]">
                {CRYPTO_RAILS.map((rail) => (
                  <li
                    key={rail.asset}
                    className="flex items-center justify-between py-2.5 text-xs"
                  >
                    <div>
                      <span className="font-medium text-slate-100">{rail.asset}</span>
                      <span className="ml-2 text-slate-400">{rail.network}</span>
                    </div>
                    <span className="font-mono text-slate-200 tabular-nums">{rail.speed}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Card 3: Global Sportsbook */}
          <article
            id="sportsbook"
            className="overflow-hidden rounded-xl border border-white/10 bg-[#121B28] lg:col-span-3"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="flex flex-col justify-between p-6 md:col-span-7 sm:p-8">
                <div>
                  <div className="text-xs font-medium text-slate-400">
                    Cricket · IPL · Football · UFC · NBA · Tennis · Esports
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Live Sportsbook &amp; Esports Win Markets
                  </h3>
                  <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-slate-300 sm:text-base">
                    Bet pre-match or live in-play on IPL Cricket, Premier League, Champions League,
                    UFC fight cards, NBA basketball, Grand Slam Tennis, CS2, Dota 2, and Valorant
                    with competitive odds and instant bet settlement.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div className="text-xs text-slate-400">
                    Sports bets count <span className="font-mono text-white">3x</span> faster toward
                    VIP reward milestones.
                  </div>
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DA3FF] hover:text-white transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>Bet &amp; Win Live</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="md:col-span-5">
                <ResilientImage
                  src="/src/assets/images/sportsbook_stadium_night_1795601574732.jpg"
                  alt="Floodlit international stadium pitch for live cricket, football, and esports betting"
                  width={1200}
                  height={900}
                  fallbackTitle="Global Live Sportsbook"
                  className="aspect-[4/3] h-full w-full object-cover"
                />
              </div>
            </div>
          </article>
        </div>

        {/* Interactive Popular Games Directory for SEO & Direct Play */}
        <div className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Popular Games &amp; Live Markets
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Select any category to explore top titles and launch directly.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Filter games by category"
              className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#121B28] p-1"
            >
              {CATEGORY_TABS.map((tab) => {
                const isSelected = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1] ${
                      isSelected
                        ? 'bg-[#1475E1] text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {visibleGames.map((game) => (
              <div
                key={game.name}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#121B28] p-4 transition-colors duration-150 hover:border-white/20"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-white">{game.name}</h4>
                    <span className="font-mono text-xs text-[#4DA3FF] tabular-nums whitespace-nowrap shrink-0">
                      {game.metric}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-400">{game.highlight}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.07]">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-[#4DA3FF] transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>Play Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
