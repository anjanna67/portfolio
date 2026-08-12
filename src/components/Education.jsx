function Education() {
    return (
        <section id="education" className="education-section">

            <div className="section-heading">
                <p>MY JOURNEY</p>

                <h2>Education</h2>

                <span>
                    My academic background and learning journey.
                </span>
            </div>


            <div className="timeline">

                {/* B.Tech */}

                <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <span className="timeline-year">
                            2024 - Present
                        </span>

                        <h3>
                            Bachelor of Technology
                        </h3>

                        <h4>
                            Computer Science & Engineering
                        </h4>

                        <p>
                            Currently pursuing B.Tech in Computer Science
                            Engineering, focusing on software development,
                            data structures, web technologies and
                            problem solving.
                        </p>

                    </div>

                </div>


                {/* Diploma */}

                <div className="timeline-item">

                    <div className="timeline-dot"></div>

                    <div className="timeline-content">

                        <span className="timeline-year">
                            Diploma
                        </span>

                        <h3>
                            Diploma in Mechanical Engineering
                        </h3>

                        <h4>
                            SSGPT, Zahirabad
                        </h4>

                        <p>
                            Completed Diploma in Mechanical Engineering
                            and developed an interest in programming and
                            computer science, leading me toward software
                            development.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Education;