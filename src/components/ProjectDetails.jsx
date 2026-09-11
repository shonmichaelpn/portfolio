import { useEffect, useState } from "react";
import {
    FaArrowLeft,
    FaArrowUpRightFromSquare,
    FaCode,
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
    FaReact,
    FaServer,
    FaShieldHalved,
    FaToolbox
} from "react-icons/fa6";

const techIcons = {
    React: FaReact,
    "Node.js": FaNodeJs,
    Express: FaServer,
    MongoDB: FaDatabase,
    JWT: FaShieldHalved,
    Git: FaGitAlt,
    GitHub: FaGithub,
    Postman: FaToolbox,
    JavaScript: FaCode,
    "Next.js": FaReact,
    "Mongo DB": FaDatabase,
    "REST API": FaServer
};

function ProjectDetails({ project, onBack }) {
    const slides = project.gallery && project.gallery.length > 0
        ? project.gallery
        : [project.image].filter(Boolean);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (slides.length <= 1) return undefined;

        const intervalId = window.setInterval(() => {
            setActiveSlide((currentIndex) => (currentIndex + 1) % slides.length);
        }, 3000);

        return () => window.clearInterval(intervalId);
    }, [slides]);

    return (
        <section
            className={`project-details project-details--${project.accent} reveal-section is-visible`}
        >
            <div className="section-container">

                <button
                    className="project-back btn btn-secondary"
                    type="button"
                    onClick={onBack}
                >
                    <FaArrowLeft aria-hidden="true" />
                    Back to projects
                </button>

                {/* HERO */}
                <div className="project-details-hero">

                    <div className="project-details-copy">

                        <p className="section-tag">
                            Project case study
                        </p>

                        <h1>{project.title}</h1>

                        <p className="project-details-intro">
                            {project.description}
                        </p>

                        <div className="project-details-actions">
                            <a
                                className="btn btn-primary"
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub aria-hidden="true" />
                                View source code
                            </a>

                            {project.demo && (
                                <a
                                    className="btn btn-secondary"
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaArrowUpRightFromSquare aria-hidden="true" />
                                    Live demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="project-details-image glass project-details-slideshow" aria-live="polite">
                        <div
                            className="project-details-slide-track"
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {slides.map((slide, index) => (
                                <img
                                    key={`${slide}-${index}`}
                                    src={slide}
                                    alt={`${project.title} project screenshot ${index + 1}`}
                                />
                            ))}
                        </div>

                        {slides.length > 1 && (
                            <div className="project-details-dots" aria-label="Project screenshots">
                                {slides.map((slide, index) => (
                                    <button
                                        key={`${slide}-dot-${index}`}
                                        type="button"
                                        className={`project-details-dot ${index === activeSlide ? "is-active" : ""}`}
                                        aria-label={`Show slide ${index + 1}`}
                                        onClick={() => setActiveSlide(index)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>


                {/* PROBLEM + SOLUTION */}
                {project.problem && project.solution && (
                    <div className="project-details-grid">

                        <article className="project-details-panel glass">
                            <p className="section-tag">
                                The problem
                            </p>

                            <h2>
                                {project.problem.title}
                            </h2>

                            <p>
                                {project.problem.description}
                            </p>
                        </article>

                        <article className="project-details-panel glass">
                            <p className="section-tag">
                                The solution
                            </p>

                            <h2>
                                {project.solution.title}
                            </h2>

                            <p>
                                {project.solution.description}
                            </p>
                        </article>

                    </div>
                )}


                {/* WORKFLOW */}
                {project.workflow && (
                    <div className="project-details-section">

                        <div className="project-details-section-heading">
                            <p className="section-tag">
                                How it works
                            </p>

                            <h2>
                                From request to delivery.
                            </h2>
                        </div>

                        <div className="project-workflow">

                            {project.workflow.map((step, index) => (
                                <div
                                    className="workflow-step glass"
                                    key={step}
                                >
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <p>{step}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                )}


                {/* ROLES */}
                {project.roles && (
                    <div className="project-details-section">

                        <div className="project-details-section-heading">
                            <p className="section-tag">
                                System design
                            </p>

                            <h2>
                                Built around three roles.
                            </h2>
                        </div>

                        <div className="project-roles">

                            {project.roles.map((role) => (
                                <article
                                    className="project-role glass"
                                    key={role.title}
                                >
                                    <p className="role-number">
                                        {role.title}
                                    </p>

                                    <p>
                                        {role.description}
                                    </p>
                                </article>
                            ))}

                        </div>
                    </div>
                )}


                {/* TECHNOLOGY + CONTRIBUTION */}
                <div className="project-details-grid">

                    <article className="project-details-panel glass">
                        <p className="section-tag">
                            Technology
                        </p>

                        <h2>
                            Tools behind the work.
                        </h2>

                        <div className="project-tech project-details-tech">
                            {project.tech.map((item) => {
                                const Icon = techIcons[item] || FaCode;

                                return (
                                    <span
                                        className="tech-tag"
                                        key={item}
                                    >
                                        <Icon aria-hidden="true" />
                                        {item}
                                    </span>
                                );
                            })}
                        </div>
                    </article>


                    {project.contribution && (
                        <article className="project-details-panel glass">

                            <p className="section-tag">
                                My contribution
                            </p>

                            <h2>
                                What I worked on.
                            </h2>

                            <ul className="project-contribution">
                                {project.contribution.map((item) => (
                                    <li key={item}>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                        </article>
                    )}

                </div>

            </div>
        </section>
    );
}

export default ProjectDetails;