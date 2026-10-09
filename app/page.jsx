import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Download,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  PenLine,
  Phone,
  Trophy,
} from "lucide-react";
import Nav from "../components/Nav";
import PhotoCard from "../components/PhotoCard";
import FloatingIcons from "../components/FloatingIcons";
import Reveal from "../components/Reveal";

/* ---------- Content (sourced from resume.pdf) ---------- */

const PROFILE = {
  name: "Ramkrishnaji",
  email: "ramkrishnaji03@gmail.com",
  phone: "+91 93671 72215",
  location: "Mumbai, India",
  github: "https://github.com/ramkrishnaji",
  linkedin: "https://linkedin.com/in/ramkrishnaji",
};

const EDUCATION = [
  {
    degree: "M.Tech in Artificial Intelligence and Data Science",
    school: "KJSCE Vidyavihar, Mumbai",
    years: "2025 to 2027",
    score: "CGPA 8.25 / 10",
    current: true,
  },
  {
    degree: "B.Tech in Computer Science",
    school: "Vellore Institute of Technology, Bhopal",
    years: "2021 to 2025",
    score: "CGPA 8.73 / 10",
  },
  {
    degree: "Class XII",
    school: "Kendriya Vidyalaya, Coimbatore",
    years: "2019 to 2020",
    score: "94.8%",
  },
];

const SKILLS = [
  { group: "Languages", dot: "bg-sky-400", items: ["Python", "SQL"] },
  {
    group: "Data science",
    dot: "bg-violet-400",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "LLMs",
      "RAG",
    ],
  },
  {
    group: "Libraries and frameworks",
    dot: "bg-indigo-400",
    items: [
      "Scikit-learn",
      "TensorFlow/Keras",
      "XGBoost",
      "LangChain",
      "Pandas",
      "NumPy",
    ],
  },
  {
    group: "Deployment and tools",
    dot: "bg-emerald-400",
    items: ["FastAPI", "Streamlit", "Git", "Render"],
  },
];

const PROJECTS = [
  {
    title: "AskMyDocs",
    subtitle: "RAG-based AI document assistant",
    demo: "https://askmydocs-xyrzpkpqsxuvvypvdptxvu.streamlit.app/",
    featured: true,
    bullets: [
      "Built a RAG pipeline using LangChain and Mistral AI with recursive chunking and a ChromaDB vector store with MMR retrieval for natural language querying over PDFs.",
      "Developed a custom eval framework measuring semantic similarity and faithfulness across test cases; optimized retrieval and prompting to reduce average query latency.",
      "Deployed a Streamlit app with real-time document ingestion, source passage transparency, and persistent chat history, delivering a production-ready end-to-end document Q&A system.",
    ],
    tags: ["LangChain", "ChromaDB", "Mistral AI", "RAG", "Vector Embeddings", "Streamlit"],
    stats: [],
  },
  {
    title: "Moodline",
    subtitle: "Real-time emotion recognition engine",
    demo: "https://emotionpredictai.onrender.com/",
    bullets: [
      "Built a text emotion classifier detecting 6 emotions, benchmarking RNN, LSTM, and GRU before selecting a Bidirectional GRU for best performance.",
      "Engineered an async FastAPI backend with lifespan pre-loading of the model, handling class imbalance and overfitting via weighted training and EarlyStopping.",
      "Deployed the full ML application on Render via GitHub CI/CD with a JavaScript frontend, enabling public access with live, real-time emotion predictions.",
    ],
    tags: ["FastAPI", "TensorFlow/Keras", "BiGRU", "REST API", "Render"],
    stats: [
      { value: "6", label: "emotion classes" },
      { value: "BiGRU", label: "best of RNN, LSTM, GRU" },
    ],
  },
  {
    title: "CrediShield",
    subtitle: "Credit risk assessment using XGBoost and SHAP",
    demo: "https://credishield.onrender.com/",
    bullets: [
      "Engineered a credit risk pipeline on 32,416 loan records, handling 78:22 class imbalance and missing-value imputation across 11 features via ColumnTransformer pipelines.",
      "Tuned XGBoost via RandomizedSearchCV (150 iterations, 5-fold) optimizing PR-AUC, achieving 92% accuracy and 0.81 F1-score on the default class, outperforming Logistic Regression by 16%.",
      "Deployed a FastAPI backend with SHAP-based explainability and Platt-calibrated probabilities, serving real-time risk predictions through an interactive underwriting dashboard.",
    ],
    tags: ["XGBoost", "SHAP", "FastAPI", "Scikit-learn", "Pandas"],
    stats: [
      { value: "92%", label: "accuracy" },
      { value: "0.81", label: "F1 on default class" },
      { value: "32,416", label: "loan records" },
    ],
  },
];

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: "Competitive exams",
    text: "Qualified the UPSC NDA, CGCAT, and AFCAT written examinations.",
  },
  {
    icon: PenLine,
    title: "Editorial Lead, Insights Club",
    text: "Published 12 monthly newsletters and the annual college magazine.",
  },
];

