import { useState } from "react";
import {
  FaArrowRight,
  FaBars,
  FaBolt,
  FaBookOpen,
  FaCalendarAlt,
  FaChartLine,
  FaDatabase,
  FaFlask,
  FaGlobeEurope,
  FaGraduationCap,
  FaLeaf,
  FaTimes,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const journey = [
  [FaFlask, "Research", "Advance interdisciplinary knowledge and methods."],
  [FaUsers, "Mobility", "Exchange researchers, infrastructure and expertise."],
  [FaBolt, "Validation", "Test solutions through modelling, pilots and real-world settings."],
  [FaBookOpen, "Knowledge exchange", "Share insights with education, industry and policy."],
  [FaLeaf, "Impact", "Support a more resilient Nordic energy system."],
];

const numbers = [
  [FaGlobeEurope, "4", "Nordic countries", "Norway · Finland · Denmark · Sweden"],
  [FaUniversity, "4", "Partner universities", "One connected research ecosystem"],
  [FaUsers, "12", "Mobility exchanges", "PhD and researcher collaboration"],
  [FaBolt, "5", "Work packages", "From coordination to impact"],
  [FaBookOpen, "4–6", "Joint publications", "Peer-reviewed project outputs"],
  [FaDatabase, "2", "Shared tools / datasets", "Open knowledge where appropriate"],
];

const pillars = [
  [FaBolt, "Intelligent energy management", "AI-enabled control, forecasting and optimisation."],
  [FaLeaf, "Energy storage & flexibility", "Integration of storage, renewables and flexible demand."],
  [FaUsers, "Nordic mobility", "Researcher exchange, joint supervision and shared infrastructure."],
  [FaChartLine, "Knowledge to impact", "Industry collaboration, education, policy and open knowledge."],
];

const tracks = [
  [FaGraduationCap, "PhD mobility", "Research stays of up to three months", "Joint research, co-supervision, complementary expertise and shared publications."],
  [FaFlask, "Researcher / postdoctoral mobility", "Focused short-term exchanges", "Method transfer, advanced modelling, validation and technical integration."],
  [FaUsers, "Cross-sector knowledge exchange", "Industry and public stakeholders", "Real-world validation, technology transfer and policy relevance."],
];

const workPackages = [
  ["WP1", "Project coordination & governance", "Lead: HIOF · M1–M40", "Coordination, financial management, quality assurance, risk and KPI monitoring."],
  ["WP2", "Intelligent Energy Management Systems", "Lead: University of Vaasa · M3–M36", "AI-driven EMS modelling, forecasting, optimisation and flexible energy systems."],
  ["WP3", "Intelligent integration of energy storage", "Lead: DTU · M3–M36", "Storage, P2X, predictive control, interoperability and experimental validation."],
  ["WP4", "Nordic Research School & capacity building", "Lead: HIOF · M18–M40", "Mobility, co-supervision, joint training and Nordic Summer School development."],
  ["WP5", "Communication, knowledge exchange & impact", "Lead: HIOF · M1–M40", "Scientific communication, industry engagement, outreach and long-term knowledge sharing."],
];

const modules = [
  "Intelligent Energy Management Systems and AI",
  "Energy Storage and Sector Coupling",
  "Digitalisation, IoT and Cyber-Physical Energy Systems",
  "Sustainable Innovation, Communication and Policy",
  "Nordic Living Labs and Pilot Validation",
];

const universities = [
  ["HIOF", "Østfold University of Applied Sciences", "Norway", "hiof", "hiof.png"],
  ["UVA", "University of Vaasa", "Finland", "uva", "university-vaasa.png"],
  ["DTU", "Technical University of Denmark", "Denmark", "dtu", "dtu.png"],
  ["LTU", "Luleå University of Technology", "Sweden", "ltu", "ltu.png"],
];

const observers = [
  ["AFRY", "AFRY", "Observer", "afry", "afry.png"],
  ["EnergyManager", "Energy Manager", "Observer", "energy-manager", "energy-manager.svg"],
  ["SKEBIT", "SKEBIT", "Observer", "skebit"],
  ["MegaWatt", "Megawatt", "Observer", "megawatt", "megawatt.png"],
  ["CYBER SECURITY FINLAND", "Cyber Security Finland", "Observer", "cyber-security-finland", "cyber-security-finland.png"],
];

const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Brand({ footer = false, onClick }) {
  return <button className={`brand${footer ? " footer-brand" : ""}`} onClick={onClick} aria-label="Go to NORDIC-EMS home">
    <svg className="brand-symbol" viewBox="0 0 64 64" aria-hidden="true">
      <path className="brand-orbit brand-orbit-a" d="M17 15A23 23 0 0 1 48 17" />
      <path className="brand-orbit brand-orbit-b" d="M50 21A23 23 0 0 1 45 51" />
      <path className="brand-orbit brand-orbit-c" d="M40 54A23 23 0 0 1 13 44" />
      <path className="brand-orbit brand-orbit-d" d="M11 39A23 23 0 0 1 14 20" />
      <circle cx="13" cy="16" r="5" />
      <circle cx="51" cy="18" r="5" />
      <circle cx="45" cy="53" r="5" />
      <circle cx="10" cy="43" r="5" />
      <path className="brand-wave" d="M12 35h10l4-13 7 26 5-19 5 10h9" />
    </svg>
    <span className="brand-copy"><strong>NORDIC-EMS</strong><small>Nordic mobility for intelligent energy systems</small></span>
  </button>;
}

function PartnerLogo({ item }) {
  const [mark, name, detail, style, image] = item;
  return <article className={`partner-logo partner-logo--${style}`}>
    <div className="partner-mark" aria-hidden="true">
      {image ? <img src={asset(`brand/${image}`)} alt="" /> : <span>{mark}</span>}
    </div>
    <h3>{name}</h3>
    <p>{detail}</p>
  </article>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const navTo = (id) => { setMenuOpen(false); scrollTo(id); };
  const navItems = [["About", "about"], ["Research & WPs", "research"], ["Mobility", "mobility"], ["Nordic Research School", "school"], ["Partners", "partners"], ["Results", "results"], ["News & Events", "news"], ["Contact", "contact"]];

  return <main>
    <header className="site-header">
      <Brand onClick={() => navTo("home")} />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <FaTimes /> : <FaBars />}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{navItems.map(([label, id]) => <button key={id} onClick={() => navTo(id)}>{label}</button>)}</nav>
      <button className="opportunity-button header-cta" onClick={() => setContactOpen(true)}>Opportunities <FaArrowRight /></button>
    </header>

    <section className="hero" id="home" style={{ "--hero-image": `url(${asset("nordic-energy-hero.png")})` }}><div className="hero-shade" /><div className="hero-content container"><p className="eyebrow light">NORDIC-EMS · 2026–2029</p><h1 className="sr-only">NORDIC-EMS</h1><p className="hero-title">Nordic mobility for intelligent and sustainable energy management.</p><p className="hero-copy">NORDIC-EMS connects researchers, expertise and research infrastructures across Norway, Finland, Denmark and Sweden to develop and validate intelligent energy management solutions for a more efficient, flexible and resilient Nordic energy system.</p><div className="hero-actions"><button className="button primary" onClick={() => navTo("about")}>Explore the project <FaArrowRight /></button><button className="button outline" onClick={() => setContactOpen(true)}>Mobility opportunities <FaArrowRight /></button></div><div className="hero-funding"><span>Funded by</span><strong>Nordic Energy Research</strong><span>· Nordic Energy Research Mobility Programme · Project No. 264880</span></div></div></section>

    <section className="journey reference-journey container" aria-label="NORDIC-EMS pathway">{journey.map(([Icon, title, text], index) => <div className="journey-step" key={title}><div className="journey-icon"><Icon /></div><div className="journey-heading"><span className="step-number">{index + 1}</span><h2>{title}</h2></div><p>{text}</p></div>)}</section>

    <section className="numbers reference-numbers" id="about"><div className="container"><h2 className="numbers-title">NORDIC-EMS IN NUMBERS</h2><div className="number-grid">{numbers.map(([Icon, number, label, detail]) => <article className="number-item" key={label}><Icon className="number-icon" /><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div><p className="kpi-line">3–4 thematic research clusters · 2 pilot-oriented collaborations · 2 co-supervised PhDs · 1 Nordic Summer School · 2 policy / industry briefs</p></div></section>

    <section className="pillars-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">WHY NORDIC-EMS</p><h2 className="section-title">A shared Nordic challenge needs a shared Nordic response.</h2></div><p className="section-side-copy">The transition towards renewable, electrified and digital energy systems calls for intelligent energy management, energy storage, digitalisation and structured researcher mobility.</p></div><div className="pillars-grid">{pillars.map(([Icon, title, text]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="mobility-section" id="mobility"><div className="container"><div className="section-intro split-title"><div><p className="eyebrow teal">THE SIGNATURE PROGRAMME</p><h2>Mobility that<br />produces knowledge</h2></div><p>Exchanges are designed to generate joint research, new skills, shared methods and long-term collaboration—not only to move people between institutions.</p></div><div className="track-grid">{tracks.map(([Icon, title, length, text]) => <article className="track" key={title}><Icon /><p className="track-length">{length}</p><h3>{title}</h3><p>{text}</p></article>)}</div><div className="output-promise"><FaBolt /><div><p className="eyebrow amber">EVERY MOBILITY CONTRIBUTES TO</p><strong>A joint research or educational output · a knowledge-exchange activity · a measurable work-package contribution.</strong></div><button onClick={() => setContactOpen(true)}>See opportunities <FaArrowRight /></button></div></div></section>

    <section className="research-section" id="research"><div className="container"><p className="eyebrow">INTEGRATED DELIVERY</p><h2 className="section-title">Five work packages, one Nordic platform.</h2><div className="wp-grid">{workPackages.map(([id, title, lead, text]) => <article className="wp-card" key={id}><span>{id}</span><p className="wp-lead">{lead}</p><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="consortium" id="partners"><div className="container"><div className="consortium-lead"><p className="eyebrow">THE NORDIC CONSORTIUM</p><h2>Four universities.<br />Four Nordic countries.<br />One connected research ecosystem.</h2><p>HIOF coordinates the project. The University of Vaasa, DTU and LTU contribute complementary expertise in intelligent energy management, smart grids, advanced control, storage, industrial energy systems and real-world validation.</p></div><div className="partner-group"><div className="partner-group-heading"><p className="eyebrow teal">ACADEMIC PARTNERS</p><p>Formal consortium partners</p></div><div className="partner-logo-grid universities">{universities.map((item) => <PartnerLogo item={item} key={item[1]} />)}</div></div><div className="partner-group observers-group"><div className="partner-group-heading"><p className="eyebrow teal">INDUSTRY & STAKEHOLDER NETWORK</p><p>Observers and stakeholders are shown separately from the formal consortium.</p></div><div className="partner-logo-grid observers">{observers.map((item) => <PartnerLogo item={item} key={item[1]} />)}</div><p className="engagement-flow">Co-creation <span>→</span> Pilot validation <span>→</span> Industry feedback <span>→</span> Knowledge transfer <span>→</span> Policy and market uptake</p></div><aside className="funder-strip" aria-label="Funding acknowledgement"><img src={asset("brand/nordic-energy-research.png")} alt="Nordic Energy Research" /><div><p className="eyebrow teal">FUNDED BY</p><h3>Nordic Energy Research</h3><p>Nordic Energy Research Mobility Programme · Project No. 264880</p></div></aside></div></section>

    <section className="school" id="school"><div className="container school-grid"><div><p className="eyebrow">NORDIC RESEARCH SCHOOL</p><h2>Building sustainable Nordic competence.</h2><p>NORDIC-EMS will develop an ECTS-based Nordic Summer School combining advanced research, applied learning and interdisciplinary collaboration. The educational design will draw on relevant Nordic and European quality principles and outcome-based, CDIO-inspired learning approaches.</p><button className="button dark" onClick={() => setContactOpen(true)}>Ask about the Summer School <FaArrowRight /></button></div><div className="module-list">{modules.map((module, index) => <div key={module}><span>MC{index + 1}</span><p>{module}</p></div>)}</div></div></section>

    <section className="results-section" id="results"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">RESULTS & OPEN KNOWLEDGE</p><h2 className="section-title">Knowledge designed to travel.</h2></div><p className="section-side-copy">Results will be added as they become available during the project.</p></div><div className="results-grid">{[[FaBookOpen, "Publications", "Peer-reviewed papers and conference contributions"], [FaDatabase, "Digital tools & datasets", "EMS models, simulation resources and accessible datasets"], [FaGraduationCap, "Educational resources", "Summer School and micro-credential materials"], [FaUniversity, "Policy & industry guidance", "Evidence-based briefs and practical recommendations"]].map(([Icon, title, text]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="news-section" id="news"><div className="container"><div className="section-heading-row"><div><p className="eyebrow teal">NEWS & EVENTS</p><h2 className="section-title">Follow the project as it takes shape.</h2></div><button className="text-button" onClick={() => setContactOpen(true)}>Ask about opportunities <FaArrowRight /></button></div><div className="news-grid">{[["September 2026", "NORDIC-EMS officially starts", "The consortium begins aligning research activities, mobility plans and first-year priorities."], ["Upcoming", "First mobility opportunities", "Details on upcoming PhD, researcher and research-school opportunities will be shared here."], ["Planning underway", "Nordic Summer School", "The programme is developing a shared learning experience across the Nordic research ecosystem."]].map(([date, title, text]) => <article key={title}><p>{date}</p><h3>{title}</h3><span /><div>{text}</div><button onClick={() => setContactOpen(true)}>Read more <FaArrowRight /></button></article>)}</div></div></section>

    <footer id="contact"><div className="container footer-grid"><div><Brand footer onClick={() => navTo("home")} /><p>Developing a sustainable and decarbonized energy management system in the Nordic Green Transition.</p></div><div><p className="eyebrow teal">PROJECT COORDINATOR</p><p>Prof. Nicolae Lucian Mihet<br />Østfold University of Applied Sciences<br />Faculty of Information Technology, Engineering and Economics</p><a href="mailto:lucian.mihet@hiof.no">lucian.mihet@hiof.no</a></div><div><p className="eyebrow teal">FUNDED BY</p><img className="footer-funder-logo" src={asset("brand/nordic-energy-research.png")} alt="Nordic Energy Research" /><p>Nordic Energy Research Mobility Programme<br />Project No. 264880<br />1 September 2026 – 31 December 2029</p></div></div><div className="container footer-bottom">© 2026 NORDIC-EMS · Privacy · Accessibility</div></footer>

    {contactOpen && <div className="modal-backdrop" role="presentation"><section className="opportunity-modal" role="dialog" aria-modal="true" aria-labelledby="opportunity-title"><button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Close contact details"><FaTimes /></button><p className="eyebrow">NORDIC-EMS OPPORTUNITIES</p><h2 id="opportunity-title">Get in touch about your interests.</h2><p>There are no open calls at present. For planned PhD mobility, researcher mobility, Nordic Summer School and stakeholder exchange opportunities, contact the project coordinator directly.</p><div className="contact-panel"><a href="mailto:lucian.mihet@hiof.no"><span>Email the project coordinator</span><strong>lucian.mihet@hiof.no</strong></a><div className="contact-context"><span>Project Coordinator</span><strong>Prof. Nicolae Lucian Mihet</strong><p>Østfold University of Applied Sciences</p></div></div><button className="button dark" onClick={() => setContactOpen(false)}>Close</button></section></div>}
  </main>;
}
