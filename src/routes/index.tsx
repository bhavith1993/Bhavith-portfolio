import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail, Github, BarChart3, Database, ShieldCheck, Sparkles, Award } from "lucide-react";

import resumeAsset from "@/assets/Bhavith_Shetty_Resume.pdf.asset.json";
const resumeUrl = resumeAsset.url;
import shoppingmartArch from "@/assets/shoppingmart-architecture.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhavith Shetty — Power BI Developer & BI Engineer" },
      { name: "description", content: "Power BI Developer with 5+ years building DAX models, Microsoft Fabric semantic layers, RLS and governance frameworks. Download resume and view dashboards." },
      { property: "og:title", content: "Bhavith Shetty — Power BI Developer & BI Engineer" },
      { property: "og:description", content: "DAX, Microsoft Fabric, semantic modeling, governance. Reports that move decisions." },
    ],
  }),
  component: Portfolio,
});

const dashboards = [
  {
    title: "Austin Real Estate Insights",
    blurb: "Market analytics for Austin, TX — price trends, inventory, and neighborhood-level segmentation with interactive filters and drill-through.",
    tags: ["DAX", "Power Query", "Real Estate"],
    
    href: "https://app.powerbi.com/view?r=eyJrIjoiM2U2NGVhMWItMjBhOS00NGI4LWJlMWItOTdhMTBlNmMzMTNiIiwidCI6IjIxZWM0YmZjLWE1NmEtNDI0OC1iNzIxLTU2NDBkNDAzYWYyMiJ9",
  },
  {
    title: "HR Dashboard",
    blurb: "Workforce analytics — headcount, attrition, diversity and tenure metrics modeled in a star schema with reusable DAX measures.",
    tags: ["DAX", "HR Analytics", "Star Schema"],
    
    href: "https://app.powerbi.com/view?r=eyJrIjoiN2Q5YjViNjUtOWQ1Mi00NDkxLTg2MDQtMjhkMjkzZDk2YjI5IiwidCI6IjIxZWM0YmZjLWE1NmEtNDI0OC1iNzIxLTU2NDBkNDAzYWYyMiJ9",
  },
  {
    title: "Marketing Dashboard — Kraken Coffee",
    blurb: "Marketing performance for a coffee brand — campaign reach, conversion funnel, and channel ROI with time-intelligence DAX patterns.",
    tags: ["DAX", "Marketing", "Time Intelligence"],
    href: "https://app.powerbi.com/view?r=eyJrIjoiYzZhYzBlOGItZjE4ZC00ZmExLTk5M2YtMTVlNGUyMTI2MDVkIiwidCI6IjIxZWM0YmZjLWE1NmEtNDI0OC1iNzIxLTU2NDBkNDAzYWYyMiJ9",
  },
];


const projects = [
  {
    title: "ShoppingMart Analytics — End-to-End Fabric Medallion Pipeline",
    blurb: "A governed Microsoft Fabric platform unifying structured transactions and unstructured reviews/social data through Bronze, Silver, and Gold lakehouse layers into a Direct Lake star schema. Metadata-driven ingestion, PySpark transformations, RLS, Purview lineage, and Git-based CI/CD.",
    tags: ["Microsoft Fabric", "PySpark", "Direct Lake", "Medallion", "Azure DevOps"],
    href: "https://github.com/bhavith1993/Shopping-Mart-Analytics",
    arch: shoppingmartArch,
  },
];

const skills = [
  { icon: BarChart3, title: "Power BI & DAX", items: ["Advanced DAX measures", "Interactive visuals", "Drill-through & bookmarks", "Tabular Editor"] },
  { icon: Database, title: "Modeling & Platform", items: ["Star schema modeling", "Microsoft Fabric — Lakehouse, Warehouse, Realtime Dashboards", "SQL — CTEs, joins, stored procedures, window functions", "Power Query / M"] },
  { icon: Sparkles, title: "Performance", items: ["DAX Studio tuning", "Incremental refresh", "60% faster report loads", "Semantic model consolidation"] },
  { icon: ShieldCheck, title: "Security & Governance", items: ["Row-Level Security (RLS)", "Microsoft Purview", "RBAC in Fabric workspaces", "Azure DevOps CI/CD"] },
];

