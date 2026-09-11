import { FaGithub } from "react-icons/fa6";

function ProjectCard({
    title,
    description,
    tech,
    github,
    image,
    accent,
    onSelect
}) {

    const handleCardKeyDown = (event) => {
        if (event.target.closest("a, button")) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect();
        }
    };

    return (
        <article
            className={`project-card project-card--${accent} glass`}
            onClick={(event) => {
                if (!event.target.closest("a, button")) onSelect();
            }}
            onKeyDown={handleCardKeyDown}
            tabIndex="0"
        >
            <div className="project-image">
                <img src={image} alt={`${title} project screenshot`} />
            </div>

            <div className="project-content">

                <h3 className="project-title">{title}</h3>
                <p className="project-description">
                    {description}
                </p>

                <div className="project-tech">
                    {
                        tech.map(item => (
                            <span
                                key={item}
                                className="tech-tag"
                            >
                                {item}
                            </span>
                        ))
                    }
                </div>

                <div className="project-links">
                    <button className="btn btn-primary" type="button" onClick={onSelect}>
                        View details
                    </button>
                    <a
                        href={github}
                        className="btn btn-secondary"
                        aria-label={`View ${title} on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub aria-hidden="true" /> Code
                    </a>
                </div>
            </div>
        </article>
    );

}

export default ProjectCard;
