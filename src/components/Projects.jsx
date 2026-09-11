import ProjectCard from "./ProjectCard";

const projects = [
        {
            id: 1,
            title: "CityReport",
            description:
                "A Smart City Infrastructure Reporting System that enables citizens to report public infrastructure issues while helping authorities efficiently manage complaints through role-based dashboards.",

            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Git",
                "GitHub",
                "Postman"
            ],

            github: "https://github.com/shonmichaelpn/CityReport-Infrastructure_Reporting_System",
            image: "./CityReport/Cityreport-welcome-preview.png",
            gallery: [
                "./CityReport/Cityreport-welcome-preview.png",
                "./CityReport/Cityreport-login-preview.png",
                "./CityReport/Cityreport-user-dashboard-preview.png",
                "./CityReport/Cityreport-reporting-form-preview.png",
                "./CityReport/Cityreport-authority-dashboard-preview.png",
                "./CityReport/Cityreport-authority-map(loc)-view-preview.png",
                "./CityReport/Cityreport-admin-dashboard-preview.png",
            ],
            accent: "orange",

            problem: {
                title: "Infrastructure issues are easy to report, but harder to manage.",
                description:
                    "Citizens often lack a simple way to report public infrastructure issues, while authorities need an efficient way to organize, track and resolve complaints. CityReport addresses this gap by bringing reporting and complaint management into a single platform."
            },

            solution: {
                title: "A complete digital workflow for civic issue reporting.",
                description:
                    "CityReport allows citizens to submit infrastructure complaints and track their progress, while authorities can manage, prioritize and update complaints through dedicated dashboards. Role-based access keeps each part of the system organized and secure."
            },

            workflow: [
                "Citizen submits an infrastructure complaint",
                "Complaint details are stored and categorized",
                "Admin reviews and manages the complaint",
                "Authority handles the reported issue",
                "Complaint status is updated throughout the process",
                "Citizen tracks the progress until resolution"
            ],

            roles: [
                {
                    title: "Citizen",
                    description:
                        "Report infrastructure issues, provide complaint details and track the progress of submitted reports."
                },
                {
                    title: "Authority",
                    description:
                        "View and manage assigned complaints, update their status and track issues through the resolution process."
                },
                {
                    title: "Admin",
                    description:
                        "Manage users and complaints, oversee platform activity and maintain the overall reporting workflow."
                }
            ],

            contribution: [
                "Full-stack development",
                "Frontend development",
                "Backend and REST API development",
                "MongoDB database design and integration",
                "JWT authentication and role-based access",
                "Testing and debugging"
            ]
        },

        {
            id: 2,
            title: "BridgeAid",

            description:
                "A donation management platform connecting donors with verified organizations through a secure and transparent system.",

            tech: [
                "Node.js",
                "Express",
                "MongoDB",
                "Git",
                "GitHub",
            ],

            github: "https://github.com/shonmichaelpn/BridgeAid",
            image: "./BridgeAid/Bridgeaid-Welcome-preview.png",
            gallery: [
                "./BridgeAid/Bridgeaid-Welcome-preview.png",
                "./BridgeAid/Bridgeaid-User-home-preview.png",
                "./BridgeAid/Bridgeaid-Organization-items-avail-preview.png",
                "./BridgeAid/Bridgeaid-Admin-user-management-preview.png"
            ],
            accent: "violet",

            problem: {
                title: "Donations aren't always the problem. Finding the right need is.",
                description:
                    "Traditional donation efforts can lead to mismatched or excess items while organizations struggle to communicate their specific needs. BridgeAid creates a structured connection between donors and verified organizations."
            },

            solution: {
                title: "A structured path from need to delivery.",
                description:
                    "Verified organizations can publish specific item requirements, donors can find matching needs and pledge items, and the donation can be tracked through acceptance and delivery."
            },

            workflow: [
                "Organization posts a request",
                "Admin verifies the organization",
                "Donor finds a matching need",
                "Donor pledges an item",
                "Organization reviews and accepts",
                "Donation is marked as delivered"
            ],

            roles: [
                {
                    title: "Donor",
                    description:
                        "Browse verified requests, pledge available items and track donation history."
                },
                {
                    title: "Organization",
                    description:
                        "Register for verification, post specific needs, review pledges and confirm deliveries."
                },
                {
                    title: "Admin",
                    description:
                        "Verify organizations, monitor activity and manage users and platform integrity."
                }
            ],

            contribution: [
                "Backend development",
                "Frontend development",
                "Testing",
                "Documentation"
            ]
        }
];

function Projects({ onSelectProject }) {

    return (
        <section className="projects reveal-section" id="projects">
            <div className="section-container">

                <div className="projects-heading">
                    <div>
                        <p className="section-tag">Selected work</p>
                        <h2 className="section-title">Projects I&apos;ve built.</h2>
                    </div>
                    <p>From practical platforms to meaningful digital experiences, here are a few things I&apos;m proud to have made.</p>
                </div>

                <div className="projects-grid">

                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            onSelect={() => onSelectProject(project)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