const experience = [
  {
    role: "Power BI Consultant",
    org: "Independent — I4C mandate, Montreal",
    period: "Jan 2026 – Present",
    bullets: [
      "Designing accounting & finance Power BI reports and semantic models.",
      "Migrating legacy models to Microsoft Fabric on Direct Lake for scale.",
      "Implementing governance with Purview and RBAC across workspaces.",
    ],
  },
  {
    role: "System Analyst — Power BI & Data Engineering",
    org: "Brookfield Renewable Partners",
    period: "Apr 2023 – Dec 2025",
    bullets: [
      "Cut report load times by 60% using Tabular Editor + DAX Studio.",
      "Reduced data-quality incidents by 80% via RLS and governance frameworks.",
      "Consolidated 12 settlement reports into a single reusable semantic model.",
      "Built Alteryx + SQL workflow generating XSD-conformant XML for IFS ERP.",
    ],
  },
  {
    role: "Power BI Developer (Contract)",
    org: "Lululemon Athletica",
    period: "Sept 2022 – Feb 2023",
    bullets: [
      "Built dashboards and semantic models over large retail datasets.",
      "Authored SQL Server stored procedures feeding the reporting layer.",
    ],
  },
  {
    role: "Senior Engineer",
    org: "Adani Solar & PV Power Technologies",
    period: "Jun 2016 – Dec 2020",
    bullets: [
      "Power BI dashboards tracking A/B/C grade solar panel quality and output.",
      "Connected SQL Server and online Excel sources for production analytics.",
    ],
  },
];

