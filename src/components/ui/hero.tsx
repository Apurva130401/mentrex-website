"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal as TerminalIcon, Command, Cpu, Play } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
    const [typedText, setTypedText] = useState("");
    const fullText = "Create a full-stack Next.js app with authentication...";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[110vh] flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black">

            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        <span className="text-xs font-medium text-amber-200/80 tracking-wide uppercase">Introducing Mentrex v2.0</span>
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto text-5xl md:text-7xl font-bold font-heading tracking-tight leading-[1.1] mb-8"
                >
                    <span className="text-white">Your AI Co-Founder for</span> <br />
                    <span className="text-gradient-amber glow-text-amber">Complex Software</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed"
                >
                    Mentrex isn't just an autocomplete. It's an autonomous coding agent that plans, builds, and deploys full-stack applications directly in your IDE.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-20"
                >
                    <Link
                        href="/login"
                        className="px-8 py-4 rounded-xl bg-[#f59e0b] text-black font-bold text-lg hover:bg-[#d97706] transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.6)]"
                    >
                        <TerminalIcon size={20} className="stroke-[2.5px]" />
                        Install CLI
                    </Link>
                    <Link
                        href="https://vscode.dev" // Placeholder
                        className="px-8 py-4 rounded-xl glass text-white font-medium hover:bg-white/5 border border-white/10 transition-colors flex items-center gap-2"
                    >
                        <Command size={20} />
                        Open in VS Code
                    </Link>
                </motion.div>

                {/* IDE Mockup / Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-5xl mx-auto perspective-1000"
                >
                    <div className="relative rounded-xl border border-white/10 bg-[#0f0f11] shadow-2xl overflow-hidden glass-card">
                        {/* IDE Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a0b]">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5 s mr-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <span className="text-xs text-zinc-500 font-mono">mentrex-agent — node </span>
                            </div>
                            <div className="text-xs text-zinc-600 font-mono">
                                Connected to Localhost:3000
                            </div>
                        </div>

                        {/* IDE Body */}
                        <div className="grid md:grid-cols-[250px_1fr] h-[400px] md:h-[500px]">
                            {/* Sidebar */}
                            <div className="hidden md:block border-r border-white/5 bg-[#0a0a0b]/50 p-4 space-y-4">
                                <div className="space-y-2">
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Explorer</div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-400 pl-2 border-l border-amber-500/50 bg-amber-500/5 py-1">
                                        <Cpu size={14} className="text-amber-500" />
                                        <span>layout.tsx</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-500 pl-2">
                                        <span className="w-3.5" />
                                        <span>page.tsx</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-zinc-500 pl-2">
                                        <span className="w-3.5" />
                                        <span>globals.css</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5">
                                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Agent Plan</div>
                                    <div className="space-y-2">
                                        <div className="flex gap-2 items-start text-xs text-zinc-400">
                                            <div className="mt-0.5 w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center shrink-0"><CheckIcon size={8} className="text-green-500" /></div>
                                            <span>Analyze requirements</span>
                                        </div>
                                        <div className="flex gap-2 items-start text-xs text-white">
                                            <div className="mt-0.5 w-3 h-3 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /></div>
                                            <span>Generate authentication</span>
                                        </div>
                                        <div className="flex gap-2 items-start text-xs text-zinc-600">
                                            <div className="mt-0.5 w-3 h-3 rounded-full border border-zinc-700 shrink-0" />
                                            <span>Run integration tests</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Code Area */}
                            <div className="p-6 font-mono text-sm overflow-hidden relative">
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f0f11]/90 pointer-events-none z-10" />

                                <div className="flex gap-4">
                                    <div className="flex flex-col text-right text-zinc-700 select-none">
                                        {Array.from({ length: 20 }).map((_, i) => (
                                            <span key={i}>{i + 1}</span>
                                        ))}
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="text-purple-400">import <span className="text-blue-400">{`{ auth }`}</span> from <span className="text-green-400">"@/lib/auth"</span>;</div>
                                        <div className="text-purple-400">import <span className="text-blue-400">{`{ redirect }`}</span> from <span className="text-green-400">"next/navigation"</span>;</div>
                                        <br />
                                        <div className="text-purple-400">export default async function <span className="text-yellow-400">Dashboard</span>() {`{`}</div>
                                        <div className="pl-4 text-zinc-400 italic">// Mentrex is analyzing session state...</div>
                                        <div className="pl-4 text-purple-400">const <span className="text-blue-400">session</span> = await <span className="text-yellow-400">auth</span>();</div>
                                        <div className="pl-4 text-purple-400">if <span className="text-yellow-400">(!session)</span> {`{`}</div>
                                        <div className="pl-8 text-yellow-400">redirect<span className="text-purple-400">(</span><span className="text-green-400">"/login"</span><span className="text-purple-400">)</span>;</div>
                                        <div className="pl-4 text-purple-400">{`}`}</div>
                                        <br />
                                        <div className="pl-4 text-zinc-500">
                                            <span className="text-amber-500">➤ </span>
                                            {typedText}
                                            <span className="inline-block w-2 h-4 bg-amber-500 align-middle ml-1 animate-pulse" />
                                        </div>
                                        <div className="pl-4 text-zinc-400">return (</div>
                                        <div className="pl-8 text-blue-400">&lt;div className="p-8"&gt;</div>
                                        <div className="pl-12 text-blue-400">&lt;h1&gt;<span className="text-white">Welcome back, </span>{`{session.user.name}`}&lt;/h1&gt;</div>
                                        <div className="pl-8 text-blue-400">&lt;/div&gt;</div>
                                        <div className="pl-4 text-zinc-400">);</div>
                                        <div className="text-purple-400">{`}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shadow/Glow under the mock */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[100px] bg-amber-500/20 blur-[100px] -z-10" />
                </motion.div>

            </div>
        </section>
    );
}

function CheckIcon({ className, size }: { className?: string, size?: number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
    )
}
