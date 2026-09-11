import { FaEnvelope, FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Contact() {
    const contactLinks = [
        { label: "Email", detail: "shonmichaelpn@gmail.com", href: "mailto:shonmichaelpn@gmail.com", icon: <FaEnvelope />, className: "email" },
        { label: "GitHub", detail: "github.com/shonmichaelpn", href: "https://github.com/shonmichaelpn", icon: <FaGithub />, className: "github", external: true },
        { label: "LinkedIn", detail: "linkedin.com/in/shohn-michael-pn", href: "https://linkedin.com/in/shohn-michael-pn", icon: <FaLinkedin />, className: "linkedin", external: true },
        { label: "Resume", detail: "Download PDF", href: "/Shon_CV.pdf", icon: <FaFileAlt />, className: "resume", download: true }
    ];

    return (
        <section className="contact reveal-section" id="contact">
            <div className="section-container">
                <div className="contact-heading">
                    <p className="section-tag">Get in touch</p>
                    <h2 className="section-title">Let&apos;s work together.</h2>
                    <p className="contact-description">I&apos;m currently looking for software development opportunities. Feel free to reach out {"\u2014"} I&apos;d love to connect.</p>
                </div>

                <div className="contact-grid">
                    {contactLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            download={link.download}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noopener noreferrer" : undefined}
                            className={`contact-card glass ${link.className}`}
                        >
                            <span className="contact-icon" aria-hidden="true">{link.icon}</span>
                            <div><h3>{link.label}</h3><span>{link.detail}</span></div>
                            <FaArrowUpRightFromSquare className="contact-arrow" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
