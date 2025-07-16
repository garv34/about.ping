import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-page">
      <div className="about-header" data-aos="fade-down">
        <h1>About Ping Note</h1>
        <p>
          Ping Note is a digital platform built to help students and teachers
          collaborate, share notes, and manage academic resources efficiently.
        </p>
      </div>

      <div className="about-features">
        <div className="feature-card" data-aos="zoom-in">
          <h2>📘 Organize Subjects</h2>
          <p>Manage your subjects and topics in a structured format.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
          <h2>👥 Collaborate with Groups</h2>
          <p>Share notes and work together in real time.</p>
        </div>

        <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
          <h2>📂 File Management</h2>
          <p>Keep all academic files in one secure location.</p>
        </div>
      </div>

      <div className="about-highlights" data-aos="fade-up">
        <h2>✨ Why Choose Ping Note?</h2>
        <ul>
          <li>✅ Fast, clean and responsive experience</li>
          <li>✅ Secure file storage & smart search</li>
          <li>✅ Built for modern collaborative education</li>
        </ul>
      </div>

      <div className="about-footer" data-aos="fade-in">
        <p>🚀 Built with ❤ for modern education.</p>
        <p>📞 support@pingnote.app</p>
      </div>

      <div className="developer-credits" data-aos="fade-up">
        <p>👨‍💻 Developed by: <strong>Garv Pathak, Divyansh Varshney, Gaurav Chaudhary, Amit Kumar, Hardeep Beniwal</strong></p>
      </div>
    </div>
  );
};

export default About;
