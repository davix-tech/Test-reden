"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  LineChart,
  Sparkles,
} from "lucide-react";

const headlines = [
  "Adaptive Decision Intelligence",
  "AI That Improves Through Outcomes",
  "Live Autonomous Optimization",
];

const events = [
  "Variant B outperformed by 14%",
  "Confidence score recalculated",
  "Homepage CTA automatically updated",
  "Recommendation ranking adjusted",
  "Revenue simulation increased",
  "Experiment traffic redistributed",
];

const products = [
  {
    name: "Neural Headset",
    score: 92,
  },
  {
    name: "Quantum Keyboard",
    score: 81,
  },
  {
    name: "Adaptive Display",
    score: 76,
  },
  {
    name: "AI Sensor Module",
    score: 69,
  },
];

export default function HomePage() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [confidence, setConfidence] = useState(78);
  const [conversion, setConversion] = useState(24);
  const [revenue, setRevenue] = useState(48210);
  const [feed, setFeed] = useState(events.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);

      setConfidence((prev) => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.max(70, Math.min(96, next));
      });

      setConversion((prev) => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1);
        return Math.max(18, Math.min(38, next));
      });

      setRevenue((prev) => prev + Math.floor(Math.random() * 1200));

      setFeed((prev) => {
        const nextEvent =
          events[Math.floor(Math.random() * events.length)];

        return [nextEvent, ...prev].slice(0, 5);
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const rankedProducts = useMemo(() => {
    return [...products].sort((a, b) => b.score - a.score);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.22),transparent_40%)]" />

      {/* NAVBAR */}
      <nav className="relative z-20 flex items-center justify-between px-6 lg:px-16 py-6 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-xl font-semibold tracking-wide">
            Reden
          </span>
        </div>

        <button className="border border-zinc-800 px-5 py-2 rounded-xl text-sm text-zinc-300 hover:bg-zinc-900 transition-colors">
          Open Dashboard
        </button>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-6 lg:px-16 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Reden System Active
            </div>

            <motion.h1
              key={headlineIndex}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight"
            >
              Reden
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {headlines[headlineIndex]}
              </span>
            </motion.h1>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-2xl">
              A live experimental environment where AI observes behavior,
              tests strategies, evaluates outcomes, and improves decisions
              autonomously.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-white text-black px-6 py-3 rounded-2xl font-medium hover:scale-105 transition-transform">
                Launch Intelligence
              </button>

              <button className="border border-zinc-800 px-6 py-3 rounded-2xl text-zinc-300 hover:bg-zinc-900 transition-colors">
                View Experiments
              </button>
            </div>

            {/* METRICS */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div>
                <h3 className="text-4xl font-bold">{confidence}%</h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  AI Confidence
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">{conversion}%</h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  Conversion Lift
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  ${(revenue / 1000).toFixed(1)}K
                </h3>
                <p className="text-zinc-500 mt-2 text-sm">
                  Revenue Simulation
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-zinc-800 bg-zinc-950/80 backdrop-blur-xl p-8 shadow-2xl shadow-indigo-500/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">
                  Reden Control Core
                </h2>

                <p className="text-zinc-500 text-sm mt-1">
                  Live adaptive optimization
                </p>
              </div>

              <div className="flex items-center gap-2 text-green-400 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                Live
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                  <BrainCircuit className="h-4 w-4" />
                  Confidence
                </div>

                <h3 className="text-4xl font-bold">{confidence}%</h3>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
                <div className="flex items-center gap-2 text-zinc-400 text-sm mb-3">
                  <LineChart className="h-4 w-4" />
                  Conversion
                </div>

                <h3 className="text-4xl font-bold">{conversion}%</h3>
              </div>
            </div>

            {/* LIVE FEED */}
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center gap-2 mb-5">
                <Activity className="h-4 w-4 text-cyan-400" />

                <h3 className="font-medium">
                  Live Decision Feed
                </h3>
              </div>

              <div className="space-y-3">
                {feed.map((event, index) => (
                  <motion.div
                    key={index + event}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm text-zinc-300 flex items-center justify-between"
                  >
                    <span>{event}</span>

                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* PRODUCT RANKING */}
            <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
              <div className="flex items-center gap-2 mb-5">
                <Cpu className="h-4 w-4 text-indigo-400" />

                <h3 className="font-medium">
                  Adaptive Product Ranking
                </h3>
              </div>

              <div className="space-y-4">
                {rankedProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">
                        {index + 1}. {product.name}
                      </p>

                      <p className="text-zinc-500 text-sm">
                        Performance Score
                      </p>
                    </div>

                    <div className="text-cyan-400 font-semibold">
                      {product.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIMENT SECTION */}
      <section className="relative z-10 px-6 lg:px-16 pb-24">
        <div className="rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="h-5 w-5 text-indigo-400" />

            <h2 className="text-2xl font-semibold">
              Live Experiment Activity
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                name: "Homepage CTA",
                a: 42,
                b: 58,
              },
              {
                name: "Pricing Layout",
                a: 64,
                b: 36,
              },
              {
                name: "Product Recommendation",
                a: 28,
                b: 72,
              },
            ].map((experiment) => (
              <div
                key={experiment.name}
                className="rounded-2xl border border-zinc-800 bg-black/30 p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">
                    {experiment.name}
                  </h3>

                  <span className="text-green-400 text-sm">
                    Active
                  </span>
                </div>

                <div className="mt-8 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm text-zinc-400 mb-2">
                      <span>Variant A</span>
                      <span>{experiment.a}%</span>
                    </div>

                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500"
                        style={{ width: `${experiment.a}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm text-zinc-400 mb-2">
                      <span>Variant B</span>
                      <span>{experiment.b}%</span>
                    </div>

                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500"
                        style={{ width: `${experiment.b}%` }}
                      />
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-zinc-500 text-sm">
                  Reden automatically reallocates traffic toward
                  higher-performing variants.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
  }
