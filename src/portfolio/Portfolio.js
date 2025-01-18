import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Marquee from '../components/Marquee';
import '../styles/portfolio.css';
import Loading from '../components/Loading';
import { supabase } from './supabaseClient'; 
import Swal from 'sweetalert2';
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
  const [isLoading, setIsLoading] = useState(true);
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 
    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <Loading />;
  }


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !message) {
    setFormStatus('All fields are required!');
    return;
  }

  try {
  
    const { error } = await supabase
      .from('contacts') 
      .insert([
        {
          name: name.substring(0, 36),
          email: email.substring(0, 50),
          message: message.substring(0, 1000),
        },
      ]);
    if (error) {
      setFormStatus('Error submitting the form. Please try again later.');
      console.error(error);
    } else {
      Swal.fire({
        text: 'Thank you for reaching out!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      setName('');
      setEmail('');
      setMessage('');
    }
  } catch (error) {
    setFormStatus('An unexpected error occurred. Please try again later.');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};

// updated
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
                  Hello! I'm Pavan Kumar, a passionate full stack developer with experience in creating dynamic,
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
              { title: 'React.js', description: 'Building dynamic, modern web applications with React, using hooks and state management.' },
              { title: 'Python', description: 'Experienced in building APIs, data processing, and automation scripts with Python.' },
              { title: 'JavaScript (ES6+)', description: 'Proficient in modern JavaScript, including ES6+ features and asynchronous programming.' },
              { title: 'HTML5 & CSS3', description: 'Creating semantic and responsive web pages using HTML5 and CSS3, with a focus on accessibility.' },
              { title: 'Responsive Design', description: 'Building responsive, mobile-first websites that adapt seamlessly across all devices.' },
              { title: 'Git & GitHub', description: 'Version control and collaboration through Git and GitHub, managing branches and pull requests.' },
              { title: '.NET (C#)', description: 'Knowledge of backend development with .NET, focusing on web APIs and services.' },
              { title: 'MVC Pattern', description: 'Understanding and implementing the Model-View-Controller design pattern in web applications.' },
              { title: 'PostgreSQL & MySQL', description: 'Experience with relational databases, including writing complex queries and database design.' },
              { title: 'Java', description: 'Proficient in object-oriented programming and building applications in Java.' },
              { title: 'C & C++', description: 'Familiar with systems programming, data structures, and algorithms in C and C++.' },
              { title: 'PHP', description: 'Experienced in building dynamic server-side applications and APIs with PHP.' },
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
          <h2 className="text-center mb-5" style={{ color: '#000000' }}>Experience</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="experience-item bg-secondary p-4 rounded-3 shadow">
                <h3 style={{ color: '#000000' }}>Junior Software Engineer</h3>
                <p style={{ color: '#000000' }}><strong>Idea Infinity IT Solution Pvt Ltd</strong> - July 2024 to Present</p>
                <p>Working as a Junior Software Engineer, contributing to backend and frontend development using technologies such as .NET, React, JavaScript, and databases (PostgreSQL/MySQL). Responsible for developing and maintaining APIs and dynamic web applications.</p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="experience-item bg-secondary p-4 rounded-3 shadow">
                <h3 style={{ color: '#000000' }}>Full Stack Developer Intern</h3>
                <p style={{ color: '#000000' }}><strong>ProGlobal Software Pvt Ltd</strong> - August 2023 to December 2023</p>
                <p>Worked as a Full Stack Developer Intern, where I contributed to both frontend and backend tasks. Developed dynamic user interfaces using React.js and integrated RESTful APIs for seamless data flow. Gained hands-on experience in full-stack development in an Agile environment.</p>
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
                description: 'A responsive portfolio website built with React.js. It showcases my skills, experience, and projects, offering smooth navigation and a modern design. Fully responsive this project highlights my expertise in front-end development and creating user-centric web applications.',
                link: 'https://github.com/Pavankumar8002/Portfolio',
              },
              {
                title: 'VoiceBot',
                description: 'A Python-based intelligent virtual assistant that uses voice recognition and semantic data to perform tasks like answering questions, setting reminders, and researching. It demonstrates my skills in AI, natural language processing, and building hands-free, productivity-enhancing applications.',
                link: 'https://github.com/Pavankumar8002/VoiceBot',
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

 {/* Contact Section */}
 <section id="contact" className="contact py-5">
        <div className="container">
          <h2 className="text-center text-white mb-5">Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  minLength="2"
                  maxLength="36"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '');
                  }}
                  title="Name should only contain letters and spaces"
                />
              </div>
              <br/>
              <br/>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  minLength="5"
                  maxLength="50"
                  title="Please enter a valid email address"
                />
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength="10"
                maxLength="500"
                title="Message should be between 10 and 500 characters"
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {formStatus && (
            <div className="mt-3 text-center text-white">
              <p>{formStatus}</p>
            </div>
          )}
        </div>
      </section>
      {/* Footer Section */}
      <footer className="footer py-4 bg-dark text-white">
        <div className="container text-center">
          <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn:</p>
          <ul className="list-unstyled">
            <li>Email: <a href="mailto:pavankumarpk8002@gmail.com" className="text-success">pavankumarpk8002@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/pavan-kumar-086677235" target="_blank" rel="noopener noreferrer" className="text-success">pavan-kumar</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;
