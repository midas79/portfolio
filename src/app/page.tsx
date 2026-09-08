"use client";

import { useState } from "react";

const PROFILE = {
  name: "Dionisius Surya Jaya",
  alias: "dionisiussj",
  level: 42,
  badgeTitle: "Community Leader",
  badgeXP: "500 XP",
  avatarUrl: "/assets/images/avatar_full.jpg",
  avatarFrame: "/assets/images/shared.akamai.steamstatic.com/c447714efa9703c4c0007a8316127c12ea0d32f4.png",
  badgeIcon: "/assets/images/shared.akamai.steamstatic.com/2def078bb9d550e4496e9b8ac1f7bca3d4b1ad99-b783dbdb84.png",
  location: "Malang Regency, East Java, Indonesia",
  summary:
    "Undergraduate Computer Science student at Brawijaya University with a strong passion for programming and software development. My goal is to become a professional programmer who builds clean, efficient, and meaningful solutions. Constantly seeking opportunities to learn new technologies, improve my skills, and contribute to real-world projects.",
  email: "dionisius.suryajaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/dionisiussj",
  github: "https://github.com/midas79",
  topSkills: ["WebDev", "Front-End Development", "Financial Planning"],
  badges: [
    { name: "Git & GitHub", org: "Dicoding", xp: "100 XP" },
    { name: "Back-End Pemula (JS)", org: "Dicoding", xp: "250 XP" },
    { name: "Fundamental Front-End", org: "Dicoding", xp: "250 XP" },
    { name: "Dasar Pemrograman Web", org: "Dicoding", xp: "100 XP" },
    { name: "Financial Literacy 101", org: "Finance", xp: "150 XP" },
    { name: "Years of Service", org: "Brawijaya Univ", xp: "400 XP" },
  ],
  experiences: [
    {
      company: "MEDEVA",
      role: "Machine Learning Intern",
      period: "Jan 2026 - May 2026 (5 mos)",
      location: "Malang",
      desc: "Developing risk stratification machine learning pipelines, NLP clinical classifications, and health predictive models.",
      hours: "245 hrs",
      recent: "24.5 hrs past 2 weeks / 245 hrs on record",
    },
    {
      company: "BPS Kota Malang",
      role: "Data Analyst & Frontend Developer",
      period: "Sep 2025 - Nov 2025 (3 mos)",
      location: "Malang",
      desc: "Processed municipal statistics datasets and built responsive public web dashboards.",
      hours: "182 hrs",
      recent: "18.2 hrs past 2 weeks / 182 hrs on record",
    },
    {
      company: "Coding Camp by DBS Foundation",
      role: "Web Developer",
      period: "Feb 2025 - Jun 2025 (5 mos)",
      location: "Malang",
      desc: "Engineered performant, production-ready React web platforms with clean state management.",
      hours: "210 hrs",
      recent: "21.0 hrs past 2 weeks / 210 hrs on record",
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Backend Developer & IT Support",
      period: "Jul 2024 - Aug 2024 (2 mos)",
      location: "Ngasem, East Java",
      desc: "Maintained village service portal. Developed digital WebGIS maps using ArcGIS & QGIS.",
      hours: "110 hrs",
      recent: "Completed Quest",
    },
    {
      company: "BIOS Filkom UB (ORSEN 2024)",
      role: "Head of Division Consumption & Health",
      period: "Aug 2024 - Nov 2024 (4 mos)",
      location: "Malang",
      desc: "Coordinated nutrition distribution, emergency health responses, and medical teams.",
      hours: "95 hrs",
      recent: "Completed Quest",
    },
    {
      company: "Artropolis UB",
      role: "Logistics Coordinator",
      period: "Sep 2023 - Nov 2024 (1 yr 3 mos)",
      location: "Malang",
      desc: "Coordinated sound/stage equipment inventory, distribution, and cross-team execution.",
      hours: "160 hrs",
      recent: "Completed Quest",
    },
  ],
  education: [
    {
      school: "University of Brawijaya",
      degree: "Computer Science, Informatics",
      period: "July 2022 - July 2026",
    },
    {
      school: "SMA Negeri 1 Temanggung",
      degree: "High School Student",
      period: "2019 - 2022",
    },
  ],
};

