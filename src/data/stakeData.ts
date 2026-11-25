export const AFFILIATE_URL = 'https://stake.com/?c=bGuR4kDb';

export const HERO_METRICS = [
  {
    label: 'Provably Fair RTP',
    value: 'Up to 99.0%',
    detail: 'Plinko, Mines, Crash, Dice & Limbo',
  },
  {
    label: 'Win & VIP Rewards',
    value: 'Daily + Weekly',
    detail: 'Rakeback, boosts & level-up payouts',
  },
  {
    label: 'Game Library',
    value: '3,000+ Titles',
    detail: 'Originals, slots, live tables & sports',
  },
  {
    label: 'Payout Settlement',
    value: '< 5 Min',
    detail: 'BTC, ETH, USDT, SOL, LTC & TRX',
  },
] as const;

export const PLAY_STEPS = [
  {
    step: '01.',
    title: 'Launch & Create Your Player Account',
    description:
      'Click any Play Now button on this page to open the platform directly and set up your account in under a minute.',
  },
  {
    step: '02.',
    title: 'Play High-RTP Games or Live Sports',
    description:
      'Choose from 99% RTP Originals like Plinko, Mines, Crash, and Dice, high-multiplier slots like Gates of Olympus and Sweet Bonanza, live dealer tables, or live cricket and football odds.',
  },
  {
    step: '03.',
    title: 'Win Payouts & Unlock VIP Rewards',
    description:
      'Every round you play builds VIP progress toward instant rakeback, weekly Saturday boosts, monthly bonus drops, and level-up cash rewards with rapid crypto withdrawals.',
  },
] as const;

export interface GameEntry {
  name: string;
  category: 'originals' | 'slots' | 'live' | 'sports';
  metric: string;
  highlight: string;
}

export const GAME_DIRECTORY: GameEntry[] = [
  { name: 'Plinko', category: 'originals', metric: '99.0% RTP', highlight: 'Up to 1,000x multiplier' },
  { name: 'Mines', category: 'originals', metric: '99.0% RTP', highlight: 'Custom grid risk & instant cashout' },
  { name: 'Crash', category: 'originals', metric: '99.0% RTP', highlight: 'Live rising multiplier curve' },
  { name: 'Dice', category: 'originals', metric: '99.0% RTP', highlight: 'Adjustable win probability' },
  { name: 'Limbo', category: 'originals', metric: '99.0% RTP', highlight: 'Target multiplier up to 1,000,000x' },
  { name: 'Keno', category: 'originals', metric: '99.0% RTP', highlight: 'Classic number grid picks' },
  { name: 'Hilo', category: 'originals', metric: '99.0% RTP', highlight: 'High-low card streak multipliers' },
  { name: 'Dragon Tower', category: 'originals', metric: '98.0% RTP', highlight: 'Multi-level climb rewards' },
  { name: 'Wheel', category: 'originals', metric: '99.0% RTP', highlight: 'Low, medium & high risk segments' },
  { name: 'Gates of Olympus', category: 'slots', metric: '96.5% RTP', highlight: 'Tumble multipliers & free spins' },
  { name: 'Sweet Bonanza', category: 'slots', metric: '96.5% RTP', highlight: 'Cluster pays & 100x bombs' },
  { name: 'Wanted Dead or a Wild', category: 'slots', metric: '96.4% RTP', highlight: 'DuelReels & 12,500x max win' },
  { name: 'Sugar Rush', category: 'slots', metric: '96.5% RTP', highlight: 'Multiplier spot cascades' },
  { name: 'Big Bass Bonanza', category: 'slots', metric: '96.7% RTP', highlight: 'Collector bonus rounds' },
  { name: 'Book of Shadows', category: 'slots', metric: '96.0% RTP', highlight: 'Expanding symbol free spins' },
  { name: 'Live Blackjack', category: 'live', metric: '99.5% RTP', highlight: 'Real-time dealers & side bets' },
  { name: 'Lightning Roulette', category: 'live', metric: '97.3% RTP', highlight: 'Up to 500x lucky numbers' },
  { name: 'Crazy Time', category: 'live', metric: '96.1% RTP', highlight: '4 interactive bonus wheels' },
  { name: 'Speed Baccarat', category: 'live', metric: '98.9% RTP', highlight: '27-second rapid rounds' },
  { name: 'Texas Hold’em Poker', category: 'live', metric: 'Live Table', highlight: 'Player vs dealer ante & trips' },
  { name: 'Cricket & IPL Live', category: 'sports', metric: 'In-Play Odds', highlight: 'Match winner, session & player props' },
  { name: 'Premier & Champions League', category: 'sports', metric: 'Live Cashout', highlight: 'Asian handicap, totals & corners' },
  { name: 'UFC & Boxing Main Cards', category: 'sports', metric: 'Fight Props', highlight: 'KO/TKO, submission & round betting' },
  { name: 'CS2, Dota 2 & Valorant', category: 'sports', metric: 'Esports Live', highlight: 'Map winners & tournament futures' },
];

