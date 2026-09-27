'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';
import {
  MapPin,
  GraduationCap,
  ExternalLink,
  FileText,
  Mail,
  Star,
  Check,
  GitBranch,
  Server,
  Layout,
  Globe,
  Code2,
  Terminal,
  Cpu,
  Cloud,
  ShieldCheck,
  BarChart2,
  Coins,
  Sparkles,
  ArrowRight,
  Briefcase,
  Award,
} from 'lucide-react';

interface Badge {
  name: string;
  org: string;
  xp: string;
  iconType: string;
}

const BADGE_ICONS: Record<string, React.ReactNode> = {
  git: <GitBranch size={20} style={{ color: 'var(--accent)' }} />,
  backend: <Server size={20} style={{ color: 'var(--success)' }} />,
  frontend: <Layout size={20} style={{ color: 'var(--accent)' }} />,
  web: <Globe size={20} style={{ color: 'var(--meta)' }} />,
  js: <Code2 size={20} style={{ color: 'var(--warn)' }} />,
  fe_beginner: <Terminal size={20} style={{ color: 'var(--accent)' }} />,
  react: <Cpu size={20} style={{ color: 'var(--meta)' }} />,
  cloud: <Cloud size={20} style={{ color: 'var(--warn)' }} />,
  solid: <ShieldCheck size={20} style={{ color: 'var(--success)' }} />,
  ml: <BarChart2 size={20} style={{ color: 'var(--accent)' }} />,
  finance: <Coins size={20} style={{ color: 'var(--warn)' }} />,
};

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  ml: <BarChart2 size={28} />,
  web: <Globe size={28} />,
  frontend: <Layout size={28} />,
  react: <Cpu size={28} />,
  backend: <Server size={28} />,
  git: <GitBranch size={28} />,
};

