import { projects } from '../config/projects';
import { useFadeIn } from '../hooks/useFadeIn';

function ProjectCard({ project }) {
  const isComingSoon = project.status === 'coming-soon';

  return (
    <div className={`project-card ${isComingSoon ? 'is-coming-soon' : ''}`}>
      {project.image && (
        <img src={project.image} alt="" className="project-card-image" />
      )}
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>
      {project.detail && <p className="project-card-detail">{project.detail}</p>}

      {isComingSoon ? (
        <span className="project-card-badge">Coming Soon</span>
      ) : (
        <a href={project.url} className="project-card-link">Visit</a>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="section-inner fade-in">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Small tools, woven with care</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
