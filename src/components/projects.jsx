function Projects() {
    const projects = [
        {
            title: "PeerServe",
            description:
                "A campus peer-to-peer service exchange platform where students can offer and request skills and services.",
            technologies: ["React", "Node.js", "Express", "MySQL"],
            github: "#",
            demo: "#"
        },

        {
            title: "StudyBuddy",
            description:
                "An AI-powered learning platform that generates summaries, quizzes and useful learning resources from topics and documents.",
            technologies: ["Python", "Flask", "Gemini API", "YouTube API"],
            github: "#",
            demo: "#"
        },

        // {
        //     title: "Village Management System",
        //     description:
        //         "A digital platform for villagers to report and manage local issues such as water, electricity and school-related problems.",
        //     technologies: ["HTML", "CSS", "JavaScript", "Backend"],
        //     github: "#",
        //     demo: "#"
        // },

        // {
        //     title: "Smart Attendance System",
        //     description:
        //         "A smart attendance concept using device-based validation to reduce proxy attendance and support offline synchronization.",
        //     technologies: ["React Native", "Node.js", "Firebase"],
        //     github: "#",
        //     demo: "#"
        // }
    ];

    return (
        <section id="projects" className="projects-section">

            <div className="section-heading">
                <p>MY WORK</p>

                <h2>Featured Projects</h2>

                <span>
                    Some of the projects I have built and worked on.
                </span>
            </div>


            <div className="projects-container">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        <div className="project-number">
                            0{index + 1}
                        </div>

                        <h3>
                            {project.title}
                        </h3>

                        <p>
                            {project.description}
                        </p>


                        <div className="project-technologies">

                            {project.technologies.map(
                                (technology, techIndex) => (

                                    <span key={techIndex}>
                                        {technology}
                                    </span>

                                )
                            )}

                        </div>


                        <div className="project-links">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Demo ↗
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Projects;