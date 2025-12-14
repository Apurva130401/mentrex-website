import Link from "next/link";
import { Twitter, Github, Disc, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-zinc-900">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center font-bold text-black text-lg font-heading">
                                M
                            </div>
                            <span className="font-heading font-bold text-xl text-white">MENTREX</span>
                        </div>
                        <p className="text-zinc-500 text-sm max-w-md">
                            The advanced AI coding agent that plans, writes, and fixes code alongside you.
                            Built for developers who value speed and autonomy.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#features" className="hover:text-amber-500 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-amber-500 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">Enterprise</Link></li>
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Community</h4>
                        <ul className="space-y-2 text-sm text-zinc-500">
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">Discord</Link></li>
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">GitHub</Link></li>
                            <li><Link href="#" className="hover:text-amber-500 transition-colors">Docs</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-zinc-600 text-sm">
                        © {new Date().getFullYear()} Mentrex AI Inc. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
