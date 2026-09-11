function Education(){

    const education = [
        {
            id:1,
            degree:"Master of Computer Applications",
            institute:"APJ Abdul Kalam Technological University",
            duration:"2024 \u2014 2026",
            status:"Completed",
            level:"Postgraduate"
        },
        {
            id:2,
            degree:"Bachelor of Science in Mathematics",
            institute:"Mahatma Gandhi University",
            duration:"2021 \u2014 2024",
            status:"Completed",
            level:"Undergraduate"
        },
        {
            id:3,
            degree:"Higher Secondary",
            institute:"Computer Science",
            duration:"2019 \u2014 2021",
            status:"Completed",
            level:"Foundation"
        }
    ];

    return(
        <section className="education reveal-section" id="education">
            <div className="section-container">
                <div className="education-heading">
                    <div>
                        <p className="section-tag">Education</p>
                        <h2 className="section-title">Academic journey.</h2>
                    </div>
                    <p>Building a strong foundation in computer science and problem solving.</p>
                </div>
                <div className="timeline">
                    {
                        education.map(item=>(
                            <div
                                key={item.id}
                                className="timeline-item"
                            >
                                <div className="timeline-marker">
                                    <div className="timeline-dot"></div>
                                </div>
                                <div className="timeline-content glass">
                                    <div className="timeline-meta">
                                        <span className="education-level">{item.level}</span>
                                    </div>
                                    <h3>{item.degree}</h3>
                                    <p>{item.institute}</p>
                                    <span className="education-duration">{item.duration}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Education;
