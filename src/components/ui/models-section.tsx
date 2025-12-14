"use client";

import { motion } from "framer-motion";

const models = [
    { name: "Gemini 1.5 Pro", provider: "Google DeepMind", type: "Reasoning" },
    { name: "GPT-4o", provider: "OpenAI", type: "Multimodal" },
    { name: "Claude 3.5 Sonnet", provider: "Anthropic", type: "Coding" },
    { name: "Llama 3", provider: "Meta", type: "Open Source" },
    { name: "DeepSeek Coder", provider: "DeepSeek", type: "Specialized" },
];

export function ModelsSection() {
    return (
        <section id="models" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-900/40 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4 font-heading">
                        Powered by the <span className="text-gradient">Best in Class</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Mentrex orchestrates the world's most capable models to solve your hardest problems, automatically selecting the right tool for the job.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {models.map((model, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass px-6 py-4 rounded-full flex items-center gap-4 hover:bg-white/5 transition-all cursor-default border border-white/5"
                        >
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                            <div>
                                <span className="text-white font-medium mr-2">{model.name}</span>
                                <span className="text-xs text-zinc-500 uppercase tracking-wider">{model.provider}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
