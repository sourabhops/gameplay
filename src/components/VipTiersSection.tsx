import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AFFILIATE_URL, VIP_TIERS } from '../data/stakeData';

export function VipTiersSection() {
  const [activeTierId, setActiveTierId] = useState<string>(VIP_TIERS[0].id);
  const selectedTier = VIP_TIERS.find((t) => t.id === activeTierId) ?? VIP_TIERS[0];

  return (
    <section id="vip-rewards" className="border-b border-white/[0.07] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Play, Win &amp; Unlock VIP Tier Rewards
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Every wager across Originals, slots, live casino tables, and sports betting advances
              your lifetime VIP tier with zero rank resets.
            </p>
          </div>

          {/* Interactive Segmented Tier Selector */}
          <div
            role="tablist"
            aria-label="VIP Tier Details"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#121B28] p-1"
          >
            {VIP_TIERS.map((tier) => {
              const isSelected = tier.id === selectedTier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTierId(tier.id)}
                  className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1475E1] ${
                    isSelected
                      ? 'bg-[#1475E1] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {tier.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Selected Tier Detail Panel */}
        <div className="mt-8 rounded-xl border border-white/10 bg-[#121B28] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-medium text-[#4DA3FF]">
                VIP Reward Specification
              </div>
              <h3 className="mt-1 text-2xl font-bold text-white">{selectedTier.name} VIP</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {selectedTier.summary}
              </p>
              <div className="mt-4">
                <a
                  href={AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4DA3FF] hover:text-white transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Play &amp; Progress to {selectedTier.name}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
              <div className="border-t border-white/10 pt-3">
                <div className="text-xs text-slate-400">Play Threshold</div>
                <div className="mt-1 font-mono text-base font-semibold text-white tabular-nums">
                  {selectedTier.wagerLabel}
                </div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="text-xs text-slate-400">Rakeback Rate</div>
                <div className="mt-1 font-mono text-base font-semibold text-white tabular-nums">
                  {selectedTier.rakebackRate}% Edge
                </div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="text-xs text-slate-400">Weekly Boost</div>
                <div className="mt-1 text-base font-semibold text-white">
                  {selectedTier.weeklyBoost}
                </div>
              </div>
              <div className="border-t border-white/10 pt-3">
                <div className="text-xs text-slate-400">Account Host</div>
                <div className="mt-1 text-base font-semibold text-white">
                  {selectedTier.dedicatedHost}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Comparison Table */}
        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-[#121B28]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs font-medium text-slate-400">
                <th className="px-6 py-4">VIP Tier</th>
                <th className="px-6 py-4">Cumulative Play</th>
                <th className="px-6 py-4">Instant Rakeback</th>
                <th className="px-6 py-4">Weekly Boost</th>
                <th className="px-6 py-4">Monthly Bonus</th>
                <th className="px-6 py-4">Support Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.07]">
              {VIP_TIERS.map((tier) => (
                <tr
                  key={tier.id}
                  onClick={() => setActiveTierId(tier.id)}
                  className={`cursor-pointer transition-colors duration-150 ${
                    tier.id === selectedTier.id
                      ? 'bg-[#1475E1]/10 text-white'
                      : 'text-slate-300 hover:bg-white/[0.02]'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-white">{tier.name}</td>
                  <td className="px-6 py-4 font-mono tabular-nums">{tier.wagerLabel}</td>
                  <td className="px-6 py-4 font-mono tabular-nums">{tier.rakebackRate}%</td>
                  <td className="px-6 py-4">{tier.weeklyBoost}</td>
                  <td className="px-6 py-4">{tier.monthlyBonus}</td>
                  <td className="px-6 py-4">{tier.dedicatedHost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
