import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TechItem from '../components/TechItem';

export default function Projects() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <title>Projects - David Sandoval</title>
      </Head>

      <Navbar />

      <main>
        <section id="skills" className="skills-section section">
          <h2 className="section-heading">Skills and Technologies</h2>
          <div className="tech-list">
            <TechItem url="https://www.python.org/" imageUrl="/icons/techs/python.png" name="Python" />
            <TechItem url="https://www.mysql.com/" imageUrl="/icons/techs/mysql.png" name="MySQL" />
            <TechItem url="https://pandas.pydata.org/" imageUrl="/icons/techs/pandas.png" name="Pandas" />
            <TechItem url="https://numpy.org/" imageUrl="/icons/techs/numpy.png" name="Numpy" />
            <TechItem url="https://jupyter.org/" imageUrl="/icons/techs/jupyter.png" name="Jupyter" />
            <TechItem url="https://scikit-learn.org/" imageUrl="/icons/techs/scikitlearn.png" name="ScikitLearn" />
            <TechItem url="https://streamlit.io/" imageUrl="/icons/techs/streamlit.png" name="Streamlit" />
            <TechItem url="https://www.java.com/" imageUrl="/icons/techs/java.png" name="Java" />
            <TechItem url="https://junit.org/junit5/" imageUrl="/icons/techs/junit5.png" name="JUnit" />
            <TechItem url="https://developer.mozilla.org/es/docs/Web/JavaScript" imageUrl="/icons/techs/javascript.png" name="JavaScript" />
            <TechItem url="https://developer.mozilla.org/en-US/docs/Web/HTML" imageUrl="/icons/techs/html.png" name="HTML" />
            <TechItem url="https://developer.mozilla.org/en-US/docs/Web/CSS" imageUrl="/icons/techs/css.png" name="CSS" />
            <TechItem url="https://sass-lang.com/" imageUrl="/icons/techs/sass.png" name="Sass" />
            <TechItem url="https://es.react.dev/" imageUrl="/icons/techs/react.png" name="React" />
            <TechItem url="https://nodejs.org/" imageUrl="/icons/techs/nodejs.png" name="Node.js" />
            <TechItem url="https://nextjs.org/" imageUrl="/icons/techs/nextjs.png" name="Next.js" />
            <TechItem url="https://git-scm.com/" imageUrl="/icons/techs/git.png" name="Git" />
            <TechItem url="https://github.com/" imageUrl="/icons/techs/github-b.png" name="GitHub" />
            <TechItem url="https://daringfireball.net/projects/markdown/" imageUrl="/icons/techs/markdown.png" name="Markdown" />
            <TechItem url="https://en.cppreference.com/w/c/language" imageUrl="/icons/techs/c.png" name="C" />
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
                <TechItem isMini url="https://www.python.org/" imageUrl="/icons/techs/python.png" name="Python" />
                <TechItem isMini url="https://pandas.pydata.org/" imageUrl="/icons/techs/pandas.png" name="Pandas" />
                <TechItem isMini url="https://numpy.org/" imageUrl="/icons/techs/numpy.png" name="Numpy" />
                <TechItem isMini url="https://jupyter.org/" imageUrl="/icons/techs/jupyter.png" name="Jupyter" />
                <TechItem isMini url="https://scikit-learn.org/" imageUrl="/icons/techs/scikitlearn.png" name="ScikitLearn" />
                <TechItem isMini url="https://streamlit.io/" imageUrl="/icons/techs/streamlit.png" name="Streamlit" />
                <TechItem isMini url="https://daringfireball.net/projects/markdown/" imageUrl="/icons/techs/markdown.png" name="Markdown" />
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
                <li>Portfolio website built with Next.js and React.</li>
                <li>Showcases my skills, projects, and experience.</li>
                <li>Styled with Sass for a modern and responsive design.</li>
                <li>Includes sections for about me, projects, contact, and skills.</li>
              </ul>
              <div className="project-technologies">
                <TechItem isMini url="https://developer.mozilla.org/es/docs/Web/JavaScript" imageUrl="/icons/techs/javascript.png" name="JavaScript" />
                <TechItem isMini url="https://developer.mozilla.org/en-US/docs/Web/HTML" imageUrl="/icons/techs/html.png" name="HTML" />
                <TechItem isMini url="https://developer.mozilla.org/en-US/docs/Web/CSS" imageUrl="/icons/techs/css.png" name="CSS" />
                <TechItem isMini url="https://sass-lang.com/" imageUrl="/icons/techs/sass.png" name="Sass" />
                <TechItem isMini url="https://es.react.dev/" imageUrl="/icons/techs/react.png" name="React" />
                <TechItem isMini url="https://nodejs.org/" imageUrl="/icons/techs/nodejs.png" name="Node.js" />
                <TechItem isMini url="https://nextjs.org/" imageUrl="/icons/techs/nextjs.png" name="Next.js" />
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
