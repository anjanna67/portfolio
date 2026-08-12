function Certifications() {

    const certifications = [
        {
            title: "Java Programming",
            issuer: "Add Your Certificate Issuer",
            year: "2026",
            link: "#"
        },
        {
            title: "Web Development",
            issuer: "Add Your Certificate Issuer",
            year: "2026",
            link: "#"
        },
        {
            title: "Machine Learning",
            issuer: "Add Your Certificate Issuer",
            year: "2026",
            link: "#"
        }
    ];

    return (
        <section
            id="certifications"
            className="certifications-section"
        >

            <div className="section-heading">

                <p>ACHIEVEMENTS</p>

                <h2>Certifications & Achievements</h2>

                <span>
                    Certifications and achievements that support
                    my technical skills.
                </span>

            </div>


            <div className="certifications-container">

                {certifications.map((certificate, index) => (

                    <div
                        className="certificate-card"
                        key={index}
                    >

                        <div className="certificate-icon">
                            {index + 1}
                        </div>

                        <div className="certificate-info">

                            <h3>
                                {certificate.title}
                            </h3>

                            <p>
                                {certificate.issuer}
                            </p>

                            <span>
                                {certificate.year}
                            </span>

                        </div>

                        <a
                            href={certificate.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View ↗
                        </a>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Certifications;