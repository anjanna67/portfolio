import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav>

                {/* Logo */}
                <a href="#home" className="nav-logo">
                    ANJI<span>.</span>
                </a>


                {/* Navigation */}
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <a href="#home" onClick={closeMenu}>
                        Home
                    </a>

                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>

                    <a href="#resume" onClick={closeMenu}>
                        Resume
                    </a>

                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>

                </div>


                {/* PROFILE PHOTO */}
                <button
                    className="nav-profile"
                    onClick={() => setProfileOpen(true)}
                >
                    <img
                        src="/profile.jpg"
                        alt="Anji"
                    />
                </button>


                {/* Mobile menu */}
                <button
                    className={`menu-button ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </nav>


            {/* =========================================
                PROFILE POPUP
            ========================================= */}

            {profileOpen && (

                <div
                    className="profile-overlay"
                    onClick={() => setProfileOpen(false)}
                >

                    <div
                        className="profile-popup"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close */}
                        <button
                            className="profile-close"
                            onClick={() => setProfileOpen(false)}
                        >
                            ×
                        </button>


                        {/* Profile photo */}

                        <div className="profile-large-photo">

                            <img
                                src="/profile.jpg"
                                alt="Anji"
                            />

                        </div>


                        {/* Name */}

                        <h2>
                            Anji
                            <span>✓</span>
                        </h2>


                        <p className="profile-username">
                            @anji.dev
                        </p>


                        {/* Bio */}

                        <p className="profile-bio">
                            Computer Science Student
                            <br />
                            Full-Stack Developer
                        </p>


                        {/* Skills */}

                        <div className="profile-skills">

                            <span>Java</span>
                            <span>React</span>
                            <span>Python</span>
                            <span>Node.js</span>

                        </div>


                        {/* Links */}

                        <div className="profile-links">

                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub ↗
                            </a>


                            <a
                                href="https://www.linkedin.com/in/yourusername/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn ↗
                            </a>

                        </div>


                        {/* Resume */}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="profile-resume"
                        >
                            View Resume
                        </a>

                    </div>

                </div>

            )}

        </>
    );
}

export default Navbar;