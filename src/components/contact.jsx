function Contact() {
    return (
        <section id="contact" className="contact-section">

            <div className="section-heading">
                <p>GET IN TOUCH</p>

                <h2>Let's Work Together</h2>

                <span>
                    Have a project, opportunity or idea?
                    I'd love to hear from you.
                </span>
            </div>


            <div className="contact-container">

                {/* Contact Information */}

                <div className="contact-info">

                    <h3>
                        Let's talk.
                    </h3>

                    <p>
                        I'm open to internship opportunities,
                        projects and collaborations. Feel free
                        to reach out.
                    </p>


                    <div className="contact-details">

                        <a href="mailto:your-email@gmail.com">
                            <span className="contact-icon">
                                ✉
                            </span>

                            <div>
                                <small>Email</small>
                                <strong>
                                    anjikedam02@gmail.com
                                </strong>
                            </div>
                        </a>


                        <a
                            href="https://github.com/anjanna67"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                ◉
                            </span>

                            <div>
                                <small>GitHub</small>
                                <strong>
                                    github.com/anjanna67
                                </strong>
                            </div>
                        </a>


                        <a
                            href="https://www.linkedin.com/in/yourusername/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="contact-icon">
                                in
                            </span>

                            <div>
                                <small>LinkedIn</small>
                                <strong>
                                    linkedin.com/in/yourusername
                                </strong>
                            </div>
                        </a>

                    </div>

                </div>


                {/* Contact Form */}

                <form
                    className="contact-form"
                    onSubmit={(e) => e.preventDefault()}
                >

                    <div className="input-group">

                        <label>
                            Your Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                        />

                    </div>


                    <div className="input-group">

                        <label>
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                        />

                    </div>


                    <div className="input-group">

                        <label>
                            Message
                        </label>

                        <textarea
                            rows="5"
                            placeholder="Tell me about your project..."
                            required
                        ></textarea>

                    </div>


                    <button type="submit">
                        Send Message →
                    </button>

                </form>

            </div>

        </section>
    );
}

export default Contact;