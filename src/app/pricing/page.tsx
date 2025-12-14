"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Check, Zap, Cpu, Lock } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
    {
        name: "Starter",
        price: "0",
        description: "Perfect for trying out agentic capabilities.",
        features: ["500 Free Credits/mo", "Access to Gemini 1.5 Pro", "Basic Autonomy", "Community Support"],
        highlight: false
    },
    {
        name: "Pro",
        price: "29",
        description: "For serious developers building daily.",
        features: ["5,000 Credits/mo", "Access to GPT-4o & Claude 3.5", "Full Autonomy Access", "Private Sandboxes", "Priority Support"],
        highlight: true
    },
    {
        name: "Team",
        price: "99",
        description: "Scale agentic workflows across your org.",
        features: ["20,000 Credits/mo", "Fine-tuned Custom Models", "SSO & Audit Logs", "Dedicated Account Manager"],
        highlight: false
    }
];

const tokenRates = [
    { model: "Gemini 1.5 Pro", input: "0.5 Credits / 1k toks", output: "1.5 Credits / 1k toks" },
    { model: "GPT-4o", input: "5 Credits / 1k toks", output: "15 Credits / 1k toks" },
    { model: "Claude 3.5 Sonnet", input: "3 Credits / 1k toks", output: "15 Credits / 1k toks" },
    { model: "Llama 3 70B", input: "0.8 Credits / 1k toks", output: "1 Credit / 1k toks" },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <Navbar />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        Simple, Transparent <span className="text-gradient">Pricing</span>
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Pay for what you use. No hidden fees. Upgrade as you scale.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-32">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${tier.highlight ? 'border-amber-500 bg-zinc-900/50 shadow-2xl shadow-amber-900/20' : 'border-zinc-800 bg-zinc-950'} flex flex-col`}
                        >
                            {tier.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-amber-500 to-orange-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                            <div className="flex items-end gap-1 mb-4">
                                <span className="text-4xl font-bold text-white">${tier.price}</span>
                                <span className="text-zinc-500 mb-1">/month</span>
                            </div>
                            <p className="text-sm text-zinc-400 mb-8">{tier.description}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                                        <Check size={16} className="text-emerald-500" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-bold transition-all ${tier.highlight ? 'bg-amber-500 hover:bg-amber-600 text-black' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}>
                                Choose {tier.name}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Token Info Section */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading mb-4">Understanding <span className="text-amber-500">Credits</span></h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Our agent uses tokens to process your code. We normalize these costs into generic "Credits" so you can switch models seamlessly without worrying about complex math.
                        </p>
                    </div>

                    <div className="glass rounded-2xl overflow-hidden border border-zinc-800">
                        <div className="grid grid-cols-3 p-4 bg-zinc-900/80 border-b border-zinc-800 font-medium text-zinc-400 text-sm">
                            <div>AI Model</div>
                            <div>Input Cost</div>
                            <div>Output Cost</div>
                        </div>
                        {tokenRates.map((rate, i) => (
                            <div key={i} className="grid grid-cols-3 p-4 border-b border-white/5 text-sm hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-2 font-medium text-white">
                                    <Cpu size={14} className="text-amber-500" />
                                    {rate.model}
                                </div>
                                <div className="text-zinc-400">{rate.input}</div>
                                <div className="text-zinc-400">{rate.output}</div>
                            </div>
                        ))}
                        <div className="p-6 bg-zinc-900/30 text-center text-xs text-zinc-500">
                            * 1 Credit ≈ $0.001 USD. Prices subject to change based on provider API costs.
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
