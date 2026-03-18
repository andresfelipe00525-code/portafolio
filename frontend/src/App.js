import { useEffect, useState } from 'react';
import './App.css';
import profile from './assets/profile/profile.jpg';

const projects = [
	{
		id: 1,
		title: 'Heritage',
		tag: 'Cultural Platform',
		description:
			'Digital platform for colonial architectural heritage and restoration guides.',
		url: 'https://heriitage.vercel.app/',
		img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80',
		tech: ['React', 'Tailwind', 'Node.js'],
	},
	{
		id: 2,
		title: 'Alzheimer Analytics',
		tag: 'Data Science',
		description:
			'Healthcare data analytics dashboard for Alzheimer research in the US.',
		url: 'https://alzheimer-henna.vercel.app/',
		img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
		tech: ['React', 'Recharts', 'Python'],
	},
	{
		id: 3,
		title: 'Corporate Health',
		tag: 'Healthcare',
		description:
			'Elite medical portfolio for executive healthcare services worldwide.',
		url: 'https://healtcaree.vercel.app/',
		img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
		tech: ['React', 'Vite', 'Tailwind'],
	},
	{
		id: 4,
		title: 'Booking App',
		tag: 'Hospitality',
		description:
			'Hotel reservation system with modern UI and real-time availability.',
		url: 'https://finalboking.vercel.app/',
		img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
		tech: ['React', 'REST API', 'CSS'],
	},
];

const skills = [
	'React',
	'JavaScript',
	'Node.js',
	'Python',
	'TypeScript',
	'Tailwind CSS',
	'REST APIs',
	'PostgreSQL',
];

function Card({ project, index }) {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(true), index * 100);
		return () => clearTimeout(timer);
	}, [index]);

	return (
		<a
			href={project.url}
			target="_blank"
			rel="noopener noreferrer"
			className="card"
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? 'translateY(0)' : 'translateY(20px)',
				transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
			}}
		>
			<div className="card-img-wrap">
				<img src={project.img} alt={project.title} className="card-img" />
				<div className="card-overlay">
					<span className="card-overlay-text">View Project →</span>
				</div>
			</div>
			<div className="card-body">
				<span className="card-tag">{project.tag}</span>
				<h3 className="card-title">{project.title}</h3>
				<p className="card-desc">{project.description}</p>
				<div className="card-tech">
					{project.tech.map((t) => (
						<span key={t}>{t}</span>
					))}
				</div>
			</div>
		</a>
	);
}

function App() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="portfolio">
			{/* ── NAV ── */}
			<nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
				<span className="nav-logo">AF</span>
				<div className="nav-links">
					<a href="#projects">Work</a>
					<a href="#contact">Contact</a>
					<a
						href="https://github.com/andresfelipe00525-code"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</div>
			</nav>

			{/* ── HERO ── */}
			<section className="hero">
				<div className="hero-left">
					<p className="hero-eyebrow">Full Stack Developer</p>
					<h1 className="hero-name">
						Andrés Felipe
						<br />
						Flórez
					</h1>
					<p className="hero-bio">
						I build modern digital products — from elegant, user-focused
						frontends to robust, scalable backends. Full-stack web developer and
						expert in designing high-quality websites and applications.
					</p>
					<div className="hero-actions">
						<a
							href="https://www.linkedin.com/in/andr%C3%A9s-felipe-florez-933891383/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn--primary"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/andresfelipe00525-code"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn--ghost"
						>
							GitHub
						</a>
						<a
							href="/cv.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn--ghost"
						>
							CV
						</a>
					</div>
				</div>
				<div className="hero-right">
					<img
						src={profile}
						alt="Andrés Felipe Flórez"
						className="hero-photo"
					/>
				</div>
			</section>

			{/* ── SKILLS ── */}
			<section className="skills-bar">
				{skills.map((s) => (
					<span key={s} className="skill-pill">
						{s}
					</span>
				))}
			</section>

			{/* ── PROJECTS ── */}
			<section id="projects" className="projects">
				<div className="section-header">
					<span className="section-label">Selected Work</span>
					<h2 className="section-title">Projects</h2>
				</div>
				<div className="project-grid">
					{projects.map((p, i) => (
						<Card key={p.id} project={p} index={i} />
					))}
				</div>
			</section>

			{/* ── CONTACT ── */}
			<section id="contact" className="contact">
				<div className="contact-inner">
					<span className="section-label">Get in touch</span>
					<h2 className="contact-title">Let's work together</h2>
					<p className="contact-sub">
						Open to freelance projects and full-time opportunities.
					</p>
					<div className="contact-links">
						<a
							href="mailto:andres_felipe_florez@hotmail.com"
							className="contact-link"
						>
							andres_felipe_florez@hotmail.com
						</a>
						<a href="tel:+573123725058" className="contact-link">
							+57 312 372 5058
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
