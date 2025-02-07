import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <title>Projects - David Sandoval</title>
      </Head>

      <Navbar />

      <main>
        <section id="skills" className="skills-section section">
          <h2 className="section-heading">Skills and Technologies</h2>
          <div className="tech-list">
            <div className="tech-item">
              <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/python.png" alt="Python" />
                <p className="tech-text">Python</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/mysql.png" alt="MySQL" />
                <p className="tech-text">MySQL</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/pandas.png" alt="Pandas" />
                <p className="tech-text">Pandas</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/numpy.png" alt="Numpy" />
                <p className="tech-text">Numpy</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/jupyter.png" alt="Jupyter" />
                <p className="tech-text">Jupyter</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/scikitlearn.png" alt="ScikitLearn" />
                <p className="tech-text">ScikitLearn</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/streamlit.png" alt="Streamlit" />
                <p className="tech-text">Streamlit</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/java.png" alt="Java" />
                <p className="tech-text">Java</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://junit.org/junit5/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/junit5.png" alt="JUnit" />
                <p className="tech-text">JUnit</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"
                rel="noopener noreferrer">
                <img src="/icons/techs/javascript.png" alt="JavaScript" />
                <p className="tech-text">JavaScript</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                rel="noopener noreferrer">
                <img src="/icons/techs/html.png" alt="HTML" />
                <p className="tech-text">HTML</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
                rel="noopener noreferrer">
                <img src="/icons/techs/css.png" alt="CSS" />
                <p className="tech-text">CSS</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://sass-lang.com/" target="_blank"
                rel="noopener noreferrer">
                <img src="/icons/techs/sass.png" alt="Sass" />
                <p className="tech-text">Sass</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/git.png" alt="Git" />
                <p className="tech-text">Git</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/github-b.png" alt="GitHub" />
                <p className="tech-text">GitHub</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://daringfireball.net/projects/markdown/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/markdown.png" alt="Markdown" />
                <p className="tech-text">Markdown</p>
              </a>
            </div>
            <div className="tech-item">
              <a href="https://en.cppreference.com/w/c/language" target="_blank" rel="noopener noreferrer">
                <img src="/icons/techs/c.png" alt="C" />
                <p className="tech-text">C</p>
              </a>
            </div>
          </div>
        </section>
        <section id="projects-personal" className="section">
          <h1 className="section-heading">Projects</h1>
          <div className="container-projects">
            <div id="project1" className="project">
              <img src="/images/customer-segmentation.jpg" className="project-image" alt="Customer Segmentation Dashboard" />
              <h2 className="project-title">Customer Segmentation Dashboard</h2>
              <ul className="project-text">
                <li>Customer segmentation for an e-commerce platform using data science techniques.</li>
                <li>Exploratory analysis and clustering based on behaviors.</li>
                <li>Interactive Streamlit dashboard to visualize key metrics.</li>
                <li>Helps compare customer segments and optimize business strategies.</li>
              </ul>
              <div className="project-technologies">
                <div className="mini-tech">
                  <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/techs/python.png" alt="Python" />
                    <p className="mini-tech-text">Python</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/techs/pandas.png" alt="Pandas" />
                    <p className="mini-tech-text">Pandas</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/techs/numpy.png" alt="Numpy" />
                    <p className="mini-tech-text">Numpy</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/techs/jupyter.png" alt="Jupyter" />
                    <p className="mini-tech-text">Jupyter</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://scikit-learn.org/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/techs/scikitlearn.png" alt="ScikitLearn" />
                    <p className="mini-tech-text">ScikitLearn</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://streamlit.io/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/techs/streamlit.png" alt="Streamlit" />
                    <p className="mini-tech-text">Streamlit</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://daringfireball.net/projects/markdown/" target="_blank"
                    rel="noopener noreferrer">
                    <img src="/icons/techs/markdown.png" alt="Markdown" />
                    <p className="mini-tech-text">Markdown</p>
                  </a>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/davexat/Customer_Segmentation_Dashboard" target="_blank" rel="noopener noreferrer">View code</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Visit project</a>
              </div>
            </div>
            <div id="project2" className="project">
              <img src="/images/curriculum.jpg" className="project-image" alt="Curriculum Vitae Website" />
              <h2 className="project-title">Curriculum Vitae Website</h2>
              <ul className="project-text">
                <li>Personal website to showcase my skills and projects.</li>
                <li>Developed using HTML, CSS, and JavaScript.</li>
                <li>Styled with Sass for maintainability and scalability.</li>
                <li>Includes sections for about me, projects, and contact information.</li>
              </ul>
              <div className="project-technologies">
                <div className="mini-tech">
                  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank"
                    rel="noopener noreferrer">
                    <img src="/icons/techs/javascript.png" alt="JavaScript" />
                    <p className="mini-tech-text">JavaScript</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"
                    rel="noopener noreferrer">
                    <img src="/icons/techs/html.png" alt="HTML" />
                    <p className="mini-tech-text">HTML</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"
                    rel="noopener noreferrer">
                    <img src="/icons/techs/css.png" alt="CSS" />
                    <p className="mini-tech-text">CSS</p>
                  </a>
                </div>
                <div className="mini-tech">
                  <a href="https://sass-lang.com/" target="_blank"
                    rel="noopener noreferrer">
                    <img src="/icons/techs/sass.png" alt="Sass" />
                    <p className="mini-tech-text">Sass</p>
                  </a>
                </div>
              </div>
              <div className="project-links">
                <a href="https://github.com/davexat/curriculum" target="_blank" rel="noopener noreferrer">View code</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Visit project</a>
              </div>
            </div>
          </div>
        </section>
        <section id="education-experience" className="section">
          <h1 className="section-heading">Education & Experience</h1>
          <div className="education-experience-container">
            <div id="education">
              <h2 className="section-subsubtitle">My Education</h2>
              <div className="education-items">
                <div className="experience-item">
                  <img src="/icons/point.png" className="point" alt="Point" />
                  <h3 className="section-paragraph">Software Engineering</h3>
                  <p className="section-subtext"><strong>ESPOL</strong>|<small>2023 - Current</small></p>
                </div>
              </div>
            </div>
            <div id="work-experience">
              <h2 className="section-subsubtitle">Work Experience</h2>
              <div className="work-experience-items">
                <div className="experience-item">
                  <img src="/icons/point.png" className="point" alt="Point" />
                  <h3 className="section-paragraph">Teaching Assistanship</h3>
                  <p className="section-subtext"><strong>ESPOL</strong><span className="separator">|</span><small>Sep
                      2024 - Jan 2025</small></p>
                  <p className="section-subsubtext">Assisted students in the Software Design course.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
