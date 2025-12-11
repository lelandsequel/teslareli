"use client";

import React from "react";
import {
    AlertTriangle,
    Clock,
    MapPin,
    ArrowRight,
    TrendingUp,
    History
} from "lucide-react";

interface WorkOrder {
    id: string;
    station: string;
    issue: string;
    impactScore: number;
    minutesSaved: number;
    slaBreachIn: string;
    technician: string | null;
    status: "pending" | "assigned" | "in_progress";
}

const mockOrders: WorkOrder[] = [
    { id: "WO-2941", station: "Daly City - Serramonte", issue: "Cabinet 2 Thermal Fault", impactScore: 98, minutesSaved: 14500, slaBreachIn: "4 hours", technician: null, status: "pending" },
    { id: "WO-2911", station: "Palo Alto - Stanford", issue: "Stall 1A & 1B Ground Fault", impactScore: 85, minutesSaved: 8200, slaBreachIn: "22 hours", technician: "M. Chen", status: "assigned" },
    { id: "WO-2955", station: "Fremont - Hub", issue: "Display unresponsive", impactScore: 45, minutesSaved: 2100, slaBreachIn: "2 days", technician: null, status: "pending" },
    { id: "WO-2902", station: "San Mateo - BP", issue: "Cleaning required", impactScore: 12, minutesSaved: 0, slaBreachIn: "4 days", technician: null, status: "pending" },
];

export default function WorkOrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-50">Work Order Queue</h1>
                    <p className="text-sm text-slate-400">Prioritized by customer-minutes-saved.</p>
                </div>
                <div className="flex gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 text-xs text-sky-400">
                        <TrendingUp className="h-4 w-4" />
                        <span>Impact Model v4.2 active</span>
                    </div>
                </div>
            </div>

            <div className="grid gap-4">
                {mockOrders.map((order, idx) => (
                    <div
                        key={order.id}
                        className="group relative flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition-all hover:border-sky-500/30 hover:bg-slate-900/50 md:flex-row md:items-center"
                    >
                        {/* Rank / Score */}
                        <div className="flex w-full items-center justify-between md:w-48 md:flex-col md:items-start md:justify-center md:gap-1">
                            <div className="flex items-center gap-3">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-300">
                                    {idx + 1}
                                </span>
                                <span className="text-2xl font-bold text-sky-400">{order.impactScore}</span>
                            </div>
                            <p className="text-[0.65rem] uppercase tracking-wider text-slate-500">Impact Score</p>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-slate-200">{order.station}</h3>
                                <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[0.65rem] text-slate-400">{order.id}</span>
                            </div>
                            <p className="text-sm text-slate-400">{order.issue}</p>
                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                <span className="flex items-center gap-1">
                                    <AlertTriangle className="h-3 w-3" />
                                    SLA Breach: <span className="text-rose-400">{order.slaBreachIn}</span>
                                </span>
                                <span className="flex items-center gap-1">
                                    <History className="h-3 w-3" />
                                    Est. Minutes Saved: {order.minutesSaved.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-3 md:w-48">
                            {order.technician ? (
                                <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                    <span className="text-xs text-slate-300">{order.technician}</span>
                                </div>
                            ) : (
                                <button className="flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500 transition-colors">
                                    Assign
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            )}
                        </div>

                        {/* Visual Indicator Background */}
                        <div
                            className="absolute bottom-0 left-0 top-0 w-1 rounded-l-xl bg-gradient-to-b from-sky-500 to-indigo-600 opacity-0 transition-opacity group-hover:opacity-100"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
