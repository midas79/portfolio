"use client";

import { useState } from "react";

const PROFILE = {
  name: "Dionisius Surya Jaya",
  alias: "dionisiussj",
  level: 42,
  badgeTitle: "Community Leader & ML Engineer",
  badgeXP: "1,337 XP",
  avatarUrl: "/assets/images/avatar_full.jpg",
  avatarFrame: "/assets/images/shared.akamai.steamstatic.com/c447714efa9703c4c0007a8316127c12ea0d32f4.png",
  badgeIcon: "/assets/images/shared.akamai.steamstatic.com/2def078bb9d550e4496e9b8ac1f7bca3d4b1ad99-b783dbdb84.png",
  location: "Malang Regency, East Java, Indonesia",
  headline: "In-Game: Visual Studio Code — Full-Stack & Machine Learning Workspace",
  summary:
    "I am an undergraduate Computer Science student at Universitas Brawijaya (Informatics 2022–2026) with a strong passion for programming and software development. My goal is to become a professional programmer who not only writes clean and efficient code but also builds meaningful, impactful solutions. Constantly seeking opportunities to learn new technologies, refine system architectures, and contribute to production-grade real-world projects.",
  email: "dionisius.suryajaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/dionisiussj",
  github: "https://github.com/midas79",
  topSkills: [
    "WebDev",
    "Front-End Development",
    "Machine Learning & NLP",
    "Backend & APIs",
    "Financial Planning",
    "Geospatial WebGIS",
  ],
  badges: [
    { name: "Belajar Dasar Git dengan GitHub", org: "Dicoding Indonesia", xp: "100 XP", icon: "📦" },
    { name: "Belajar Back-End Pemula dengan JavaScript", org: "Dicoding Indonesia", xp: "250 XP", icon: "⚙️" },
    { name: "Belajar Fundamental Front-End Web Dev", org: "Dicoding Indonesia", xp: "250 XP", icon: "🎨" },
    { name: "Belajar Dasar Pemrograman Web", org: "Dicoding Indonesia", xp: "100 XP", icon: "🌐" },
    { name: "Financial Literacy 101", org: "Financial Education", xp: "150 XP", icon: "💎" },
    { name: "4 Years of Service (2022 - 2026)", org: "Universitas Brawijaya", xp: "500 XP", icon: "🏅" },
  ],
  leadShowcase: {
    title: "MEDEVA — Health Risk Stratification System",
    genre: "Machine Learning / Clinical Predictive Diagnostics",
    developer: "MEDEVA & Dionisius Surya Jaya",
    publisher: "Healthcare Analytics Solutions",
    status: "Active Research & Production Pipeline",
    hoursPlayed: "320 hrs",
    achievements: "18 / 18 Unlocked (100%)",
    liveDemo: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
    githubRepo: "https://github.com/midas79",
    description:
      "End-to-end Machine Learning pipeline tailored for BPJS patient clinical data. Features automated data cleaning, exploratory data analysis, Natural Language Processing (Logistic Regression) for Hypertension symptom stratification, and unsupervised K-Means clustering for Diabetes Mellitus risk groups.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "NLP", "K-Means", "BPJS HealthTech"],
  },
  // Exact 4 Projects
  allProjects: [
    {
      id: "medeva",
      category: "Machine Learning",
      title: "Medeva — Clinical Risk Stratification",
      desc: "End-to-end ML pipeline for PROLANIS BPJS: Logistic Regression + TF-IDF NLP (Hypertension) & K-Means clustering (Diabetes Mellitus). Stateless inference with automated data-drift checks.",
      tags: ["Python", "Scikit-Learn", "Streamlit", "K-Means", "NLP"],
      hours: "320.0 hrs",
      achievements: "18 / 18 (100%)",
      link: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
      cta: "Launch Live Demo ↗",
      accent: "#90ba3c",
    },
    {
      id: "webgis",
      category: "Geospatial",
      title: "Village Digital Maps (WebGIS) — MMD FILKOM UB",
      desc: "Digital village maps for Ngasem (Ngajum, Malang) built with ArcGIS & QGIS. Interactive Leaflet WebGIS improving administrative territorial planning and public services.",
      tags: ["ArcGIS", "QGIS", "Leaflet.js", "Geospatial", "GeoJSON"],
      hours: "184.2 hrs",
      achievements: "12 / 12 (100%)",
      link: "https://midas79.github.io/Map-Digital-Desa-Ngasem/",
      cta: "Explore Interactive Map ↗",
      accent: "#57cbde",
    },
    {
      id: "anime31",
      category: "Web App",
      title: "Anime31 — Media Streaming & Catalog Platform",
      desc: "Anime streaming and media catalog showcase featuring curated user watchlists, episode release tracking, category filtering, and responsive video player integration.",
      tags: ["React", "REST API", "Tailwind CSS", "Media Player"],
      hours: "112.4 hrs",
      achievements: "8 / 8 (100%)",
      link: "https://anime31.vercel.app/",
      cta: "Launch Web App ↗",
      accent: "#ff79c6",
    },
    {
      id: "moviemate",
      category: "Web App",
      title: "Movie Mate — Social Cinema Watchlist",
      desc: "Social movie tracking web application enabling cinephiles to discover trending films, curate personal watchlists, log ratings, and exchange recommendations in real time.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "TMDB API"],
      hours: "98.5 hrs",
      achievements: "10 / 10 (100%)",
      link: "https://movie-mate-tan.vercel.app/",
      cta: "Launch Web App ↗",
      accent: "#ff5555",
    },
  ],
  // Work & Leadership Experiences from CV
  experiences: [
    {
      company: "MEDEVA",
      role: "Machine Learning Intern",
      period: "January 2026 - May 2026 (5 months)",
      location: "Malang, Indonesia",
      type: "Internship · Machine Learning & AI",
      hours: "320 hrs on record",
      desc: "Architecting and training machine learning classification pipelines for health diagnostics. Processing clinical registries, engineering features for predictive scoring, and serving real-time model inferences via interactive web demos.",
      skills: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit", "Pandas", "NLP"],
    },
    {
      company: "BPS Kota Malang",
      role: "Data Analyst & Frontend Developer",
      period: "September 2025 - November 2025 (3 months)",
      location: "Malang, Indonesia",
      type: "Contract · Public Sector Analytics",
      hours: "182 hrs on record",
      desc: "Conducted statistical data validation, regional indicator trend analysis, and engineered frontend web dashboards that enable public civil servants to query complex municipal records with ease.",
      skills: ["Data Analysis", "Frontend Development", "JavaScript", "Excel/Stats", "Tailwind CSS"],
    },
    {
      company: "Coding Camp powered by DBS Foundation",
      role: "Web Developer",
      period: "February 2025 - June 2025 (5 months)",
      location: "Malang, Indonesia",
      type: "Intensive Apprenticeship",
      hours: "210 hrs on record",
      desc: "Developed modern, mobile-first responsive web apps in an agile team workflow. Implemented client-side caching, component modularity, and integration with third-party RESTful services.",
      skills: ["React.js", "Next.js", "Front-End Development", "RESTful APIs", "Git"],
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Backend Developer and IT Support",
      period: "July 2024 - August 2024 (2 months)",
      location: "Ngasem, East Java, Indonesia",
      type: "Community Tech Initiative",
      hours: "110 hrs on record",
      desc: "Maintained and optimized the village official web portal for administrative stability. Developed a comprehensive digital village map using ArcGIS and QGIS, accelerating public service delivery.",
      skills: ["Backend Support", "ArcGIS", "QGIS", "Leaflet.js", "WebGIS", "Data Geospatial"],
    },
    {
      company: "BIOS Filkom UB",
      role: "Head of Division Consumption and Health (ORSEN FILKOM 2024)",
      period: "August 2024 - November 2024 (4 months)",
      location: "Malang, East Java, Indonesia",
      type: "Organizational Leadership",
      hours: "95 hrs on record",
      desc: "Assisted in managing meal distribution and health services, coordinated team operations, liaised with external vendors and medical teams, ensuring all logistics met high hygiene and safety standards.",
      skills: ["Leadership", "Operations Management", "Healthcare Logistics", "Coordination"],
    },
    {
      company: "Artropolis UB",
      role: "Logistics Coordinator",
      period: "September 2023 - November 2024 (1 year 3 months)",
      location: "Malang, East Java, Indonesia",
      type: "Logistics & Event Operations",
      hours: "160 hrs on record",
      desc: "Supported coordination and logistics planning, managed equipment inventory and distribution, and collaborated across cross-functional divisions to ensure smooth high-capacity event execution.",
      skills: ["Inventory Management", "Logistics", "Problem Solving", "Teamwork"],
    },
    {
      company: "MMD FILKOM UB 2024",
      role: "Event Coordinator",
      period: "July 2024 - August 2024 (2 months)",
      location: "Ngasem, East Java, Indonesia",
      type: "Community Engagement",
      hours: "80 hrs on record",
      desc: "Planned and organized local community programs, coordinated with village leadership and municipal authorities, and drove active community engagement.",
      skills: ["Event Planning", "Community Relations", "Public Speaking"],
    },
  ],
  education: [
    {
      school: "University of Brawijaya (Universitas Brawijaya)",
      degree: "Bachelor of Computer Science, Informatics",
      period: "July 2022 - July 2026 (Expected Graduation)",
      details:
        "Focus on Software Engineering, Machine Learning, Data Structures & Algorithms, Distributed Databases, and Geospatial Systems. GPA 3.58 / 4.00.",
    },
    {
      school: "SMA Negeri 1 Temanggung",
      degree: "Natural Sciences (MIPA)",
      period: "2019 - 2022",
      details: "Strong academic grounding in mathematics, logical reasoning, and computing fundamentals.",
    },
  ],
  reviews: [
    {
      author: "Dr. ML Research Lead",
      relation: "Direct Supervisor at MEDEVA",
      recommended: true,
      playtime: "320 hrs on record",
      date: "Posted: 14 April",
      review:
        "Dionisius demonstrates remarkable problem-solving initiative in machine learning. His end-to-end NLP data pipeline and K-Means segmentation for the BPJS dataset was implemented with rigorous mathematical clarity and clean code hygiene. Highly recommended for any ML engineering or full-stack software development role.",
      helpful: 48,
    },
    {
      author: "BPS Kota Malang Division Head",
      relation: "Senior Data Officer",
      recommended: true,
      playtime: "182 hrs on record",
      date: "Posted: 28 November",
      review:
        "Handled complex statistical datasets with precision. His frontend dashboards transformed raw municipal spreadsheets into readable, accessible visuals that executive leadership could immediately utilize. Fast turnaround, great communication, and strong attention to detail.",
      helpful: 34,
    },
    {
      author: "DBS Foundation Coding Camp Mentor",
      relation: "Lead Technical Reviewer",
      recommended: true,
      playtime: "210 hrs on record",
      date: "Posted: 22 June",
      review:
        "Outstanding performance throughout our Web Development curriculum. Dionisius mastered React component lifecycles, state management, and semantic styling with top scores. His code reviews are always constructive and his git commit history is textbook perfect.",
      helpful: 29,
    },
    {
      author: "Head of Ngasem Village Administration",
      relation: "MMD FILKOM UB Stakeholder",
      recommended: true,
      playtime: "110 hrs on record",
      date: "Posted: 18 August",
      review:
        "The digital WebGIS maps created by Dionisius for Ngasem village revolutionized our spatial boundaries and public service tracking. He is a humble, dedicated engineer who genuinely listens to user feedback and delivers tangible community value.",
      helpful: 52,
    },
  ],
  comments: [
    {
      user: "medeva_lead",
      date: "3 days ago",
      text: "+rep top-tier Machine Learning engineer! Fast deliverables and production-grade ML code.",
      avatar: "M",
    },
    {
      user: "bps_analyst_26",
      date: "2 weeks ago",
      text: "+rep very clean frontend code and solid statistical insights. Would love to collaborate again!",
      avatar: "B",
    },
    {
      user: "filkom_peer_ub",
      date: "1 month ago",
      text: "+rep dependable teammate on campus and during MMD Ngasem. Solid leadership in logistics and backend!",
      avatar: "F",
    },
    {
      user: "dbs_code_reviewer",
      date: "2 months ago",
      text: "+rep clean commit history, zero lint errors, verified React professional.",
      avatar: "D",
    },
  ],
};

