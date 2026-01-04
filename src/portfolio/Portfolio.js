import React, { useState, useEffect } from "react";
import Marquee from "../components/Marquee";
import Loading from "../components/Loading";
import axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "/Pictures/java.png",
  "/Pictures/react.png",
  "/Pictures/Net.svg",
  "/Pictures/pgsql.png",
  "/Pictures/js.png",
  "/Pictures/css.png",
  "/Pictures/html.png",
  "/Pictures/c.png",
  "/Pictures/cpp.png",
  "/Pictures/oracle.png",
  "/Pictures/mysql.png",
  "/Pictures/gitlab.svg",
];

function Portfolio() {
  const [pageLoading, setPageLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let specialDays = {};
  
    try {
      specialDays = process.env.REACT_APP_SPECIAL_DAYS_JSON
        ? JSON.parse(process.env.REACT_APP_SPECIAL_DAYS_JSON)
        : {};
    } catch (e) {
      console.error("Invalid SPECIAL_DAYS JSON", e);
    }
  
    const today = new Date().toISOString().split("T")[0];
    const isSpecialDay = Object.values(specialDays).includes(today);
  
    const delay = isSpecialDay ? 3500 : 1200;
  
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, delay);
  
    return () => clearTimeout(timer);
  }, []);
  

  if (pageLoading) return <Loading />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      Swal.fire("All fields are required");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(
        `${API_BASE_URL}/PortfolioEnquery/PostPortfolioEnquiry`,
        {
          name: name.substring(0, 36),
          email: email.substring(0, 50),
          message: message.substring(0, 1000),
        }
      );

      setIsSubmitting(false);

      if (res.data?.status === 1) {
        await Swal.fire({
          icon: "success",
          title: "Message Sent 🐍",
          background: "#0b1c14",
          color: "#e6f3ec",
          confirmButtonColor: "#198754",
        });

        setName("");
        setEmail("");
        setMessage("");
      } else {
        Swal.fire("Submission failed");
      }
    } catch {
      setIsSubmitting(false);
      Swal.fire("Server error");
    }
  };

  return (
    <>

      {/* ABOUT */}
    <section className="py-5 about-me">
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* PROFILE IMAGE */}
          <div className="col-md-5 text-center">
            <img
              src="/Pictures/profilepic.jpg"
              alt="Profile"
              className="about-image img-fluid shadow"
            />
          </div>

          {/* ABOUT TEXT */}
          <div className="col-md-7">
            <h2 className="section-title">About Me</h2>
            <p
              style={{
                color: "#dce4e1", 
                fontFamily: "'Ayuthaya', serif", 
                lineHeight: "1.8",
              }}
            >
