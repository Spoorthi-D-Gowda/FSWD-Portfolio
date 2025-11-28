import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="resume-container">
      <h1 className="name">Spoorthi C D</h1>
      <p className="summary">
        Motivated and detail-oriented Computer Science Engineering student with strong skills in web development,
        programming, and data structures. Seeking opportunities to apply technical skills and academic knowledge to
        solve real-world problems.
      </p>

      <section>
        <h2>Contact</h2>
        <p><strong>Phone:</strong> +91 8217308812</p>
        <p><strong>Email:</strong> spoorthicd925@gmail.com</p>
        <p><strong>Location:</strong> Hassan, Karnataka</p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>B.E. in Computer Science and Engineering</strong><br />
        Malnad College of Engineering, VTU (2022 – Present) – CGPA: 8.67</p>
        <p><strong>12th Grade (PUC)</strong><br />
        Master PU College, Hassan – 87.17%</p>
        <p><strong>10th Grade (SSLC)</strong><br />
        CKS English School, Hassan – 81.92%</p>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>Languages: C, Python, Java</li>
          <li>Web Development: HTML, CSS, JavaScript</li>
          <li>Core Subjects: Data Structures & Algorithms (DSA), mysql</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <h3>Farm2Home – Connecting Farmers Directly with Customers</h3>
        <ul>
          <li>Developed a responsive website to connect farmers directly with customers, reducing dependency on intermediaries.Built using HTML, CSS, JavaScript with backend integration.</li>
          <li>Served as Team Lead.</li>
        </ul>

         <h3>SiloDispatch – Smart Last-Mile Logistics Platform</h3>
    <ul>
      <li>Backend dispatch system using FastAPI & PostgreSQL.Implemented K-Means clustering for order grouping.</li>
      <li>Added OTP-based delivery verification using Twilio.Enabled real-time COD tracking.</li>
    </ul>
  
      </section>
      <section>
        <h2> ongoing Projects</h2>
         <ul>
      <li>
        <strong>Ovarian Cancer Detection using ML Techniques</strong> —
        Early diagnosis using Fuzzy Gabor filter, t-SNE, and ResNet models.
      </li>
      <li>
        <strong>Alarm Fault Identification – Industry Project</strong> —
        Pattern identification and dataset study to detect abnormal system alarms.
      </li>
    </ul>
      </section>
      <section>
        <h2>Internship & Training</h2>
        <p>Completed <strong>"Artificial Intelligence with Python"</strong> by Acmegrade</p>
        <p>Duration: March 11 – May 11, 2025</p>
      </section>

      <section>
        <h2>Languages</h2>
        <p>English (Fluent), Kannada (Native), Hindi (Proficient)</p>
      </section>

      <section>
        <h2>Additional Information</h2>
        <ul>
          <li>Team Lead – College Mini Project (2025)</li>
          <li>Treasurer – Local Nonprofit Organization</li>
        </ul>
      </section>

      <section>
        <h2>Strengths</h2>
        <p>Strong problem-solving, Quick learner, Adaptable, Team player</p>
      </section>

      <section>
        <h2>Interests</h2>
        <p>Building personal web projects, Open source contribution, Learning new frameworks</p>
      </section>
    </div>
  );
};

export default Portfolio;
