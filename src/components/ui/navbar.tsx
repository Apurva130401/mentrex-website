"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Enterprise", href: "#enterprise" },
    { name: "Docs", href: "#docs" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 px-4",
            )}
        >
            <div
                className={cn(
                    "relative w-full max-w-5xl flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border",
                    scrolled
                        ? "bg-zinc-900/80 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-black text-lg font-heading shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                        M
                    </div>
                    <span className="font-heading font-bold text-lg tracking-tight text-white group-hover:text-amber-500 transition-colors">
                        MENTREX
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-full border border-white/5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/login"
                        className="group flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black bg-white hover:bg-zinc-200 rounded-full transition-colors"
                    >
                        <span>Start Coding</span>
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-4 right-4 p-4 rounded-2xl bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-4 fade-in duration-200 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 text-lg font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-white/5 my-2" />
                    <Link
                        href="/login"
                        className="w-full py-3 text-center font-bold text-black bg-amber-500 rounded-xl hover:bg-amber-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Start Bundle
                    </Link>
                </div>
            )}
        </nav>
    );
}