I am a Full Stack Developer specializing in building scalable, clean, and maintainable web applications using React, .NET Core, Python, Java, JavaScript, and PHP. I have strong experience designing microservices-based architectures and working with Kafka for event-driven systems, along with hands-on expertise in Linux environments and a passion for crafting efficient, robust solutions for modern web development.
            </p>

          </div>

        </div>
      </div>
    </section>


      {/* MARQUEE */}
      <section className="py-3 bg-light">
        <Marquee images={images} />
      </section>
      <div className="border rounded text-center py-3 fw-semibold skill-card">
      {/* SKILLS */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Skills & Tools</h2>
          <div className="row g-3">
            {[
              "React.js",
              "JavaScript",
              ".NET (C#)",
              "PostgreSQL",
              "HTML & CSS",
              "Git & GitHub",
              "Java",
              "Python",
            ].map((skill, i) => (
              <div className="col-6 col-md-4 col-lg-3" key={i}>
                <div className="border rounded text-center py-3 fw-semibold">
                  {skill}
                </div>
              </div>
               ))}
                  </div>
                </div>
              </section>
        </div>
        {/* EXPERIENCE CAROUSEL */}
<section className="py-5 slytherin-carousel">
  <div className="container">
    <h2 className="text-center mb-4 section-title">Experience</h2>

    <div
      id="experienceCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {[
          {
            title: "Associate Software Engineer",
            company: "Idea Infinity IT Solution Pvt Ltd",
            duration: "Jul 2024 - Present",
            desc: "Building responsive React applications with modern UI/UX.",
          },
          {
            title: "Full Stack Intern",
            company: "ProGlobal Software Pvt Ltd",
            duration: "Aug 2023 - Dec 2023",
            desc: "Developed full stack web apps using .NET, React, and PostgreSQL.",
          },
        ].map((exp, i) => (
          <div
            key={i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <div className="d-flex flex-column justify-content-center align-items-center py-4">
              <h5 style={{ color: "#9af0c9" }}>{exp.title}</h5>
              <h6 style={{   color: "#8b4513", 
  fontFamily: "'Ayuthaya', serif" }}>{exp.company}</h6>
              <p className="text-light">{exp.duration}</p>
              <p
                className="text-center"
                style={{ maxWidth: "600px", color: "#dce4e1" }}
              >
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#experienceCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#experienceCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</section>

     {/* PROJECTS */}
      <section className="py-5">
        <div className="slytherin-projects">
          <div className="container">
            <h2 className="text-center mb-4 section-title">Projects</h2>

            <div className="row g-4">
              {[
                {
                  title: "Smart Metering Solution (CESCOM)",
                  desc: "Worked on the development and implementation of a Smart Metering Solution for Chamundeshwari Electricity Supply Corporation (CESCOM), part of a government initiative to modernize electricity distribution through Advanced Metering Infrastructure (AMI). The project involved creating web interfaces and backend components for real-time data collection, monitoring, and management of smart electricity meters, enabling automated meter reading, accurate billing, and improved energy analytics.",
                  // link: ""
                },

                {
                  title: "WebScraper",
                  desc: "Developed a Python-based web scraping application designed to extract and organize hyperlinks from websites using a user-provided URL. The application leverages the BeautifulSoup (BS4) library to parse HTML content efficiently and identify internal and external links present on the webpage. It is capable of handling dynamic page structures, validating URLs, and presenting the scraped data in a structured format for further analysis or storage. This project demonstrates practical experience in web data extraction, HTML parsing, and automated data collection using Python.",
                  link: "https://github.com/Pavankumar8002/WebScraper",
                },
                {
                  title: "VoiceBot",
                  desc: "Developed a Python-based AI Voice Assistant that enables natural, voice-driven interaction using NLP for command understanding and Google Text-to-Speech for audio responses. The system supports speech recognition, emotion-aware responses, real-time information retrieval, jokes and facts generation, mathematical operations, and OS-level task automation through integrated APIs and libraries.",
                  link: "https://github.com/Pavankumar8002/VoiceBot",
                },
              ].map((p, i) => (
                <div className="col-md-6" key={i}>
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text text-muted">{p.desc}</p>
                      <a href={p.link} target="_blank" rel="noreferrer">
                        View on GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER WITH CONTACT FORM */}
      <footer className="slytherin-footer">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* LEFT — SOCIAL ICONS + QR */}
            <div className="col-md-6 text-center text-md-start">
              <h4 className="footer-title mb-3">Connect With Me</h4>

              {/* Social / Email Logos */}
              <div className="footer-socials mb-4">
                <a
                  href="mailto:pavankumarpk8002@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/pavan-kumar-n-086677235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>

                <a
                  href="https://github.com/Pavankumar8002"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>

                <a
                  href="www.linkedin.com/in/pavankumarpk8002"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  href="tel:+919739565251"
                  aria-label="Call"
                >
                  <i className="fas fa-phone"></i>
                </a>
              </div>

              {/* QR Code */}
              <div className="qr-box">
                <img src="/Pictures/Pavan_Kumar_Resume_QR.png" alt="QR Code" />
              </div>
            </div>

            {/* RIGHT — CONTACT FORM */}
            <div className="col-md-6">
        <form
          onSubmit={handleSubmit}
          className={`card p-4 shadow contact ${
            isSubmitting ? "summoning" : ""
          }`}
        >
          <h5 className="mb-4 text-center section-title">
            Send a Message
          </h5>

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Your Name"
            value={name}
            disabled={isSubmitting}
            onChange={(e) =>
              setName(e.target.value.replace(/[^A-Za-z\s]/g, ""))
            }
          />

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Your Email"
            value={email}
            disabled={isSubmitting}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            className="form-control mb-3"
            rows="4"
            placeholder="Your Message"
            value={message}
            disabled={isSubmitting}
            onChange={(e) => setMessage(e.target.value)}
          />

      <button
        type="submit"
        className="btn btn-slytherin w-100 summon-btn"
        disabled={isSubmitting}
      >
        <span
          style={{
            color: isSubmitting ? "#0c1a14" : "#e6fff3",
            fontFamily: "'Ayuthaya', serif", 
            textShadow: isSubmitting
              ? "none"
              : "0 0 6px rgba(120,207,160,0.6)"
          }}
        >
          {isSubmitting ? "🐍 Summoning..." : "Send Message"}
        </span>
      </button>
    </form>
</div>
    </div>
    {/* Footer Bottom */}
    <div className="text-center mt-5 pt-4 border-top border-secondary">
      <small>© {new Date().getFullYear()} Pavan Kumar</small>
    </div>
  </div>
</footer>

    </>
  );
}

export default Portfolio;