export interface VipTier {
  id: string;
  name: string;
  wagerRequirement: number;
  wagerLabel: string;
  rakebackRate: number;
  weeklyBoost: string;
  monthlyBonus: string;
  dedicatedHost: string;
  summary: string;
}

export const VIP_TIERS: VipTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    wagerRequirement: 10000,
    wagerLabel: '$10,000',
    rakebackRate: 5,
    weeklyBoost: 'Unlocked',
    monthlyBonus: 'Unlocked',
    dedicatedHost: 'Standard Support',
    summary:
      'Entry tier earned through regular casino or sportsbook play. Activates instant rakeback on every spin or hand plus weekly Saturday boosts and monthly rewards.',
  },
  {
    id: 'silver',
    name: 'Silver',
    wagerRequirement: 50000,
    wagerLabel: '$50,000',
    rakebackRate: 5,
    weeklyBoost: 'Enhanced',
    monthlyBonus: 'Enhanced',
    dedicatedHost: 'Priority Queue',
    summary:
      'Unlocks a dedicated cash level-up reward alongside higher base payouts on weekly boosts and monthly bonus distributions.',
  },
  {
    id: 'gold',
    name: 'Gold',
    wagerRequirement: 100000,
    wagerLabel: '$100,000',
    rakebackRate: 5,
    weeklyBoost: 'High Tier',
    monthlyBonus: 'High Tier',
    dedicatedHost: 'Priority Queue',
    summary:
      'Substantial milestone cash reward upon reaching $100,000 cumulative play across Originals, slots, live dealer games, or sports betting.',
  },
  {
    id: 'platinum',
    name: 'Platinum I–III',
    wagerRequirement: 250000,
    wagerLabel: '$250,000 – $1M',
    rakebackRate: 5,
    weeklyBoost: 'Reload Eligible',
    monthlyBonus: 'Premium Scale',
    dedicatedHost: 'VIP Host (Plat IV+)',
    summary:
      'Adds daily reload rewards based on recent play activity alongside escalating level-up cash payouts credited directly to your balance.',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    wagerRequirement: 25000000,
    wagerLabel: '$25,000,000',
    rakebackRate: 5,
    weeklyBoost: 'Custom Reloads',
    monthlyBonus: 'Bespoke Rewards',
    dedicatedHost: 'Dedicated Personal Host',
    summary:
      'Top-tier concierge status with custom daily reloads, bespoke tournament invitations, and dedicated one-on-one account support.',
  },
];

export const CRYPTO_RAILS = [
  { asset: 'Bitcoin (BTC)', network: 'Bitcoin Network', speed: '~10–20 min' },
  { asset: 'Tether (USDT)', network: 'TRC20 / ERC20 / SOL', speed: '< 2 min' },
  { asset: 'Solana (SOL)', network: 'Solana Mainnet', speed: '< 30 sec' },
  { asset: 'Litecoin (LTC)', network: 'Litecoin Network', speed: '~3–5 min' },
  { asset: 'Ethereum (ETH)', network: 'Ethereum Mainnet', speed: '~2–4 min' },
  { asset: 'Tron (TRX)', network: 'TRC20 Network', speed: '< 1 min' },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'How do I start playing and winning rewards?',
    answer:
      'Click any Play Now button on this page to open the platform, create your player profile, fund your wallet with crypto or supported local payment methods, and launch Plinko, Mines, Crash, slots, live casino tables, or sportsbook markets.',
  },
  {
    question: 'Which games offer the best RTP and multiplier potential?',
    answer:
      'Provably fair Originals such as Plinko, Mines, Crash, Dice, Limbo, Keno, and Hilo deliver up to 99.0% RTP (1% house edge). Video slots including Gates of Olympus, Sweet Bonanza, Sugar Rush, and Wanted Dead or a Wild offer high-volatility bonus rounds up to 12,500x.',
  },
  {
    question: 'How do VIP rakeback and weekly win rewards work?',
    answer:
      'Every bet you place across casino games and sportsbook markets advances your cumulative VIP level. Once you reach Bronze, you unlock instant rakeback on the house edge, Saturday weekly boosts, monthly bonuses, and milestone cash payouts.',
  },
  {
    question: 'How fast are crypto deposits and withdrawals processed?',
    answer:
      'Deposits and withdrawals across Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Solana (SOL), Litecoin (LTC), Dogecoin (DOGE), and Tron (TRX) are automated on-chain with typical payout times under five minutes.',
  },
  {
    question: 'Are Plinko, Mines, Crash, and Dice provably fair?',
    answer:
      'Yes. All Original titles use cryptographic server and client seed pairs so players can independently verify the fairness and randomness of every single round.',
  },
] as const;
