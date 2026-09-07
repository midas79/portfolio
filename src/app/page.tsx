"use client";

import { useState, useEffect } from "react";
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

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;
  function step(ts: number) {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    window.scrollTo(0, startY + diff * easeOutCubic(p));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
      {children}
    </motion.div>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const staggerPop = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProgress((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="fixed top-0 left-0 h-[3px] bg-[var(--red)] z-[80]" style={{ width: `${progress}%`, transition: "width 120ms linear" }} />;
}

function RegisterHeader() {
  return (
    <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="register sticky top-0 z-40">
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="brandmark">DIONISIUS['SURYA_JAYA]</motion.span>
      <div className="marquee-wrapper flex-1">
        <div className="marquee-inner mono">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-7 items-center">
              <span>ISSUE 2026</span>
              <span className="st">VOL. 01 / N° 04</span>
              <span className="tag">&gt;&gt;&gt; PUBLIC PORTFOLIO</span>
              <span>COORD 7.9666° S / 112.6326° E (MALANG)</span>
              <span className="st">BACHELOR INFORMATICS · GPA 3.58</span>
              <span className="tag">/// SWISS INDUSTRIAL SPECIFICATION</span>
              <span>UNIVERSITAS BRAWIJAYA</span>
            </span>
          ))}
        </div>
      </div>
      <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex gap-4">
        {NAV_ITEMS.map((item, i) => (
          <motion.a
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector(item.href) as HTMLElement | null;
              if (el) smoothScrollTo(el.offsetTop - 80, 900);
            }}
            className="link mono"
          >
            [{item.label}]
          </motion.a>
        ))}
      </motion.nav>
    </motion.header>
  );
}

