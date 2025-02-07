import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const data = {
      ...form
    };
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        alert('Message sent successfully!');
        setForm({ name: '', email: '', topic: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
        <title>Contact Me - David Sandoval</title>
      </Head>

      <Navbar />

      <main>
        <section id="contact-container" className="section">
          <h1 className="section-heading">Contact Me</h1>
          <div className="form-container">
            <div id="form">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="topic">Topic:</label>
                  <input
                    type="text"
                    id="topic"
                    name="topic"
                    required
                    value={form.topic}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
            <div id="map">
              <div id="map-title">
                <p className="section-subsubtext">
                  If you want to meet me in person, we can arrange a meeting at
                  ESPOL from Monday to Thursday.
                </p>
              </div>
              <div id="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.18898203834829!2d-79.96774463945059!3d-2.144602712519015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d7303bb0133cd%3A0x66c18bd9810f31cb!2sFacultad%20de%20Ingenier%C3%ADa%20en%20Electricidad%20y%20Computaci%C3%B3n%20FIEC%20-%20ESPOL!5e0!3m2!1ses!2sec!4v1738823254796!5m2!1ses!2sec"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
