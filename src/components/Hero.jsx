function Hero() {
    return (
        <section className="hero reveal-section">
            <div className="hero-content">
                <p className="hero-tag">
                    <span className="hero-tag-dot"></span>
                    Open to opportunities {"\u00b7"} +918301984578
                </p>
                <h1 className="hero-title">
                    <span className="hero-name-line">Shon</span>
                    <span className="hero-name-line">Michael</span>
                    <span className="hero-name-line">P&nbsp;N</span>
                </h1>
                <h2 className="hero-subtitle">Building practical software.</h2>
                <p className="hero-description">
                    I build full-stack web applications with a focus on thoughtful problem solving and real-world impact.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="/Shon_CV.pdf" download="Shon_Michael_Resume.pdf" className="btn btn-secondary">Download Resume</a>
                </div>
            </div>
            <div className="hero-image">
                <div className="profile-ring glass">
                    <div className="profile-image">
                        <img src="/profile.png" alt="Shon Michael" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
