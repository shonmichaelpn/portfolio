import { useEffect, useState } from "react";
import { FaBars, FaMagnifyingGlassMinus, FaMagnifyingGlassPlus, FaXmark } from "react-icons/fa6";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" }
];

function Navbar({ theme, onToggleTheme, onNavigateHome }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isResumeExpanded, setIsResumeExpanded] = useState(false);

    const openResumeFullscreen = () => {
        setIsResumeExpanded((expanded) => !expanded);
    };

    const closeResume = () => {
        setIsResumeExpanded(false);
        setIsResumeOpen(false);
    };

    useEffect(() => {
        if (!isResumeOpen) return undefined;

        const closeOnEscape = (event) => {
            if (event.key === "Escape") closeResume();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [isResumeOpen]);

    useEffect(() => {
        const updateActiveSection = () => {
            const visibleSections = navItems
                .map((item) => document.querySelector(item.href))
                .filter(Boolean);

            const current = visibleSections.reduce((active, section) => (
                section.getBoundingClientRect().top <= window.innerHeight * .45 ? section.id : active
            ), "");

            setActiveSection(current ? `#${current}` : "");
        };

        updateActiveSection();
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <header>
            <nav className="navbar" aria-label="Main navigation">
                <a href="#top" className="logo" aria-label="Shon Michael home" onClick={onNavigateHome}>
                    Shon<span>Michael</span>
                </a>

                <ul id="main-menu" className={`nav-links ${isMenuOpen ? "is-open" : ""}`}>
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={activeSection === item.href ? "is-active" : ""}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    onNavigateHome();
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
                    <button className="resume-btn" type="button" onClick={() => setIsResumeOpen(true)}>Resume</button>
                    <button
                        className="menu-toggle"
                        type="button"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="main-menu"
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        {isMenuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {isResumeOpen && (
                <div className={`resume-modal ${isResumeExpanded ? "resume-modal--expanded" : ""}`} role="dialog" aria-modal="true" aria-labelledby="resume-title">
                    <button
                        className="resume-modal-backdrop"
                        type="button"
                        aria-label="Close resume preview"
                        onClick={closeResume}
                    />
                    <section className="resume-modal-panel">
                        <header className="resume-modal-header">
                            <h2 id="resume-title">Resume</h2>
                            <div className="resume-modal-actions">
                                <button
                                    className="resume-modal-close"
                                    type="button"
                                    aria-label={isResumeExpanded ? "Return to regular resume view" : "Expand resume view"}
                                    onClick={openResumeFullscreen}
                                >
                                    {isResumeExpanded ? <FaMagnifyingGlassMinus /> : <FaMagnifyingGlassPlus />}
                                </button>
                                <button
                                    className="resume-modal-close"
                                    type="button"
                                    aria-label="Close resume preview"
                                    onClick={closeResume}
                                >
                                    <FaXmark />
                                </button>
                            </div>
                        </header>
                        <iframe
                            className="resume-preview"
                            src="/Shon_CV.pdf#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                            title="Shon Michael resume"
                        />
                        <footer className="resume-modal-footer">
                            <a className="btn btn-primary" href="/Shon_CV.pdf" download="Shon_Michael_Resume.pdf">Download resume</a>
                        </footer>
                    </section>
                </div>
            )}
        </header>
    );
}

export default Navbar;
