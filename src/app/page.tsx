"use client";

import { useState } from "react";
import {
  PROFILE,
  PROJECTS,
  EXPERIENCES,
  CERTIFICATIONS,
  SKILL_GROUPS,
} from "../data/portfolio";

export default function PortfolioPage() {
  const [copied, setCopied] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Derive unique categories automatically from project data
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects =
    selectedTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedTag);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen text-[#d0d6e0]">
      {/* Sticky Glass Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#090a0f]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold text-sm tracking-tight text-white hover:opacity-80 transition-opacity"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]"></span>
            <span>{PROFILE.name}</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#8a8f98]">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#credentials" className="hover:text-white transition-colors">
              Credentials
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="linear-btn-secondary py-1.5 px-3 text-xs"
            >
              <span>Resume (PDF) ↗</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="linear-btn-primary py-1.5 px-3 text-xs"
            >
              <span>{copied ? "Email Copied!" : "Contact"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-16 pb-28 space-y-24">
        {/* Profile Hero Section */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            <span>{PROFILE.status}</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f7f8f8] leading-tight">
              {PROFILE.title}
            </h1>
            <p className="text-sm sm:text-base text-[#8a8f98] max-w-2xl leading-relaxed">
              {PROFILE.bio}
            </p>
          </div>

          {/* Quick Academic & Geographic Badges */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-[#8a8f98]">
            <span className="linear-tag">📍 {PROFILE.location}</span>
            <span className="linear-tag">🎓 {PROFILE.university}</span>
            <span className="linear-tag">⚡ GPA {PROFILE.gpa}</span>
            <span className="linear-tag">📅 {PROFILE.graduation}</span>
          </div>

          {/* Quick Channels */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="text-[#8a8f98] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>GitHub</span>
              <span>↗</span>
            </a>
            <span className="text-white/20">/</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[#8a8f98] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <span>↗</span>
            </a>
            <span className="text-white/20">/</span>
            <button
              onClick={handleCopyEmail}
              className="text-[#8a8f98] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{PROFILE.email}</span>
              <span>📋</span>
            </button>
          </div>
        </section>

        {/* Scalable Projects Directory */}
        <section id="projects" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Projects Directory</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#8a8f98]">
                  {PROJECTS.length}
                </span>
              </h2>
              <p className="text-xs text-[#8a8f98] mt-1">
                Open catalog of software applications, ML pipelines, and geospatial systems.
              </p>
            </div>

            {/* Dynamic Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedTag(cat)}
                  className={`text-xs px-2.5 py-1 rounded transition-colors ${
                    selectedTag === cat
                      ? "bg-[#5e6ad2] text-white font-medium shadow-[0_0_12px_rgba(94,106,210,0.4)]"
                      : "bg-white/[0.04] text-[#8a8f98] hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid: Adapts seamlessly to 4, 10, or 50 projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="linear-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#5e6ad2]/15 text-[#7c88f5] border border-[#5e6ad2]/30">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-[#5e6470]">{proj.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-[#7c88f5] transition-colors mb-2">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#8a8f98] leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <div className="text-[11px] font-mono text-[#5e6470] bg-black/40 px-2.5 py-1 rounded border border-white/[0.04] mb-4">
                    {proj.architecture}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="linear-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-white/[0.04]">
                    {proj.links.live && (
                      <a
                        href={proj.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="linear-btn-primary py-1 px-3 text-xs"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="linear-btn-secondary py-1 px-3 text-xs"
                      >
                        Repository ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Experience Timeline */}
        <section id="experience" className="space-y-8 scroll-mt-20">
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Work & Leadership Experience</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#8a8f98]">
                {EXPERIENCES.length}
              </span>
            </h2>
            <p className="text-xs text-[#8a8f98] mt-1">
              Internships, engineering apprenticeships, and university organizations.
            </p>
          </div>

          <div className="relative border-l border-white/[0.1] pl-6 ml-2 space-y-10">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1c2030] border border-white/20 group-hover:border-[#5e6ad2] group-hover:bg-[#5e6ad2] transition-colors"></div>

                <div className="linear-card p-5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {exp.role}{" "}
                        <span className="text-[#5e6ad2] font-semibold">
                          @ {exp.company}
                        </span>
                      </h3>
                      <div className="text-xs text-[#5e6470] mt-0.5">
                        📍 {exp.location} · {exp.type}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#8a8f98] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-[#8a8f98] list-disc list-inside leading-relaxed">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="marker:text-[#5e6ad2]">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.skills.map((sk) => (
                      <span key={sk} className="linear-tag text-[10px]">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verified Credentials & Certifications */}
        <section id="credentials" className="space-y-8 scroll-mt-20">
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>Verified Certifications</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.06] text-[#8a8f98]">
                {CERTIFICATIONS.length}
              </span>
            </h2>
            <p className="text-xs text-[#8a8f98] mt-1">
              Professional credentials in Frontend, Backend, Machine Learning, and Cloud Architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="linear-card p-4 flex flex-col justify-between hover:border-white/20"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#5e6470] uppercase">
                    {cert.category}
                  </span>
                  <h3 className="text-xs font-bold text-white mt-1 leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#8a8f98] pt-3 mt-2 border-t border-white/[0.04]">
                  <span>{cert.issuer}</span>
                  {cert.year && <span className="font-mono text-[#5e6470]">{cert.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Directory */}
        <section id="skills" className="space-y-8 scroll-mt-20">
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-xs text-[#8a8f98] mt-1">
              Core technologies, modeling frameworks, and toolsets utilized across projects.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {SKILL_GROUPS.map((grp) => (
              <div key={grp.group} className="linear-card p-5 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider text-[#5e6ad2]">
                  {grp.group}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {grp.items.map((it) => (
                    <span key={it} className="linear-tag">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Minimal Linear Footer */}
      <footer className="border-t border-white/[0.08] bg-[#090a0f] py-8 text-xs text-[#5e6470]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dionisius Surya Jaya. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume PDF
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