const PROFILE = {
  name: 'Dionisius Surya Jaya',
  alias: 'dionisiussj',
  level: 42,
  badgeTitle: 'Community Leader & ML Engineer',
  badgeXP: '1,337 XP',
  avatarUrl: '/assets/images/avatar_full.jpg',
  location: 'Malang Regency, East Java, Indonesia',
  latLong: '7.98° S / 112.63° E',
  headline: 'Software Engineer & Machine Learning Developer',
  summary:
    'Undergraduate Computer Science student at Universitas Brawijaya (Informatics 2022 to 2026) with a passion for software development and applied machine learning. Building clean architectures, data processing pipelines, and clinical predictive models.',
  email: 'dionisius.suryajaya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dionisiussj',
  github: 'https://github.com/midas79',
  resumeUrl: '/Dionisius_Surya_Jaya_CV.pdf',
  topSkills: [
    'WebDev',
    'Front-End Development',
    'Machine Learning & NLP',
    'Backend & APIs',
    'Financial Planning',
    'Geospatial WebGIS',
  ],
  badges: [
    { name: 'Belajar Dasar Git dengan GitHub', org: 'Dicoding Indonesia', xp: '100 XP', iconType: 'git' },
    { name: 'Belajar Back-End Pemula dengan JavaScript', org: 'Dicoding Indonesia', xp: '250 XP', iconType: 'backend' },
    { name: 'Belajar Fundamental Front-End Web Dev', org: 'Dicoding Indonesia', xp: '250 XP', iconType: 'frontend' },
    { name: 'Belajar Dasar Pemrograman Web', org: 'Dicoding Indonesia', xp: '100 XP', iconType: 'web' },
    { name: 'Belajar Dasar Pemrograman JavaScript', org: 'Dicoding Indonesia', xp: '150 XP', iconType: 'js' },
    { name: 'Belajar Membuat Front-End Web untuk Pemula', org: 'Dicoding Indonesia', xp: '150 XP', iconType: 'fe_beginner' },
    { name: 'Belajar Membuat Aplikasi Web dengan React', org: 'Dicoding Indonesia', xp: '250 XP', iconType: 'react' },
    { name: 'Cloud Practitioner Essentials (AWS Cloud)', org: 'Dicoding / AWS', xp: '150 XP', iconType: 'cloud' },
    { name: 'Belajar Prinsip Pemrograman SOLID', org: 'Dicoding Indonesia', xp: '150 XP', iconType: 'solid' },
    { name: 'Belajar Data Analysis / Machine Learning', org: 'Dicoding Indonesia', xp: '200 XP', iconType: 'ml' },
    { name: 'Financial Literacy 101', org: 'Financial Education', xp: '150 XP', iconType: 'finance' },
  ] as Badge[],
  leadShowcase: {
    title: 'MEDEVA: Clinical Risk Stratification System',
    genre: 'Machine Learning / Clinical Predictive Diagnostics',
    status: 'Active Research & Production Pipeline',
    hoursPlayed: '320 hrs logged',
    achievements: '18 / 18 Unlocked (100%)',
    liveDemo: 'https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/',
    githubRepo: 'https://github.com/midas79',
    description:
      'End-to-end Machine Learning pipeline tailored for BPJS patient clinical data. Features automated data cleaning, exploratory data analysis, Natural Language Processing (Logistic Regression) for Hypertension symptom stratification, and unsupervised K-Means clustering for Diabetes Mellitus risk groups.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'NLP', 'K-Means', 'BPJS HealthTech'],
  },
  allProjects: [
    {
      id: 'medeva',
      category: 'Machine Learning',
      featured: true,
      title: 'Medeva: Clinical Risk Stratification',
      desc: 'End-to-end ML pipeline for PROLANIS BPJS: Logistic Regression + TF-IDF NLP (Hypertension) & K-Means clustering (Diabetes Mellitus). Stateless inference with automated data-drift checks.',
      tags: ['Python', 'Scikit-Learn', 'Streamlit', 'K-Means', 'NLP'],
      metric: 'Stateless ML Pipeline',
      impact: 'Clinical Decision Support',
      link: 'https://medeva-demo-jbnnczbvk6ucappppedszeab.streamlit.app/',
      cta: 'Launch Live Demo',
      accent: 'var(--accent)',
      icon: 'ml',
    },
    {
      id: 'webgis',
      category: 'Geospatial',
      featured: true,
      title: 'Village Digital Maps (WebGIS): MMD FILKOM UB',
      desc: 'Digital village maps for Ngasem (Ngajum, Malang) built with ArcGIS & QGIS. Interactive Leaflet WebGIS improving administrative territorial planning and public services.',
      tags: ['ArcGIS', 'QGIS', 'Leaflet.js', 'Geospatial', 'GeoJSON'],
      metric: 'ArcGIS & QGIS Vector Layer',
      impact: 'Public Spatial Planning',
      link: 'https://midas79.github.io/Map-Digital-Desa-Ngasem/',
      cta: 'Explore Interactive Map',
      accent: 'var(--meta)',
      icon: 'web',
    },
    {
      id: 'github-star-notes',
      category: 'Full-Stack',
      featured: true,
      title: 'GitHub Star Notes: Personal Star Tracker',
      desc: 'Self-hosted GitHub star tracker with Chrome extension. Add notes, tags, and search starred repos. Built with Next.js 15, React 19, Prisma, SQLite, and Chrome Manifest v3.',
      tags: ['Next.js 15', 'React 19', 'Prisma', 'SQLite', 'Chrome Extension'],
      metric: 'Next.js 15 & Prisma',
      impact: 'Personal Productivity',
      link: 'https://github.com/midas79/github-star-notes',
      cta: 'View Repository',
      accent: 'var(--warn)',
      icon: 'frontend',
    },
    {
      id: 'edenerde',
      category: 'Full-Stack',
      featured: true,
      title: 'EdenErde: Sustainable Furniture E-Commerce',
      desc: 'High-performance e-commerce platform for home furniture. Features real-time content management via Sanity v6, secure Stripe payment processing, and a persistent shopping cart system.',
      tags: ['Next.js 15', 'React 19', 'Sanity CMS', 'Stripe', 'Tailwind CSS'],
      metric: 'Next.js 15 & React 19',
      impact: 'E-Commerce & Sanity CMS',
      link: 'https://eden-erde.vercel.app/',
      cta: 'Launch E-Commerce',
      accent: 'var(--accent)',
      icon: 'frontend',
    },
    {
      id: 'anime31',
      category: 'Web App',
      featured: true,
      title: 'Anime31: Media Streaming & Catalog Platform',
      desc: 'Anime streaming and media catalog showcase featuring curated user watchlists, episode release tracking, category filtering, and responsive video player integration.',
      tags: ['React', 'REST API', 'Tailwind CSS', 'Media Player'],
      metric: 'Full-Featured Web App',
      impact: 'User Watchlist & Filtering',
      link: 'https://anime31.vercel.app/',
      cta: 'Launch Web App',
      accent: 'var(--warn)',
      icon: 'react',
    },
    {
      id: 'moviemate',
      category: 'Web App',
      featured: true,
      title: 'Movie Mate: Social Cinema Watchlist',
      desc: 'Social movie tracking web application enabling cinephiles to discover trending films, curate personal watchlists, log ratings, and exchange recommendations in real time.',
      tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'TMDB API'],
      metric: 'Realtime Firebase Store',
      impact: 'Social Film Recommendations',
      link: 'https://movie-mate-tan.vercel.app/',
      cta: 'Launch Web App',
      accent: 'var(--danger)',
      icon: 'web',
    },
    {
      id: 'plate-detection',
      category: 'Machine Learning',
      featured: true,
      title: 'Plate Detection: License Plate Recognition',
      desc: 'YOLOv11-based license plate detector with real-time image and video processing. Bilateral filtering and CLAHE enhancement improve plate legibility on a custom Indonesian vehicle plate dataset.',
      tags: ['Python', 'YOLOv11', 'OpenCV', 'Computer Vision'],
      metric: 'Custom YOLOv11 Detector',
      impact: 'Real-Time Plate Detection',
      link: 'https://github.com/midas79/plate-detection-streamlit',
      cta: 'View Repository',
      accent: 'var(--success)',
      icon: 'ml',
    },
    {
      id: 'aqi-elm',
      category: 'Machine Learning',
      featured: false,
      title: 'AQI Prediction: Extreme Learning Machine',
      desc: 'Custom Extreme Learning Machine (ELM) classifier built from scratch to predict air quality categories from PM10, SO2, CO, O3, and NO2 pollutant levels in Yogyakarta. Single-pass learning with Moore-Penrose pseudoinverse.',
      tags: ['Python', 'ELM', 'NumPy', 'Scikit-Learn', 'Environmental ML'],
      metric: 'ELM from Scratch',
      impact: 'Air Quality Monitoring',
      link: 'https://github.com/midas79/Mini-Projects',
      cta: 'View Repository',
      accent: 'var(--meta)',
      icon: 'ml',
    },
    {
      id: 'imdb-sentiment',
      category: 'Machine Learning',
      featured: false,
      title: 'IMDB Sentiment Analysis: NLP',
      desc: 'Binary sentiment classification on 50,000 IMDB movie reviews using TF-IDF n-grams and Logistic Regression. Automated text cleaning, tokenization, stemming, and stopword removal achieve 87.2% accuracy.',
      tags: ['NLP', 'TF-IDF', 'Logistic Regression', 'NLTK', 'Python'],
      metric: '87.2% Accuracy',
      impact: 'Review Classification',
      link: 'https://github.com/midas79/Mini-Projects',
      cta: 'View Repository',
      accent: 'var(--accent)',
      icon: 'ml',
    },
    {
      id: 'ecommerce-analysis',
      category: 'Data Analytics',
      featured: false,
      title: 'E-Commerce Sales Analysis',
      desc: 'Exploratory data analysis of 397,884 transactions (4,338 customers, 3,665 products). Uncovered 8.9 million USD revenue, top-10 customer concentration, and seasonal patterns for business optimization.',
      tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
      metric: '397K Transactions',
      impact: 'Business Intelligence',
      link: 'https://github.com/midas79/Mini-Projects',
      cta: 'View Repository',
      accent: 'var(--warn)',
      icon: 'ml',
    },
  ],
  experiences: [
    {
      company: 'MEDEVA',
      role: 'Machine Learning Intern',
      period: 'January 2026 to May 2026 (5 months)',
      location: 'Malang, Indonesia',
      type: 'Machine Learning & AI',
      desc: 'Architecting and training machine learning classification pipelines for health diagnostics. Processing clinical registries, engineering features for predictive scoring, and serving real-time model inferences via interactive web demos.',
      skills: ['Python', 'Scikit-Learn', 'Machine Learning', 'Streamlit', 'Pandas', 'NLP'],
    },
    {
      company: 'BPS Kota Malang',
      role: 'Data Analyst & Frontend Developer',
      period: 'September 2025 to November 2025 (3 months)',
      location: 'Malang, Indonesia',
      type: 'Public Sector Data Analytics',
      desc: 'Conducted statistical data validation, regional indicator trend analysis, and engineered frontend web dashboards that enable public civil servants to query complex municipal records with ease.',
      skills: ['Data Analysis', 'Frontend Development', 'JavaScript', 'Excel/Stats', 'Tailwind CSS'],
    },
    {
      company: 'Coding Camp powered by DBS Foundation',
      role: 'Web Developer',
      period: 'February 2025 to June 2025 (5 months)',
      location: 'Malang, Indonesia',
      type: 'Full-Stack Web Apprenticeship',
      desc: 'Developed modern, mobile-first responsive web apps in an agile team workflow. Implemented client-side caching, component modularity, and integration with third-party RESTful services.',
      skills: ['React.js', 'Next.js', 'Front-End Development', 'RESTful APIs', 'Git'],
    },
    {
      company: 'MMD FILKOM UB 2024',
      role: 'Backend Developer and IT Support',
      period: 'July 2024 to August 2024 (2 months)',
      location: 'Ngasem, East Java, Indonesia',
      type: 'WebGIS & Infrastructure Support',
      desc: 'Maintained and optimized the village official web portal for administrative stability. Developed a comprehensive digital village map using ArcGIS and QGIS, accelerating public service delivery.',
      skills: ['Backend Support', 'ArcGIS', 'QGIS', 'Leaflet.js', 'WebGIS', 'Data Geospatial'],
    },
    {
      company: 'BIOS Filkom UB',
      role: 'Head of Division Consumption and Health (ORSEN FILKOM 2024)',
      period: 'August 2024 to November 2024 (4 months)',
      location: 'Malang, East Java, Indonesia',
      type: 'Leadership & Healthcare Operations',
      desc: 'Assisted in managing meal distribution and health services, coordinated team operations, liaised with external vendors and medical teams, ensuring all logistics met high hygiene and safety standards.',
      skills: ['Leadership', 'Operations Management', 'Healthcare Logistics', 'Coordination'],
    },
    {
      company: 'Artropolis UB',
      role: 'Logistics Coordinator',
      period: 'September 2023 to November 2024 (1 year 3 months)',
      location: 'Malang, East Java, Indonesia',
      type: 'Logistics & Operational Planning',
      desc: 'Supported coordination and logistics planning, managed equipment inventory and distribution, and collaborated across cross-functional divisions to ensure smooth high-capacity event execution.',
      skills: ['Inventory Management', 'Logistics', 'Problem Solving', 'Teamwork'],
    },
    {
      company: 'MMD FILKOM UB 2024',
      role: 'Event Coordinator',
      period: 'July 2024 to August 2024 (2 months)',
      location: 'Ngasem, East Java, Indonesia',
      type: 'Project Planning & Stakeholder Relations',
      desc: 'Planned and organized local community programs, coordinated with village leadership and municipal authorities, and drove active community engagement.',
      skills: ['Event Planning', 'Community Relations', 'Public Speaking'],
    },
  ],
  education: [
    {
      school: 'University of Brawijaya (Universitas Brawijaya)',
      degree: 'Bachelor of Computer Science, Informatics',
      period: 'July 2022 to July 2026 (Expected Graduation)',
      details:
        'Focus on Software Engineering, Machine Learning, Data Structures & Algorithms, Distributed Databases, and Geospatial Systems. GPA 3.58 / 4.00.',
    },
    {
      school: 'SMA Negeri 1 Temanggung',
      degree: 'Natural Sciences (MIPA)',
      period: '2019 to 2022',
      details: 'Strong academic grounding in mathematics, logical reasoning, and computing fundamentals.',
    },
  ],
  techInventory: [
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Python',
    'Scikit-Learn',
    'Pandas',
    'Node.js',
    'Express.js',
    'Laravel',
    'PostgreSQL',
    'MySQL',
    'SQLite',
    'Docker',
    'ArcGIS',
    'QGIS',
    'Leaflet.js',
    'Git & GitHub',
  ],
};