/* ---------- Small shared pieces ---------- */

function SectionHead({ eyebrow, title, intro }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 text-sm text-accent-soft">
        <span className="h-px w-8 bg-accent-soft/70" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="section-title text-4xl sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-400">{intro}</p>}
    </Reveal>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-md border border-line bg-ink-800 px-2.5 py-1 font-mono text-xs text-slate-300">
      {children}
    </span>
  );
}

function DemoLink({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${name} live demo (opens in a new tab)`}
      className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
    >
      Live demo
      <ArrowUpRight size={16} aria-hidden="true" />
    </a>
  );
}

function ProjectCard({ project }) {
  const { title, subtitle, demo, bullets, tags, stats, featured } = project;
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-ink-900/80 p-6 transition-colors hover:border-accent/50 sm:p-8 ${
        featured
          ? "border-accent/50 shadow-[0_0_60px_-20px_rgba(99,102,241,0.55)]"
          : "border-line"
      }`}
    >
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {featured && (
            <p className="mb-2 inline-block rounded-full border border-accent/50 px-3 py-0.5 text-xs text-accent-glow">
              Featured project
            </p>
          )}
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h3>
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        </div>
        <DemoLink href={demo} name={title} />
      </header>

      {stats.length > 0 && (
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-2xl font-bold text-white">{s.value}</dd>
              <dt className="text-xs text-slate-400">{s.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <ul className={`mt-6 space-y-3 text-sm leading-relaxed text-slate-300 ${featured ? "lg:max-w-3xl" : ""}`}>
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Nav />

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pt-16">
          <div
            className="glow pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px]"
            aria-hidden="true"
          />
          <div
            className="glow pointer-events-none absolute -right-32 bottom-10 h-[22rem] w-[22rem] rounded-full bg-violet-500/15 blur-[110px]"
            style={{ animationDelay: "-4s" }}
            aria-hidden="true"
          />
          <FloatingIcons />
          <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p
                className="rise inline-flex items-center gap-2 rounded-full border border-accent/40 bg-ink-900/70 px-4 py-1.5 font-mono text-xs text-slate-300"
                style={{ animationDelay: "0.05s" }}
              >
                <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
                Open to data science and ML roles
              </p>
              <h1
                className="rise mt-6 font-display text-[clamp(3.5rem,10vw,7rem)] font-extrabold leading-[0.95] tracking-tight"
                style={{ animationDelay: "0.15s" }}
              >
                <span className="name-gradient block">Ram</span>
                <span className="block text-slate-50">krishnaji</span>
              </h1>
              <p
                className="rise mt-5 flex items-center gap-4 text-base text-accent-soft"
                style={{ animationDelay: "0.25s" }}
              >
                <span className="h-px w-10 bg-accent-soft" aria-hidden="true" />
                ML engineer and data scientist
              </p>
              <p
                className="rise mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
                style={{ animationDelay: "0.35s" }}
              >
                M.Tech student building end-to-end ML systems: a{" "}
                <span className="text-slate-100">RAG document assistant</span>, a{" "}
                <span className="text-slate-100">real-time emotion classifier</span>, and an{" "}
                <span className="text-slate-100">explainable credit risk model</span>. All three are
                deployed and live.
              </p>
              <div
                className="rise mt-8 flex flex-wrap gap-3"
                style={{ animationDelay: "0.45s" }}
              >
                <a
                  href="#projects"
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(99,102,241,0.8)] transition-colors hover:bg-indigo-500"
                >
                  View projects
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:bg-accent/10"
                >
                  <Download size={16} aria-hidden="true" />
                  Resume
                </a>
              </div>
              <div
                className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-sm text-slate-400"
                style={{ animationDelay: "0.55s" }}
              >
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Github size={16} aria-hidden="true" />
                  ramkrishnaji
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white"
                >
                  <Linkedin size={16} aria-hidden="true" />
                  ramkrishnaji
                </a>
              </div>
            </div>

            <div className="rise" style={{ animationDelay: "0.3s" }}>
              <PhotoCard />
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs text-slate-500 hover:text-slate-300 md:flex"
          >
            Scroll
            <ArrowDown size={16} className="cue text-accent-soft" aria-hidden="true" />
          </a>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHead eyebrow="About" title="From raw data to a live demo" />
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-base leading-relaxed text-slate-300">
                I&apos;m an M.Tech student skilled in Machine Learning, Deep Learning, and Generative
                AI, with experience in data preprocessing, model building, evaluation, and deployment.
                I&apos;m looking for an entry-level Data Scientist or ML Engineer role where I can apply
                my analytical skills.
              </p>

              <ul className="mt-8 space-y-3 font-mono text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent-soft" aria-hidden="true" />
                  <a href={`mailto:${PROFILE.email}`} className="hover:text-white">
                    {PROFILE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent-soft" aria-hidden="true" />
                  <a href="tel:+919367172215" className="hover:text-white">
                    {PROFILE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-accent-soft" aria-hidden="true" />
                  {PROFILE.location}
                </li>
              </ul>

              <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { v: "3", l: "live projects" },
                  { v: "8.73", l: "B.Tech CGPA" },
                  { v: "8.25", l: "M.Tech CGPA" },
                  { v: "AWS", l: "certified" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl border border-line bg-ink-900/80 p-4">
                    <dd className="font-display text-2xl font-bold text-accent-glow">{s.v}</dd>
                    <dt className="mt-1 text-xs text-slate-400">{s.l}</dt>
                  </div>
                ))}
              </dl>

              <p className="mt-6 text-sm text-slate-400">
                Languages: English, Hindi. Outside work: gaming and fitness.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <h3 className="mb-6 flex items-center gap-3 font-display text-xl font-bold text-white">
                <GraduationCap size={22} className="text-accent-soft" aria-hidden="true" />
                Education
              </h3>
              <ol className="relative space-y-5 border-l border-line pl-6">
                {EDUCATION.map((e) => (
                  <li key={e.degree} className="relative">
                    <span
                      className={`absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full ${
                        e.current ? "bg-accent ring-4 ring-accent/25" : "bg-line"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="rounded-xl border border-line bg-ink-900/80 p-5">
                      {e.current && (
                        <p className="mb-2 inline-flex items-center gap-2 font-mono text-xs text-mint">
                          <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
                          Current
                        </p>
                      )}
                      <h4 className="font-semibold text-white">{e.degree}</h4>
                      <p className="mt-1 text-sm text-accent-soft">{e.school}</p>
                      <p className="mt-3 font-mono text-xs text-slate-400">
                        {e.years} · {e.score}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHead
            eyebrow="Skills"
            title="Technical stack"
            intro="The languages, libraries, and tools I use to take a model from notebook to deployment."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {SKILLS.map((g, i) => (
              <Reveal key={g.group} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-ink-900/80 p-6 transition-colors hover:border-accent/50">
                <h3 className="flex items-center gap-3 font-semibold text-white">
                  <span className={`h-2.5 w-2.5 rounded-full ${g.dot}`} aria-hidden="true" />
                  {g.group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li key={i}>
                      <Tag>{i}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHead
            eyebrow="Projects"
            title="What I've built"
            intro="Each project is deployed, so you can try it instead of reading about it."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 110} className={p.featured ? "lg:col-span-2" : ""}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHead eyebrow="Achievements" title="Beyond the code" />
          <div className="grid gap-5 sm:grid-cols-2">
            {ACHIEVEMENTS.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 110}>
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-ink-900/80 p-6 transition-colors hover:border-accent/50">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/40 bg-accent/10 text-accent-glow">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <SectionHead eyebrow="Certifications" title="Credentials" />
          <div className="grid gap-5 sm:grid-cols-2">
            <Reveal>
            <div className="h-full rounded-2xl border border-line bg-ink-900/80 p-6 transition-colors hover:border-accent/50 sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/40 bg-amber-400/10 text-amber-300">
                  <Award size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-slate-400">Amazon Web Services</p>
                  <h3 className="font-display text-xl font-bold text-white">
                    AWS Certified Cloud Practitioner
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                Foundational certification covering cloud concepts, core AWS services, security,
                architecture, pricing, and support. Issued January 2024.
              </p>
              <a
                href="/aws.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                View certificate
                <ExternalLink size={15} aria-hidden="true" />
              </a>
            </div>
            </Reveal>
            <Reveal delay={110}>
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-line p-8 text-center text-sm text-slate-500">
                More certifications coming soon
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-28 pt-24 sm:px-8">
          <Reveal>
          <div className="rounded-3xl border border-accent/40 bg-ink-900/80 p-8 shadow-[0_0_80px_-30px_rgba(99,102,241,0.6)] sm:p-12">
            <h2 className="section-title text-4xl sm:text-5xl">Let&apos;s talk</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              I&apos;m looking for an entry-level data scientist or ML engineer role. If you&apos;re hiring,
              or want to collaborate on something, email is the fastest way to reach me.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
              >
                <Mail size={16} aria-hidden="true" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                <Download size={16} aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:px-8">
          <p className="font-mono">
            <span className="text-accent-soft">&lt;</span>Ramkrishnaji
            <span className="text-accent-soft">/&gt;</span>
          </p>
          <p>© 2026 Ramkrishnaji. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
