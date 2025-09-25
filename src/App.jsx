import React from "react";

// Minimal section wrapper
const Section = ({ id, title, children }) => (
    <section id={id} className="py-16">
        <div className="max-w-5xl mx-auto px-4">
            {title && (
                <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent mb-6">
                    {title}
                </h2>
            )}
            {children}
        </div>
    </section>
);

// Content (no personal info)
const profile = {
    summary: "CS student with a privacy-first, open-source mindset",
};

const skills = {
    Languages: [
        "PowerShell",
        "Python",
        "JavaScript",
        "C#",
        "Java",
        "C/C++",
        "SQL",
        ".NET MAUI",
        "ASP.NET",
    ],
    "APIs & Data": ["Microsoft Graph/REST", "CSV/Excel", "Power BI", "MVC", "Springboot"],
    Platforms: [
        "Intune (config, remediation, Windows Autopatch)",
        "MECM/SCCM (OSD, task sequences, driver packs, boot images)",
        "Azure AD/M365",
        "Windows",
    ],
    "Tools & Practices": ["Git", "Jira/ServiceNow", "Kanban/Scrum"],
};

const projects = [
    {
        title: "Weather App",
        desc: "Simple cross platform weather app using C# and .NET MAUI that calls the OpenWeatherMap API.",
        tech: ["C#", ".NET MAUI", "OpenWeatherMap"],
    },
    {
        title: "URL Shortener",
        desc:
            "Python/Flask URL shortener with SQLite: REST API (POST /shorten, GET /{code}, GET /health), short-code generation with collision handling, visit tracking, input validation and error handling, simple JS frontend, and pytest tests.",
        tech: ["Python", "Flask", "SQLite", "pytest", "JavaScript"],
    },
    {
        title: "Stock Price Grapher",
        desc:
            "Python stock grapher (yfinance/Pandas/Matplotlib) that plots SMAs and prints quick analytics—CAGR, max drawdown, 12-month momentum, and SMA200 trend.",
        tech: ["Python", "yfinance", "pandas", "matplotlib"],
    },
];

const experience = [
    {
        title: "Desktop Engineering Specialist Internship",
        company: "Canada Life",
        start: "May 2025",
        end: "Present",
        bullets: [
            "Trained full-time Desktop Engineering staff on Windows servicing, Autopatch, and MECM/OSD.",
            "References available from Direct manager up to VP and sister teams.",
            "Built a small set of PowerShell modules for app packaging, compliance checks, and remediations.",
            "Built Power BI dashboards for audit & compliance and Windows Update KPIs;",
            "Automated audit evidence collection and compliance exports via Microsoft Graph API (scheduled Excel/CSV outputs).",
            "Worked in two-week sprints: joined sprint planning, daily stand-ups, and retros; tracked work in Jira and handled requests/changes in ServiceNow.",
            "Authored company-wide scripts and remediation packages; enforced posture and device hygiene; substantial hands-on with Windows Autopatch and Intune.",
            "Kept MECM OSD task sequences, driver packs, and boot images current.",
            "Worked with the DLP team to tune policies.",
            "Main go-to for Windows 11 issues company wide.",
        ],
    },
    {
        title: "Information Technology Intern",
        company: "Beneva",
        start: "Apr 2024",
        end: "Aug 2024",
        bullets: [
            "Supported Windows 11 migration and day-to-day endpoint operations for remote/on-site staff; resolved hardware, software, and connectivity issues.",
            "Prepared and deployed laptops (imaging, secure wipe), automated repetitive tasks with PowerShell (BIOS config, inventory capture, new device setup).",
            "Managed tickets in Jira, maintained documentation in Confluence, and coordinated with specialized teams to resolve complex issues.",
            "Drove a hardware refresh across 100+ devices while maintaining accurate asset tracking (Workday).",
        ],
    },
    {
        title: "Technical Support Specialist",
        company: "Teleperformance",
        start: "Jan 2022",
        end: "Jan 2023",
        bullets: [],
    },
];

const education = [
    {
        degree: "Honours Bachelor of Computer Science (Specialty in Game Engineering)",
        start: "Sep 2023",
        end: "Apr 2027",
    },
];

const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-white/90 shadow-sm shadow-fuchsia-500/10">
        {children}
    </span>
);

export default function App() {
    return (
        <div className="relative min-h-screen">
            {/* gradient background accents */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl animate-pulse"></div>
                <div className="absolute top-40 -left-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl animate-pulse"></div>
            </div>

            <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-900/60 backdrop-blur">
                <nav className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <a href="#hero" className="font-semibold tracking-tight text-white/90">Portfolio</a>
                    <ul className="flex gap-4 text-sm text-white/70">
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#skills" className="hover:text-white">Skills</a></li>
                        <li><a href="#experience" className="hover:text-white">Experience</a></li>
                        <li><a href="#education" className="hover:text-white">Education</a></li>
                    </ul>
                </nav>
            </header>

            <Section id="hero" title="">
                <div className="text-center py-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400 bg-clip-text text-transparent">
                            Projects & Experience
                        </span>
                    </h1>
                    <p className="text-white/80 mt-4 max-w-3xl mx-auto">{profile.summary}</p>
                    <div className="mt-6 flex gap-3 justify-center text-sm">
                        <a href="#projects" className="px-5 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg shadow-fuchsia-500/25 hover:scale-[1.02] transition">
                            View Projects
                        </a>
                    </div>
                </div>
            </Section>

            <Section id="projects" title="Projects">
                <div className="grid sm:grid-cols-2 gap-6">
                    {projects.map((p) => (
                        <article key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-sky-500/10 backdrop-blur">
                            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                            <p className="text-white/80 mt-2">{p.desc}</p>
                            {p.tech?.length ? (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <Badge key={t}>{t}</Badge>
                                    ))}
                                </div>
                            ) : null}
                        </article>
                    ))}
                </div>
            </Section>

            <Section id="skills" title="Technical Skills">
                <div className="grid sm:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([group, items]) => (
                        <div key={group} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-violet-500/10 backdrop-blur">
                            <div className="font-medium text-white">{group}</div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {items.map((item) => (
                                    <Badge key={item}>{item}</Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="experience" title="Experience">
                <ul className="space-y-4">
                    {experience.map((role) => (
                        <li key={`${role.company}-${role.title}`} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-fuchsia-500/10 backdrop-blur">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                <div className="font-medium text-white">{role.title} — {role.company}</div>
                                <div className="text-sm text-white/70">{role.start} – {role.end}</div>
                            </div>
                            {role.bullets?.length ? (
                                <ul className="mt-3 space-y-2 text-sm text-white/80 list-disc ml-5">
                                    {role.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section id="education" title="Education">
                <ul className="space-y-4">
                    {education.map((ed) => (
                        <li key={`${ed.school}-${ed.degree}`} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-sky-500/10 backdrop-blur">
                            <div className="font-medium text-white">{ed.degree}</div>
                            <div className="text-sm text-white/70">{ed.school} — {ed.location}</div>
                            <div className="text-sm text-white/70">{ed.start} – {ed.end}</div>
                        </li>
                    ))}
                </ul>
            </Section>
        </div>
    );
}