const SECTIONS = [
  { id: 'profile', label: 'Profile' },
  { id: 'showcase', label: 'MEDEVA' },
  { id: 'archive', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'badges', label: 'Badges' },
  { id: 'contact', label: 'Contact' },
];

function TiltCard({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    rotateX.set(-y * 0.04);
    rotateY.set(x * 0.04);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: springRotateX, 
        rotateY: springRotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
        ...style 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'badges'>('projects');
  const [projectFilter, setProjectFilter] = useState<string>('Featured');
  const [visibleCount, setVisibleCount] = useState(6);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const [stamped, setStamped] = useState<Record<string, boolean>>({ profile: true });

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.scrollY + window.innerHeight * 0.45;
      setStamped((prev) => {
        const next = { ...prev };
        let updated = false;
        SECTIONS.forEach((s) => {
          const el = document.getElementById(s.id);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            if (top <= scrollThreshold && !next[s.id]) {
              next[s.id] = true;
              updated = true;
            }
          }
        });
        return updated ? next : prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectCategories = ['Featured', ...Array.from(new Set(PROFILE.allProjects.map((p) => p.category)))];

  const filteredProjects = PROFILE.allProjects.filter((p) => {
    if (projectFilter === 'Featured') return p.featured === true;
    return p.category === projectFilter;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const workExp = PROFILE.experiences.filter((e) =>
    ['Machine Learning', 'Data Analyst', 'Frontend Developer', 'Backend Developer'].some(
      (t) => e.type.includes(t) || e.role.includes('Developer') || e.role.includes('Analyst')
    )
  );

  const orgExp = PROFILE.experiences.filter(
    (e) =>
      !['Machine Learning', 'Data Analyst', 'Frontend Developer', 'Backend Developer'].some(
        (t) => e.type.includes(t) || e.role.includes('Developer') || e.role.includes('Analyst')
      )
  );

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    // Map rail IDs to tab names and actual DOM IDs
    const idToTab: Record<string, 'projects' | 'experience' | 'badges'> = {
      archive: 'projects',
      experience: 'experience',
      badges: 'badges',
    };

    // If clicking a tab-dependent section, switch tab first
    if (idToTab[id]) {
      setActiveTab(idToTab[id]);
      // Wait for DOM update, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className='min-h-screen' style={{ background: 'linear-gradient(135deg, #fff4cf 0%, #ffdca8 58%, #fffaf0 100%)' }}>
      {/* Scroll-Craft Top Progress Bar */}
      <motion.div
        style={{
          scaleX: smoothProgress,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: 'var(--accent)',
          zIndex: 100,
        }}
      />

      {/* Top Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className='sticky top-0 z-50 bg-surface border-b-2 border-fg'
        style={{ boxShadow: '0 2px 0 var(--fg)' }}
      >
        <div className='neo-container flex items-center justify-between' style={{ height: '64px' }}>
          <a href='#' className='flex items-center gap-3'>
            <motion.span
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.95 }}
              className='w-10 h-10 bg-accent text-accent-on font-black flex items-center justify-center'
              style={{ borderRadius: 'var(--radius-sm)', border: '2px solid var(--fg)', boxShadow: '2px 2px 0 var(--fg)' }}
            >
              DS
            </motion.span>
            <div className='flex flex-col'>
              <span className='font-bold text-fg' style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', lineHeight: 1.1 }}>
                {PROFILE.name}
              </span>
              <span className='eyebrow' style={{ fontSize: '10px' }}>
                Level {PROFILE.level} · /{PROFILE.alias}
              </span>
            </div>
          </a>
          <div className='flex items-center gap-3'>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={PROFILE.resumeUrl}
              target='_blank'
              rel='noreferrer'
              className='btn btn-secondary'
              style={{ fontSize: 'var(--text-xs)', height: '40px', padding: '0 var(--space-4)' }}
            >
              <FileText size={14} />
              <span>Resume (CV)</span>
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={copyEmail}
              className='btn btn-primary'
              style={{ fontSize: 'var(--text-xs)', height: '40px', padding: '0 var(--space-4)' }}
            >
              {copied ? <Check size={14} /> : <Mail size={14} />}
              <span>{copied ? 'Copied!' : 'Contact'}</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Container */}
      <main style={{ paddingBlock: 'var(--space-8)' }}>
        <div className='neo-container'>
          {/* Profile Header Hero Panel */}
          <motion.section
            id='profile'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='panel'
            style={{ padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}
          >
            <div className='grid grid-cols-1 md:grid-cols-12 gap-6 items-start'>
              {/* Avatar Box */}
              <div className='md:col-span-3 flex flex-col items-center md:items-start gap-3'>
                <motion.div
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  className='w-40 h-40 bg-surface-warm flex items-center justify-center font-black relative overflow-hidden'
                  style={{
                    border: '3px solid var(--fg)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '4px 4px 0 var(--fg)',
                  }}
                >
                  <img
                    src={PROFILE.avatarUrl}
                    alt={PROFILE.name}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className='absolute inset-0 flex items-center justify-center text-4xl text-fg font-black pointer-events-none' style={{ fontFamily: 'var(--font-display)' }}>
                    DSJ
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className='tile tile-warm flex items-center gap-2 px-3 py-1.5'
                  style={{ borderRadius: 'var(--radius-sm)', border: '2px solid var(--fg)', width: '100%', maxWidth: '160px' }}
                >
                  <span className='w-2.5 h-2.5 rounded-full bg-success animate-pulse' style={{ border: '1px solid var(--fg)' }} />
                  <span className='font-bold text-fg' style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}>
                    LVL {PROFILE.level} · {PROFILE.badgeXP}
                  </span>
                </motion.div>
              </div>

              {/* Bio & Information */}
              <div className='md:col-span-9 flex flex-col gap-3'>
                <div className='flex flex-wrap items-center justify-between gap-2'>
                  <div>
                    <h1 style={{ fontSize: 'clamp(var(--text-2xl), 4vw, var(--text-3xl))', fontWeight: 760, color: 'var(--fg)', lineHeight: 1.1 }}>
                      {PROFILE.name}
                    </h1>
                    <p className='eyebrow' style={{ marginTop: 'var(--space-1)' }}>
                      {PROFILE.headline}
                    </p>
                  </div>
                  <span className='tile tile-warm px-3 py-1 font-bold' style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)' }}>
                    {PROFILE.badgeTitle}
                  </span>
                </div>

                <div className='flex flex-wrap items-center gap-4 text-xs font-semibold' style={{ color: 'var(--fg-2)' }}>
                  <span className='flex items-center gap-1.5'>
                    <MapPin size={14} style={{ color: 'var(--accent)' }} />
                    {PROFILE.location} ({PROFILE.latLong})
                  </span>
                  <span>·</span>
                  <span className='flex items-center gap-1.5'>
                    <GraduationCap size={14} style={{ color: 'var(--accent)' }} />
                    Universitas Brawijaya (Informatics) · GPA 3.58 / 4.00
                  </span>
                </div>

                <div
                  style={{
                    background: 'var(--surface-warm)',
                    border: '2px solid var(--fg)',
                    borderRadius: 'var(--radius-sm)',
                    padding: 'var(--space-4)',
                    boxShadow: '2px 2px 0 var(--fg)',
                  }}
                >
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg)', lineHeight: 1.55 }}>
                    {PROFILE.summary}
                  </p>
                </div>

                {/* Top Skills Tags */}
                <div className='flex flex-wrap gap-2 pt-1'>
                  {PROFILE.topSkills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className='tile'
                      style={{
                        padding: '4px 10px',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        background: 'var(--surface)',
                        boxShadow: '2px 2px 0 var(--fg)',
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Lead Showcase: MEDEVA Highlight Box */}
          <motion.section
            id='showcase'
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.2 }}
            className='panel'
            style={{ padding: 'var(--space-6)', background: 'var(--surface-warm)', marginBottom: 'var(--space-6)' }}
          >
            <div className='flex items-center justify-between gap-3 mb-3 pb-3 border-b-2 border-fg'>
              <div className='flex items-center gap-2'>
                <span className='w-3 h-3 rounded-full bg-accent animate-ping' style={{ border: '1px solid var(--fg)' }} />
                <span className='eyebrow'>Special Lead Showcase</span>
              </div>
              <span className='font-bold text-xs' style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-2)' }}>
                {PROFILE.leadShowcase.hoursPlayed}
              </span>
            </div>

            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 760, color: 'var(--fg)', marginBottom: 'var(--space-2)' }}>
              {PROFILE.leadShowcase.title}
            </h2>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--meta)', fontWeight: 700, marginBottom: 'var(--space-3)' }}>
              {PROFILE.leadShowcase.genre} · {PROFILE.leadShowcase.status}
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-2)', lineHeight: 1.5, marginBottom: 'var(--space-4)' }}>
              {PROFILE.leadShowcase.description}
            </p>

            <div className='flex flex-wrap gap-1.5 mb-4'>
              {PROFILE.leadShowcase.tags.map((t) => (
                <span
                  key={t}
                  className='tile'
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-mono)',
                    padding: '2px 8px',
                    background: 'var(--surface)',
                    boxShadow: '1px 1px 0 var(--fg)',
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>

            <div className='flex flex-wrap gap-3'>
              <motion.a
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.96 }}
                href={PROFILE.leadShowcase.liveDemo}
                target='_blank'
                rel='noreferrer'
                className='btn btn-primary'
                style={{ height: '42px', fontSize: 'var(--text-xs)' }}
              >
                <span>Launch Live Demo</span>
                <ExternalLink size={14} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.96 }}
                href={PROFILE.leadShowcase.githubRepo}
                target='_blank'
                rel='noreferrer'
                className='btn btn-secondary'
                style={{ height: '42px', fontSize: 'var(--text-xs)' }}
              >
                <span>View Repository</span>
                <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.section>

          {/* Tab Navigation Controls */}
          <div className='flex flex-wrap gap-2 mb-6' style={{ borderBottom: '2px solid var(--fg)', paddingBottom: 'var(--space-3)' }}>
            {[
              { id: 'projects' as const, label: `Projects (${PROFILE.allProjects.length})`, icon: <Sparkles size={14} /> },
              { id: 'experience' as const, label: `Experience (${PROFILE.experiences.length})`, icon: <Briefcase size={14} /> },
              { id: 'badges' as const, label: `Badges & Certs (${PROFILE.badges.length})`, icon: <Award size={14} /> },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className='btn'
                  style={{
                    background: active ? 'var(--accent)' : 'var(--surface)',
                    color: active ? 'var(--accent-on)' : 'var(--fg)',
                    border: '2px solid var(--fg)',
                    boxShadow: active ? '4px 4px 0 var(--fg)' : '2px 2px 0 var(--fg)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xs)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Main Layout Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
            {/* Left Content Area */}
            <div className='lg:col-span-8 flex flex-col gap-6'>
              <AnimatePresence mode='wait'>
                {/* TAB 1: FEATURED PROJECTS */}
                {activeTab === 'projects' && (
                  <motion.div
                    key='projects'
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    id='archive'
                    className='space-y-6'
                  >
                    {/* Category Filter Bar */}
                    <div className='panel' style={{ padding: 'var(--space-4)' }}>
                      <div className='flex items-center justify-between mb-3'>
                        <span className='eyebrow'>Archive Filter</span>
                        <span className='text-xs font-bold' style={{ color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                          Showing {visibleProjects.length} of {filteredProjects.length}
                        </span>
                      </div>
                      <div className='flex flex-wrap gap-2'>
                        {projectCategories.map((cat) => {
                          const active = projectFilter === cat;
                          return (
                            <motion.button
                              key={cat}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => {
                                setProjectFilter(cat);
                                setVisibleCount(6);
                              }}
                              className='btn'
                              style={{
                                padding: '0 var(--space-3)',
                                height: '34px',
                                fontSize: 'var(--text-xs)',
                                fontWeight: 700,
                                background: active ? 'var(--fg)' : 'var(--surface)',
                                color: active ? 'var(--surface)' : 'var(--fg)',
                                border: '2px solid var(--fg)',
                                boxShadow: active ? '2px 2px 0 var(--accent)' : '1px 1px 0 var(--fg)',
                              }}
                            >
                              {cat}
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Projects Grid with 3D Tilt Card Animation */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {visibleProjects.map((proj, idx) => (
                        <TiltCard
                          key={proj.id}
                          className='tile flex flex-col'
                          style={{ padding: 'var(--space-5)', background: 'var(--surface)', minHeight: '320px' }}
                        >
                          <div className='flex items-start justify-between gap-2 mb-3 pb-2 border-b-2 border-fg'>
                            <div className='flex items-center gap-2'>
                              <div
                                className='w-10 h-10 flex items-center justify-center font-bold'
                                style={{
                                  background: 'var(--surface-warm)',
                                  border: '2px solid var(--fg)',
                                  borderRadius: 'var(--radius-sm)',
                                  boxShadow: '2px 2px 0 var(--fg)',
                                }}
                              >
                                {PROJECT_ICONS[proj.icon] || <Sparkles size={18} />}
                              </div>
                              <div>
                                <span className='eyebrow block' style={{ fontSize: '10px' }}>
                                  {proj.category}
                                </span>
                                <span className='font-bold text-xs' style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                                  {proj.metric}
                                </span>
                              </div>
                            </div>
                          </div>

                          <h3 className='font-bold text-fg mb-1.5' style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-display)', lineHeight: 1.25 }}>
                            {proj.title}
                          </h3>
                          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>
                            Impact: {proj.impact}
                          </p>
                          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg-2)', lineHeight: 1.45, marginBottom: 'var(--space-4)', flexGrow: 1 }}>
                            {proj.desc}
                          </p>

                          <div className='flex flex-wrap gap-1 mb-4'>
                            {proj.tags.map((t) => (
                              <span
                                key={t}
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 700,
                                  fontFamily: 'var(--font-mono)',
                                  padding: '2px 6px',
                                  background: 'var(--surface-warm)',
                                  border: '1px solid var(--border)',
                                  borderRadius: 'var(--radius-sm)',
                                }}
                              >
                                #{t}
                              </span>
                            ))}
                          </div>

                          <motion.a
                            whileHover={{ x: 3 }}
                            href={proj.link}
                            target='_blank'
                            rel='noreferrer'
                            className='btn btn-primary w-full'
                            style={{ height: '38px', fontSize: 'var(--text-xs)' }}
                          >
                            <span>{proj.cta}</span>
                            <ExternalLink size={12} />
                          </motion.a>
                        </TiltCard>
                      ))}
                    </div>

                    {/* Load More Trigger */}
                    {visibleCount < filteredProjects.length && (
                      <div className='flex justify-center pt-2'>
                        <motion.button
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setVisibleCount((c) => c + 6)}
                          className='btn btn-secondary'
                          style={{ height: '44px', padding: '0 var(--space-6)' }}
                        >
                          <span>Load More ({filteredProjects.length - visibleCount} remaining)</span>
                          <ArrowRight size={14} />
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                )}

                {/* TAB 2: CAREER EXPERIENCE */}
                {activeTab === 'experience' && (
                  <motion.div
                    key='experience'
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    id='experience'
                    className='space-y-6'
                  >
                    {/* Work Experience Section */}
                    <div className='panel' style={{ padding: 'var(--space-6)' }}>
                      <div className='flex items-center justify-between pb-3 mb-4 border-b-2 border-fg'>
                        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 760, color: 'var(--fg)' }}>
                          Work Experience ({workExp.length})
                        </h2>
                        <span className='eyebrow'>Professional & Internships</span>
                      </div>

                      <div className='space-y-4'>
                        {workExp.map((exp, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.2 }}
                            className='tile tile-warm'
                            style={{ padding: 'var(--space-4)' }}
                          >
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1'>
                              <h3 className='font-bold text-fg' style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-display)' }}>
                                {exp.role} <span style={{ color: 'var(--accent)' }}>@ {exp.company}</span>
                              </h3>
                              <span className='text-xs font-bold' style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
                                {exp.period}
                              </span>
                            </div>

                            <div className='flex items-center gap-2 mb-2 text-xs font-semibold' style={{ color: 'var(--fg-2)' }}>
                              <MapPin size={12} style={{ color: 'var(--accent)' }} />
                              <span>{exp.location} · {exp.type}</span>
                            </div>

                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg)', lineHeight: 1.5, marginBottom: 'var(--space-3)' }}>
                              {exp.desc}
                            </p>

                            <div className='flex flex-wrap gap-1.5'>
                              {exp.skills.map((s) => (
                                <span
                                  key={s}
                                  className='tile'
                                  style={{
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-mono)',
                                    padding: '2px 8px',
                                    background: 'var(--surface)',
                                    boxShadow: '1px 1px 0 var(--fg)',
                                  }}
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Organization & Volunteer Experience */}
                    <div className='panel' style={{ padding: 'var(--space-6)' }}>
                      <div className='flex items-center justify-between pb-3 mb-4 border-b-2 border-fg'>
                        <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 760, color: 'var(--fg)' }}>
                          Volunteer & Leadership ({orgExp.length})
                        </h2>
                        <span className='eyebrow'>Community & Operations</span>
                      </div>

                      <div className='space-y-4'>
                        {orgExp.map((exp, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.2 }}
                            className='tile'
                            style={{ padding: 'var(--space-4)' }}
                          >
                            <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1'>
                              <h3 className='font-bold text-fg' style={{ fontSize: 'var(--text-base)', fontFamily: 'var(--font-display)' }}>
                                {exp.role} <span style={{ color: 'var(--accent)' }}>@ {exp.company}</span>
                              </h3>
                              <span className='text-xs font-bold' style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
                                {exp.period}
                              </span>
                            </div>

                            <div className='flex items-center gap-2 mb-2 text-xs font-semibold' style={{ color: 'var(--fg-2)' }}>
                              <MapPin size={12} style={{ color: 'var(--accent)' }} />
                              <span>{exp.location} · {exp.type}</span>
                            </div>

                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--fg)', lineHeight: 1.5, marginBottom: 'var(--space-3)' }}>
                              {exp.desc}
                            </p>

                            <div className='flex flex-wrap gap-1.5'>
                              {exp.skills.map((s) => (
                                <span
                                  key={s}
                                  className='tile tile-warm'
                                  style={{
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    fontFamily: 'var(--font-mono)',
                                    padding: '2px 8px',
                                    boxShadow: '1px 1px 0 var(--fg)',
                                  }}
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: BADGES & CERTIFICATIONS */}
                {activeTab === 'badges' && (
                  <motion.div
                    key='badges'
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    id='badges'
                    className='panel'
                    style={{ padding: 'var(--space-6)' }}
                  >
                    <div className='flex items-center justify-between pb-3 mb-4 border-b-2 border-fg'>
                      <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 760, color: 'var(--fg)' }}>
                        Badges & Industry Certifications ({PROFILE.badges.length})
                      </h2>
                      <span className='eyebrow'>Verified Credentials</span>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {PROFILE.badges.map((b, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.2 }}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className='tile tile-warm flex items-center gap-3'
                          style={{ padding: 'var(--space-4)' }}
                        >
                          <div
                            className='w-12 h-12 flex items-center justify-center shrink-0'
                            style={{
                              background: 'var(--surface)',
                              border: '2px solid var(--fg)',
                              borderRadius: 'var(--radius-sm)',
                              boxShadow: '2px 2px 0 var(--fg)',
                            }}
                          >
                            {BADGE_ICONS[b.iconType] || <Sparkles size={20} />}
                          </div>
                          <div className='flex flex-col min-w-0 flex-grow'>
                            <h3 className='font-bold text-fg truncate' style={{ fontSize: 'var(--text-xs)', lineHeight: 1.3 }}>
                              {b.name}
                            </h3>
                            <span className='text-xs' style={{ color: 'var(--muted)', marginTop: '2px' }}>
                              Issuer: {b.org}
                            </span>
                            <div className='flex items-center gap-2 mt-1.5'>
                              <span
                                className='tile'
                                style={{
                                  fontSize: '10px',
                                  fontWeight: 700,
                                  padding: '1px 6px',
                                  background: 'var(--surface)',
                                  color: 'var(--accent)',
                                  fontFamily: 'var(--font-mono)',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '3px',
                                  boxShadow: '1px 1px 0 var(--fg)',
                                }}
                              >
                                <Star size={10} fill='currentColor' />
                                <span>{b.xp}</span>
                              </span>
                              <span className='text-xs font-semibold' style={{ color: 'var(--success)' }}>
                                Verified
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Sidebar Widgets */}
            <aside className='lg:col-span-4 flex flex-col gap-5'>
              {/* Online Status Widget */}
              <motion.div
                id='contact'
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className='panel'
                style={{ padding: 'var(--space-5)', background: 'var(--surface-warm)' }}
              >
                <div className='flex items-center gap-2 mb-2'>
                  <span className='w-3 h-3 rounded-full bg-success animate-pulse' style={{ border: '1px solid var(--fg)' }} />
                  <span className='font-bold text-fg' style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)' }}>
                    Currently Available
                  </span>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--fg-2)', marginBottom: 'var(--space-3)' }}>
                  Open to full-time engineering and ML roles starting Jan 2026.
                </p>
                <div
                  className='tile px-3 py-2 text-xs font-bold truncate'
                  style={{ background: 'var(--surface)', fontFamily: 'var(--font-mono)', border: '2px solid var(--fg)' }}
                >
                  {PROFILE.email}
                </div>
              </motion.div>

              {/* Badges Summary Showcase */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1 }}
                className='panel'
                style={{ padding: 'var(--space-5)' }}
              >
                <div className='flex items-center justify-between pb-2 mb-3 border-b-2 border-fg'>
                  <span className='eyebrow'>Badge Shelf</span>
                  <span className='font-bold text-xs' style={{ fontFamily: 'var(--font-mono)' }}>
                    {PROFILE.badges.length} Items
                  </span>
                </div>
                <div className='space-y-2'>
                  {PROFILE.badges.slice(0, 5).map((b, i) => (
                    <div
                      key={i}
                      className='tile tile-warm flex items-center justify-between p-2'
                      style={{ fontSize: 'var(--text-xs)', boxShadow: '2px 2px 0 var(--fg)' }}
                    >
                      <div className='flex items-center gap-2 truncate'>
                        <div className='w-5 h-5 flex items-center justify-center shrink-0'>
                          {BADGE_ICONS[b.iconType] || <Sparkles size={12} />}
                        </div>
                        <span className='font-bold truncate text-fg'>{b.name}</span>
                      </div>
                      <span className='font-bold text-accent shrink-0' style={{ fontFamily: 'var(--font-mono)', fontSize: '10px' }}>
                        {b.xp}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Inventory Widget */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15 }}
                className='panel'
                style={{ padding: 'var(--space-5)' }}
              >
                <div className='flex items-center justify-between pb-2 mb-3 border-b-2 border-fg'>
                  <span className='eyebrow'>Tech Inventory</span>
                  <span className='font-bold text-xs' style={{ fontFamily: 'var(--font-mono)' }}>
                    {PROFILE.techInventory.length} Items
                  </span>
                </div>
                <div className='flex flex-wrap gap-1.5'>
                  {PROFILE.techInventory.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.08 }}
                      className='tile'
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        padding: '3px 8px',
                        background: 'var(--surface)',
                        boxShadow: '1px 1px 0 var(--fg)',
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Education Lore */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2 }}
                className='panel'
                style={{ padding: 'var(--space-5)' }}
              >
                <div className='pb-2 mb-3 border-b-2 border-fg'>
                  <span className='eyebrow'>Education Lore</span>
                </div>
                <div className='space-y-3'>
                  {PROFILE.education.map((edu, idx) => (
                    <div key={idx} className='tile tile-warm p-3' style={{ boxShadow: '2px 2px 0 var(--fg)' }}>
                      <h3 className='font-bold text-xs text-fg' style={{ fontFamily: 'var(--font-display)' }}>
                        {edu.school}
                      </h3>
                      <p style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 700, marginTop: '2px' }}>
                        {edu.degree}
                      </p>
                      <p style={{ fontSize: '10px', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>
                        {edu.period}
                      </p>
                      <p style={{ fontSize: '11px', color: 'var(--fg-2)', marginTop: '6px', lineHeight: 1.4 }}>
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.25 }}
                className='panel'
                style={{ padding: 'var(--space-5)' }}
              >
                <div className='pb-2 mb-3 border-b-2 border-fg'>
                  <span className='eyebrow'>Direct Links</span>
                </div>
                <div className='space-y-2 text-xs font-bold'>
                  <motion.a
                    whileHover={{ x: 3 }}
                    href={PROFILE.resumeUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='tile p-2.5 flex items-center justify-between hover:bg-surface-warm transition-colors'
                    style={{ boxShadow: '2px 2px 0 var(--fg)' }}
                  >
                    <span className='flex items-center gap-2'>
                      <FileText size={14} style={{ color: 'var(--accent)' }} />
                      <span>Download CV</span>
                    </span>
                    <ExternalLink size={12} />
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 3 }}
                    href={PROFILE.linkedin}
                    target='_blank'
                    rel='noreferrer'
                    className='tile p-2.5 flex items-center justify-between hover:bg-surface-warm transition-colors'
                    style={{ boxShadow: '2px 2px 0 var(--fg)' }}
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={12} style={{ color: 'var(--accent)' }} />
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 3 }}
                    href={PROFILE.github}
                    target='_blank'
                    rel='noreferrer'
                    className='tile p-2.5 flex items-center justify-between hover:bg-surface-warm transition-colors'
                    style={{ boxShadow: '2px 2px 0 var(--fg)' }}
                  >
                    <span>GitHub Repositories</span>
                    <ExternalLink size={12} style={{ color: 'var(--accent)' }} />
                  </motion.a>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='bg-fg' style={{ borderTop: '3px solid var(--fg)', paddingBlock: 'var(--space-8)', marginBottom: '38px' }}>
        <div className='neo-container flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-3'>
            <span
              className='w-7 h-7 bg-accent text-accent-on font-black flex items-center justify-center text-xs'
              style={{ borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}
            >
              DS
            </span>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--border-soft)' }}>
              &copy; {new Date().getFullYear()} {PROFILE.name} · Neobrutalist Portfolio
            </span>
          </div>
          <div className='flex items-center gap-6 text-xs' style={{ color: 'var(--border)' }}>
            <a href={PROFILE.linkedin} target='_blank' rel='noreferrer' className='hover:text-surface'>
              LinkedIn
            </a>
            <a href={PROFILE.github} target='_blank' rel='noreferrer' className='hover:text-surface'>
              GitHub
            </a>
            <a href={'mailto:' + PROFILE.email} className='hover:text-surface'>
              Direct Email
            </a>
          </div>
        </div>
      </footer>

      {/* XP Stamp Rail: Signature Move */}
      <nav className='xp-rail' aria-label='Milestone section progress'>
        {SECTIONS.map((s) => (
          <motion.button
            key={s.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='xp-rail__mark'
            data-stamped={stamped[s.id] ? 'true' : 'false'}
            onClick={() => scrollToSection(s.id)}
            title={`Scroll to ${s.label}`}
          >
            {s.label}
          </motion.button>
        ))}
      </nav>
    </div>
  );
}
