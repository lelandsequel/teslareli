"use client";

import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine
} from "recharts";
import { Calendar, AlertTriangle, TrendingUp } from "lucide-react";

const data = [
    { day: "Mon", capacity: 5000, demand: 2400 },
    { day: "Tue", capacity: 5000, demand: 2200 },
    { day: "Wed", capacity: 5000, demand: 3100 },
    { day: "Thu", capacity: 5000, demand: 3800 },
    { day: "Fri", capacity: 5000, demand: 4600 },
    { day: "Sat", capacity: 5000, demand: 5800 },
    { day: "Sun", capacity: 5000, demand: 5100 },
    { day: "Mon", capacity: 5000, demand: 2800 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border border-slate-800 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md">
                <p className="mb-2 text-xs font-semibold text-slate-300">{label}</p>
                <p className="text-sm font-bold text-sky-400">Demand: {payload[0].value}</p>
                <p className="text-sm font-bold text-slate-500">Capacity: {payload[1].value}</p>
            </div>
        );
    }
    return null;
};

export default function ForecastPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-50">Demand Forecast</h1>
                    <p className="text-sm text-slate-400">7-day regional capacity outlook.</p>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-300">
                    <Calendar className="h-4 w-4 text-slate-500" />
                    <span>Next 7 Days</span>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="font-semibold text-slate-200">Regional Load vs Capacity</h3>
                        <div className="flex items-center gap-4 text-xs">
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-sky-500"></span>
                                Predicted Demand
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-slate-600"></span>
                                Max Capacity
                            </span>
                        </div>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                                <XAxis
                                    dataKey="day"
                                    stroke="#94a3b8"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="#94a3b8"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `${value / 1000}k`}
                                />
                                <Tooltip content={<CustomTooltip />} />
                                <ReferenceLine y={5000} stroke="#475569" strokeDasharray="3 3" />
                                <Area
                                    type="monotone"
                                    dataKey="demand"
                                    stroke="#0ea5e9"
                                    strokeWidth={2}
                                    fillOpacity={1}
                                    fill="url(#colorDemand)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="capacity"
                                    stroke="transparent"
                                    fill="transparent"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="mt-0.5 h-5 w-5 text-rose-400" />
                            <div>
                                <h4 className="font-semibold text-rose-400">Congestion Risk: Saturday</h4>
                                <p className="mt-1 text-xs text-rose-200/80">
                                    Predicted demand exceeds comfortable capacity threshold (90%) in 2 zones.
                                </p>
                                <button className="mt-3 rounded-lg bg-rose-500/20 px-3 py-1.5 text-xs font-medium text-rose-300 hover:bg-rose-500/30">
                                    View Mitigation Options
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                        <h4 className="font-semibold text-slate-200 mb-3">Event Impact</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 rounded-lg bg-slate-900/50 p-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 font-bold text-xs">
                                    -12%
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-300">Off-Peak Pricing Effect</p>
                                    <p className="text-[0.65rem] text-slate-500">Projected load shift</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 rounded-lg bg-slate-900/50 p-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 font-bold text-xs">
                                    +15%
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-slate-300">Holiday Travel</p>
                                    <p className="text-[0.65rem] text-slate-500">Historical uplift applied</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