export default function SteamProfile() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "reviews">("projects");

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Steam Top Header Nav */}
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
                fontWeight: 600,
              }}
            >
              <span>{copied ? "Email Copied!" : "Install Steam / Contact Me"}</span>
            </button>
            <span style={{ color: "#b8b6b4", fontSize: "12px" }}>login</span>
            <span style={{ color: "#8f98a0" }}>|</span>
            <span style={{ color: "#b8b6b4", fontSize: "12px" }}>language</span>
          </div>
        </div>
      </header>

      {/* Main Steam Profile Container */}
      <main
        style={{
          width: "min(960px, calc(100% - 32px))",
          margin: "0 auto",
          paddingTop: "32px",
          paddingBottom: "60px",
          position: "relative",
        }}
      >
        {/* Profile Header Card */}
        <section
          style={{
            background: "rgba(23, 26, 33, 0.88)",
            backdropFilter: "blur(12px)",
            borderRadius: "6px",
            padding: "28px",
            display: "flex",
            gap: "32px",
            alignItems: "flex-start",
            marginBottom: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          {/* Avatar + Animated Frame */}
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

          {/* Profile Main Information */}
          <div style={{ flexGrow: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
              <h1
                style={{
                  fontSize: "26px",
                  color: "#ffffff",
                  fontWeight: 400,
                  letterSpacing: "0.3px",
                  lineHeight: 1.2,
                }}
              >
                {PROFILE.name}
              </h1>
              <span
                style={{
                  fontSize: "11px",
                  color: "#66c0f4",
                  background: "rgba(102, 192, 244, 0.15)",
                  padding: "3px 8px",
                  borderRadius: "2px",
                  fontWeight: 500,
                }}
              >
                /{PROFILE.alias}
              </span>
            </div>

            {/* In-Game Status Strip */}
            <div
              style={{
                color: "#90ba3c",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "10px",
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#90ba3c",
                  display: "inline-block",
                  flexShrink: 0,
                  boxShadow: "0 0 6px #90ba3c",
                }}
              ></span>
              <span>{PROFILE.headline}</span>
            </div>

            <div style={{ color: "#8f98a0", fontSize: "12px", marginBottom: "16px", lineHeight: 1.6 }}>
              <div>📍 {PROFILE.location}</div>
              <div>🎓 Universitas Brawijaya (Informatics) — GPA 3.58 / 4.00</div>
            </div>

            <div
              style={{
                background: "rgba(0, 0, 0, 0.35)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
                borderLeft: "3px solid #66c0f4",
                borderRadius: "3px",
                padding: "12px 16px",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  color: "#c6d4df",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  margin: 0,
                  letterSpacing: "0.01em",
                }}
              >
                {PROFILE.summary}
              </p>
            </div>

            {/* Specialization Tags */}
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {PROFILE.topSkills.map((sk) => (
                <span
                  key={sk}
                  style={{
                    fontSize: "11px",
                    background: "rgba(102, 192, 244, 0.12)",
                    color: "#a8d8f8",
                    padding: "4px 10px",
                    borderRadius: "2px",
                    border: "1px solid rgba(102, 192, 244, 0.3)",
                    fontWeight: 500,
                  }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* Level Circle & Featured Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div
              style={{
                border: "2px solid #57cbde",
                borderRadius: "50%",
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                color: "#ffffff",
                fontWeight: "bold",
                background: "rgba(0, 0, 0, 0.4)",
                boxShadow: "0 0 10px rgba(87, 203, 222, 0.4)",
              }}
            >
              {PROFILE.level}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(0, 0, 0, 0.25)",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.06)",
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

        {/* Navigation Tabs to Switch Main View */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            marginBottom: "16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: "8px",
          }}
        >
          {[
            { id: "projects" as const, label: `FEATURED PROJECTS (${PROFILE.allProjects.length})` },
            { id: "experience" as const, label: `CAREER EXPERIENCE (${PROFILE.experiences.length})` },
            { id: "reviews" as const, label: `ENDORSEMENTS & REVIEWS (${PROFILE.reviews.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "8px 16px",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                background:
                  activeTab === tab.id
                    ? "linear-gradient(180deg, rgba(102, 192, 244, 0.2) 0%, rgba(33, 75, 110, 0.4) 100%)"
                    : "rgba(0,0,0,0.2)",
                color: activeTab === tab.id ? "#66c0f4" : "#8f98a0",
                border: "none",
                borderBottom: activeTab === tab.id ? "2px solid #66c0f4" : "2px solid transparent",
                cursor: "pointer",
                borderRadius: "2px 2px 0 0",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Layout: 1fr left column + 280px right column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 280px",
            gap: "16px",
          }}
        >
          {/* Left Column Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Lead Showcase (Always Visible) */}
            <section
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#8f98a0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "14px",
                  paddingBottom: "6px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Featured Game Showcase // Flagship Project</span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#90ba3c",
                    border: "1px solid rgba(144, 186, 60, 0.3)",
                    padding: "2px 6px",
                    borderRadius: "2px",
                  }}
                >
                  ● Active In Production
                </span>
              </div>

              {/* Game Banner Header */}
              <div
                style={{
                  background: "linear-gradient(90deg, rgba(20,30,48,0.7) 0%, rgba(36,59,85,0.7) 100%)",
                  borderRadius: "4px",
                  padding: "14px",
                  marginBottom: "14px",
                  border: "1px solid rgba(102, 192, 244, 0.2)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <h3 style={{ fontSize: "18px", color: "#ffffff", fontWeight: "bold" }}>
                    {PROFILE.leadShowcase.title}
                  </h3>
                  <div style={{ fontSize: "12px", color: "#66c0f4", marginTop: "2px" }}>
                    {PROFILE.leadShowcase.genre}
                  </div>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <div style={{ fontSize: "20px", color: "#ffffff", fontWeight: "bold" }}>
                      {PROFILE.leadShowcase.hoursPlayed}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8f98a0", textTransform: "uppercase" }}>
                      Hours Interned
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "20px", color: "#57cbde", fontWeight: "bold" }}>
                      {PROFILE.leadShowcase.achievements}
                    </div>
                    <div style={{ fontSize: "11px", color: "#8f98a0", textTransform: "uppercase" }}>
                      Milestones
                    </div>
                  </div>
                </div>
              </div>

              <p style={{ color: "#c6d4df", fontSize: "13px", lineHeight: "1.6", marginBottom: "12px" }}>
                {PROFILE.leadShowcase.description}
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
                {PROFILE.leadShowcase.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      background: "rgba(0,0,0,0.4)",
                      color: "#8f98a0",
                      padding: "2px 6px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href={PROFILE.leadShowcase.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: "2px",
                    fontSize: "12px",
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  Play / Launch Streamlit Web App ↗
                </a>
                <a
                  href={PROFILE.leadShowcase.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#c6d4df",
                    padding: "8px 16px",
                    borderRadius: "2px",
                    fontSize: "12px",
                    display: "inline-block",
                  }}
                >
                  View ML Source Code ↗
                </a>
              </div>
            </section>

            {/* TAB 1: PROJECTS (Exact 4 Portfolio Projects) */}
            {activeTab === "projects" && (
              <section
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "4px",
                  padding: "16px",
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
                  <span>Software Portfolio Projects ({PROFILE.allProjects.length})</span>
                  <span style={{ fontSize: "11px", color: "var(--online-green)" }}>All Shipped Works</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {PROFILE.allProjects.map((proj) => (
                    <div
                      key={proj.id}
                      style={{
                        background: "rgba(0, 0, 0, 0.25)",
                        borderRadius: "3px",
                        padding: "14px",
                        border: "1px solid rgba(255, 255, 255, 0.04)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: "6px",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "15px", color: "#ffffff", fontWeight: "bold" }}>
                            {proj.title}
                          </div>
                          <span
                            style={{
                              fontSize: "10px",
                              color: proj.accent,
                              border: `1px solid ${proj.accent}40`,
                              padding: "1px 5px",
                              borderRadius: "2px",
                              marginTop: "2px",
                              display: "inline-block",
                            }}
                          >
                            {proj.category}
                          </span>
                        </div>

                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: "11px", color: "#90ba3c", fontFamily: "monospace" }}>
                            {proj.hours} on record
                          </div>
                          <div style={{ fontSize: "10px", color: "#8f98a0" }}>{proj.achievements}</div>
                        </div>
                      </div>

                      <p style={{ fontSize: "12px", color: "#acb2b8", lineHeight: "1.5" }}>{proj.desc}</p>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          flexWrap: "wrap",
                          gap: "8px",
                          marginTop: "4px",
                          paddingTop: "6px",
                          borderTop: "1px solid rgba(255,255,255,0.03)",
                        }}
                      >
                        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                          {proj.tags.map((t) => (
                            <span
                              key={t}
                              style={{
                                fontSize: "10px",
                                background: "rgba(0,0,0,0.5)",
                                color: "#8f98a0",
                                padding: "2px 6px",
                                borderRadius: "2px",
                              }}
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: "11px",
                            color: "#ffffff",
                            backgroundColor: "var(--btn-bg)",
                            padding: "5px 12px",
                            borderRadius: "2px",
                            fontWeight: 500,
                          }}
                        >
                          {proj.cta}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB 2: CAREER EXPERIENCES */}
            {activeTab === "experience" && (
              <section
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "4px",
                  padding: "16px",
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
                  }}
                >
                  <span>Career Experience & Quest Log ({PROFILE.experiences.length})</span>
                  <span style={{ fontSize: "11px", color: "#8f98a0" }}>Work & Leadership Roles</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {PROFILE.experiences.map((exp, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        padding: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.03)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "4px",
                        }}
                      >
                        <div>
                          <span style={{ fontSize: "14px", color: "#ffffff", fontWeight: "bold" }}>
                            {exp.role}
                          </span>{" "}
                          <span style={{ color: "#66c0f4", fontSize: "13px" }}>@ {exp.company}</span>
                        </div>
                        <span style={{ fontSize: "11px", color: "#8f98a0", fontFamily: "monospace" }}>
                          {exp.period}
                        </span>
                      </div>

                      <div style={{ fontSize: "11px", color: "#90ba3c", marginBottom: "6px" }}>
                        📍 {exp.location} &nbsp;•&nbsp; {exp.type} &nbsp;•&nbsp; {exp.hours}
                      </div>

                      <p style={{ fontSize: "12px", color: "#acb2b8", lineHeight: "1.4", marginBottom: "8px" }}>
                        {exp.desc}
                      </p>

                      <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            style={{
                              fontSize: "10px",
                              background: "rgba(102, 192, 244, 0.08)",
                              color: "#66c0f4",
                              padding: "2px 6px",
                              borderRadius: "2px",
                              border: "1px solid rgba(102, 192, 244, 0.2)",
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* TAB 3: REVIEWS & ENDORSEMENTS */}
            {activeTab === "reviews" && (
              <section
                style={{
                  background: "var(--bg-card)",
                  borderRadius: "4px",
                  padding: "16px",
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
                  <span>Customer Reviews / Professional Endorsements ({PROFILE.reviews.length})</span>
                  <span style={{ fontSize: "11px", color: "#66c0f4" }}>Overwhelmingly Positive (100%)</span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {PROFILE.reviews.map((rev, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(0, 0, 0, 0.3)",
                        borderRadius: "3px",
                        padding: "14px",
                        border: "1px solid rgba(255, 255, 255, 0.04)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          marginBottom: "10px",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                          paddingBottom: "8px",
                        }}
                      >
                        <div
                          style={{
                            background: "#214b6e",
                            color: "#66c0f4",
                            width: "36px",
                            height: "36px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "18px",
                            borderRadius: "2px",
                          }}
                        >
                          👍
                        </div>
                        <div>
                          <div style={{ fontSize: "14px", color: "#ffffff", fontWeight: "bold" }}>
                            Recommended
                          </div>
                          <div style={{ fontSize: "11px", color: "#8f98a0" }}>
                            {rev.playtime} &nbsp;|&nbsp; {rev.relation}
                          </div>
                        </div>
                        <div style={{ marginLeft: "auto", fontSize: "11px", color: "#8f98a0" }}>
                          {rev.date}
                        </div>
                      </div>

                      <p style={{ color: "#c6d4df", fontSize: "13px", lineHeight: "1.6", marginBottom: "10px" }}>
                        &ldquo;{rev.review}&rdquo;
                      </p>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          fontSize: "11px",
                          color: "#8f98a0",
                          borderTop: "1px solid rgba(255,255,255,0.03)",
                          paddingTop: "6px",
                        }}
                      >
                        <div>
                          Review by <strong style={{ color: "#ffffff" }}>{rev.author}</strong>
                        </div>
                        <div>{rev.helpful} people found this review helpful</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Steam Comments Section (Always visible at bottom of left col) */}
            <section
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
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
                }}
              >
                <span>Comments ({PROFILE.comments.length})</span>
                <button
                  onClick={copyEmail}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#66c0f4",
                    cursor: "pointer",
                    fontSize: "11px",
                    textDecoration: "underline",
                  }}
                >
                  Leave a +rep comment via email
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PROFILE.comments.map((cm, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "10px",
                      background: "rgba(0,0,0,0.2)",
                      padding: "8px 10px",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "#2a475e",
                        borderRadius: "2px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "12px",
                        flexShrink: 0,
                      }}
                    >
                      {cm.avatar}
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "12px" }}>
                          {cm.user}
                        </span>
                        <span style={{ color: "#8f98a0", fontSize: "10px" }}>{cm.date}</span>
                      </div>
                      <p style={{ color: "#c6d4df", fontSize: "12px", marginTop: "2px", fontFamily: "monospace" }}>
                        {cm.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column / Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Online Status Widget */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  color: "var(--online-green)",
                  fontWeight: 300,
                  marginBottom: "4px",
                }}
              >
                Currently Online
              </div>
              <div style={{ fontSize: "12px", color: "#8f98a0", marginBottom: "8px" }}>
                Open to Full-Time / Internship Roles
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#c6d4df",
                  background: "rgba(0,0,0,0.3)",
                  padding: "6px 8px",
                  borderRadius: "2px",
                  fontFamily: "monospace",
                  wordBreak: "break-all",
                }}
              >
                {PROFILE.email}
              </div>
            </div>

            {/* Badges & Certifications Showcase */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#8f98a0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Badges & Certs</span>
                <span style={{ color: "#ffffff" }}>{PROFILE.badges.length}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {PROFILE.badges.map((b, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      background: "rgba(0,0,0,0.25)",
                      padding: "8px 10px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255,255,255,0.02)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", overflow: "hidden" }}>
                      <span style={{ fontSize: "16px" }}>{b.icon}</span>
                      <div style={{ overflow: "hidden" }}>
                        <div style={{ color: "#ffffff", fontSize: "11px", fontWeight: "bold", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {b.name}
                        </div>
                        <div style={{ color: "#8f98a0", fontSize: "10px" }}>{b.org}</div>
                      </div>
                    </div>
                    <span style={{ color: "var(--text-gold)", fontSize: "10px", fontWeight: "bold", marginLeft: "6px" }}>
                      {b.xp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Inventory Widget */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
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
                <span>Tech Inventory</span>
                <span style={{ color: "#ffffff" }}>18 Items</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                {[
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "Python",
                  "Scikit-Learn",
                  "Pandas",
                  "Node.js",
                  "Express.js",
                  "Laravel",
                  "PostgreSQL",
                  "MySQL",
                  "SQLite",
                  "Docker",
                  "ArcGIS",
                  "QGIS",
                  "Leaflet.js",
                  "Git & GitHub",
                ].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: "11px",
                      background: "rgba(0,0,0,0.35)",
                      color: "#c6d4df",
                      padding: "2px 6px",
                      borderRadius: "2px",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Lore */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
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
                }}
              >
                Education Lore
              </div>
              {PROFILE.education.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "8px 0",
                    borderBottom: idx < PROFILE.education.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <div style={{ color: "#ffffff", fontWeight: "bold", fontSize: "12px" }}>
                    {edu.school}
                  </div>
                  <div style={{ color: "#66c0f4", fontSize: "11px" }}>{edu.degree}</div>
                  <div style={{ color: "#8f98a0", fontSize: "10px", marginTop: "2px" }}>
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "4px",
                padding: "16px",
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
                }}
              >
                Quick Links
              </div>
              <ul style={{ listStyle: "none", fontSize: "12px" }}>
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
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    <span>Direct Email</span>
                    <span style={{ color: "#ffffff" }}>{copied ? "Copied!" : "📋"}</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Steam Footer */}
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
            &copy; 2026 Dionisius Surya Jaya. All rights reserved. Powered by Next.js & Motiva Sans. Authentic Steam
            Community Profile architecture.
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
