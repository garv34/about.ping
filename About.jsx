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
      {/* About Header - Project Info */}
      <div className="about-header" data-aos="fade-down">
        <h1>About Ping Note</h1>
        <p>
          Ping Note is a digital platform built to help students and teachers
          collaborate, share notes, and manage academic resources efficiently.
        </p>
      </div>

      {/* About Features Section */}
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

      {/* Developed By Section */}
      <div className="developer-section" data-aos="fade-up">
        <h2>Developed By</h2>
        <div className="developer-cards">
          <div className="dev-card" data-aos="zoom-in">
            <div className="dev-avatar initials" style={{ backgroundColor: "#004aad" }}>
              GP
            </div>
            <h3>Garv Pathak</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="dev-card" data-aos="zoom-in" data-aos-delay="100">
            <div className="dev-avatar initials" style={{ backgroundColor: "#007bff" }}>
              AK
            </div>
            <h3>Amit Kumar</h3>
            <p>Frontend Developer</p>
          </div>
          <div className="dev-card" data-aos="zoom-in" data-aos-delay="200">
            <div className="dev-avatar initials" style={{ backgroundColor: "#0056b3" }}>
              GC
            </div>
            <h3>Gaurav Chaudhary</h3>
            <p>Database Specialist</p>
          </div>
          <div className="dev-card" data-aos="zoom-in" data-aos-delay="300">
            <div className="dev-avatar initials" style={{ backgroundColor: "#003d80" }}>
              DV
            </div>
            <h3>Divyansh Varshney</h3>
            <p>Backend Developer</p>
          </div>
          <div className="dev-card" data-aos="zoom-in" data-aos-delay="400">
            <div className="dev-avatar initials" style={{ backgroundColor: "#00264d" }}>
              HB
            </div>
            <h3>Hardeep Beniwal</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="about-footer" data-aos="fade-in">
        <p>🚀 Built with ❤ for modern education.</p>
        <p>📞 support@pingnote.app</p>
      </div>
    </div>
  );
};

export default About;
