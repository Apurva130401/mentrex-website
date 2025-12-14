"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Layers, Zap, ShieldCheck, Terminal, Smartphone, Database, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Deep Context Understanding",
        description: "Mentrex reads your entire codebase, not just the open file. It understands architecture, dependencies, and business logic.",
        icon: BrainCircuit,
        colSpan: "lg:col-span-2",
        bg: "bg-gradient-to-br from-zinc-900 to-black"
    },
    {
        title: "Multi-File Editing",
        description: "Orchestrate complex refactors across dozens of files simultaneously.",
        icon: Layers,
        colSpan: "lg:col-span-1",
        bg: "bg-zinc-900/50"
    },
    {
        title: "Autonomous Execution",
        description: "Give a high-level goal, and Mentrex breaks it down, runs terminal commands, installs packages, and writes code.",
        icon: Zap,
        colSpan: "lg:col-span-1",
        bg: "bg-zinc-900/50"
    },
    {
        title: "Terminal Integration",
        description: "Executes commands directly in your shell. No more copying commands back and forth.",
        icon: Terminal,
        colSpan: "lg:col-span-2",
        bg: "bg-gradient-to-bl from-zinc-900 to-black"
    }
];

export function Features() {
    return (
        <section id="features" className="py-32 relative bg-black">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                        Not Just a Chatbot. <br />
                        <span className="text-gradient">A Senior Engineer.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Stop chatting with your AI. Start collaborating with an agent that can actually do the work.
                        Mentrex bridges the gap between thought and execution.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl border border-zinc-800 p-8 hover:border-amber-500/30 transition-all duration-500",
                                feature.colSpan,
                                feature.bg
                            )}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.05),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-500 leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Stat Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="lg:col-span-3 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 flex flex-col md:flex-row items-center justify-between gap-8"
                    >
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-white mb-2">Ready to accelerate?</h3>
                            <p className="text-zinc-500">Join 10,000+ developers building with Mentrex.</p>
                        </div>
                        <div className="flex gap-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">10x</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">Faster</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">Secure</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-xs text-zinc-500 uppercase tracking-wider">Uptime</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
