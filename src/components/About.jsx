import { FaBriefcase, FaGraduationCap, FaLocationDot, FaUser } from "react-icons/fa6";

function About() {
    const details = [
        { label: "Name", value: "Shon Michael P N", icon: <FaUser /> },
        { label: "Highest qualification", value: "Master of Computer Applications", icon: <FaGraduationCap /> },
        { label: "Based in", value: "Kerala, India", icon: <FaLocationDot /> },
        { label: "Open to", value: "Software developer roles", icon: <FaBriefcase /> }
    ];

    return (
        <section className="about reveal-section" id="about">
            <div className="section-container about-layout">
                <div className="about-content glass">

                    <p className="section-tag">About me</p>

                    <h2 className="section-title">
                        Passionate about building<br />
                        meaningful software.
                    </h2>

                    <p className="about-description">
                        I recently completed my Master of Computer Applications (MCA) and 
                        enjoy building full-stack web applications that solve real-world problems. 
                         I'm passionate about writing clean, scalable code and 
                         continuously improving my software development skills.
                    </p>

                    <p className="about-description">
                        I'm currently expanding my expertise in 
                        React, Node.js, Express, MongoDB, Python, SQL, and 
                        data structures & algorithms through hands-on projects and continuous learning.
                    </p>

                    <div className="about-focus">
                        <span>Current focus</span>
                        <p>Full-stack development <i></i> Problem solving</p>
                    </div>

                    <div className="currently-learning" aria-label="Currently learning">
                        <span>Currently learning</span>
                        <p><b>TypeScript</b><b>Docker</b></p>
                    </div>
                </div>

                <aside className="about-card glass" aria-label="Personal details">
                    <div className="about-card-heading">
                        <span className="availability-dot"></span>
                        <p>Available for opportunities</p>
                    </div>

                    <div className="about-details">
                        {details.map((detail) => (
                            <div className="info-item" key={detail.label}>
                                <span className="info-icon" aria-hidden="true">{detail.icon}</span>
                                <div>
                                    <span>{detail.label}</span>
                                    <p>{detail.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>

        </section>
    );
}

export default About;
