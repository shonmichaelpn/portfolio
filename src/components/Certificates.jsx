import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaCloud, FaEye, FaMicrochip, FaXmark } from "react-icons/fa6";

function Certificates() {
    const [activeCertificate, setActiveCertificate] = useState(null);

    useEffect(() => {
        if (!activeCertificate) return undefined;

        const closeOnEscape = (event) => {
            if (event.key === "Escape") setActiveCertificate(null);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [activeCertificate]);

    const certificates = [
        {
            title: "Cloud Application Developer",
            issuer: "Skill India \u00b7 Don Bosco Tech",
            date: "September 2024",
            detail: "NSQF Level 5 \u00b7 Grade A+",
            icon: FaCloud,
            file: "/Cloud_Application_Developer_NSQF.pdf"
        },
        {
            title: "Foundations of Cloud, IoT, Edge ML",
            issuer: "Certificate of completion",
            date: "Completed",
            detail: "Cloud \u00b7 IoT \u00b7 Edge computing \u00b7 ML",
            icon: FaMicrochip,
            file: "/Foundation_of_Cloud_IoT_Edge_ML.pdf"
        }
    ];

    return (
        <section className="certificates reveal-section" id="certificates">
            <div className="section-container">
                <div className="certificates-heading">
                    <div>
                        <p className="section-tag">Credentials</p>
                        <h2 className="section-title">Certificates & learning.</h2>
                    </div>
                    <p>A focused selection of credentials supporting my work in cloud development and career readiness.</p>
                </div>

                <div className="certificates-grid">
                    {certificates.map(({ title, issuer, date, detail, file, icon: Icon }) => (
                        <article className="certificate-card glass" key={title}>
                            <span className="certificate-icon" aria-hidden="true"><Icon /></span>
                            <p>{issuer}</p>
                            <h3>{title}</h3>
                            <span className="certificate-detail">{detail}</span>
                            <span className="certificate-date">{date}</span>
                            {file && (
                                <button className="certificate-view-btn" type="button" onClick={() => setActiveCertificate({ title, file })}>
                                    <FaEye aria-hidden="true" /> View Certificate
                                </button>
                            )}
                        </article>
                    ))}
                </div>
            </div>

            {activeCertificate && createPortal(
                <div className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-title">
                    <button className="certificate-modal-backdrop" type="button" aria-label="Close certificate" onClick={() => setActiveCertificate(null)} />
                    <section className="certificate-modal-panel">
                        <header className="certificate-modal-header">
                            <h2 id="certificate-title">{activeCertificate.title}</h2>
                            <button className="certificate-modal-close" type="button" aria-label="Close certificate" onClick={() => setActiveCertificate(null)}>
                                <FaXmark />
                            </button>
                        </header>
                        <iframe className="certificate-preview" src={`${activeCertificate.file}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`} title={activeCertificate.title} />
                        <footer className="certificate-modal-footer">
                            <a className="btn btn-primary" href={activeCertificate.file} download>Download certificate</a>
                        </footer>
                    </section>
                </div>,
                document.body
            )}
        </section>
    );
}

export default Certificates;
