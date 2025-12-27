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
    const timer = setTimeout(() => setPageLoading(false), 1200);
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

      {/* HERO */}
      <section className="bg-dark text-light py-5 text-center">
        <div className="container">
          {/* <h1 className="fw-bold">Pavan Kumar</h1> */}
           <h5   style={{
    color: "#dce4e1", 
    fontFamily: "'Ayuthaya', serif", 
    lineHeight: "1.8",
  }}>Full Stack Developer • React • .NET • PostgreSQL </h5> 

        </div>
      </section>

      {/* ABOUT */}
<section className="py-5 about-me">
  <div className="container">
    <div className="row align-items-center g-4">
      
      {/* PROFILE IMAGE */}
      <div className="col-md-5 text-center">
        <img
          src="/Pictures/profilepic.heic"
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
  Full Stack Developer focused on building scalable and clean web
  applications using React, .NET, and PostgreSQL.
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
     {/* PROJECTS */}
<section className="py-5">
  <div className="slytherin-projects">
    <div className="container">
      <h2 className="text-center mb-4 section-title">Projects</h2>

      <div className="row g-4">
        {[
          {
            title: "Portfolio Website",
            desc: "Modern React portfolio with dark UI",
            link: "https://github.com/Pavankumar8002/Portfolio",
          },
          {
            title: "VoiceBot",
            desc: "Python AI voice assistant",
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
            href="https://www.instagram.com/pavan._.nagaraj_22?igsh=MXQwd3RobnRxN21pMg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* QR Code */}
        <div className="qr-box">
          <img src="/Pictures/qr.png" alt="QR Code" />
        </div>
      </div>

      {/* RIGHT — CONTACT FORM */}
      <div className="col-md-6">
  <form onSubmit={handleSubmit} className="card p-4 shadow contact">
    <h5 className="mb-4 text-center section-title">Send a Message</h5>

    <input
      className="form-control mb-3"
      placeholder="Your Name"
      value={name}
      onChange={(e) =>
        setName(e.target.value.replace(/[^A-Za-z\s]/g, ""))
      }
    />

    <input
      className="form-control mb-3"
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <textarea
      className="form-control mb-3"
      rows="4"
      placeholder="Your Message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />

    <button
      type="submit"
      className="btn btn-slytherin w-100"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Sending..." : "Send Message"}
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
