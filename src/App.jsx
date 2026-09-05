import { useState } from "react";
import {
  FaArrowRight,
  FaBalanceScale,
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
  FaNetworkWired,
  FaTimes,
  FaUniversity,
  FaUsers,
} from "react-icons/fa";

const journey = [
  [FaFlask, "Research", "AI-enabled energy systems, storage and flexibility."],
  [FaUsers, "Mobility", "Twelve cross-institutional researcher exchanges."],
  [FaBolt, "Validation", "Pilots, living labs and Nordic research infrastructure."],
  [FaBookOpen, "Knowledge exchange", "Research school, workshops and policy briefs."],
  [FaLeaf, "Impact", "A secure, efficient and decarbonized transition."],
];

const numbers = [
  ["4", "Nordic countries", "Norway · Finland · Denmark · Sweden"],
  ["12", "Mobility exchanges", "6 PhD and 6 researcher mobilities"],
  ["3–4", "Research clusters", "Thematic collaboration across partners"],
  ["4–6", "Joint publications", "Peer-reviewed research outputs"],
  ["2", "Digital tools / datasets", "EMS models and RTDS resources"],
  ["4–5", "ECTS Summer School", "Stackable micro-credentials"],
];

const tracks = [
  [FaGraduationCap, "PhD mobility", "6 exchanges · 3 months", "Co-supervised research stays in intelligent energy systems and storage."],
  [FaFlask, "Researcher mobility", "6 exchanges · 1 month", "Focused modelling, validation and experimental work across the consortium."],
  [FaUsers, "Cross-sector secondments", "Pilot environments", "Industry and public-sector exchange rooted in practical energy challenges."],
];

const workPackages = [
  ["WP1", "Project coordination & governance", "HIOF · M1–M40", "Quality assurance, risk, reporting and consortium coordination."],
  ["WP2", "Intelligent Energy Management Systems", "UVA + DTU · M3–M36", "AI-driven EMS, forecasting, optimization and demand flexibility."],
  ["WP3", "Energy storage & system flexibility", "DTU + UVA · M3–M40", "Storage, P2X, AI-supported control and experimental validation."],
  ["WP4", "Mobility, capacity building & Research School", "HIOF + LTU · M1–M40", "Mobility governance, micro-credentials and Nordic competence."],
  ["WP5", "Dissemination, communication & impact", "LTU + all partners · M1–M40", "Research visibility, stakeholder engagement and policy uptake."],
];

const modules = [
  "Intelligent EMS & AI for sustainability",
  "Energy storage & sector coupling",
  "Digital systems, IoT & cyber-physical energy systems",
  "Innovation, communication, policy & sustainability",
  "Nordic living labs & pilot validation",
];

