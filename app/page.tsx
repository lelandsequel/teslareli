"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PillProps = {
  label: string;
};

type StatProps = {
  label: string;
  value: string;
  sublabel?: string;
};

type FlowProps = {
  title: string;
  goal: string;
  steps: string[];
  outcome: string;
};

const Pill: React.FC<PillProps> = ({ label }) => (
  <span className="inline-flex items-center rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
    {label}
  </span>
);

const StatCard: React.FC<StatProps> = ({ label, value, sublabel }) => (
  <div className="flex flex-col gap-1 rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 shadow-sm shadow-black/60">
    <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-400">
      {label}
    </p>
    <p className="text-lg font-semibold text-slate-50">{value}</p>
    {sublabel && (
      <p className="text-xs leading-snug text-slate-400">{sublabel}</p>
    )}
  </div>
);

const FlowCard: React.FC<FlowProps> = ({ title, goal, steps, outcome }) => (
  <div className="flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-black/60">
    <div className="mb-2">
      <p className="text-sm font-semibold text-slate-50">{title}</p>
      <p className="text-xs text-slate-400">Goal: {goal}</p>
    </div>
    <div className="mt-3 space-y-1.5 text-xs text-slate-300">
      {steps.map((step, idx) => (
        <div key={step} className="flex gap-2">
          <span className="mt-[2px] flex h-4 w-4 items-center justify-center rounded-full border border-slate-600 text-[0.65rem] text-slate-200">
            {idx + 1}
          </span>
          <span>{step}</span>
        </div>
      ))}
    </div>
    <p className="mt-3 border-t border-slate-800 pt-3 text-xs text-sky-300">
      Outcome: {outcome}
    </p>
  </div>
);

const Section: React.FC<{
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, eyebrow, title, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mb-4">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-xl font-semibold text-slate-50 md:text-2xl">
        {title}
      </h2>
    </div>
    <div className="space-y-3 text-sm text-slate-300 md:text-[0.95rem]">
      {children}
    </div>
  </section>
);

