import { kidsProjects, mainProjects } from '../config/projects';
import { useFadeIn } from '../hooks/useFadeIn';

const statusLabels = {
  live: 'Live',
  building: 'Building',
  planning: 'Planning',
  archive: 'Archive',
};

function ProjectCard({ project, variant = 'main' }) {
  const label = statusLabels[project.status] ?? project.status;

  return (
    <article className={`project-card status-${project.status} ${variant === 'kids' ? 'is-kids' : ''}`}>
      {project.image && (
        <div className="project-card-media">
          <img src={project.image} alt="" className="project-card-image" />
        </div>
      )}

      <p className="project-card-status">
        <span className="project-card-status-dot" aria-hidden="true">●</span>
        {label}
      </p>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-description">{project.description}</p>

      <div className="project-card-story">
        <p className="project-card-story-label">Why we built this</p>
        <p className="project-card-story-text">"{project.story}"</p>
        {project.storyKo && (
          <p className="project-card-story-ko ko-serif">{project.storyKo}</p>
        )}
      </div>

      <ul className="project-card-tags" aria-label="Tags">
        {project.tags.slice(0, 4).map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.disabled ? (
        <span className="project-card-button is-disabled" aria-disabled="true">
          {project.button}
        </span>
      ) : (
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="project-card-button"
        >
          {project.button}
        </a>
      )}
    </article>
  );
}

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="section-inner fade-in">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">
          A collection of thoughtful tools,
          <br />
          built one at a time.
        </h2>

        <div className="project-grid">
          {mainProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <section className="kids-projects" aria-labelledby="kids-projects-title">
          <div className="kids-projects-heading">
            <p className="kids-projects-eyebrow">For young explorers</p>
            <h3 id="kids-projects-title">Lumloom Kids</h3>
            <p>호기심을 발견하고, 스스로 해내는 즐거움을 모으는 아이들의 작은 도구입니다.</p>
          </div>

          <div className="project-grid kids-project-grid">
            {kidsProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="kids" />
            ))}
          </div>
        </section>

        <div className="projects-closing">
          <p>
            Every project begins
            <br />
            with the same question.
          </p>
          <p className="projects-closing-question">
            Can this make someone's day
            <br />
            just a little better?
          </p>
        </div>
      </div>
    </section>
  );
}
