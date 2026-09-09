"use client";

import { useState } from "react";
import {
  PROFILE,
  PROJECTS,
  EXPERIENCES,
  CERTIFICATIONS,
  SKILL_GROUPS,
} from "../data/portfolio";

export default function ArchitecturalPortfolio() {
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#101010] text-[#f3f3f3] min-h-screen">
      {/* Top Header Grid Band */}
      <header className="border-b border-[#212121] bg-[#101010]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto border-x border-[#212121] grid grid-cols-1 md:grid-cols-12 items-center divide-y md:divide-y-0 md:divide-x divide-[#212121]">
          {/* Brand block */}
          <div className="md:col-span-4 p-4 sm:px-6 flex items-center justify-between">
            <a href="#" className="text-[17px] tracking-tight text-[#f3f3f3] font-normal">
              {PROFILE.name}
            </a>
            <span className="meta-mono text-[11px] text-[#6f6759] border border-[#212121] px-2 py-0.5 rounded-[4px]">
              v2026.04
            </span>
          </div>

          {/* Navigation link block */}
          <nav className="md:col-span-5 p-4 sm:px-6 flex items-center gap-6 text-[13px] uppercase meta-mono">
            <a href="#projects" className="text-[#9c9c9c] hover:text-[#f3f3f3] transition-colors">
              [01] Projects
            </a>
            <a href="#experience" className="text-[#9c9c9c] hover:text-[#f3f3f3] transition-colors">
              [02] Experience
            </a>
            <a href="#credentials" className="text-[#9c9c9c] hover:text-[#f3f3f3] transition-colors">
              [03] Credentials
            </a>
            <a href="#stack" className="text-[#9c9c9c] hover:text-[#f3f3f3] transition-colors">
              [04] Stack
            </a>
          </nav>

          {/* CTA actions block */}
          <div className="md:col-span-3 p-3 sm:px-6 flex items-center justify-end gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ghost-outline text-[12px] py-1.5 px-3"
            >
              Resume ↗
            </a>
            <button
              onClick={handleCopyEmail}
              className="pill-primary text-[12px] py-1.5 px-4"
            >
              {copied ? "COPIED" : "CONTACT ↗"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid Frame */}
      <main className="max-w-[1280px] mx-auto border-x border-[#212121]">
        {/* HERO ARCHITECTURAL SPECIFICATION BLOCK */}
        <section className="arch-grid-frame grid-cols-1 md:grid-cols-12 border-b border-[#212121]">
          {/* Main Title & Bio Cell */}
          <div className="arch-cell md:col-span-8 p-8 sm:p-14 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="status-badge">
                  <span className="pulse-dot"></span>
                  <span>OPEN FOR ROLES · MALANG, ID / REMOTE</span>
                </div>
                <span className="meta-mono text-[11px] text-[#6f6759]">INDEX // 00</span>
              </div>

              <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-normal leading-[1.05] tracking-[-0.69px] text-[#f3f3f3] mb-6">
                {PROFILE.title}.
              </h1>

              <p className="text-[17px] font-normal leading-[1.4] text-[#9c9c9c] max-w-[680px]">
                {PROFILE.bio}
              </p>
            </div>

            {/* Quick Action Matrix */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#212121]">
              <a href="#projects" className="pill-primary">
                PROJECT CATALOG [{PROJECTS.length}] ↗
              </a>
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="ghost-outline">
                VIEW CV (PDF)
              </a>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="ghost-outline">
                GITHUB ↗
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="ghost-outline">
                LINKEDIN ↗
              </a>
            </div>
          </div>

          {/* Academic & Geographic Specification Cell */}
          <div className="arch-cell md:col-span-4 p-8 sm:p-10 flex flex-col justify-between divide-y divide-[#212121]">
            <div className="pb-6">
              <span className="meta-mono text-[11px] uppercase text-[#6f6759] block mb-2">
                ACADEMIC CREDENTIAL
              </span>
              <div className="text-[16px] text-[#f3f3f3] font-normal">{PROFILE.university}</div>
              <div className="meta-mono text-[13px] text-[#9c9c9c] mt-1">{PROFILE.major}</div>
              <div className="meta-mono text-[12px] text-[#c1c1c1] mt-2">
                Class of {PROFILE.graduation} · GPA <span className="text-[#f3f3f3] font-bold">{PROFILE.gpa}</span>
              </div>
            </div>

            <div className="py-6">
              <span className="meta-mono text-[11px] uppercase text-[#6f6759] block mb-2">
                PRIMARY DOMAINS
              </span>
              <ul className="meta-mono text-[12px] space-y-1 text-[#c1c1c1]">
                <li>✦ Full-Stack Web Development</li>
                <li>✦ Applied Machine Learning &amp; NLP</li>
                <li>✦ Geospatial Information Systems (GIS)</li>
                <li>✦ Statistical Data Validation</li>
              </ul>
            </div>

            <div className="pt-6">
              <span className="meta-mono text-[11px] uppercase text-[#6f6759] block mb-2">
                SYSTEM TELEMETRY
              </span>
              <div className="meta-mono text-[12px] text-[#9c9c9c] space-y-1">
                <div>LOC: Malang, East Java, ID</div>
                <div>COORDINATES: 7.97° S, 112.63° E</div>
                <div>CONTACT: {PROFILE.email}</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 01: PROJECT CATALOGUE (Hairline Index Grid) */}
        <section id="projects" className="border-b border-[#212121]">
          {/* Section Sub-Header Bar */}
          <div className="p-6 sm:px-10 border-b border-[#212121] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#0c0c0c]">
            <div className="flex items-center gap-4">
              <span className="meta-mono text-[12px] text-[#6f6759] border border-[#212121] px-2.5 py-1 rounded-[4px]">
                SECTION // 01
              </span>
              <h2 className="text-[23px] font-normal tracking-tight text-[#f3f3f3]">
                Project Catalogue [{PROJECTS.length}]
              </h2>
            </div>

            {/* Dynamic Filter Controls */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`meta-mono text-[12px] uppercase px-3 py-1.5 rounded-[4px] border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#ffffff] text-[#101010] border-[#ffffff]"
                      : "bg-[#101010] text-[#9c9c9c] border-[#212121] hover:border-[#474747]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Unified Index Grid Cells */}
          <div className="arch-grid-frame grid-cols-1 md:grid-cols-2">
            {filteredProjects.map((proj, idx) => (
              <article
                key={proj.id}
                className="arch-cell p-8 sm:p-10 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="meta-mono text-[11px] text-[#6f6759] border border-[#212121] px-2 py-0.5 rounded-[4px]">
                      INDEX {String(idx + 1).padStart(2, "0")} · {proj.category}
                    </span>
                    <span className="meta-mono text-[12px] text-[#9c9c9c]">{proj.year}</span>
                  </div>

                  <h3 className="text-[21px] font-normal leading-[1.2] text-[#f3f3f3] mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-[14px] leading-[1.6] text-[#9c9c9c] mb-6">
                    {proj.description}
                  </p>

                  <div className="meta-mono text-[12px] text-[#c1c1c1] bg-[#080808] p-3.5 rounded-[4px] border border-[#212121]">
                    <span className="text-[#6f6759] block text-[10px] uppercase mb-1">Architecture / Stack</span>
                    {proj.architecture}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="meta-mono text-[11px] text-[#9c9c9c] bg-[#141414] px-2 py-0.5 rounded-[4px] border border-[#212121]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#212121]">
                    {proj.links.live && (
                      <a
                        href={proj.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="pill-primary text-[11px] py-1.5 px-3.5"
                      >
                        LAUNCH DEPLOYMENT ↗
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-outline text-[11px] py-1.5 px-3.5"
                      >
                        SOURCE CODE ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 02: CAREER LOGBOOK (Table Ledger Index) */}
        <section id="experience" className="border-b border-[#212121]">
          <div className="p-6 sm:px-10 border-b border-[#212121] flex items-center justify-between bg-[#0c0c0c]">
            <div className="flex items-center gap-4">
              <span className="meta-mono text-[12px] text-[#6f6759] border border-[#212121] px-2.5 py-1 rounded-[4px]">
                SECTION // 02
              </span>
              <h2 className="text-[23px] font-normal tracking-tight text-[#f3f3f3]">
                Work &amp; Leadership Chronology [{EXPERIENCES.length}]
              </h2>
            </div>
            <span className="meta-mono text-[12px] text-[#6f6759] hidden sm:inline">
              ORDER // DESCENDING
            </span>
          </div>

          <div className="arch-grid-frame grid-cols-1">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                className="arch-cell p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                {/* Time & Org Meta (4 cols) */}
                <div className="md:col-span-4 space-y-2">
                  <span className="meta-mono text-[11px] text-[#6f6759] block">
                    LOG [{String(idx + 1).padStart(2, "0")}]
                  </span>
                  <h3 className="text-[17px] font-normal text-[#f3f3f3]">{exp.company}</h3>
                  <div className="meta-mono text-[13px] text-[#f3f3f3] font-normal">
                    {exp.period}
                  </div>
                  <div className="meta-mono text-[12px] text-[#9c9c9c]">
                    📍 {exp.location} · {exp.type}
                  </div>
                </div>

                {/* Role Details & Scope (8 cols) */}
                <div className="md:col-span-8 space-y-4">
                  <div className="text-[16px] text-[#f3f3f3] font-normal flex items-center gap-2">
                    <span className="text-[#6f6759]">ROLE //</span>
                    <span>{exp.role}</span>
                  </div>

                  <ul className="space-y-2 text-[14px] text-[#9c9c9c] leading-relaxed list-disc list-inside">
                    {exp.description.map((item, dIdx) => (
                      <li key={dIdx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="meta-mono text-[11px] text-[#c1c1c1] border border-[#212121] px-2 py-0.5 rounded-[4px] bg-[#141414]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03: VERIFIED CREDENTIALS & CERTIFICATIONS (3-Col Grid) */}
        <section id="credentials" className="border-b border-[#212121]">
          <div className="p-6 sm:px-10 border-b border-[#212121] flex items-center justify-between bg-[#0c0c0c]">
            <div className="flex items-center gap-4">
              <span className="meta-mono text-[12px] text-[#6f6759] border border-[#212121] px-2.5 py-1 rounded-[4px]">
                SECTION // 03
              </span>
              <h2 className="text-[23px] font-normal tracking-tight text-[#f3f3f3]">
                Verified Credentials [{CERTIFICATIONS.length}]
              </h2>
            </div>
            <span className="meta-mono text-[12px] text-[#6f6759] hidden sm:inline">
              ISSUER // DICODING &amp; AWS
            </span>
          </div>

          <div className="arch-grid-frame grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={cert.id}
                className="arch-cell p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="meta-mono text-[10px] text-[#6f6759] uppercase border border-[#212121] px-1.5 py-0.5 rounded-[3px]">
                      {cert.category}
                    </span>
                    <span className="meta-mono text-[11px] text-[#9c9c9c]">
                      #{String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-normal leading-[1.35] text-[#f3f3f3]">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#212121] flex items-center justify-between text-[12px] meta-mono text-[#9c9c9c]">
                  <span>{cert.issuer}</span>
                  {cert.year && <span>{cert.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 04: TECHNICAL STACK ARSENAL (4-Col Grid) */}
        <section id="stack" className="border-b border-[#212121]">
          <div className="p-6 sm:px-10 border-b border-[#212121] flex items-center justify-between bg-[#0c0c0c]">
            <div className="flex items-center gap-4">
              <span className="meta-mono text-[12px] text-[#6f6759] border border-[#212121] px-2.5 py-1 rounded-[4px]">
                SECTION // 04
              </span>
              <h2 className="text-[23px] font-normal tracking-tight text-[#f3f3f3]">
                Technical Stack Specification
              </h2>
            </div>
            <span className="meta-mono text-[12px] text-[#6f6759] hidden sm:inline">
              CAPABILITIES // MATRIX
            </span>
          </div>

          <div className="arch-grid-frame grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {SKILL_GROUPS.map((grp) => (
              <div key={grp.group} className="arch-cell p-6 sm:p-8 space-y-4">
                <span className="meta-mono text-[11px] uppercase text-[#6f6759] block tracking-wider">
                  {grp.group}
                </span>
                <ul className="space-y-2 text-[14px] text-[#9c9c9c]">
                  {grp.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#474747] rounded-full"></span>
                      <span className="text-[#f3f3f3] font-normal">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 05: DIRECT CONTACT TERMINATION */}
        <section id="contact" className="arch-grid-frame grid-cols-1 md:grid-cols-12">
          <div className="arch-cell md:col-span-7 p-8 sm:p-14 space-y-4">
            <span className="meta-mono text-[11px] text-[#6f6759] uppercase block">
              COLLABORATION &amp; INQUIRY
            </span>
            <h2 className="text-[34px] sm:text-[40px] font-normal tracking-[-0.31px] text-[#f3f3f3] leading-tight">
              Ready for production engineering contributions.
            </h2>
            <p className="text-[15px] text-[#9c9c9c] max-w-[560px] leading-relaxed">
              Seeking opportunities to build impactful software architectures, machine learning classification pipelines, and responsive web products.
            </p>
          </div>

          <div className="arch-cell md:col-span-5 p-8 sm:p-14 flex flex-col justify-center gap-4">
            <button onClick={handleCopyEmail} className="pill-primary justify-center w-full py-3">
              {copied ? "EMAIL COPIED TO CLIPBOARD" : "COPY EMAIL ADDRESS ↗"}
            </button>
            <a
              href={`mailto:${PROFILE.email}`}
              className="ghost-outline justify-center w-full py-2.5 text-center"
            >
              SEND DIRECT EMAIL
            </a>
            <div className="text-center meta-mono text-[12px] text-[#6f6759] pt-2">
              {PROFILE.email}
            </div>
          </div>
        </section>
      </main>

      {/* Grid Footer Bar */}
      <footer className="border-t border-[#212121] bg-[#101010] text-[12px] meta-mono text-[#9c9c9c]">
        <div className="max-w-[1280px] mx-auto border-x border-[#212121] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} {PROFILE.name} · Architectural Index System.
          </div>
          <div className="flex items-center gap-6">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-[#f3f3f3] transition-colors">
              GitHub ↗
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#f3f3f3] transition-colors">
              LinkedIn ↗
            </a>
            <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="hover:text-[#f3f3f3] transition-colors">
              Resume (PDF) ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
