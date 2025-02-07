import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <title>About Me - David Sandoval</title>
      </Head>

      <Navbar />

      <main>
        <section id="about-me" className="about-section section">
          <h2 className="section-heading">Who I Am</h2>
          <p className="section-paragraph">
            Hi! I'm David Sandoval, a passionate web developer and data
            analyst with a strong interest in Artificial Intelligence and
            modern software engineering practices. Outside of coding, I enjoy
            exploring City Pop music, practicing calisthenics, and diving into
            new programming challenges!
          </p>
        </section>
        <section id="my-journey" className="about-section section">
          <h2 className="section-heading">My Journey</h2>
          <p className="section-paragraph">
            I began my journey in computer science when I discovered PSeint. I
            was fascinated by everything I could create with this tool, which
            eventually led me to Python, the first programming language I
            learned, and I was truly amazed. This experience inspired me to
            pursue the degree I am currently studying. As I progressed, I
            discovered my true passion: Software Design, Development, and
            Artificial Intelligence.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
