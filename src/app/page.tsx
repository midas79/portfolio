"use client";

import { useState } from "react";
import {
  PROFILE,
  PROJECTS,
  EXPERIENCES,
  CERTIFICATIONS,
  SKILL_GROUPS,
} from "../data/portfolio";

export default function HyperstudioPortfolio() {
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
      {/* Top Navigation Bar */}
      <header className="border-b border-[#212121] bg-[#101010]/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="#" className="text-[18px] tracking-tight text-[#f3f3f3] font-normal">
              {PROFILE.name}
            </a>
            <nav className="hidden md:flex items-center gap-6 text-[14px] uppercase text-[#9c9c9c]">
              <a href="#projects" className="hover:text-[#f3f3f3] transition-colors">
                Projects
              </a>
              <a href="#experience" className="hover:text-[#f3f3f3] transition-colors">
                Experience
              </a>
              <a href="#credentials" className="hover:text-[#f3f3f3] transition-colors">
                Credentials
              </a>
              <a href="#skills" className="hover:text-[#f3f3f3] transition-colors">
                Stack
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ghost-outline text-[13px] py-2 px-4"
            >
              Resume ↗
            </a>
            <button
              onClick={handleCopyEmail}
              className="pill-primary text-[13px] py-2.5 px-5"
            >
              {copied ? "COPIED" : "LET'S CHAT ↗"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6">
        {/* Hero Section */}
        <section className="pt-28 pb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="status-badge">
              <span className="pulse-dot"></span>
              <span>AVAILABLE FOR ROLES · MALANG / REMOTE</span>
            </div>
          </div>

          {/* Headline Display Block: Aeonik 63px weight 400 with -0.69px letter-spacing */}
          <h1 className="text-[42px] sm:text-[54px] md:text-[63px] font-normal leading-[1.05] tracking-[-0.69px] text-[#f3f3f3] max-w-[900px] mb-8">
            {PROFILE.title}.
          </h1>

          <p className="text-[21px] font-normal leading-[1.3] text-[#9c9c9c] max-w-[760px] mb-12">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects" className="pill-primary">
              EXPLORE DIRECTORY ↗
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ghost-outline"
            >
              READ CURRICULUM VITAE
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="ghost-outline"
            >
              GITHUB ↗
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="ghost-outline"
            >
              LINKEDIN ↗
            </a>
          </div>

          {/* Meta bar */}
          <div className="mt-16 pt-8 border-t border-[#212121] grid grid-cols-2 sm:grid-cols-4 gap-6 meta-mono text-[13px]">
            <div>
              <span className="block text-[#9c9c9c] uppercase text-[11px] mb-1">INSTITUTION</span>
              <span className="text-[#f3f3f3]">{PROFILE.university}</span>
            </div>
            <div>
              <span className="block text-[#9c9c9c] uppercase text-[11px] mb-1">DEGREE</span>
              <span className="text-[#f3f3f3]">CS ({PROFILE.graduation})</span>
            </div>
            <div>
              <span className="block text-[#9c9c9c] uppercase text-[11px] mb-1">CUMULATIVE GPA</span>
              <span className="text-[#f3f3f3]">{PROFILE.gpa}</span>
            </div>
            <div>
              <span className="block text-[#9c9c9c] uppercase text-[11px] mb-1">COORDINATES</span>
              <span className="text-[#f3f3f3]">7.97° S, 112.63° E</span>
            </div>
          </div>
        </section>

        {/* Section Divider Line */}
        <hr className="hairline-divider" />

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[13px] uppercase tracking-[0.05em] text-[#6f6759] mb-2 flex items-center gap-2">
                <span>✦</span>
                <span>CATALOG // OPEN DIRECTORY</span>
              </div>
              <h2 className="text-[34px] font-normal leading-[1.03] text-[#f3f3f3]">
                Engineering Projects [{PROJECTS.length}]
              </h2>
            </div>

            {/* Category selector */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[13px] uppercase px-4 py-2 rounded-[4px] border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#ffffff] text-[#101010] border-[#ffffff]"
                      : "bg-transparent text-[#9c9c9c] border-[#212121] hover:border-[#474747]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((proj) => (
              <article
                key={proj.id}
                className="hairline-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="meta-mono uppercase text-[11px] text-[#6f6759] border border-[#212121] px-2 py-1 rounded-[4px]">
                      {proj.category}
                    </span>
                    <span className="meta-mono text-[12px]">{proj.year}</span>
                  </div>

                  <h3 className="text-[21px] font-normal leading-[1.2] text-[#f3f3f3] mb-3">
                    {proj.title}
                  </h3>

                  <p className="text-[14px] leading-[1.5] text-[#9c9c9c] mb-6">
                    {proj.description}
                  </p>

                  <div className="meta-mono text-[12px] text-[#c1c1c1] bg-[#080808] p-3 rounded-[4px] border border-[#212121] mb-6">
                    {proj.architecture}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] text-[#9c9c9c] bg-[#1a1a1a] px-2.5 py-1 rounded-[4px] border border-[#212121]"
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
                        className="pill-primary text-[12px] py-2 px-4"
                      >
                        LAUNCH LIVE ↗
                      </a>
                    )}
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-outline text-[12px] py-2 px-4"
                      >
                        INSPECT CODE ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section Divider Line */}
        <hr className="hairline-divider" />

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <div className="mb-12">
            <div className="text-[13px] uppercase tracking-[0.05em] text-[#6f6759] mb-2 flex items-center gap-2">
              <span>✦</span>
              <span>CHRONOLOGY // ROLES &amp; IMPACT</span>
            </div>
            <h2 className="text-[34px] font-normal leading-[1.03] text-[#f3f3f3]">
              Work &amp; Leadership [{EXPERIENCES.length}]
            </h2>
          </div>

          <div className="border border-[#212121] rounded-[8px] divide-y divide-[#212121]">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="p-8 hover:bg-[#080808] transition-colors">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[18px] font-normal text-[#f3f3f3]">
                      {exp.role}{" "}
                      <span className="text-[#6f6759]">/ {exp.company}</span>
                    </h3>
                    <div className="meta-mono text-[12px] text-[#9c9c9c] mt-1">
                      {exp.location} · {exp.type}
                    </div>
                  </div>
                  <span className="meta-mono text-[13px] text-[#f3f3f3]">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 text-[14px] text-[#9c9c9c] my-4 max-w-[840px] list-disc list-inside">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] text-[#c1c1c1] border border-[#212121] px-2 py-0.5 rounded-[4px]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider Line */}
        <hr className="hairline-divider" />

        {/* Credentials Section */}
        <section id="credentials" className="py-24">
          <div className="mb-12">
            <div className="text-[13px] uppercase tracking-[0.05em] text-[#6f6759] mb-2 flex items-center gap-2">
              <span>✦</span>
              <span>VERIFIED // LICENSES &amp; CERTIFICATIONS</span>
            </div>
            <h2 className="text-[34px] font-normal leading-[1.03] text-[#f3f3f3]">
              Credentials [{CERTIFICATIONS.length}]
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-6 border border-[#212121] rounded-[8px] bg-transparent flex flex-col justify-between hover:border-[#474747] transition-colors"
              >
                <div>
                  <span className="meta-mono text-[11px] text-[#6f6759] uppercase block mb-2">
                    {cert.category}
                  </span>
                  <h3 className="text-[16px] font-normal leading-[1.3] text-[#f3f3f3]">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-4 mt-6 border-t border-[#212121] flex items-center justify-between text-[13px] text-[#9c9c9c]">
                  <span>{cert.issuer}</span>
                  {cert.year && <span className="meta-mono">{cert.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider Line */}
        <hr className="hairline-divider" />

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="mb-12">
            <div className="text-[13px] uppercase tracking-[0.05em] text-[#6f6759] mb-2 flex items-center gap-2">
              <span>✦</span>
              <span>TOOLSET // CAPABILITIES SPECIFICATION</span>
            </div>
            <h2 className="text-[34px] font-normal leading-[1.03] text-[#f3f3f3]">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {SKILL_GROUPS.map((grp) => (
              <div
                key={grp.group}
                className="p-6 border border-[#212121] rounded-[8px] space-y-4"
              >
                <h3 className="text-[14px] uppercase tracking-wider text-[#6f6759]">
                  {grp.group}
                </h3>
                <ul className="space-y-2 text-[14px] text-[#9c9c9c]">
                  {grp.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#474747] rounded-full"></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider Line */}
        <hr className="hairline-divider" />

        {/* Manifesto / Contact Section */}
        <section id="contact" className="py-28 text-center max-w-[600px] mx-auto">
          <div className="text-[13px] uppercase tracking-[0.05em] text-[#6f6759] mb-3">
            DIRECT DIRECTORY
          </div>
          <h2 className="text-[44px] font-normal leading-[1.07] tracking-[-0.31px] text-[#f3f3f3] mb-6">
            Ready to collaborate.
          </h2>
          <p className="text-[16px] leading-[1.5] text-[#9c9c9c] mb-8">
            Available for Software Engineering, Machine Learning internships, and full-time technical contributions. Reach out directly.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={handleCopyEmail} className="pill-primary">
              {copied ? "EMAIL COPIED" : "COPY EMAIL ↗"}
            </button>
            <a
              href={`mailto:${PROFILE.email}`}
              className="ghost-outline"
            >
              SEND DIRECT MAIL
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#212121] py-8 text-[13px] text-[#9c9c9c]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Dionisius Surya Jaya. Set in Obsidian &amp; Chalk.</p>
          <div className="flex items-center gap-6">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f3f3f3] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f3f3f3] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f3f3f3] transition-colors"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