export default function SteamProfile() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Steam Header */}
      <header
        style={{
          background: "var(--bg-header)",
          height: "104px",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 10,
          borderBottom: "1px solid rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            width: "940px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <a href="https://store.steampowered.com/" target="_blank" rel="noreferrer">
              <img
                src="/assets/images/community.akamai.steamstatic.com/logo_steam-e0e81271bb.svg"
                alt="STEAM"
                style={{ height: "36px" }}
              />
            </a>
            <nav
              style={{
                display: "flex",
                gap: "16px",
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#b8b6b4" }}>
                Store / GitHub
              </a>
              <a href="#" style={{ color: "#1a9fff" }}>
                Community
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#b8b6b4" }}>
                LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`} style={{ color: "#b8b6b4" }}>
                Contact
              </a>
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={copyEmail}
              style={{
                backgroundColor: "#5c7e10",
                color: "#e5e4dc",
                padding: "6px 12px",
                fontSize: "11px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                borderRadius: "2px",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span>{copied ? "Email Copied!" : "Install Steam / Hire Me"}</span>
            </button>
            <span style={{ color: "#b8b6b4", fontSize: "12px" }}>login</span>
            <span style={{ color: "#8f98a0" }}>|</span>
            <span style={{ color: "#b8b6b4", fontSize: "12px" }}>language</span>
          </div>
        </div>
      </header>

      {/* Profile Container */}
      <main
        style={{
          width: "950px",
          margin: "0 auto",
          paddingTop: "24px",
          paddingBottom: "60px",
          position: "relative",
        }}
      >
        {/* Profile Top Banner / Header */}
        <section
          style={{
            background: "rgba(23, 26, 33, 0.85)",
            backdropFilter: "blur(10px)",
            borderRadius: "4px",
            padding: "24px",
            display: "flex",
            gap: "24px",
            alignItems: "flex-start",
            marginBottom: "16px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Avatar with Animated Frame */}
          <div
            style={{
              position: "relative",
              width: "166px",
              height: "166px",
              flexShrink: 0,
            }}
          >
            <img
              src={PROFILE.avatarUrl}
              alt={PROFILE.name}
              style={{
                width: "166px",
                height: "166px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <img
              src={PROFILE.avatarFrame}
              alt="Avatar Frame"
              style={{
                position: "absolute",
                top: "-18px",
                left: "-18px",
                width: "202px",
                height: "202px",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </div>

          {/* Profile Name & Summary */}
          <div style={{ flexGrow: 1 }}>
            <h1
              style={{
                fontSize: "24px",
                color: "#ffffff",
                fontWeight: 300,
                marginBottom: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {PROFILE.name}
            </h1>
            <div style={{ color: "var(--online-green)", fontSize: "12px", marginBottom: "8px" }}>
              📍 {PROFILE.location} &nbsp;|&nbsp; 🎓 Computer Science @ Brawijaya University
            </div>
            <div
              style={{
                color: "#acb2b8",
                fontSize: "13px",
                marginBottom: "16px",
                maxWidth: "500px",
                lineHeight: "1.5",
              }}
            >
              {PROFILE.summary}
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {PROFILE.topSkills.map((sk) => (
                <span
                  key={sk}
                  style={{
                    fontSize: "11px",
                    background: "rgba(0,0,0,0.4)",
                    color: "var(--text-blue)",
                    padding: "3px 8px",
                    borderRadius: "2px",
                    border: "1px solid rgba(102, 192, 244, 0.3)",
                  }}
                >
                  ★ {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Level Circle & Community Leader Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div
              style={{
                border: "2px solid #4c6b22",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                color: "#ffffff",
                fontWeight: "bold",
                background: "rgba(0, 0, 0, 0.3)",
              }}
            >
              {PROFILE.level}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(0, 0, 0, 0.2)",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <img
                src={PROFILE.badgeIcon}
                alt="Badge"
                style={{ width: "42px", height: "42px" }}
              />
              <div>
                <div style={{ color: "#ffffff", fontSize: "12px", fontWeight: "bold" }}>
                  {PROFILE.badgeTitle}
                </div>
                <div style={{ color: "#8f98a0", fontSize: "11px" }}>{PROFILE.badgeXP}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid: Left Column Showcases (1fr) + Right Sidebar (280px) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "16px",
          }}
        >
          {/* Left Column */}
          <div>
            {/* Featured Game Showcase (Lead Project: MEDEVA Risk Stratification) */}
            <section
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                marginBottom: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#8f98a0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  paddingBottom: "6px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Featured Showcase / Lead Role</span>
                <span style={{ fontSize: "11px", color: "var(--text-blue)" }}>IN PROGRESS</span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <img
                  src="/assets/images/shared.akamai.steamstatic.com/capsule_184x69-7dacf18340.jpg"
                  alt="MEDEVA ML"
                  style={{ width: "184px", height: "69px", borderRadius: "2px", objectFit: "cover" }}
                />
                <div style={{ display: "flex", gap: "24px" }}>
                  <div>
                    <div style={{ fontSize: "20px", color: "#ffffff" }}>245</div>
                    <div style={{ fontSize: "11px", color: "#8f98a0", textTransform: "uppercase" }}>
                      Hours Interned
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", color: "#ffffff" }}>12 / 12</div>
                    <div style={{ fontSize: "11px", color: "#8f98a0", textTransform: "uppercase" }}>
                      Milestones Met
                    </div>
                  </div>
                </div>
              </div>
              <p style={{ color: "#acb2b8", fontSize: "13px", lineHeight: "1.5" }}>
                <strong>MEDEVA — Risk Stratification Engine:</strong> End-to-end Machine Learning pipeline for BPJS
                patients. Combining NLP classification (Logistic Regression) with K-Means clustering for clinical
                hypertension and diabetes mellitus risk indicators.
              </p>
              <div style={{ marginTop: "12px" }}>
                <a
                  href="https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--btn-bg)",
                    color: "#ffffff",
                    padding: "6px 14px",
                    borderRadius: "2px",
                    fontSize: "12px",
                    fontWeight: 500,
                  }}
                >
                  Play / Launch Live Demo ↗
                </a>
              </div>
            </section>

            {/* Recent Activity Showcase (All Work Experiences as Games) */}
            <section
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                marginBottom: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#8f98a0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  paddingBottom: "6px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Career Activity ({PROFILE.experiences.length} Quests)
              </div>

              {PROFILE.experiences.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "12px",
                    background: "rgba(0, 0, 0, 0.2)",
                    padding: "10px",
                    borderRadius: "3px",
                    marginBottom: "8px",
                    border: "1px solid rgba(255,255,255,0.02)",
                  }}
                >
                  <img
                    src={
                      i % 2 === 0
                        ? "/assets/images/shared.akamai.steamstatic.com/b20a49e94c49ef54d009da987d56b0f9b74447ae-8dc915bce1.jpg"
                        : "/assets/images/shared.akamai.steamstatic.com/544ed7db7ee3328cd09404329cb25926794e4830-ee8ec8c252.jpg"
                    }
                    alt={exp.company}
                    style={{ width: "64px", height: "64px", borderRadius: "2px", objectFit: "cover" }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <div style={{ fontSize: "14px", color: "#ffffff", fontWeight: "bold" }}>
                        {exp.role} <span style={{ color: "var(--text-blue)", fontWeight: "normal" }}>@ {exp.company}</span>
                      </div>
                      <div style={{ fontSize: "11px", color: "#8f98a0" }}>{exp.period}</div>
                    </div>
                    <div style={{ fontSize: "12px", color: "#8f98a0", marginTop: "2px" }}>
                      {exp.recent}
                    </div>
                    <div style={{ fontSize: "12px", color: "#acb2b8", marginTop: "4px" }}>
                      {exp.desc}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Custom Showcase: Education & Academics */}
            <section
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                marginBottom: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#8f98a0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  paddingBottom: "6px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                Education History
              </div>
              {PROFILE.education.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    padding: "8px 0",
                    borderBottom: i < PROFILE.education.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ color: "#ffffff", fontWeight: "bold" }}>{edu.school}</div>
                    <div style={{ color: "#8f98a0", fontSize: "12px" }}>{edu.period}</div>
                  </div>
                  <div style={{ color: "var(--text-blue)", fontSize: "12px" }}>{edu.degree}</div>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column: Sidebar Stats */}
          <aside>
            {/* Online Status */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                marginBottom: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  color: "var(--online-green)",
                  fontWeight: 300,
                  marginBottom: "6px",
                }}
              >
                Currently Online
              </div>
              <div style={{ fontSize: "12px", color: "#8f98a0" }}>Ready for Software Engineering Roles</div>
            </div>

            {/* Sidebar Badges Summary */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                marginBottom: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#8f98a0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Certifications</span>
                <span style={{ color: "#ffffff" }}>{PROFILE.badges.length}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PROFILE.badges.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      background: "rgba(0,0,0,0.2)",
                      padding: "6px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    <div>
                      <div style={{ color: "#ffffff" }}>{b.name}</div>
                      <div style={{ color: "#8f98a0", fontSize: "10px" }}>{b.org}</div>
                    </div>
                    <span style={{ color: "var(--text-gold)", fontSize: "11px" }}>{b.xp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Links */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                marginBottom: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <ul style={{ listStyle: "none" }}>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", color: "#8f98a0" }}
                  >
                    <span>LinkedIn Profile</span>
                    <span style={{ color: "#ffffff" }}>↗</span>
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", color: "#8f98a0" }}
                  >
                    <span>GitHub Repositories</span>
                    <span style={{ color: "#ffffff" }}>↗</span>
                  </a>
                </li>
                <li style={{ marginBottom: "8px" }}>
                  <button
                    onClick={copyEmail}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#8f98a0",
                      background: "none",
                      border: "none",
                      padding: 0,
                      width: "100%",
                      cursor: "pointer",
                      fontSize: "13px",
                      textAlign: "left",
                    }}
                  >
                    <span>Copy Email</span>
                    <span style={{ color: "#ffffff" }}>{copied ? "Copied!" : "📋"}</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#000000",
          color: "#8b929a",
          padding: "32px 0",
          fontSize: "12px",
          borderTop: "1px solid #363c44",
        }}
      >
        <div
          style={{
            width: "940px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #363c44",
              paddingBottom: "16px",
            }}
          >
            <img
              src="/assets/images/community.akamai.steamstatic.com/footerLogo_valve_new-58413ab1ee.png"
              alt="Valve Logo"
              style={{ height: "26px" }}
            />
            <img
              src="/assets/images/community.akamai.steamstatic.com/header_logo-6f7393813c.png"
              alt="Steam Logo"
              style={{ height: "26px" }}
            />
          </div>
          <div>
            &copy; 2026 Dionisius Surya Jaya. Built with exact Steam Community Profile specifications. All trademarks are
            property of their respective owners.
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: "#c6d4df" }}>
              LinkedIn
            </a>{" "}
            |
            <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: "#c6d4df" }}>
              GitHub
            </a>{" "}
            |
            <a href={`mailto:${PROFILE.email}`} style={{ color: "#c6d4df" }}>
              Contact Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
