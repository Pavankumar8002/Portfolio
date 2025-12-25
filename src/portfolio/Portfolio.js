import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import Loading from "../components/Loading";
import "../styles/portfolio.css";
import axios from "axios";
import Swal from "sweetalert2";

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
  // Page loading (initial)
  const [pageLoading, setPageLoading] = useState(true);

  // Form loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formStatus, setFormStatus] = useState("");

  const API_BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("");
  
    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        text: "All fields are required!",
        background: "radial-gradient(circle at top, #0f2a1e, #050c09)",
        color: "#e6f3ec",
        confirmButtonText: "Understood",
        confirmButtonColor: "#1c5d3a",
        iconColor: "#78cfa0",
      });
      return;
    }
  
    setIsSubmitting(true);
  
    try {
      const response = await axios.post(
        `${API_BASE_URL}/PortfolioEnquery/PostPortfolioEnquiry`,
        {
          name: name.substring(0, 36),
          email: email.substring(0, 50),
          message: message.substring(0, 1000),
        }
      );
  
      // 🐍 STOP LOADER BEFORE ALERT
      setIsSubmitting(false);
  
      if (response.data?.status === 1) {
        await Swal.fire({
          title: "Sssent… 🐍",
          html: `
            <div style="
              font-family: 'Montserrat', sans-serif;
              letter-spacing: 1px;
              line-height: 1.8;
            ">
              <p style="font-size: 1.1rem; color:#78cfa0;">
                <em>Ssshaaa… your message hasss been heard.</em>
              </p>
              <p style="color:#a7c7b7; margin-top:12px;">
                The Slytherin wards now guard your words.<br/>
                I shall respond ssssoon…
              </p>
            </div>
          `,
          background: "radial-gradient(circle at top, #0f2a1e, #050c09)",
          color: "#e6f3ec",
          icon: "success",
          iconColor: "#78cfa0",
          confirmButtonText: "Sssilence the wards",
          confirmButtonColor: "#1c5d3a",
          allowOutsideClick: false,
          showClass: {
            popup: "animate__animated animate__fadeInDown"
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp"
          }
        });
        
  
        setName("");
        setEmail("");
        setMessage("");
      } else {
        Swal.fire({
          icon: "error",
          text: response.data?.message || "Submission failed.",
          background: "radial-gradient(circle at top, #0f2a1e, #050c09)",
          color: "#e6f3ec",
          confirmButtonColor: "#1c5d3a",
          iconColor: "#78cfa0",
        });
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
  
      Swal.fire({
        icon: "error",
        text: "Server error. Please try again later.",
        background: "radial-gradient(circle at top, #0f2a1e, #050c09)",
        color: "#e6f3ec",
        confirmButtonColor: "#1c5d3a",
        iconColor: "#78cfa0",
      });
    }
  };
  
  
  return (
    <div className="portfolio">
  
      <Header />
  
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center">
        <div className="container text-center">
          <br></br>
          <p className="hero-subtitle">
            Full Stack Developer • React • .NET • PostgreSQL
          </p>
        </div>
      </section>
  
      {/* ABOUT */}
      <section className="about-me py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mb-4">
              <img
                src="/Pictures/picture.jpeg"
                alt="Profile"
                className="about-image"
              />
            </div>
            <div className="col-md-7">
              <h2>About Me</h2>
              <p>
                I’m a <strong>Full Stack Developer</strong> passionate about building
                scalable, clean, and high-performance web applications.
                I specialize in <strong>React, .NET, PostgreSQL</strong> and love
                solving real-world problems with code.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      {/* TECH MARQUEE */}
      <section className="py-4">
        <Marquee images={images} />
      </section>
  
{/* SKILLS */}
<section className="skills-section">
  <div className="container">
    <h2 className="section-title text-center">Skills & Tools</h2>

    <div className="row justify-content-center">
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
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
          <div className="skill-card">
            <span>{skill}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PROJECTS */}
<section className="projects-section">
  <div className="container">
    <h2 className="section-title text-center">Projects</h2>

    <div className="row justify-content-center">
      {[
        {
          title: "Portfolio Website",
          desc: "Modern React-based personal portfolio with dark UI.",
          link: "https://github.com/Pavankumar8002/Portfolio",
        },
        {
          title: "VoiceBot",
          desc: "Python-based AI voice assistant with voice commands.",
          link: "https://github.com/Pavankumar8002/VoiceBot",
        },
      ].map((p, i) => (
        <div className="col-lg-5 col-md-6 mb-4" key={i}>
          <div className="project-card">
            <h4>{p.title}</h4>
            <p>{p.desc}</p>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  
      {/* CONTACT */}
      <section id="contact" className="contact py-5">
        <div className="container">
          <h2 className="text-center mb-4">Get In Touch</h2>
  
          <div className="contact-card glass">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control mb-3"
                placeholder="Your Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value.replace(/[^A-Za-z\s]/g, ""))
                }
                required
              />
  
              <input
                className="form-control mb-3"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
  
              <textarea
                className="form-control mb-3"
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
  
              {/* <button
                className="btn btn-success w-100"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button> */}
              <button
  className="btn btn-success w-100 slytherin-btn"
  type="submit"
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <span className="slytherin-loader">
      <span className="snake-head"></span>
      <span className="snake-body"></span>
      <span className="snake-tail"></span>
      <span className="loader-text">Summoning...</span>
    </span>
  ) : (
    "Send Message"
  )}
</button>

            </form>
  
            {formStatus && (
              <p className="text-center mt-3">{formStatus}</p>
            )}
          </div>
        </div>
      </section>
  
      {/* FOOTER */}
      <footer className="footer slytherin-footer">
  <div className="footer-mist"></div>

  <div className="container">
    <div className="row align-items-center">

      {/* LEFT – CONTACT DETAILS */}
      <div className="col-md-4 footer-contact">
        <h4 className="footer-title">Contact</h4>

        <p>
          📧{" "}
          <a href="mailto:pavankumarpk8002@gmail.com">
            pavankumarpk8002@gmail.com
          </a>
        </p>

        <p>
          📱{" "}
          <a href="tel:+919876543210">
            +91 9739565251
          </a>
        </p>

        <div className="footer-socials">
          <a
            href="https://wa.me/919739565251"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      {/* CENTER – BRAND */}
      <div className="col-md-4 footer-brand">
        <h3 className="slytherin-text">Pavan Kumar</h3>
        <p className="footer-tagline">
          “Build In Weekend Scale To Millions”
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()}
        </p>
      </div>

      {/* RIGHT – QR CODE */}
      <div className="col-md-4 footer-qr">
        <h4 className="footer-title">Scan Me</h4>
        <div className="qr-box">
          {/* Replace src with your real QR */}
          <img src="/Pictures/phone-dial-qr.png" alt="QR Code" />
        </div>
      </div>

    </div>
  </div>
</footer>

    </div>
  );
            }  

export default Portfolio;
