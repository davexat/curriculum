import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>David Sandoval - Curriculum Vitae</title>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="web development, python, javascript, backend, frontend, programming, software design, software development, software engineering, computer science, engineering"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Software and Web developer excited about AI"
        />
        <meta name="author" content="David Sandoval" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
      </Head>

      <Navbar />

      <main>
        <section id="presentation">
          <div className="presentation-container">
            <h2 className="presentation-title">DAVID SANDOVAL</h2>
            <p className="presentation-description">
              Hi! I'm David Elias Sandoval Bernitta, a Web and Software
              Developer and Data Analyst appasionate by AI.
            </p>
          </div>
          <div id="particles-js">
            <Script src="/scripts/particles.min.js" strategy="beforeInteractive" />
            <Script src="/scripts/particlesConfig.js" strategy="afterInteractive" />
          </div>
        </section>
        <section id="about" className="section">
          <div className="section-content">
            <h2 className="section-heading">About Me</h2>
            <p className="section-paragraph">
              I love Software Design, Development, Web Development and Data
              Analysis.
            </p>
            <Link href="/about" className="section-link">
              See more
            </Link>
          </div>
          <div className="section-image">
            <img src="/images/sample3.jpg" alt="About Me" />
          </div>
        </section>
        <section id="projects" className="section">
          <div className="section-content">
            <h2 className="section-heading">Projects</h2>
            <p className="section-paragraph">
              I have developed various projects in Software Applications, Web
              Development, and Data Analysis.
            </p>
            <Link href="/projects" className="section-link">
              See more
            </Link>
          </div>
          <div className="section-image">
            <img src="/images/sample2.jpg" alt="Projects" />
          </div>
        </section>
        <section id="contact" className="section">
          <div className="section-content">
            <h2 className="section-heading">Contact Me</h2>
            <p className="section-paragraph">
              You can contact me through the following email addresses:
            </p>
            <p className="section-subtext">daelsand@espol.edu.ec</p>
            <p className="section-subtext">d4vidsandoval@gmail.com</p>
            <Link href="/contact" className="section-link">
              Contact me
            </Link>
          </div>
          <div className="section-image">
            <img src="/images/sample1.jpg" alt="Contact Me" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
