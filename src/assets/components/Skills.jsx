import React from "react";

export default function Skills() {
    const webDevSkills = [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "React.js", 
        "Bootstrap"
    ];

    const programmingSkills = [
        "Python", 
        "Java", 
        "C", 
        "SQL"
    ];

    const biToolSkill = [
        "Tableau"
    ];

    const personalSkills = [
        "Problem Solving", 
        "Time Management", 
        "Creativity", 
        "Communication"
    ];

    return (
        <div className="skills-section">
            <h1 className="skills-heading">Skills</h1>
            <div className="skills-container">
                <div className="technical-skills">
                    <div className="skills-list">
                        <h2>Web Development Skills</h2>
                        <ul>
                            {webDevSkills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-list">
                        <h2>Programming Skills</h2>
                        <ul>
                            {programmingSkills.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-list">
                        <h2>BI Tool Skill</h2>
                        <ul>
                            {biToolSkill.map(skill => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="skills-list personal-skills">
                    <h2>Personal Skills</h2>
                    <ul>
                        {personalSkills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
