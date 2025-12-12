"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Activity,
    Zap,
    BarChart3,
    Settings,
    Search,
    Bell
} from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const navItems = [
        {
            label: "Network Health",
            href: "/dashboard/network",
            icon: Activity,
        },
        {
            label: "Work Orders",
            href: "/dashboard/work-orders",
            icon: Zap,
        },
        {
            label: "Forecast",
            href: "/dashboard/forecast",
            icon: BarChart3,
        },
    ];

    return (
        <div className="flex h-screen w-full bg-[#0a0a0a] text-slate-100 font-sans selection:bg-sky-500/30">
            {/* Sidebar */}
            <aside className="flex w-64 flex-col border-r border-slate-800 bg-slate-950/50 backdrop-blur-xl">
                <div className="flex h-16 items-center border-b border-slate-800 px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-white hover:opacity-80 transition-opacity">
                        <span className="h-4 w-1 bg-sky-500 rounded-full" />
                        TeslaGrid
                    </Link>
                </div>

                <nav className="flex-1 space-y-1 p-4">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all ${isActive
                                    ? "bg-sky-500/10 text-sky-400"
                                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                                    }`}
                            >
                                <item.icon className={`h-4 w-4 ${isActive ? "text-sky-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link
                        href="/"
                        className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-900 hover:text-slate-300 transition-colors"
                    >
                        <Settings className="h-4 w-4" />
                        Settings
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/50 px-8 backdrop-blur-sm">
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            Network Online
                        </span>
                        <span className="text-slate-700">|</span>
                        <span>Global Fleet: 98.2% Uptime</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/case-study"
                            className="text-sm font-bold text-slate-300 hover:text-white transition-colors"
                        >
                            Case Study
                        </Link>
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search station or ID..."
                                className="h-9 w-64 rounded-full border border-slate-800 bg-slate-900 pl-9 pr-4 text-xs text-slate-300 placeholder:text-slate-600 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50"
                            />
                        </div>
                        <button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-900 hover:text-slate-200">
                            <Bell className="h-4 w-4" />
                            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-sky-500 ring-2 ring-slate-950"></span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500"></div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-950 to-[#050505] p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