const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function SourceFigure({ source, alt, caption, className = "" }) {
  return <figure className={`source-figure ${className}`}><img src={source} alt={alt} /><figcaption>{caption}</figcaption></figure>;
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const navTo = (id) => { setMenuOpen(false); scrollTo(id); };
  const navItems = [["About", "about"], ["Research & WPs", "research"], ["Mobility", "mobility"], ["Research School", "school"], ["Partners", "partners"], ["Results", "results"], ["News & Events", "news"], ["Contact", "contact"]];

  return <main>
    <header className="site-header">
      <button className="brand" onClick={() => navTo("home")} aria-label="Go to NORDIC-EMS home"><span className="brand-mark"><FaNetworkWired /></span><span><strong>NORDIC-EMS</strong><small>Nordic Energy Atlas</small></span></button>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <FaTimes /> : <FaBars />}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">{navItems.map(([label, id]) => <button key={id} onClick={() => navTo(id)}>{label}</button>)}</nav>
      <button className="opportunity-button header-cta" onClick={() => setFormOpen(true)}>Opportunities <FaArrowRight /></button>
    </header>

    <section className="hero" id="home" style={{ "--hero-image": `url(${asset("nordic-energy-hero.png")})` }}><div className="hero-shade" /><div className="hero-content container"><p className="eyebrow light">NORDIC MOBILITY, EXCHANGE & NETWORKING · 2026</p><h1>NORDIC-EMS</h1><p className="hero-title">Developing a sustainable and decarbonized energy management system in the Nordic Green Transition.</p><p className="hero-copy">A Nordic mobility and innovation ecosystem co-developing, testing and validating intelligent energy management systems across Norway, Finland, Denmark and Sweden.</p><div className="hero-actions"><button className="button primary" onClick={() => navTo("about")}>Explore the project <FaArrowRight /></button><button className="button outline" onClick={() => navTo("mobility")}>Mobility opportunities <FaArrowRight /></button></div></div></section>

    <section className="journey container" aria-label="NORDIC-EMS pathway">{journey.map(([Icon, title, text], index) => <div className="journey-step" key={title}><div className="journey-icon"><Icon /></div><span className="step-number">0{index + 1}</span><h2>{title}</h2><p>{text}</p></div>)}</section>

    <section className="numbers" id="about"><div className="container"><p className="eyebrow">THE PROJECT AT A GLANCE</p><h2 className="section-title centered">A structured Nordic mobility ecosystem</h2><div className="number-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}>{numbers.map(([number, label, detail]) => <article className="number-item" key={label}><strong>{number}</strong><h3>{label}</h3><p>{detail}</p></article>)}</div></div></section>

    <section className="document-visual-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">WHY NORDIC-EMS</p><h2 className="section-title">A shared challenge needs a shared Nordic response.</h2></div><p className="section-side-copy">The project connects AI-enabled energy management, storage, mobility, validation and open knowledge to strengthen the Nordic Green Transition.</p></div><SourceFigure source={asset("project-framework.png")} alt="NORDIC-EMS strategic relevance framework" caption="NORDIC-EMS strategic relevance and mobility framework" /></div></section>

    <section className="mobility-section" id="mobility"><div className="container"><div className="section-intro split-title"><div><p className="eyebrow teal">THE SIGNATURE PROGRAMME</p><h2>Mobility that<br />produces knowledge</h2></div><p>Every exchange is governed through WP4, transparently selected and tied to joint outputs, research integration and a measurable work-package contribution.</p></div><div className="track-grid">{tracks.map(([Icon, title, length, text]) => <article className="track" key={title}><Icon /><p className="track-length">{length}</p><h3>{title}</h3><p>{text}</p></article>)}</div><div className="output-promise"><FaBolt /><div><p className="eyebrow amber">EVERY MOBILITY PRODUCES</p><strong>One joint paper, dataset or model · one workshop or Summer School presentation · one work-package contribution.</strong></div><button onClick={() => setFormOpen(true)}>See opportunities <FaArrowRight /></button></div><SourceFigure className="dark-figure" source={asset("joint-curriculum.png")} alt="NORDIC-EMS joint curriculum and mobility framework" caption="Joint curriculum and output-oriented mobility framework" /></div></section>

    <section className="research-section" id="research"><div className="container"><p className="eyebrow">INTEGRATED DELIVERY</p><h2 className="section-title">Five work packages, one Nordic platform.</h2><div className="wp-grid">{workPackages.map(([id, title, lead, text]) => <article className="wp-card" key={id}><span>{id}</span><p className="wp-lead">{lead}</p><h3>{title}</h3><p>{text}</p></article>)}</div><SourceFigure source={asset("project-roadmap.png")} alt="NORDIC-EMS 40 month project Gantt chart" caption="40-month project roadmap across the five work packages" /></div></section>

    <section className="consortium" id="partners"><div className="container consortium-grid"><div className="consortium-copy"><p className="eyebrow">THE NORDIC CONSORTIUM</p><h2>Four universities.<br />One connected research ecosystem.</h2><p>Østfold University of Applied Sciences coordinates applied energy systems, pilot environments and the Nordic Research School. The University of Vaasa leads smart grids and digital energy platforms; DTU leads advanced control and storage validation; Luleå University of Technology connects industrial applications and municipalities.</p><div className="inclusion-note"><FaBalanceScale /><span><strong>Inclusive by design</strong><br />The consortium begins with 52% male and 48% female representation, supported by transparent selection and mobility monitoring.</span></div><button className="text-button" onClick={() => navTo("contact")}>Meet our partners <FaArrowRight /></button></div><SourceFigure source={asset("consortium-research-groups.png")} alt="Research groups of NORDIC-EMS project partners" caption="Research groups and complementary expertise of the project partners" /></div></section>

    <section className="school" id="school"><div className="container school-grid"><div><p className="eyebrow">NORDIC RESEARCH SCHOOL</p><h2>4–5 ECTS of stackable Nordic competence.</h2><p>The intensive Summer School blends physical and digital learning, laboratory demonstrations, industrial case studies and interdisciplinary teamwork. It aligns with NOKUT, EUR-ACE and CDIO principles.</p><button className="button dark" onClick={() => setFormOpen(true)}>Explore the Summer School <FaArrowRight /></button></div><div className="module-list">{modules.map((module, index) => <div key={module}><span>MC{index + 1}</span><p>{module}</p></div>)}</div></div></section>

    <section className="impact-section"><div className="container"><p className="eyebrow">FROM RESEARCH TO REAL-WORLD IMPACT</p><h2 className="section-title centered">Research → mobility → validation → impact</h2><SourceFigure source={asset("impact-pathway.png")} alt="NORDIC-EMS impact pathway from research to Nordic Green Transition" caption="NORDIC-EMS impact pathway" /><div className="impact-flow">{[[FaFlask, "Research", "AI · EMS · storage"], [FaUsers, "Mobility", "PhD · researchers · secondments"], [FaChartLine, "Validation", "PowerLabDK · pilots · living labs"], [FaGlobeEurope, "Knowledge uptake", "Industry · municipalities · policy"], [FaLeaf, "Impact", "Resilient, low-emission systems"]].map(([Icon, title, text]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="results-section" id="results"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">COMMUNICATION & KNOWLEDGE EXCHANGE</p><h2 className="section-title">Open knowledge that reaches beyond the consortium.</h2></div><button className="text-button" onClick={() => navTo("news")}>See news & events <FaArrowRight /></button></div><div className="results-grid">{[[FaBookOpen, "Publications", "Joint peer-reviewed research"], [FaDatabase, "Datasets & tools", "Open EMS resources where possible"], [FaCalendarAlt, "Events", "Energy Week, workshops and IEEE-PES"], [FaUniversity, "Policy & industry briefs", "Implementation-oriented guidance"]].map(([Icon, title, text]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div><SourceFigure source={asset("communication-plan.png")} alt="NORDIC-EMS communication and knowledge exchange framework" caption="Communication plan connecting research, stakeholders, public outreach and student recruitment" /></div></section>

    <section className="closing" id="news"><div className="container closing-content"><FaLeaf /><div><p className="eyebrow teal">A SUSTAINABLE NORDIC PLATFORM</p><h2>Connecting people, knowledge, infrastructure and future opportunities for the Green Transition.</h2></div><button className="button primary" onClick={() => setFormOpen(true)}>Find an opportunity <FaArrowRight /></button></div></section>

    <footer id="contact"><div className="container footer-grid"><div><button className="brand" onClick={() => navTo("home")}><span className="brand-mark"><FaNetworkWired /></span><span><strong>NORDIC-EMS</strong><small>Nordic Energy Atlas</small></span></button><p>Intelligent energy management for a sustainable Nordic future.</p></div><div><p className="eyebrow teal">CONTACT</p><a href="mailto:info@nordic-ems.eu">info@nordic-ems.eu</a><a href="tel:+4700000000">+47 00 00 00 00</a></div><div><p className="eyebrow teal">CONTRIBUTES TO</p><p>SDG 7 · SDG 11 · SDG 13</p></div></div><div className="container footer-bottom">© 2026 NORDIC-EMS · Privacy · Accessibility</div></footer>

    {formOpen && <div className="modal-backdrop" role="presentation"><section className="opportunity-modal" role="dialog" aria-modal="true" aria-labelledby="opportunity-title"><button className="modal-close" onClick={() => setFormOpen(false)} aria-label="Close contact details"><FaTimes /></button><p className="eyebrow">NORDIC-EMS OPPORTUNITIES</p><h2 id="opportunity-title">Get in touch about your interests.</h2><p>For planned PhD mobility, researcher mobility, Nordic Summer School and stakeholder exchange opportunities, contact the NORDIC-EMS team directly.</p><div className="contact-panel"><a href="mailto:info@nordic-ems.eu"><span>Email</span><strong>info@nordic-ems.eu</strong></a><a href="tel:+4700000000"><span>Phone</span><strong>+47 00 00 00 00</strong></a></div><button className="button dark" onClick={() => setFormOpen(false)}>Close</button></section></div>}
  </main>;
}
