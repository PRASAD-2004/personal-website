import React from "react";

export default function Portfolio() {
    const projects = [
        {
            title: "HR Analytics Dashboard",
            duration: "Feb 2024 - March 2024",
            description: "Developed an HR Analytics Dashboard using Tableau, showcasing key insights into employee performance, attrition, and demographic trends to inform strategic HR decisions. The dashboard enables data-driven decision-making by visualizing critical HR metrics.",
            tools: ["Tableau"],
            link: "https://public.tableau.com/app/profile/bala.venkata.murali.krishna.prasad.m/viz/AcademicprojectHRANALYTICS/HRANALYTICSDASHBOARD"
        },
        {
            title: "GoFood Web Application",
            duration: "Sep 2023 - Nov 2023",
            description: "Developed the GoFood web app using React.js, enabling users to browse, select, and order food with features like categorized selection, cart management, and order history. Utilized HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB for full-stack development, with secure user authentication.",
            tools: ["React.js", "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
            link: "https://github.com/PRASAD-2004/GoFood"
        }
    ];

    return (
        <div className="portfolio-section">
            <h1 className="portfolio-heading">Portfolio</h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <p><strong>Duration:</strong> {project.duration}</p>
                        <p>{project.description}</p>
                        <p><strong>Tools Used:</strong> {project.tools.join(", ")}</p>
                        <p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
