"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "framer-motion";

function useTiltEffect() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, style: { rotateX, rotateY, transformStyle: "preserve-3d" as const }, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}

const StarBurst = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L61.8 38.2L100 50L61.8 61.8L50 100L38.2 61.8L0 50L38.2 38.2L50 0Z" />
  </svg>
);

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = {
  FE: { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Figma"] },
  BE: { title: "Backend", items: ["Node.js", "Laravel", "Kotlin", "Python", "Express"] },
  DB: { title: "Database & Tools", items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "GitHub", "Docker"] },
  ML: { title: "ML & Data", items: ["Scikit-Learn", "Pandas", "ArcGIS", "QGIS", "Streamlit"] },
};

const PROJECTS = [
  { title: "Medeva — Clinical Risk Stratification", desc: "End-to-end ML pipeline for PROLANIS BPJS: Logistic Regression + TF-IDF (HT) and K-Means K=4 + Rule-based (DM). Stateless inference, 46% HT coverage, silhouette 0.35. Web demo on Streamlit.", tags: ["Python", "Scikit-Learn", "Streamlit", "K-Means", "NLP"], type: "Machine Learning", link: "https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/", featured: true },
  { title: "Village Digital Maps — MMD FILKOM UB", desc: "Digital village maps for Ngasem (Ngajum, Malang) using ArcGIS & QGIS. Improved administrative planning with geospatial data visualization and interactive Leaflet web GIS.", tags: ["ArcGIS", "QGIS", "Leaflet", "Geospatial"], type: "Geospatial", link: "https://midas79.github.io/Map-Digital-Desa-Ngasem/", featured: true },
  { title: "Anime31", desc: "Placeholder: Anime streaming platform with user watchlists and real-time recommendations.", tags: ["React", "API"], type: "Web App", link: "#" },
  { title: "Movie Mate", desc: "Placeholder: Social movie tracking app to share reviews and discover new films with friends.", tags: ["Next.js", "Firebase"], type: "Web App", link: "#" },
  { title: "Uptime Monitor", desc: "Self-hosted monitoring for HTTP, TCP, and DNS with alerting.", tags: ["Docker", "Node.js", "SQLite"], type: "Self-Hosted", link: "#" },
  { title: "Sentiment Analyzer", desc: "NLP-based sentiment analysis with CSV upload, interactive charts, and export.", tags: ["Python", "Flask", "NLP"], type: "Research", link: "#" },
  { title: "Task Management System", desc: "Kanban project tool with drag-and-drop, team collaboration, and analytics.", tags: ["Laravel", "MySQL", "Vue.js"], type: "Web App", link: "#" },
];

const EXPERIENCES = [
  { period: "Jan 2026 — May 2026", title: "Machine Learning Intern", company: "Medeva · Internship", desc: "Developed the integrated clinical risk stratification system for PROLANIS BPJS. Built ML pipelines incorporating Logistic Regression + TF-IDF for Hypertension and K-Means clustering for Diabetes Mellitus.", tags: ["Python", "Scikit-Learn", "Machine Learning", "Streamlit", "NLP"], category: "work" },
  { period: "Sep 2025 — Nov 2025", title: "Data Analyst & Frontend Developer", company: "BPS Kota Malang · Internship", desc: "Analyzed statistical datasets, created insightful data visualizations, and developed frontend dashboards to support regional data dissemination.", tags: ["Data Analysis", "Frontend", "React", "Next.js", "Python"], category: "work" },
  { period: "Feb 2025 — Jun 2025", title: "Web Developer Cohort", company: "Coding Camp · DBS Foundation", desc: "Intensive full-stack web development program. Built production-grade applications with modern JavaScript stack and team collaboration workflows.", tags: ["Full-Stack", "JavaScript", "Web Dev"], category: "training" },
  { period: "Jul 2024 — Aug 2024", title: "Backend Developer & IT Support", company: "MMD FILKOM UB 2024 · Ngasem Village", desc: "Maintained village website, built digital village maps with ArcGIS & QGIS, provided technical support for community digital initiatives.", tags: ["ArcGIS", "QGIS", "Backend"], category: "work" },
  { period: "Jul 2024 — Aug 2024", title: "Event Coordinator", company: "MMD FILKOM UB 2024 · Community Engagement", desc: "Organized community events with local stakeholders and improved public engagement through structured programs.", tags: ["Event Planning", "Coordination"], category: "org" },
  { period: "Aug 2024 — Nov 2024", title: "Staff — Logistics & Consumption / Health", company: "ORSEN FILKOM & Artropolis UB · Malang", desc: "Managed meal distribution, health services, and equipment inventory for large-scale student events.", tags: ["Logistics", "Operations"], category: "org" },
];

const containerStagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  return <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-[4px] bg-[#d32f2f] origin-left z-[60] shadow-[0_0_10px_#ffea00]" />;
}

function smoothScrollTo(targetY: number, duration = 900) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;
  function step(ts: number) {
    if (start === null) start = ts;
    const p = Math.min((ts - start) / duration, 1);
    const ease = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
    window.scrollTo(0, startY + diff * ease);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive("#" + e.target.id); }),
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    NAV_ITEMS.forEach((n) => { const el = document.querySelector(n.href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    setActive(href);
    if (href === "#") { smoothScrollTo(0); return; }
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) smoothScrollTo(el.offsetTop - 64, 1000);
  };

  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "bg-[#0a0a0c]/95 border-b-2 border-[#d32f2f] backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#" onClick={(e) => handleNavClick(e, "#")} className="font-black text-xl tracking-wider uppercase flex items-center gap-1.5">
          <span className="bg-[#d32f2f] text-white px-2.5 py-1 border-2 border-white shadow-[3px_3px_0px_#ffea00] transform -skew-x-6">DIONISIUS</span>
          <span className="bg-[#ffea00] text-black px-2 py-1 font-black transform skew-x-6">SJ</span>
        </a>
        <div className="hidden md:flex items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1.5 transition-all transform -skew-x-6 border ${isActive ? "bg-[#d32f2f] text-white border-white shadow-[2px_2px_0px_#ffea00]" : "bg-black/60 text-gray-300 border-white/20 hover:bg-[#ffea00] hover:text-black hover:border-black"}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden font-mono font-bold text-lg w-9 h-9 flex items-center justify-center border-2 border-white bg-[#d32f2f] text-white shadow-[2px_2px_0px_#ffea00]">{open ? "✕" : "☰"}</button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden border-t-2 border-[#d32f2f] bg-[#0a0a0c] overflow-hidden">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className={`block px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider border-b border-white/10 ${active === item.href ? "text-[#ffea00] bg-[#d32f2f]" : "text-white hover:bg-[#d32f2f]/30"}`}>{item.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const tilt = useTiltEffect();

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#d32f2f]/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#ffea00]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y, opacity }}>
          <div className="mb-6 inline-block">
            <span className="p5-label-yellow text-xs font-black uppercase tracking-widest border border-black shadow-[3px_3px_0px_#d32f2f]">
              TAKE YOUR TIME // 2026
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight mb-6 uppercase">
            HI, I&apos;M<br />
            <span className="inline-block bg-[#d32f2f] text-white px-4 py-1.5 border-3 border-white shadow-[6px_6px_0px_#ffea00] transform -skew-x-6 my-2">
              DIONISIUS
            </span>
          </h1>
          <p className="text-base sm:text-lg max-w-xl mb-8 leading-relaxed text-gray-300 font-medium border-l-4 border-[#ffea00] pl-4 bg-white/5 py-3">
            Computer Science student at <strong className="text-[#ffea00]">Universitas Brawijaya</strong>. Focused on full-stack development, data analytics, and machine learning systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" onClick={(e) => { e.preventDefault(); smoothScrollTo((document.querySelector("#projects") as HTMLElement)?.offsetTop ?? 0, 900); }} className="p5-btn">
              VIEW PROJECTS ↓
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); smoothScrollTo((document.querySelector("#contact") as HTMLElement)?.offsetTop ?? 0, 900); }} className="p5-btn border-2 border-white bg-black text-white shadow-[4px_4px_0px_#ffea00]">
              CONTACT ME
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={tilt.ref}
          style={tilt.style}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          className="hidden md:flex justify-center"
        >
          <div className="w-[380px] h-[460px] bg-[#d32f2f] border-4 border-white shadow-[12px_12px_0px_#ffea00] flex flex-col items-center justify-center p-6 relative overflow-hidden transform rotate-2">
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[length:16px_16px]" />
            <StarBurst className="w-48 h-48 text-white/90 mb-4" />
            <div className="bg-black text-white font-mono text-xs font-black px-4 py-2 border border-white tracking-widest uppercase shadow-[3px_3px_0px_#ffea00]">
              CONFIDANT // 3.58 GPA
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MarqueeBanner() {
  const text = "DIONISIUS SURYA JAYA — UNIVERSITAS BRAWIJAYA — TEKNIK INFORMATIKA — MEDEVA PROLANIS — MMD FILKOM UB — BPS KOTA MALANG — ";
  return (
    <div className="border-y-2 border-[#d32f2f] bg-[#ffea00] text-black py-3 overflow-hidden">
      <div className="marquee"><div className="marquee-content">{[...Array(4)].map((_, i) => (<span key={i} className="font-mono text-xs font-black tracking-widest mx-4 whitespace-nowrap uppercase">{text}</span>))}</div></div>
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay }}>{children}</motion.div>
  );
}

