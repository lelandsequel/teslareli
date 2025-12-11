"use client";

import React, { useState } from "react";
import {
    Filter,
    Map as MapIcon,
    List,
    MoreHorizontal,
    AlertCircle,
    CheckCircle2,
    Clock,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";

type StationStatus = "operational" | "degraded" | "offline" | "congestion";

interface Station {
    id: string;
    name: string;
    region: string;
    status: StationStatus;
    uptime: number;
    utilization: number;
    trend: "up" | "down" | "stable";
    activeAlerts: number;
}

const mockStations: Station[] = [
    { id: "S001", name: "Daly City - Serramonte", region: "NorCal", status: "congestion", uptime: 99.9, utilization: 92, trend: "up", activeAlerts: 1 },
    { id: "S002", name: "San Mateo - Bridgepointe", region: "NorCal", status: "operational", uptime: 99.8, utilization: 65, trend: "stable", activeAlerts: 0 },
    { id: "S003", name: "Palo Alto - Stanford", region: "NorCal", status: "degraded", uptime: 91.5, utilization: 45, trend: "down", activeAlerts: 2 },
    { id: "S004", name: "Mountain View - Showplace", region: "NorCal", status: "operational", uptime: 99.9, utilization: 78, trend: "up", activeAlerts: 0 },
    { id: "S005", name: "Santa Clara - Square", region: "NorCal", status: "offline", uptime: 0, utilization: 0, trend: "stable", activeAlerts: 3 },
    { id: "S006", name: "Fremont - Hub", region: "EastBay", status: "operational", uptime: 99.5, utilization: 55, trend: "down", activeAlerts: 0 },
];

const StatusBadge = ({ status }: { status: StationStatus }) => {
    const styles = {
        operational: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        degraded: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        offline: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        congestion: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    };

    const labels = {
        operational: "Operational",
        degraded: "Degraded",
        offline: "Offline",
        congestion: "High Load",
    };

    return (
        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${styles[status]}`}>
            {labels[status]}
        </span>
    );
};

export default function NetworkPage() {
    const [viewMode, setViewMode] = useState<"list" | "map">("list");

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-50">Network Health</h1>
                    <p className="text-sm text-slate-400">Real-time status of 6 monitored stations in NorCal region.</p>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">
                        <Filter className="h-4 w-4" />
                        Filter
                    </button>
                    <div className="flex rounded-lg border border-slate-800 bg-slate-900 p-1">
                        <button
                            onClick={() => setViewMode("list")}
                            className={`rounded px-2 py-1 ${viewMode === "list" ? "bg-slate-700 text-slate-100" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            <List className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setViewMode("map")}
                            className={`rounded px-2 py-1 ${viewMode === "map" ? "bg-slate-700 text-slate-100" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            <MapIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            {viewMode === "list" ? (
                <div className="rounded-xl border border-slate-800 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
                    <table className="w-full text-left text-sm text-slate-400">
                        <thead className="bg-slate-900/50 text-xs uppercase font-semibold text-slate-200">
                            <tr>
                                <th className="px-6 py-4">Station Name</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Utilization</th>
                                <th className="px-6 py-4">Uptime (24h)</th>
                                <th className="px-6 py-4">Active Alerts</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {mockStations.map((station) => (
                                <tr key={station.id} className="hover:bg-slate-900/40 transition-colors">
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-slate-200">{station.name}</p>
                                        <p className="text-xs text-slate-500">{station.region} • {station.id}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={station.status} />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-800">
                                                <div
                                                    className={`h-full rounded-full ${station.utilization > 90 ? "bg-purple-500" : "bg-sky-500"}`}
                                                    style={{ width: `${station.utilization}%` }}
                                                />
                                            </div>
                                            <span className="text-xs">{station.utilization}%</span>
                                            {station.trend === "up" && <ArrowUpRight className="h-3 w-3 text-rose-400" />}
                                            {station.trend === "down" && <ArrowDownRight className="h-3 w-3 text-emerald-400" />}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono text-slate-300">
                                        {station.uptime.toFixed(1)}%
                                    </td>
                                    <td className="px-6 py-4">
                                        {station.activeAlerts > 0 ? (
                                            <span className="flex items-center gap-1.5 text-rose-400">
                                                <AlertCircle className="h-4 w-4" />
                                                <span className="font-medium">{station.activeAlerts} Critical</span>
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-1.5 text-slate-600">
                                                <CheckCircle2 className="h-4 w-4" />
                                                <span>Healthy</span>
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-slate-500 hover:text-slate-200">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex h-[400px] items-center justify-center rounded-xl border border-slate-800 bg-slate-900/20 text-slate-500">
                    <div className="text-center">
                        <MapIcon className="mx-auto h-12 w-12 opacity-50 mb-4" />
                        <p>Map view is not available in demo mode.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
