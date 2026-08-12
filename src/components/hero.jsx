function Hero() {
    return (
        <section id="home" className="hero">

            <div className="hero-content">

                <div className="hero-badge">
                    <span></span>
                    Available for opportunities
                </div>


                <p className="hero-small">
                    HELLO, I'M
                </p>


                <h1>
                    Anjanna kedam
                    <span>.</span>
                </h1>


                <h2>
                    Computer Science Student
                    <br />
                    <strong>& Full-Stack Developer</strong>
                </h2>


                <p className="hero-description">
                    I build modern web applications and practical
                    software solutions using Java, React, Python,
                    Node.js and databases.
                </p>


                <div className="hero-buttons">

                    <a
                        href="#projects"
                        className="hero-primary"
                    >
                        View My Work
                        <span>↗</span>
                    </a>


                    <a
                        href="#contact"
                        className="hero-secondary"
                    >
                        Let's Talk
                    </a>

                </div>


                <div className="hero-tech">

                    <span>Java</span>

                    <span>React</span>

                    <span>Python</span>

                    <span>Node.js</span>

                    <span>MySQL</span>

                </div>

            </div>


            {/* Right visual */}

            <div className="hero-visual">

                <div className="hero-circle"></div>

                <div className="hero-ring ring-one"></div>

                <div className="hero-ring ring-two"></div>


                <div className="hero-code-card">

                    <div className="code-header">

                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div className="code-content">

                        <p>
                            <span className="purple">
                                const
                            </span>{" "}
                            developer =
                        </p>

                        <p className="indent">
                            {"{"}
                        </p>

                        <p className="indent">
                            name:
                            <span className="green">
                                "Anjanna"
                            </span>,
                        </p>

                        <p className="indent">
                            role:
                            <span className="green">
                                "Developer"
                            </span>,
                        </p>

                        <p className="indent">
                            passion:
                            <span className="green">
                                "Building"
                            </span>
                        </p>

                        <p>
                            {"}"};
                        </p>

                    </div>

                </div>


                <div className="floating-card card-one">

                    <span>⚡</span>

                    <div>
                        <strong>
                            Problem Solver
                        </strong>

                        <small>
                            Always learning
                        </small>
                    </div>

                </div>


                <div className="floating-card card-two">

                    <span>🚀</span>

                    <div>
                        <strong>
                            Building
                        </strong>

                        <small>
                            Real projects
                        </small>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;