function About() {
  const stats = [{ value: "2022—2026", label: "Brawijaya CS" }, { value: "3.58", label: "GPA / 4.00" }, { value: "10", label: "Dicoding Certs" }, { value: "ML", label: "PROLANIS" }];

  return (
    <section id="about" className="py-24 border-t-2 border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="section-number">01</span>
            <h2 className="p5-section-title" data-text="About Me">About Me</h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="md:col-span-2 space-y-6 text-base leading-relaxed">
            <motion.div variants={fadeUp} className="p5-panel p-6 sm:p-8 text-gray-200">
              <p className="text-lg font-medium">
                I&apos;m <strong className="text-[#ffea00]">Dionisius Surya Jaya</strong>, an undergraduate in <strong className="text-white">Teknik Informatika</strong> at <strong className="text-[#d32f2f]">Universitas Brawijaya</strong> (2022—2026) with a <strong className="text-[#ffea00]">3.58 / 4.00 GPA</strong>.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="p5-panel p-6 sm:p-8 text-gray-300">
              <p>
                Experienced in building full-stack applications, spatial data visualization, and machine learning pipelines (such as PROLANIS clinical risk stratification). Passionate about writing clean, robust, and impactful code.
              </p>
            </motion.div>
          </motion.div>
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} className="p5-panel p-6">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider mb-4 text-[#ffea00]">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="border-l-2 border-[#d32f2f] pl-3">
                    <div className="text-2xl font-black text-white">{s.value}</div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-gray-400 font-bold">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="p5-panel p-6 bg-[#1a0808]">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider mb-3 text-[#ffea00]">Details</h3>
              <div className="space-y-2 font-mono text-xs text-gray-300">
                <div><span className="text-white font-bold">LOC:</span> Malang, Indonesia</div>
                <div><span className="text-white font-bold">EDU:</span> UB (Teknik Informatika)</div>
                <div><span className="text-white font-bold">GPA:</span> 3.58 / 4.00</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 border-t-2 border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="section-number">02</span>
            <h2 className="p5-section-title" data-text="Tech Stack">Tech Stack</h2>
          </div>
        </Reveal>
        <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([key, cat]) => (
            <motion.div key={key} variants={fadeUp} className="p5-panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="p5-label">{key}</span>
                <h3 className="font-black text-sm uppercase text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="font-mono text-xs font-semibold bg-black/60 text-gray-300 border border-white/20 px-2.5 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const types = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-24 border-t-2 border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="section-number">03</span>
            <h2 className="p5-section-title" data-text="Projects">Projects</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-mono mb-8 uppercase tracking-wider text-[#ffea00] font-bold">
            {PROJECTS.length} PROJECTS · CLICK TO TEST LIVE DEMO
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`font-mono text-xs font-bold uppercase px-3 py-1.5 border transition-all ${filter === t ? "bg-[#d32f2f] text-white border-white shadow-[3px_3px_0px_#ffea00]" : "bg-black text-gray-400 border-white/20 hover:border-white hover:text-white"}`}
            >
              {t} [{t === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.type === t).length}]
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div key={project.title} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="p5-panel flex flex-col justify-between p-6">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="p5-label text-[10px]">{project.type}</span>
                    <StarBurst className="w-5 h-5 text-[#ffea00]" />
                  </div>
                  <h3 className="font-black text-lg text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[10px] font-bold bg-black text-gray-300 border border-white/20 px-2 py-0.5">{tag}</span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p5-btn text-xs block text-center">
                    VIEW DEMO ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [tab, setTab] = useState<"work" | "training" | "org" | "all">("all");
  const tabs = [
    { id: "all", label: "All" },
    { id: "work", label: "Work & Internship" },
    { id: "training", label: "Training" },
    { id: "org", label: "Organization & Volunteer" },
  ] as const;
  const filtered = tab === "all" ? EXPERIENCES : EXPERIENCES.filter(e => e.category === tab);

  return (
    <section id="experience" className="py-24 border-t-2 border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="section-number">04</span>
            <h2 className="p5-section-title" data-text="Experience">Experience</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs font-mono mb-8 uppercase tracking-wider text-[#ffea00] font-bold">
            {EXPERIENCES.length} ENTRIES · PROFESSIONAL TIMELINE
          </p>
        </Reveal>
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`font-mono text-xs font-bold uppercase px-3 py-1.5 border transition-all ${tab === t.id ? "bg-[#d32f2f] text-white border-white shadow-[3px_3px_0px_#ffea00]" : "bg-black text-gray-400 border-white/20 hover:border-white hover:text-white"}`}>{t.label} [{t.id === "all" ? EXPERIENCES.length : EXPERIENCES.filter(e => e.category === t.id).length}]</button>
          ))}
        </div>
        <div className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((exp) => (
              <motion.div key={exp.title} layout initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p5-panel p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-black text-xl text-white">{exp.title}</h3>
                    <p className="font-mono text-sm text-[#ffea00] font-bold">{exp.company}</p>
                  </div>
                  <span className="p5-label text-xs self-start">{exp.period}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-300 mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] font-bold bg-black text-gray-400 border border-white/20 px-2 py-0.5">{tag}</span>
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

function Contact() {
  const links = [
    { label: "EMAIL", value: "dionisius.suryajaya@gmail.com", href: "mailto:dionisius.suryajaya@gmail.com" },
    { label: "LINKEDIN", value: "linkedin.com/in/dionisiussj", href: "https://linkedin.com/in/dionisiussj" },
    { label: "GITHUB", value: "github.com/midas79", href: "https://github.com/midas79" },
    { label: "PHONE", value: "+62 821-4568-8609", href: "tel:+6282145688609" },
  ];

  return (
    <section id="contact" className="py-24 border-t-2 border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="section-number">05</span>
            <h2 className="p5-section-title" data-text="Get in Touch">Get in Touch</h2>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="p5-panel p-6 block group hover:border-[#ffea00] transition-colors">
              <span className="p5-label text-[10px] mb-3">{c.label}</span>
              <div className="font-bold text-sm text-white break-all group-hover:text-[#ffea00] transition-colors">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-[#d32f2f] bg-[#0a0a0c] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs font-bold text-gray-400">© 2026 Dionisius Surya Jaya · Malang, Indonesia</span>
        <span className="font-mono text-xs font-bold text-[#ffea00]">P5R PROFESSIONAL EDITION</span>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
