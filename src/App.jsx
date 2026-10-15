
import React from "react";
import "./App.css";

const skills = [
  "JavaScript",
  "React.js",
  "React Native",
  "HTML5",
  "CSS3",
  "Python",
  "Java",
  "C",
  "SQL",
  "DBMS",
  "Machine Learning",
  "IoT",
  "Embedded Systems",
  "Arduino",
];

const projects = [
  {
    number: "01",
    title: "Electronic Dental Shade Matching",
    category: "Healthcare · Machine Learning · IoT",
    description:
      "Developed a sensor-based healthcare prototype to support accurate dental shade detection using sensor data and embedded systems.",
    tech: ["Sensors", "Machine Learning", "Embedded Systems"],
  },
  {
    number: "02",
    title: "Student Database Management",
    category: "Python · SQL",
    description:
      "Created a student database management project to organize and manage student information using Python and SQL.",
    tech: ["Python", "SQL", "Database"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    category: "Web Development",
    description:
      "Worked on a user interface design project focused on clear layouts and an improved user experience.",
    tech: ["HTML", "React", "Java"],
  },
  {
    number: "04",
    title: "Calculator",
    category: "Frontend Development",
    description:
      "Built a calculator project to practice programming logic and interactive application development.",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    number: "05",
    title: "IoT-Based Project",
    category: "IoT · Electronics",
    description:
      "Explored IoT concepts and simulation techniques as part of an academic electronics project.",
    tech: ["Python", "Multisim", "IoT"],
  },
  {
    number: "06",
    title: "12V Transformer",
    category: "Hardware · Electronics",
    description:
      "Completed an academic hardware project involving a 12V transformer and electronics fundamentals.",
    tech: ["Hardware", "Electronics"],
  },
];

function App() {
  return (
    <div className="portfolio">
      {/* Navigation */}
      <header className="navbar">
        <a className="logo" href="#home">
          D<span>.</span>K
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-button"
          href="/Deepali_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              B.Tech Graduate · Open to Opportunities
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Deepali
              <br />
              <span>Kumari.</span>
            </h1>

            <h2>
              Electronics Engineer
              <span className="separator"> / </span>
              <span className="accent-text">Frontend Developer</span>
            </h2>

            <p className="hero-description">
              I am a B.Tech graduate in Electronics & Telecommunication
              Engineering with an interest in web development, software
              engineering, machine learning, and innovative technology.
              I enjoy turning ideas into useful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a className="secondary-button" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>9.12<span>/10</span></strong>
                <small>Academic CGPA</small>
              </div>
              <div>
                <strong>06<span>+</span></strong>
                <small>Academic Projects</small>
              </div>
              <div>
                <strong>2026</strong>
                <small>B.Tech Graduate</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-top">
                <span className="profile-dot"></span>
                <span className="profile-dot"></span>
                <span className="profile-dot"></span>
                <span className="profile-label">PROFILE_01</span>
              </div>

              <div className="monogram">DK<span>.</span></div>

              <p className="profile-name">Deepali Kumari</p>
              <p className="profile-role">ENGINEER · DEVELOPER · LEARNER</p>

              <div className="profile-divider"></div>

              <div className="profile-detail">
                <span>DEGREE</span>
                <strong>B.Tech — E&TC</strong>
              </div>
              <div className="profile-detail">
                <span>UNIVERSITY</span>
                <strong>Bharati Vidyapeeth, Pune</strong>
              </div>
              <div className="profile-detail">
                <span>FOCUS</span>
                <strong>Web & Software Development</strong>
              </div>

              <div className="profile-footer">
                <span>BUILDING THE FUTURE</span>
                <span>✳</span>
              </div>
            </div>

            <div className="floating-tag tag-top">{"< React />"}</div>
            <div className="floating-tag tag-bottom">AI · ML · IoT</div>
          </div>

          <a href="#about" className="scroll-cue">
            <span></span> SCROLL TO EXPLORE
          </a>
        </section>

        {/* About */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious mind.
              <br />
              <span className="accent-text">Technical mindset.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p className="lead">
                Technology is where my curiosity meets problem-solving.
              </p>

              <p>
                I graduated in Electronics & Telecommunication Engineering
                from Bharati Vidyapeeth University College of Engineering,
                Pune, with a CGPA of 9.12/10.
              </p>

              <p>
                My academic and practical experience has introduced me to
                frontend development, web applications, databases, embedded
                systems, and sensor-based healthcare projects.
              </p>

              <p>
                I am looking for opportunities where I can learn from
                experienced professionals, contribute to real projects, and
                grow as a software developer.
              </p>

              <a
                className="text-link"
                href="/Deepali_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View my full resume ↗
              </a>
            </div>

            <div className="about-facts">
              <div className="fact-card">
                <span className="fact-icon">01</span>
                <div>
                  <h3>Education</h3>
                  <p>B.Tech in Electronics & Telecommunication</p>
                  <small>2022 – 2026 · Pune</small>
                </div>
              </div>

              <div className="fact-card">
                <span className="fact-icon">02</span>
                <div>
                  <h3>Development</h3>
                  <p>Frontend and web application development</p>
                  <small>React · JavaScript · HTML · CSS</small>
                </div>
              </div>

              <div className="fact-card">
                <span className="fact-icon">03</span>
                <div>
                  <h3>Exploring</h3>
                  <p>AI, machine learning, IoT and software engineering</p>
                  <small>Always learning, always building</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">02 / TECH STACK</p>
            <h2>
              Tools I work
              <br />
              <span className="accent-text">with.</span>
            </h2>
            <p className="section-description">
              Technologies and concepts from my academic projects and
              development experience.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="skill-name">{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Projects with
                <br />
                <span className="accent-text">purpose.</span>
              </h2>
            </div>
            <p className="section-description">
              A selection of academic and technical projects that reflect
              my interest in software and electronics.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="section experience-section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>
              Learning through
              <br />
              <span className="accent-text">doing.</span>
            </h2>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-date">04 JUL 2025 — 21 SEP 2025</div>
              <div className="timeline-content">
                <h3>Software Engineer</h3>
                <p className="company">Elenoit Digital Solution · Pune</p>
                <p>
                  Gained practical exposure to web application development,
                  designing and maintaining applications, and working with
                  frontend technologies, databases, and software development
                  workflows.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>SQL</span>
                  <span>HTML/CSS</span>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-date">23 JUN 2025 — 30 SEP 2025</div>
              <div className="timeline-content">
                <h3>Front-End Web Development Intern</h3>
                <p className="company">Elenoit Digital Solution · Pune</p>
                <p>
                  Developed frontend development knowledge and gained
                  exposure to web and mobile applications, software
                  technologies, and digital solutions.
                </p>
                <div className="project-tech">
                  <span>Frontend</span>
                  <span>Web Development</span>
                  <span>React</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Education */}
        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="eyebrow">05 / EDUCATION</p>
            <h2>
              Built on a strong
              <br />
              <span className="accent-text">foundation.</span>
            </h2>
          </div>

          <div className="education-card">
            <div className="education-year">2022 — 2026</div>
            <div className="education-main">
              <h3>Bachelor of Technology</h3>
              <p>Electronics & Telecommunication Engineering</p>
              <span>
                Bharati Vidyapeeth University College of Engineering, Pune
              </span>
            </div>
            <div className="education-score">
              <strong>9.12</strong>
              <span>CGPA / 10</span>
            </div>
          </div>

          <div className="education-secondary">
            <div>
              <span>12th · BSEB</span>
              <strong>74.60%</strong>
            </div>
            <div>
              <span>10th · BSEB</span>
              <strong>81.40%</strong>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <p className="eyebrow">06 / GET IN TOUCH</p>
          <h2>
            Let's build
            <br />
            something <span className="accent-text">great.</span>
          </h2>
          <p className="contact-description">
            I am interested in software development opportunities where I
            can learn, contribute, and grow. Let's connect!
          </p>

          <a
            className="primary-button contact-button"
            href="mailto:deepu32570@gmail.com"
          >
            Say Hello <span>↗</span>
          </a>

          <div className="contact-links">
            <a href="mailto:deepu32570@gmail.com">Email ↗</a>
            <a
              href="https://www.linkedin.com/in/deepali-kumari-3201b9294/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="/Deepali_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          D<span>.</span>K
        </a>
        <p>Designed & built by Deepali Kumari © 2026</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