function Hero() {
  const tick = { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } };
  return (
    <section className="hero">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} className="wrap hero-grid">
        <motion.div>
          <motion.div variants={staggerPop} className="kicker mono">
            <motion.span variants={tick} className="tick"></motion.span>
            <span>SYSTEM REGISTER /// FULLSTACK &amp; MACHINE LEARNING ENGINEER</span>
          </motion.div>
          <motion.h1 variants={staggerPop} className="display hero-num">
            DIONISIUS<span className="sup">®</span>
          </motion.h1>
          <motion.div variants={staggerPop} className="display" style={{ color: "var(--red)" }}>
            SURYA JAYA
          </motion.div>
          <motion.div variants={staggerPop} className="display">ENGINEER</motion.div>
          <motion.p variants={staggerPop} style={{ maxWidth: "60ch", marginTop: "32px", fontSize: "18px", lineHeight: 1.6 }}>
            /// Computer Science undergraduate at <strong>Universitas Brawijaya</strong> (2022—2026) with a <strong>3.58 / 4.00 GPA</strong>. Specialized in production full-stack Web engineering, data analytics, and machine learning pipelines.
          </motion.p>
          <motion.div variants={staggerPop} className="flex gap-4 flex-wrap mt-8">
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#projects" onClick={(e) => { e.preventDefault(); const el = document.querySelector("#projects") as HTMLElement | null; if (el) smoothScrollTo(el.offsetTop - 80, 900); }} className="btn">
              VIEW PROJECTS [ 07 ]
            </motion.a>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#contact" onClick={(e) => { e.preventDefault(); const el = document.querySelector("#contact") as HTMLElement | null; if (el) smoothScrollTo(el.offsetTop - 80, 900); }} className="btn-outline">
              GET IN TOUCH
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerPop} className="hero-meta mono">
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">INSTITUTION</span>
            <span className="val">UNIV. BRAWIJAYA</span>
          </motion.div>
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">MAJOR</span>
            <span className="val">TEKNIK INFORMATIKA</span>
          </motion.div>
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">CUM. GPA</span>
            <span className="val" style={{ color: "var(--red)" }}>3.58 / 4.00</span>
          </motion.div>
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">LOCATION</span>
            <span className="val">MALANG, ID</span>
          </motion.div>
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">CERTS</span>
            <span className="val">10 DICODING SPECS</span>
          </motion.div>
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">STACK</span>
            <span className="val">REACT / PYTHON / LARAVEL</span>
          </motion.div>
          <motion.div variants={staggerPop} className="meta-row">
            <span className="lbl">AVAILABILITY</span>
            <span className="val" style={{ color: "var(--red)" }}>&gt;&gt;&gt; OPEN FOR ROLES</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function DataCluster() {
  return (
    <section>
      <div className="wrap">
        <Reveal>
          <div className="kicker mono">
            <span className="tick"></span>
            <span>[ DATA CLUSTER ] /// PERFORMANCE METRICS</span>
          </div>
        </Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="divider-module">
          {[
            { idx: "01", amt: "3.58", sub: ["CUMULATIVE GPA", "ACADEMIC RIGOR"] },
            { idx: "02", amt: "10", sub: ["DICODING SPECS", "VERIFIED CREDENTIALS"] },
            { idx: "03", amt: "07", sub: ["SHIPPED SYSTEMS", "ML, GIS & WEB APPS"] },
            { idx: "04", amt: "2026", sub: ["BACHELOR DEGREE", "COMPUTER SCIENCE"] },
          ].map((c) => (
            <motion.div key={c.idx} variants={staggerPop} whileHover={{ y: -3 }} className="cell">
              <span className="idx mono">{c.idx}</span>
              <span className="amt">{c.amt}</span>
              <span className="sub">{c.sub[0]}<br />{c.sub[1]}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const theses = [
    { num: "01.", title: "Computer Science Rigor", p: "Undergraduate in Teknik Informatika (Computer Science) at Universitas Brawijaya (2022—2026) maintaining a 3.58 GPA. Dedicated to algorithms, data structures, software architecture, and computational efficiency." },
    { num: "02.", title: "End-to-End Machine Learning", p: "Engineered clinical risk stratification for Medeva PROLANIS BPJS combining Logistic Regression NLP for Hypertension with K-Means K=4 for Diabetes Mellitus. Stateless inference pipelines with automated data-drift checks." },
    { num: "03.", title: "Geospatial & Fullstack Engineering", p: "Developed Web GIS portals using ArcGIS, QGIS, and Leaflet.js during MMD FILKOM UB 2024 at Ngasem. Full-stack: React/Next.js frontend, Node.js + Laravel backend, Docker deployments." },
    { num: "04.", title: "Continuous Advancement", p: "Completed Web Developer Cohort at Coding Camp powered by DBS Foundation (2025) plus 10 professional Dicoding certifications spanning JavaScript, Front-End, Back-End, and Git workflows." },
  ];
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className="kicker mono">
            <span className="tick"></span>
            <span>[ MANIFEST ] &gt;&gt;&gt; BIOGRAPHY &amp; ENGINEERING THESES</span>
          </div>
        </Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
          {theses.map((t) => (
            <motion.article key={t.num} variants={staggerPop} className="thesis">
              <div className="thesis-head">
                <span className="thesis-num">{t.num}</span>
                <h3>{t.title}</h3>
              </div>
              <p>{t.p}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <div className="kicker mono">
            <span className="tick"></span>
            <span>[ TYPOGRAPHIC SPECIMEN ] &gt;&gt;&gt; TECH STACK &amp; TOOLING</span>
          </div>
        </Reveal>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="spec-grid">
          {Object.entries(SKILLS).map(([key, cat]) => (
            <motion.div key={key} variants={staggerPop} whileHover={{ y: -4 }} className="spec">
              <span className="scale-1">{cat.title}</span>
              <div className="flex flex-wrap gap-2 my-4">
                {cat.items.map((item) => (
                  <span key={item} className="mono" style={{ background: "var(--ink)", color: "var(--paper)", padding: "4px 8px" }}>{item}</span>
                ))}
              </div>
              <div className="mono meta">MODULE ID: {key} /// VERIFIED</div>
            </motion.div>
          ))}
        </motion.div>
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
      <ScrollProgress />
      <RegisterHeader />
      <main>
        <Hero />
        <DataCluster />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Reveal><AsciiSchematic /></Reveal>
        <ContactColophon />
      </main>
      <Footer />
    </>
  );
}