const certifications = [
  {
    title: "Microsoft Data Architecture for Modern Data Stacks",
    issuer: "Coursera Professional Certificate · 5 courses",
    date: "Jun 2026",
    detail: "OneLake, Fabric Lakehouse & Warehouse, governance, security, advanced analytics & AI optimization.",
    href: "https://coursera.org/verify/professional-cert/I8YVA70F6Q8C",
  },
  {
    title: "Exam Prep DP-600: Microsoft Fabric Analytics Engineer",
    issuer: "Whizlabs · Coursera",
    date: "Jun 2026",
    detail: "Implementing analytics solutions using Microsoft Fabric.",
    href: "https://coursera.org/verify/U0BA8176DJ0M",
  },
  {
    title: "Advanced Power BI Integration, AI, and Governance Strategies",
    issuer: "Packt · Coursera",
    date: "Jun 2026",
    detail: "AI-powered Power BI, enterprise integration patterns, governance at scale.",
    href: "https://coursera.org/verify/LZSBEJ25OIAP",
  },
  {
    title: "Optimizing Data Models and Performance in Microsoft Fabric",
    issuer: "Packt · Coursera",
    date: "Jun 2026",
    detail: "Semantic model tuning, Direct Lake performance, query optimization.",
    href: "https://coursera.org/verify/X0EBHH5VMAHU",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm font-semibold tracking-tight">
            Bhavith Shetty<span className="text-primary">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#work" className="hover:text-foreground">Work</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#skills" className="hover:text-foreground">Skills</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
            <a href="#certifications" className="hover:text-foreground">Certifications</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <a
            href={resumeUrl}
            download="Bhavith_Shetty_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>
      </header>

      {/* Hero — split screen */}
      <section id="top" className="relative overflow-hidden border-b border-border/60">
        <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 py-20 lg:py-28">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for BI consulting engagements
            </div>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-balance lg:text-7xl">
              Reports that move<br />
              <span className="text-primary">decisions.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              I'm <span className="text-foreground">Bhavith Shetty</span> — a Power BI developer and BI engineer with 5+ years
              building DAX models, Microsoft Fabric semantic layers, and governance frameworks for finance, retail and energy teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                download="Bhavith_Shetty_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                <Download className="h-4 w-4" /> Download résumé
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-5 py-3 text-sm font-medium hover:bg-surface"
              >
                View dashboards <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experience</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">5+ yrs</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Load time</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">−60%</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">DQ incidents</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">−80%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Dashboards */}
      <section id="work" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary">Selected work</div>
              <h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl">Power BI dashboards</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A sample of production reports built across finance, retail, and energy — modeled in Tabular Editor, tuned in DAX Studio, secured with RLS.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {dashboards.map((d, i) => (
              <article
                key={d.title}
                className={`group overflow-hidden rounded-xl border border-border bg-surface transition hover:border-primary/50 ${i === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="relative overflow-hidden bg-navy-deep">
                  <iframe
                    src={d.href}
                    title={`${d.title} — Power BI report`}
                    loading="lazy"
                    allowFullScreen
                    className="aspect-[16/10] w-full border-0"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${d.title} in Power BI`}
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground transition hover:text-primary"
                    >
                      Open <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{d.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Data Engineering Projects */}
      <section id="projects" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary">Selected work</div>
              <h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl">Data engineering projects</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              End-to-end data platforms — ingestion, medallion architecture, semantic modeling, and CI/CD on Microsoft Fabric and Azure.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-xl border border-border bg-surface transition hover:border-primary/50"
              >
                {p.arch && (
                  <a href={p.href} target="_blank" rel="noreferrer" className="block overflow-hidden border-b border-border bg-white">
                    <img
                      src={p.arch}
                      alt={`${p.title} — architecture diagram`}
                      loading="lazy"
                      className="w-full"
                    />
                  </a>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.title} on GitHub`}
                      className="inline-flex shrink-0 items-center gap-1 text-xs text-muted-foreground transition hover:text-primary"
                    >
                      <Github className="h-4 w-4" /> Repo <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary">Capabilities</div>
              <h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl text-balance">
                Modeling, performance, and governance — end to end.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                I build reusable semantic models, tune them for sub-second interactivity, and wrap them in
                the security and governance enterprise teams actually need.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skills.map(({ icon: Icon, title, items }) => (
                <div key={title} className="rounded-xl border border-border bg-surface p-6">
                  <Icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span className="text-primary">›</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-wider text-primary">Experience</div>
          <h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl">Where I've shipped BI.</h2>

          <ol className="mt-12 space-y-4">
            {experience.map((e) => (
              <li key={e.role + e.org} className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-surface p-6 md:grid-cols-[1fr_2fr] md:p-8">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{e.period}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold">{e.role}</h3>
                  <div className="mt-1 text-sm text-primary">{e.org}</div>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { label: "M.S. Analytics (in progress)", org: "Georgia Institute of Technology" },
              { label: "PG Diploma, Data Analysis for BI", org: "St. Clair College, Canada" },
              { label: "BE Electrical Engineering", org: "Shivaji University" },
            ].map((ed) => (
              <div key={ed.label} className="rounded-xl border border-border bg-surface p-5">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Education</div>
                <div className="mt-2 font-medium">{ed.label}</div>
                <div className="text-sm text-muted-foreground">{ed.org}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary">Credentials</div>
              <h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl">Certifications</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Microsoft Fabric, Power BI, and modern data architecture — verified through Coursera.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {certifications.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-xs text-muted-foreground">{c.date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <div className="mt-1 text-sm text-primary">{c.issuer}</div>
                <p className="mt-3 text-sm text-muted-foreground">{c.detail}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs text-muted-foreground transition group-hover:text-primary">
                  Verify on Coursera <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface to-background p-8 md:p-14">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <div className="text-xs uppercase tracking-wider text-primary">Let's talk</div>
                <h2 className="mt-2 font-display text-4xl font-semibold lg:text-5xl text-balance">
                  Need a BI lead who ships?
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  I take on Power BI development, Fabric migrations, performance audits, and governance rollouts.
                  Send the brief and I'll come back with a plan.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={resumeUrl}
                  download="Bhavith_Shetty_Resume.pdf"
                  className="inline-flex items-center justify-between rounded-lg bg-primary px-5 py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  <span className="flex items-center gap-3"><Download className="h-4 w-4" /> Download résumé (PDF)</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:nkrbhavith@gmail.com"
                  className="inline-flex items-center justify-between rounded-lg border border-border bg-surface px-5 py-4 text-sm font-medium hover:bg-muted"
                >
                  <span className="flex flex-col">
                    <span className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> Contact Bhavith</span>
                    <span className="mt-0.5 text-xs text-muted-foreground">nkrbhavith@gmail.com</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/bhavith1993"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-between rounded-lg border border-border bg-surface px-5 py-4 text-sm font-medium hover:bg-muted"
                >
                  <span className="flex items-center gap-3"><Github className="h-4 w-4 text-primary" /> github.com/bhavith1993</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Bhavith Shetty — Power BI Developer.</div>
          <div>Mumbai, India · Remote · Built with care.</div>
        </div>
      </footer>
    </div>
  );
}
