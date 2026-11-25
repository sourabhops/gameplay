import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AFFILIATE_URL, PLAY_STEPS } from '../data/stakeData';

const HOUSE_EDGE_OPTIONS = [
  { label: 'Originals (99% RTP)', edge: 0.01 },
  { label: 'Slots (96.5% RTP)', edge: 0.035 },
  { label: 'Live Tables (98% RTP)', edge: 0.02 },
] as const;

const VOLUME_PRESETS = [5000, 25000, 100000, 250000] as const;

export function ClaimAndCalculator() {
  const [monthlyWager, setMonthlyWager] = useState<number>(25000);
  const [selectedGameIndex, setSelectedGameIndex] = useState<number>(0);

  const selectedGame = HOUSE_EDGE_OPTIONS[selectedGameIndex];

  const estimates = useMemo(() => {
    const houseEdgeVolume = monthlyWager * selectedGame.edge;
    const instantRakeback = houseEdgeVolume * 0.05;
    const nextTier =
      monthlyWager < 10000
        ? 'Building toward Bronze ($10k)'
        : monthlyWager < 50000
          ? 'Bronze Unlocked · Silver Track'
          : monthlyWager < 100000
            ? 'Silver Unlocked · Gold Track'
            : 'Gold / Platinum VIP Track';

    return {
      instantRakeback,
      nextTier,
    };
  }, [monthlyWager, selectedGame]);

  return (
    <section id="how-to-play" className="border-b border-white/[0.07] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: 3-Step Play & Win Guide */}
          <div className="lg:col-span-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              How to Play Games &amp; Earn Win Rewards
            </h2>
            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-slate-300 sm:text-base">
              Start playing provably fair Originals, high-multiplier video slots, live blackjack,
              roulette, or live sports matches in three quick steps.
            </p>

            <ol className="mt-8 space-y-6">
              {PLAY_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="border-b border-white/[0.07] pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm font-semibold text-[#4DA3FF] tabular-nums">
                      {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 pl-9 text-sm leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Right: Interactive Gameplay Rewards Estimator */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-white/10 bg-[#121B28] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-white">
                  Win &amp; Rakeback Rewards Estimator
                </h3>
                <span className="font-mono text-xs text-slate-400">
                  Instant VIP Return
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Preview how regular gameplay across Originals, slots, and live tables builds
                instant rakeback and VIP win bonuses.
              </p>

              {/* Game Category Selector */}
              <div className="mt-6">
                <label className="block text-xs font-medium text-slate-400">
                  Select Game Category
                </label>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {HOUSE_EDGE_OPTIONS.map((option, idx) => {
                    const active = idx === selectedGameIndex;
                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setSelectedGameIndex(idx)}
                        className={`min-h-[40px] rounded-lg border px-3 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1] ${
                          active
                            ? 'border-[#1475E1] bg-[#1475E1]/15 text-white'
                            : 'border-white/10 bg-[#0B111A] text-slate-300 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Play Volume Input */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label htmlFor="wager-range" className="text-xs font-medium text-slate-400">
                    Monthly Play Volume (USD)
                  </label>
                  <span className="font-mono text-base font-semibold text-white tabular-nums">
                    ${monthlyWager.toLocaleString('en-US')}
                  </span>
                </div>
                <input
                  id="wager-range"
                  type="range"
                  min={2500}
                  max={500000}
                  step={2500}
                  value={monthlyWager}
                  onChange={(e) => setMonthlyWager(Number(e.target.value))}
                  className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#0B111A] accent-[#1475E1]"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {VOLUME_PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setMonthlyWager(preset)}
                      className={`min-h-[34px] rounded-md border px-2.5 py-1 font-mono text-xs transition-colors duration-150 tabular-nums cursor-pointer ${
                        monthlyWager === preset
                          ? 'border-[#1475E1] bg-[#1475E1]/15 text-white'
                          : 'border-white/10 bg-[#0B111A] text-slate-400 hover:text-white'
                      }`}
                    >
                      ${preset.toLocaleString('en-US')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output Readout */}
              <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <div className="text-xs text-slate-400">Estimated Instant Rakeback</div>
                  <div className="mt-1 font-mono text-2xl font-bold text-white tabular-nums">
                    ${estimates.instantRakeback.toFixed(2)}
                    <span className="text-xs font-normal text-slate-400"> / mo</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">VIP Reward Track</div>
                  <div className="mt-1 text-sm font-semibold text-[#4DA3FF]">
                    {estimates.nextTier}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#1475E1] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D82F5] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1]"
                >
                  <span>Start Playing &amp; Winning</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
