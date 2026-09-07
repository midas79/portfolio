"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
];

const SKILLS = {
  FE: { title: "FRONTEND ENGINEERING", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5/CSS3", "Figma Design"] },
  BE: { title: "BACKEND & ARCHITECTURE", items: ["Node.js", "Laravel", "Kotlin", "Python", "Express.js"] },
  DB: { title: "DATABASE & DEVOPS", items: ["MongoDB", "MySQL", "PostgreSQL", "Docker", "Git / GitHub"] },
  ML: { title: "DATA SCIENCE & GIS", items: ["Scikit-Learn", "Pandas", "ArcGIS", "QGIS", "Streamlit"] },
};

const PROJECTS = [
  {
    rk: "N°01",
    title: "Medeva — Clinical Risk Stratification",
    desc: "End-to-end ML pipeline for PROLANIS BPJS: Logistic Regression + TF-IDF (HT) and K-Means K=4 + Rule-based (DM). Stateless inference, 46% HT coverage, silhouette 0.35.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "K-Means", "NLP"],
    type: "Machine Learning",
    link: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/",
    status: "LIVE DEMO ↗",
  },
  {
    rk: "N°02",
    title: "Village Digital Maps — MMD FILKOM UB",
    desc: "Digital village maps for Ngasem (Ngajum, Malang) built with ArcGIS & QGIS. Interactive Leaflet WebGIS improving administrative planning and geospatial analysis.",
    tags: ["ArcGIS", "QGIS", "Leaflet.js", "Geospatial"],
    type: "Geospatial",
    link: "https://midas79.github.io/Map-Digital-Desa-Ngasem/",
    status: "LIVE MAP ↗",
  },
  {
    rk: "N°03",
    title: "Anime31",
    desc: "Anime streaming platform feature showcase with user watchlists, episode tracking, and real-time content recommendations.",
    tags: ["React", "REST API", "Tailwind"],
    type: "Web App",
    link: "#",
    status: "SYSTEM READY",
  },
  {
    rk: "N°04",
    title: "Movie Mate",
    desc: "Social movie tracking web application enabling users to curate film watchlists, post reviews, and discover trending cinema.",
    tags: ["Next.js", "Firebase", "Tailwind"],
    type: "Web App",
    link: "#",
    status: "SYSTEM READY",
  },
  {
    rk: "N°05",
    title: "Uptime Monitor Engine",
    desc: "Self-hosted network monitoring engine tracking HTTP endpoints, TCP ports, and DNS propagation with automated alerting.",
    tags: ["Docker", "Node.js", "SQLite"],
    type: "Self-Hosted",
    link: "#",
    status: "SELF-HOSTED",
  },
  {
    rk: "N°06",
    title: "Sentiment Analyzer Pipeline",
    desc: "NLP-based sentiment classification suite with CSV upload parsing, interactive visualization charts, and report exports.",
    tags: ["Python", "Flask", "NLP"],
    type: "Research",
    link: "#",
    status: "RESEARCH",
  },
  {
    rk: "N°07",
    title: "Task Management System",
    desc: "Kanban project management platform featuring drag-and-drop workflow boards, team assignment tools, and velocity metrics.",
    tags: ["Laravel", "MySQL", "Vue.js"],
    type: "Web App",
    link: "#",
    status: "STABLE",
  },
];

const EXPERIENCES = [
  {
    rk: "EXP.01",
    period: "JAN 2026 — MAY 2026",
    title: "Machine Learning Intern",
    company: "Medeva · Clinical Risk Systems",
    desc: "Engineered integrated clinical risk stratification algorithms for PROLANIS BPJS patients. Built hybrid pipelines pairing Logistic Regression NLP for Hypertension with K-Means clustering for Diabetes Mellitus.",
    tags: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit"],
    category: "work",
  },
  {
    rk: "EXP.02",
    period: "SEP 2025 — NOV 2025",
    title: "Data Analyst & Frontend Developer",
    company: "BPS Kota Malang · Regional Agency",
    desc: "Analyzed municipal statistical datasets, built data visualizations, and engineered interactive frontend dashboard modules for public regional data dissemination.",
    tags: ["Data Analysis", "Frontend", "React", "Next.js", "Python"],
    category: "work",
  },
  {
    rk: "EXP.03",
    period: "FEB 2025 — JUN 2025",
    title: "Web Developer Cohort",
    company: "Coding Camp · DBS Foundation",
    desc: "Completed full-stack Web Development track. Developed production-ready applications utilizing modern JavaScript tooling and agile collaborative workflows.",
    tags: ["Full-Stack", "JavaScript", "Web Dev"],
    category: "training",
  },
  {
    rk: "EXP.04",
    period: "JUL 2024 — AUG 2024",
    title: "Backend Developer & IT Support",
    company: "MMD FILKOM UB 2024 · Ngasem Village",
    desc: "Maintained village administration portal, built digital spatial maps with ArcGIS & QGIS, and delivered technical support for rural digital transformation.",
    tags: ["ArcGIS", "QGIS", "Backend", "Web GIS"],
    category: "work",
  },
  {
    rk: "EXP.05",
    period: "JUL 2024 — AUG 2024",
    title: "Event Coordinator",
    company: "MMD FILKOM UB 2024 · Community Initiatives",
    desc: "Organized community engagement programs with village stakeholders, structuring timelines and cross-functional operations.",
    tags: ["Event Planning", "Coordination"],
    category: "org",
  },
  {
    rk: "EXP.06",
    period: "AUG 2024 — NOV 2024",
    title: "Logistics & Health Division Staff",
    company: "ORSEN FILKOM & Artropolis UB · Malang",
    desc: "Managed inventory tracking, health services, and vendor logistics coordination for major university-wide events.",
    tags: ["Logistics", "Operations"],
    category: "org",
  },
];

function smoothScrollTo(targetY: number, duration = 700) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;
  function step(ts: number) {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    window.scrollTo(0, startY + diff * p);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function RegisterHeader() {
  return (
    <header className="register">
      <span className="brandmark">DIONISIUS['SURYA_JAYA]</span>
      <div className="marquee mono">
        <span>ISSUE 2026</span>
        <span className="st">VOL. 01 / N° 04</span>
        <span className="tag">&gt;&gt;&gt; PUBLIC PORTFOLIO</span>
        <span>COORD 7.9666° S / 112.6326° E (MALANG)</span>
        <span className="st">BACHELOR INFORMATICS · GPA 3.58</span>
        <span className="tag">/// SWISS INDUSTRIAL SPECIFICATION</span>
        <span>UNIVERSITAS BRAWIJAYA</span>
      </div>
      <nav className="flex gap-4">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(item.href) as HTMLElement | null;
              if (el) smoothScrollTo(el.offsetTop, 700);
            }}
            className="link mono"
          >
            [{item.label}]
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="kicker mono">
            <span className="tick"></span>
            <span>SYSTEM REGISTER /// FULLSTACK &amp; MACHINE LEARNING ENGINEER</span>
          </div>
          <h1 className="display hero-num">
            DIONISIUS<span className="sup">®</span>
          </h1>
          <div className="display" style={{ color: "var(--red)" }}>
            SURYA JAYA
          </div>
          <div className="display">ENGINEER</div>
          <p style={{ maxWidth: "60ch", marginTop: "32px", fontSize: "18px", lineHeight: 1.6 }}>
            /// Computer Science undergraduate at <strong>Universitas Brawijaya</strong> (2022—2026) with a <strong>3.58 / 4.00 GPA</strong>. Specialized in production full-stack Web engineering, data analytics, and machine learning pipelines.
          </p>
          <div className="flex gap-4 flex-wrap mt-8">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#projects") as HTMLElement | null;
                if (el) smoothScrollTo(el.offsetTop, 700);
              }}
              className="btn"
            >
              VIEW PROJECTS [ 07 ]
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.querySelector("#contact") as HTMLElement | null;
                if (el) smoothScrollTo(el.offsetTop, 700);
              }}
              className="btn-outline"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        <div className="hero-meta mono">
          <div className="meta-row">
            <span className="lbl">INSTITUTION</span>
            <span className="val">UNIV. BRAWIJAYA</span>
          </div>
          <div className="meta-row">
            <span className="lbl">MAJOR</span>
            <span className="val">TEKNIK INFORMATIKA</span>
          </div>
          <div className="meta-row">
            <span className="lbl">CUMULATIVE GPA</span>
            <span className="val" style={{ color: "var(--red)" }}>3.58 / 4.00</span>
          </div>
          <div className="meta-row">
            <span className="lbl">LOCATION</span>
            <span className="val">MALANG, INDONESIA</span>
          </div>
          <div className="meta-row">
            <span className="lbl">CERTIFICATIONS</span>
            <span className="val">10 DICODING SPECS</span>
          </div>
          <div className="meta-row">
            <span className="lbl">PRIMARY STACK</span>
            <span className="val">REACT / PYTHON / LARAVEL</span>
          </div>
          <div className="meta-row">
            <span className="lbl">AVAILABILITY</span>
            <span className="val" style={{ color: "var(--red)" }}>&gt;&gt;&gt; OPEN FOR ROLES</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataCluster() {
  return (
    <section>
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ DATA CLUSTER ] /// PERFORMANCE METRICS</span>
        </div>
        <div className="divider-module">
          <div className="cell">
            <span className="idx mono">01</span>
            <span className="amt">3.58</span>
            <span className="sub">CUMULATIVE GPA<br />ACADEMIC RIGOR</span>
          </div>
          <div className="cell">
            <span className="idx mono">02</span>
            <span className="amt">10</span>
            <span className="sub">DICODING SPECS<br />VERIFIED CREDENTIALS</span>
          </div>
          <div className="cell">
            <span className="idx mono">03</span>
            <span className="amt">07</span>
            <span className="sub">SHIPPED SYSTEMS<br />ML, GIS &amp; WEB APPS</span>
          </div>
          <div className="cell">
            <span className="idx mono">04</span>
            <span className="amt">2026</span>
            <span className="sub">BACHELOR DEGREE<br />COMPUTER SCIENCE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ MANIFEST ] &gt;&gt;&gt; BIOGRAPHY &amp; ENGINEERING THESES</span>
        </div>

        <article className="thesis">
          <div className="thesis-head">
            <span className="thesis-num">01.</span>
            <h3>Computer Science Rigor</h3>
          </div>
          <p>
            Undergraduate student in <strong>Teknik Informatika (Computer Science)</strong> at <strong>Universitas Brawijaya</strong> (2022—2026) maintaining a <strong>3.58 GPA</strong>. Dedicated to algorithms, data structures, software architecture, and computational efficiency.
          </p>
        </article>

        <article className="thesis">
          <div className="thesis-head">
            <span className="thesis-num">02.</span>
            <h3>End-to-End Machine Learning</h3>
          </div>
          <p>
            Engineered clinical risk stratification systems for Medeva PROLANIS BPJS combining Logistic Regression NLP for Hypertension feature injection with K-Means clustering (K=4) for Diabetes Mellitus. Delivered stateless inference pipelines with automated data-drift checks.
          </p>
        </article>

        <article className="thesis">
          <div className="thesis-head">
            <span className="thesis-num">03.</span>
            <h3>Geospatial &amp; Fullstack Engineering</h3>
          </div>
          <p>
            Developed Web GIS spatial portals using ArcGIS, QGIS, and Leaflet.js during MMD FILKOM UB 2024 at Ngasem Village. Proficient across the full stack: React/Next.js frontend dashboards, Node.js and Laravel backends, and containerized Docker deployments.
          </p>
        </article>

        <article className="thesis">
          <div className="thesis-head">
            <span className="thesis-num">04.</span>
            <h3>Continuous Professional Advancement</h3>
          </div>
          <p>
            Completed Web Developer Cohort at Coding Camp powered by DBS Foundation (2025) alongside 10 professional Dicoding certifications spanning JavaScript, Front-End, Back-End, and Git workflows.
          </p>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ TYPOGRAPHIC SPECIMEN ] &gt;&gt;&gt; TECH STACK &amp; TOOLING SPECIFICATION</span>
        </div>
        <div className="spec-grid">
          {Object.entries(SKILLS).map(([key, cat]) => (
            <div key={key} className="spec">
              <span className="scale-1">{cat.title}</span>
              <div className="flex flex-wrap gap-2 my-4">
                {cat.items.map((item) => (
                  <span key={item} className="mono" style={{ background: "var(--ink)", color: "var(--paper)", padding: "4px 8px" }}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="mono meta">MODULE ID: {key} /// VERIFIED</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("ALL");
  const categories = ["ALL", "Machine Learning", "Geospatial", "Web App", "Self-Hosted", "Research"];
  const filtered = filter === "ALL" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section id="projects">
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ REGISTER INDEX ] /// SHIPPED SYSTEMS &amp; RESEARCH</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="mono"
              style={{
                padding: "8px 16px",
                background: filter === cat ? "var(--ink)" : "var(--paper)",
                color: filter === cat ? "var(--paper)" : "var(--ink)",
                border: "var(--rule)",
                cursor: "pointer",
              }}
            >
              [{cat}] {cat === "ALL" ? `[${PROJECTS.length}]` : `[${PROJECTS.filter((p) => p.type === cat).length}]`}
            </button>
          ))}
        </div>

        <div className="index-module">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="index-row"
              >
                <span className="rk">{project.rk} /// [{project.type}]</span>
                <div>
                  <div className="nm">{project.title}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((t) => (
                      <span key={t} className="mono" style={{ fontSize: "10px", color: "var(--red)" }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="ds">{project.desc}</span>
                {project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn mono" style={{ padding: "10px 18px", minHeight: "auto" }}>
                    {project.status}
                  </a>
                ) : (
                  <span className="st ok">{project.status}</span>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [tab, setTab] = useState("all");
  const tabs = [
    { id: "all", label: "ALL" },
    { id: "work", label: "WORK & INTERNSHIP" },
    { id: "training", label: "TRAINING" },
    { id: "org", label: "ORGANIZATION" },
  ];
  const filtered = tab === "all" ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === tab);

  return (
    <section id="experience">
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ CHRONOLOGICAL LOG ] &gt;&gt;&gt; EXPERIENCE &amp; CERTIFICATION TIMELINE</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="mono"
              style={{
                padding: "8px 16px",
                background: tab === t.id ? "var(--ink)" : "var(--paper)",
                color: tab === t.id ? "var(--paper)" : "var(--ink)",
                border: "var(--rule)",
                cursor: "pointer",
              }}
            >
              [{t.label}]
            </button>
          ))}
        </div>

        <div className="index-module">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp) => (
              <motion.div
                key={exp.title + exp.company}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="index-row"
                style={{ gridTemplateColumns: "1.2fr 2fr 1fr auto" }}
              >
                <span className="rk">{exp.rk} /// {exp.period}</span>
                <div>
                  <div className="nm">{exp.title}</div>
                  <div className="mono" style={{ color: "var(--red)", marginTop: "4px", fontWeight: "700" }}>
                    {exp.company}
                  </div>
                </div>
                <span className="ds">{exp.desc}</span>
                <div className="flex flex-wrap gap-1">
                  {exp.tags.map((t) => (
                    <span key={t} className="mono" style={{ background: "var(--ink)", color: "var(--paper)", padding: "2px 6px", fontSize: "9px" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function AsciiSchematic() {
  return (
    <section>
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ REGISTRATION SCHEMATIC ] /// ARCHITECTURAL ORNAMENT</span>
        </div>
        <div className="ascii">
+-----------------------------------------------------------------------------------+
|  [SYS.01]  &gt;&gt;&gt;  INSTITUTION: UNIV. BRAWIJAYA  ///  DEGREE: CS (2022-2026)         |
|  +-------------------+  +-------------------+  +-------------------+  +---------+  |
|  | ML: SCIKIT-LEARN  |  | FE: REACT/NEXT.JS |  | BE: NODE/LARAVEL  |  | GPA: 3.58|  |
|  | DM+HT PROLANIS    |  | TAILWIND/FIGMA    |  | DOCKER/EXPRESS    |  | / 4.00  |  |
|  +-------------------+  +-------------------+  +-------------------+  +---------+  |
|  STATUS: VERIFIED ®                                   LOCATION: MALANG, INDONESIA |
+-----------------------------------------------------------------------------------+
        </div>
      </div>
    </section>
  );
}

function ContactColophon() {
  const links = [
    { lbl: "ELECTRONIC MAIL", txt: "dionisius.suryajaya@gmail.com", href: "mailto:dionisius.suryajaya@gmail.com" },
    { lbl: "LINKEDIN NETWORK", txt: "linkedin.com/in/dionisiussj", href: "https://linkedin.com/in/dionisiussj" },
    { lbl: "GITHUB REPOSITORY", txt: "github.com/midas79", href: "https://github.com/midas79" },
    { lbl: "TELEPHONE / WA", txt: "+62 821-4568-8609", href: "tel:+6282145688609" },
  ];

  return (
    <section id="contact">
      <div className="wrap">
        <div className="kicker mono">
          <span className="tick"></span>
          <span>[ CLOSING COLOPHON ] &gt;&gt;&gt; CONTACT DIRECTORY</span>
        </div>

        <div className="colophon">
          {links.map((c) => (
            <a key={c.lbl} href={c.href} target="_blank" rel="noopener noreferrer" className="col link">
              <div className="mono lbl">/// {c.lbl}</div>
              <div className="txt">{c.txt} ↗</div>
            </a>
          ))}
        </div>

        <div className="cta-band">
          <div>
            <div className="mono" style={{ color: "var(--red)", marginBottom: "8px" }}>
              &gt;&gt;&gt; READY FOR PRESS &amp; ENGINEERING ROLES
            </div>
            <div className="mono" style={{ fontSize: "13px" }}>
              MALANG, EAST JAVA, INDONESIA /// UNIVERSITAS BRAWIJAYA
            </div>
          </div>
          <a href="mailto:dionisius.suryajaya@gmail.com" className="btn">
            SEND EMAIL DIRECTLY [ DIONISIUS ]
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "var(--rule)", padding: "32px 0", background: "var(--paper)" }}>
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="mono">© 2026 DIONISIUS SURYA JAYA · MALANG, INDONESIA</span>
        <span className="mono" style={{ color: "var(--ghost)" }}>
          SET IN ARCHIVO BLACK / JETBRAINS MONO / INTER
        </span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <RegisterHeader />
      <main>
        <Hero />
        <DataCluster />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AsciiSchematic />
        <ContactColophon />
      </main>
      <Footer />
    </>
  );
}
