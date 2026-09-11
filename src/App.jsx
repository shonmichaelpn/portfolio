import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme") || "dark";
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    let frameId = null;

    const updateScrollProgress = () => {
      frameId = null;
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    const handleScroll = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (selectedProject) window.scrollTo({ top: 0, behavior: "auto" });
    const sections = document.querySelectorAll(".reveal-section");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [selectedProject]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const navigateHome = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const navigateToProjects = () => {
    setSelectedProject(null);
    window.requestAnimationFrame(() => {
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <div id="top">
      <div className="ambient-glow" aria-hidden="true">
        <span className="blob-3"></span>
      </div>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigateHome={navigateHome}
      />
      <main>
        {selectedProject ? (
          <ProjectDetails project={selectedProject} onBack={navigateToProjects} />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects onSelectProject={setSelectedProject} />
            <Education />
            <Certificates />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <div
        className={`scroll-progress ${scrollProgress >= 1 ? "is-complete" : ""}`}
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={Math.round(scrollProgress * 100)}
        style={{ "--scroll-progress": `${scrollProgress * 100}%` }}
      >
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default App;
