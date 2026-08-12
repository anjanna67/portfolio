function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}

                <div className="footer-brand">

                    <h2>ANJANNA<span>.</span></h2>

                    <p>
                        Full-Stack Developer & Computer Science Student
                        building practical digital solutions.
                    </p>

                </div>


                {/* Social Links */}

                <div className="footer-social">

                    <a
                        href="https://github.com/anjanna67"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://github.com/anjanna67"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a href="mailto:anjikedam02@gmail.com">
                        Email
                    </a>

                </div>


                {/* Back to top */}

                <a
                    href="#home"
                    className="back-to-top"
                    aria-label="Back to top"
                >
                    ↑
                </a>

            </div>


            <div className="footer-bottom">

                <p>
                    © {currentYear} Anji. All rights reserved.
                </p>

                <span>
                    Built with React
                </span>

            </div>

        </footer>
    );
}

export default Footer;