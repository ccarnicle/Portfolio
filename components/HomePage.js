import Image from "next/image";
import {
  awards,
  bioParagraphs,
  experience,
  projects,
  site,
  technologies,
} from "../content/site";

export default function HomePage() {
  return (
    <>
      <section className="section about" aria-labelledby="about-heading">
        <div className="about-grid">
          <div className="about-text">
            <h2 id="about-heading" className="visually-hidden">
              About
            </h2>
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="about-photo">
            <Image
              className="portrait-photo"
              src="/portrait.jpg"
              alt={site.name}
              width={800}
              height={800}
              priority
              sizes="(max-width: 699px) 280px, 360px"
            />
          </div>
        </div>
      </section>

      <hr className="hairline" />

      <section id="projects" className="section work" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <div className="work-grid">
          {projects.map((project) => (
            <article key={project.title} className="work-item">
              <div className={`work-media ${project.imageLayout}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={project.width || 800}
                height={project.height || 500}
                sizes={
                  project.imageLayout === "portrait"
                    ? "280px"
                    : "(max-width: 699px) 100vw, 50vw"
                }
              />
              </div>
              <p className="work-caption">
                <strong>{project.title}</strong> — {project.caption}
              </p>
              {project.links.length > 0 && (
                <ul className="work-links">
                  {project.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <hr className="hairline" />

      <section
        id="experience"
        className="section experience"
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading">Experience</h2>
        {experience.map((role) => (
          <div key={role.company} className="experience-role">
            <h3>
              {role.company} — {role.role}
            </h3>
            <p className="experience-meta">
              {[role.location, role.dates].filter(Boolean).join(". ")}
            </p>
            <ul>
              {role.bullets.map((bullet) => (
                <li key={bullet.slice(0, 50)}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <hr className="hairline" />

      <div className="two-col section">
        <section aria-labelledby="technologies-heading">
          <h2 id="technologies-heading">Technologies</h2>
          <ul className="list-plain">
            {technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="awards-heading">
          <h2 id="awards-heading">Awards</h2>
          <ul className="list-plain">
            {awards.map((item) => (
              <li key={item.id}>
                {item.parts.map((part, index) =>
                  typeof part === "string" ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <a
                      key={part.href}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {part.label}
                    </a>
                  )
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <hr className="hairline" />

      <section
        id="contact"
        className="section contact contact-centered"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading">Contact</h2>
        <ul className="contact-list">
          <li>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <a href={site.linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
      </section>
    </>
  );
}
