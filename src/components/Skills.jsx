import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaPython,
    FaDatabase
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiPostman, SiGithub, SiC } from "react-icons/si";

function Skills() {

    const skills = [
        {
            id: 1,
            name: "HTML",
            icon: <FaHtml5 />,
            color: "#E34F26",
            category: "Frontend"
        },
        {
            id: 2,
            name: "CSS",
            icon: <FaCss3Alt />,
            color: "#1572B6",
            category: "Frontend"
        },
        {
            id: 3,
            name: "JavaScript",
            icon: <FaJs />,
            color: "#F7DF1E",
            category: "Language"
        },
        {
            id: 4,
            name: "React",
            icon: <FaReact />,
            color: "#61DAFB",
            category: "Frontend"
        },
        {
            id: 5,
            name: "Node.js",
            icon: <FaNodeJs />,
            color: "#3C873A",
            category: "Backend"
        },
        {
            id: 6,
            name: "Express.js",
            icon: <SiExpress />,
            color: "var(--text)",
            category: "Backend"
        },
        {
            id: 7,
            name: "MongoDB",
            icon: <SiMongodb />,
            color: "#4DB33D",
            category: "Database"
        },
        {
            id: 8,
            name: "Python",
            icon: <FaPython />,
            color: "#3776AB",
            category: "Language"
        },
        {
            id: 9,
            name: "SQL",
            icon: <FaDatabase />,
            color: "#4A90E2",
            category: "Database"
        },
        {
            id: 10,
            name: "Git",
            icon: <FaGitAlt />,
            color: "#F05032",
            category: "Tools"
        },
        {
            id: 11,
            name: "Postman",
            icon: <SiPostman />,
            color: "#FF6C37",
            category: "Tools"
        },
        {
            id: 12,
            name: "GitHub",
            icon: <SiGithub />,
            color: "var(--text)",
            category: "Tools"
        },
        {
            id: 13,
            name: "C",
            icon: <SiC />,
            color: "#A8B9CC",
            category: "Language"
        }
    ];

    // Group skills by category
    const grouped = skills.reduce((acc, s) => {
        (acc[s.category] = acc[s.category] || []).push(s);
        return acc;
    }, {});

    const categories = Object.keys(grouped);

    return (
        <section className="skills reveal-section" id="skills">
            <div className="section-container">
                <div className="skills-heading">
                    <div>
                        <p className="section-tag">My toolkit</p>
                        <h2 className="section-title">Technologies I work with.</h2>
                    </div>
                    <p className="skills-intro">
                        A growing set of tools I use to turn thoughtful ideas into useful,
                        well-crafted digital experiences.
                    </p>
                </div>

                <div className="skills-grid">
                    {categories.map((cat) => (
                        <div className="skills-column" key={cat}>
                            <div className="skills-card glass">
                                <h3 className="skills-column-title">{cat}</h3>
                                <div className="skills-chips">
                                    {grouped[cat].map((skill) => (
                                        <button
                                            key={skill.id}
                                            className="skill-chip"
                                            style={{ "--skill-color": skill.color }}
                                            aria-label={skill.name}
                                        >
                                            <span className="chip-icon" style={{ color: skill.color }}>
                                                {skill.icon}
                                            </span>
                                            <span className="chip-text">{skill.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}

export default Skills;
