import React from 'react';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
import '../styles/portfolio.css';

const images = [
  '/Pictures/java.png',
  '/Pictures/react.png',
  '/Pictures/Net.svg',
  '/Pictures/pgsql.png',
  '/Pictures/js.png',
  '/Pictures/css.png',
  '/Pictures/html.png',
  '/Pictures/c.png',
  '/Pictures/cpp.png',
  '/Pictures/oracle.png',
  '/Pictures/mysql.png',
  '/Pictures/gitlab.svg',
];

function Portfolio() {
  return (
    <div className="portfolio">
      <Header />

      {/* About Me Section */}
      <section id="about-me" className="about-me py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="about-image-container rounded-3 overflow-hidden shadow-lg">
                <img src="/Pictures/image.png" alt="Cover" className="about-image img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-text-container">
                <h2 className="text-white">Who I Am and What I Do?</h2>
                <p className="text-light">
                  Hello! I'm Pavan Kumar, a passionate frontend developer with experience in creating dynamic,
                  user-friendly websites using React.js, HTML, CSS, and JavaScript. I enjoy building responsive,
                  efficient, and engaging web applications that provide an excellent user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee-section py-5">
        <Marquee images={images} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills py-5">
        <div className="container">
          <h2 className="text-center text-white mb-5">What I Bring to the Table</h2>
          <div className="row">
            {[
              { title: 'React.js', description: 'Building dynamic, modern web apps with React.' },
              { title: 'JavaScript', description: 'Proficient in ES6+ syntax and modern JavaScript features.' },
              { title: 'HTML5 & CSS3', description: 'Building semantic, responsive web pages.' },
              { title: 'Responsive Design', description: 'Creating websites that work across all devices.' },
              { title: 'Git & GitHub', description: 'Version control and collaboration through Git and GitHub.' },
              { title: '.NET', description: 'Basic understanding of backend development with .NET.' },
              { title: 'MVC', description: 'Understanding backend development using the MVC pattern.' },
            ].map((skill, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{skill.title}</h5>
                    <p className="card-text">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5">Experience</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="experience-item bg-secondary p-4 rounded-3 shadow">
                <h3>Frontend Developer</h3>
                <p><strong>Company Name</strong> - January 2022 to Present</p>
                <p>Developed and maintained dynamic, responsive web applications using React.js and JavaScript.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="experience-item bg-secondary p-4 rounded-3 shadow">
                <h3>Intern</h3>
                <p><strong>Company Name</strong> - June 2021 to December 2021</p>
                <p>Worked on building interactive UI components and collaborated with the team to enhance application performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects py-5">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            {[
              {
                title: 'Portfolio Website',
                description: 'A responsive personal portfolio website built with React.js to showcase my skills and projects.',
                link: 'https://github.com/yourusername/portfolio-website',
              },
              {
                title: 'Weather App',
                description: 'A weather app that uses an API to fetch real-time weather data and display it in an intuitive interface.',
                link: 'https://github.com/yourusername/weather-app',
              },
            ].map((project, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="project-item bg-secondary p-4 rounded-3 shadow">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-link text-success">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5">Achievements & Certifications</h2>
          <ul className="list-unstyled text-center">
            <li className="mb-3">
              <h5>Certified React Developer</h5>
              <p>Issued by XYZ Organization, 2023</p>
            </li>
            <li className="mb-3">
              <h5>Winner - Hackathon 2022</h5>
              <p>Built a project that won the XYZ Hackathon.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials py-5">
        <div className="container">
          <h2 className="text-center mb-5">What People Say</h2>
          <div className="row">
            {[
              {
                text: 'Pavan\'s attention to detail and coding skills are remarkable. He\'s a great team player.',
                author: 'John Doe, Senior Developer',
              },
              {
                text: 'A highly skilled developer with a passion for creating intuitive web solutions.',
                author: 'Jane Smith, Project Manager',
              },
            ].map((testimonial, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <blockquote className="blockquote bg-secondary p-4 rounded-3 shadow">
                  <p>"{testimonial.text}"</p>
                  <footer className="blockquote-footer text-light">{testimonial.author}</footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact py-5">
        <div className="container">
          <h2 className="text-center text-white mb-5">Get in Touch</h2>
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer py-4 bg-dark text-white">
        <div className="container text-center">
          <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:youremail@example.com" className="text-success">youremail@example.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-success">Your LinkedIn Profile</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
