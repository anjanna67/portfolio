function Resume() {
    return (
        <section id="resume" className="resume-section">

            <div className="section-heading">
                <p>MY RESUME</p>

                <h2>Resume</h2>

                <span>
                    Take a look at my resume below.
                </span>
            </div>


            <div className="resume-viewer">

                <iframe
                    src="/RESUME.pdf"
                    title="Anji Resume"
                ></iframe>

            </div>


            <div className="resume-actions">

                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-view-btn"
                >
                    Open Full Screen ↗
                </a>

                <a
                    href="/resume.pdf"
                    download="Anji-Resume.pdf"
                    className="resume-download-btn"
                >
                    Download Resume ↓
                </a>

            </div>

        </section>
    );
}

export default Resume;