import React from 'react';
import Header from '../components/Header';
import Marquee from '../components/Marquee';

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
            {/* Image Section */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="about-image-container rounded-3 overflow-hidden shadow-lg">
                <img src="/Pictures/image.png" alt="Cover" className="about-image img-fluid" />
              </div>
            </div>

            {/* Text Section */}
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


      <section className="marquee-section py-5">
        <Marquee images={images} />
      </section>


      {/* Skills Section */}
      <section id="skills" className="skills py-5">
        <div className="container">
          {/* <h2 className="text-center text-white mb-5">Skills</h2> */}
          <h2 className="text-center text-white mb-5">What I Bring to the Table</h2>
          <div className="row">
            {/* Skill Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">React.js</h5>
                  <p className="card-text">Building dynamic, modern web apps with React.</p>
                </div>
              </div>
            </div>

            {/* Skill Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text">Proficient in ES6+ syntax and modern JavaScript features.</p>
                </div>
              </div>
            </div>

            {/* Skill Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">HTML5 & CSS3</h5>
                  <p className="card-text">Building semantic, responsive web pages.</p>
                </div>
              </div>
            </div>

            {/* Skill Card 4 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Responsive Design</h5>
                  <p className="card-text">Creating websites that work across all devices.</p>
                </div>
              </div>
            </div>

            {/* Skill Card 5 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Git & GitHub</h5>
                  <p className="card-text">Version control and collaboration through Git and GitHub.</p>
                </div>
              </div>
            </div>

            {/* Skill Card 6 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">.NET</h5>
                  <p className="card-text">Basic understanding of backend development with Node.js.</p>
                </div>
              </div>
            </div>

            {/* Skill Card 7 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">MVC</h5>
                  <p className="card-text">Basic understanding of backend development with Node.js.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      
     <br></br>
      <section id="projects" className="projects py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-5">Projects</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="project-item bg-secondary p-4 rounded-3 shadow">
                <h3>Portfolio Website</h3>
                <p>A responsive personal portfolio website built with React.js to showcase my skills and projects.</p>
                <a href="https://github.com/yourusername/portfolio-website" target="_blank" rel="noopener noreferrer" className="btn btn-link text-success">GitHub</a>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="project-item bg-secondary p-4 rounded-3 shadow">
                <h3>Weather App</h3>
                <p>A weather app that uses an API to fetch real-time weather data and display it in an intuitive interface.</p>
                <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer" className="btn btn-link text-success">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer Section for Contact Info */}
      <footer className="footer py-4 bg-dark text-white">
        <div className="container text-center">
          <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn:</p>
          <ul className="list-unstyled">
            <li>
              Email: <a href="mailto:youremail@example.com" className="text-success">youremail@example.com</a>
            </li>
            <li>
              LinkedIn: <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="text-success">Your LinkedIn Profile</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