const QuickNav: React.FC = () => {
  const items = [
    { id: "problem", label: "Problem" },
    { id: "personas", label: "Personas" },
    { id: "solution", label: "Solution" },
    { id: "flows", label: "Key Flows" },
    { id: "screens", label: "What the Demo Shows" },
    { id: "impact", label: "Impact" },
    { id: "role", label: "My Role" },
  ];

  return (
    <nav className="no-scrollbar mt-6 flex gap-2 overflow-x-auto rounded-full border border-slate-800 bg-slate-950/90 px-3 py-2 text-[0.7rem] text-slate-300">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="inline-flex items-center rounded-full px-3 py-1 hover:bg-slate-800/80 hover:text-sky-200 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-6 lg:px-8">
        {/* Hero */}
        <header className="grid gap-8 md:grid-cols-[minmax(0,2.1fr)_minmax(0,1.5fr)] md:items-start">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Pill label="Internal PM Case Study" />
              <Pill label="Supercharger & Fleet Reliability" />
              <Pill label="Tesla (hypothetical)" />
            </div>

            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                TeslaGrid — Supercharger Network &amp; Fleet Reliability
              </h1>
              <p className="mt-3 max-w-xl text-sm text-slate-300 md:text-[0.95rem]">
                TeslaGrid is an internal-facing reliability cockpit designed for
                Tesla&apos;s charging and fleet operations teams. It surfaces
                real-time network health, predicts congestion and outages, and
                ranks work so teams fix what hurts drivers the most.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
                >
                  Launch Live Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid gap-3 text-xs text-slate-300 md:grid-cols-3">
              <StatCard
                label="Primary Problem"
                value="Unpredictable charging experience"
                sublabel="Outages and congestion erode trust in the Supercharger network."
              />
              <StatCard
                label="Who I Designed For"
                value="Charging & Fleet Ops"
                sublabel="Network ops, maintenance schedulers, and regional leads."
              />
              <StatCard
                label="My Role"
                value="Product Manager"
                sublabel="Discovery → framing → flows → success metrics; built as a live demo."
              />
            </div>

            <p className="text-[0.75rem] text-slate-400">
              This app is built as a portfolio artifact. Names and numbers are
              illustrative, but the product thinking and flows reflect how I
              would approach an internal reliability tool at Tesla.
            </p>
          </div>

          <aside className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-black/70">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              How to read this page
            </p>
            <p className="text-xs text-slate-300">
              In about a minute, you should be able to understand:
            </p>
            <ul className="mt-1 space-y-1.5 text-xs text-slate-300">
              <li className="flex gap-2">
                <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                <span>The reliability problem TeslaGrid is solving.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                <span>
                  Who uses it and what the core flows look like in the live
                  demo.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                <span>How I approached the work as a product manager.</span>
              </li>
            </ul>
            <p className="mt-3 text-[0.7rem] text-slate-400">
              Use the quick nav below to jump between sections, or explore the
              live demo directly from JourdanLabs.
            </p>
          </aside>
        </header>

        <QuickNav />

        {/* Problem */}
        <Section
          id="problem"
          eyebrow="Context"
          title="The charging reliability and network ops problem"
        >
          <p>
            Tesla&apos;s brand promise is built on confidence: drivers trust
            that the car will get them from A to B without drama. But that
            promise depends on a global Supercharger network that can quietly
            fail—through outages, congestion, or slow repairs. When reliability
            is opaque, teams are stuck firefighting instead of strategically
            managing the network.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Pain points today
              </p>
              <ul className="space-y-1.5 text-xs">
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-rose-400" />
                  <span>
                    Network health is fragmented across monitoring tools,
                    tickets, and spreadsheets.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-rose-400" />
                  <span>
                    Maintenance prioritization is reactive instead of driven by
                    customer impact and fleet behavior.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-rose-400" />
                  <span>
                    Congestion is discovered after the fact, not forecasted
                    around holidays or events.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-rose-400" />
                  <span>
                    Ops teams can&apos;t easily answer &quot;What&apos;s
                    breaking the experience this week?&quot;
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                What TeslaGrid aims to do
              </p>
              <ul className="space-y-1.5 text-xs text-emerald-50">
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-emerald-400" />
                  <span>
                    Provide a single, ranked view of network health and
                    incidents across the Supercharger network.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-emerald-400" />
                  <span>
                    Predict congestion and outages before they materially impact
                    driver experience.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-emerald-400" />
                  <span>
                    Prioritize work orders by &quot;customer minutes saved&quot;
                    instead of first-in-first-out.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-[5px] h-[3px] w-[3px] rounded-full bg-emerald-400" />
                  <span>
                    Give ops, regional leads, and support a shared source of
                    truth when things go wrong.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Personas */}
        <Section id="personas" eyebrow="Users" title="Who TeslaGrid is for">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs">
              <p className="text-sm font-semibold text-slate-50">
                Network Operations Lead
              </p>
              <p className="text-[0.7rem] text-slate-400">
                Owns overall Supercharger reliability metrics.
              </p>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="mb-1 font-semibold text-slate-200">Needs</p>
                  <ul className="space-y-1">
                    <li className="flex gap-2">
                      <span className="mt-[4px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                      <span>Single view of station health and trends.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[4px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                      <span>Confidence that teams are fixing the right work.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-200">
                    What TeslaGrid gives them
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    A ranked backlog of incidents by customer impact, with
                    forecast overlays for upcoming risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs">
              <p className="text-sm font-semibold text-slate-50">
                Maintenance Scheduler
              </p>
              <p className="text-[0.7rem] text-slate-400">
                Plans field technician routes across regions.
              </p>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="mb-1 font-semibold text-slate-200">Needs</p>
                  <ul className="space-y-1">
                    <li className="flex gap-2">
                      <span className="mt-[4px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                      <span>Clarity on which sites matter most today.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[4px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                      <span>Tools to sequence work without guesswork.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-200">
                    What TeslaGrid gives them
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    A prioritized job list with customer-minutes-saved, travel
                    constraints, and SLAs baked in.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-xs">
              <p className="text-sm font-semibold text-slate-50">
                Regional &amp; Fleet Leads
              </p>
              <p className="text-[0.7rem] text-slate-400">
                Own experience in a geography or fleet segment.
              </p>
              <div className="mt-2 space-y-2">
                <div>
                  <p className="mb-1 font-semibold text-slate-200">Needs</p>
                  <ul className="space-y-1">
                    <li className="flex gap-2">
                      <span className="mt-[4px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                      <span>Answers to “what broke and where?” in minutes.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[4px] h-[3px] w-[3px] rounded-full bg-sky-400" />
                      <span>
                        Evidence for prioritizing investments across stations.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-200">
                    What TeslaGrid gives them
                  </p>
                  <p className="text-[0.7rem] text-slate-300">
                    Regional dashboards showing reliability, congestion, and
                    incident history for their territory or fleet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Solution */}
        <Section
          id="solution"
          eyebrow="Solution"
          title="An opinionated reliability cockpit for the Supercharger network"
        >
          <p>
            TeslaGrid is designed around a few clear product pillars. Instead of
            being &quot;just a dashboard,&quot; it encodes how Tesla should
            reason about reliability: from the network level, down to a single
            station, with customer impact as the default lens.
          </p>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Network Health
              </p>
              <p className="text-slate-300">
                Real-time &quot;stoplight&quot; view of every station, with
                trends on sessions, failures, and throughput.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Impact-Based Prioritization
              </p>
              <p className="text-slate-300">
                Incidents and maintenance tasks ranked by customer-minutes at
                risk, not just severity codes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Forecasting
              </p>
              <p className="text-slate-300">
                7/30-day projections of load vs capacity, with events and
                seasonality layered in.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-sky-300">
                Shared Source of Truth
              </p>
              <p className="text-slate-300">
                A single workspace where ops, maintenance, and regional leads
                see the same story.
              </p>
            </div>
          </div>
        </Section>

        {/* Key Flows */}
        <Section
          id="flows"
          eyebrow="Flows"
          title="Key flows I designed the demo around"
        >
          <p>
            The live demo focuses on three flows that illustrate how TeslaGrid
            changes day-to-day work for operations teams.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <FlowCard
              title="1. Morning network stand-up"
              goal="Align on what is breaking the experience today."
              steps={[
                "Ops lead opens the Network Health view, filtered to the current region.",
                "TeslaGrid highlights top 5 stations by customer-minutes-at-risk in the next 24 hours.",
                "Lead drills into each station to see root-cause hints and related incidents.",
                "Maintenance scheduler pulls the ranked list directly into their routing plan.",
              ]}
              outcome="Teams start the day with a clear, shared idea of the most critical work, grounded in impact not anecdotes."
            />
            <FlowCard
              title="2. Prioritizing maintenance routes"
              goal="Sequence field technician visits to maximize impact."
              steps={[
                "Scheduler opens the Work Orders queue for the next 7 days.",
                "TeslaGrid scores each job using customer impact, SLA breaches, and travel time.",
                "Scheduler groups work into routes, seeing the marginal impact of adding/removing stops.",
                "Final plan is exported or synced to the existing routing system.",
              ]}
              outcome="Technicians spend more time fixing the worst problems and less time driving to low-impact jobs."
            />
            <FlowCard
              title="3. Holiday congestion forecast"
              goal="De-risk upcoming spikes in demand."
              steps={[
                "Ops lead switches to the Forecast tab and selects the holiday window.",
                "TeslaGrid overlays historical uplift from prior years and current fleet size.",
                "Stations predicted to hit critical congestion are flagged with mitigation suggestions.",
                "Lead coordinates temporary pricing, pop-up charging, or technician staffing.",
              ]}
              outcome="Instead of being surprised by holiday congestion, teams proactively mitigate the worst hotspots."
            />
          </div>
        </Section>

        {/* Screens */}
        <Section
          id="screens"
          eyebrow="Demo"
          title="What the live demo actually shows"
        >
          <p>
            In the demo, these flows are represented as simple, opinionated
            screens — enough to show thinking without pretending this is a
            production system.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-sm font-semibold text-slate-50">
                Network Health Overview
              </p>
              <p className="text-slate-300">
                A table or map-style view of Supercharger stations with status,
                utilization band, and trend arrows. Filters for region, severity
                and forecasted risk.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-sm font-semibold text-slate-50">
                Incident &amp; Work Order Queue
              </p>
              <p className="text-slate-300">
                Ranked list of incidents with impact scores, suggested priority,
                and a simple drill-down panel for station details and history.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 text-xs">
              <p className="mb-1 text-sm font-semibold text-slate-50">
                Demand &amp; Capacity Forecast
              </p>
              <p className="text-slate-300">
                Lightweight chart of sessions vs capacity over time, with
                highlighted windows where thresholds are exceeded and callouts
                for events.
              </p>
            </div>
          </div>
        </Section>

        {/* Impact */}
        <Section
          id="impact"
          eyebrow="Outcomes"
          title="Target impact and how I’d measure it"
        >
          <p>
            Because this is a portfolio artifact, the numbers here are modeled
            — but the measurement mindset is the same as I&apos;d use in
            production.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              label="Target reduction in downtime"
              value="15–25%"
              sublabel="Decrease in customer-facing downtime hours at high-criticality stations."
            />
            <StatCard
              label="Faster time-to-fix"
              value="20–30%"
              sublabel="Reduction in median time from incident detection to first technician touch."
            />
            <StatCard
              label="Congestion risk coverage"
              value="80%+"
              sublabel="Share of projected congestion events with a mitigation plan in place."
            />
          </div>
        </Section>

        {/* Role */}
        <Section
          id="role"
          eyebrow="Execution"
          title="How I approached TeslaGrid as a product manager"
        >
          <ul className="space-y-1.5 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-sky-400" />
              <span>
                <strong>Framed the problem</strong> in terms of driver trust and
                brand promise, not just internal ops metrics.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-sky-400" />
              <span>
                <strong>Defined personas and responsibilities</strong> across
                network ops, maintenance, and regional leads to avoid
                &quot;dashboard for everyone&quot; bloat.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-sky-400" />
              <span>
                <strong>Chose three anchor flows</strong> (morning stand-up,
                route planning, holiday prep) that tell a complete reliability
                story in a short demo.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-sky-400" />
              <span>
                <strong>Scoped the UI intentionally small</strong> — enough
                screens to show judgment and tradeoffs, without pretending this
                is a full production tool.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-sky-400" />
              <span>
                <strong>Anchored on measurable outcomes</strong> (downtime,
                time-to-fix, congestion coverage) so the app reads like a
                product, not just a visualization.
              </span>
            </li>
          </ul>
          <p className="mt-3 text-[0.8rem] text-slate-400">
            In a real engagement, this artifact would sit alongside discovery
            notes, data architecture, and an incremental rollout plan. For the
            portfolio, the goal is to make those decisions legible in a single,
            navigable experience.
          </p>
        </Section>
      </div>
    </main>
  );
}
