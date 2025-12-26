function About() {
  return (
    <>
      {/* ABOUT INTRO */}
      <section className="section about-hero">
        <h2>About PixelStack Technologies</h2>
       <p>PixelStack Technologies is a professional web solutions company focused on
delivering high-quality websites, web applications, and admin dashboards.
Although newly established, our team is driven by modern development practices,
performance optimization, and user-focused design.

We specialize in responsive website design, custom web development, React-based
applications, and scalable admin dashboards. Our goal is to help startups and
growing businesses create a strong online presence using the latest web
technologies.
</p>
      </section>

      {/* COMPANY INFO */}
      <section className="section about-info">
        <div className="about-grid">
          <div className="about-card">
            <h3>Who We Are</h3>
            <p>
              We are a newly launched technology company driven by passion,
              innovation, and a commitment to quality. We help startups and
              businesses build a strong online presence.
            </p>
          </div>

          <div className="about-card">
            <h3>What We Do</h3>
            <p>
              We specialize in website design, web development, React web
              applications, and admin dashboards that improve business
              efficiency.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver modern, reliable, and user-friendly
              digital solutions that help our clients grow confidently.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section about-why">
        <h2>Why Choose PixelStack Technologies</h2>

        <div className="cards">
          <div className="card">
            <h4>🚀 Modern Technologies</h4>
            <p>We use modern tools like React, Vite, and clean UI practices.</p>
          </div>

          <div className="card">
            <h4>🎨 Clean & Responsive Design</h4>
            <p>Every website is optimized for mobile, tablet, and desktop.</p>
          </div>

          <div className="card">
            <h4>⚡ Fast Performance</h4>
            <p>Optimized code ensures fast loading and smooth performance.</p>
          </div>

          <div className="card">
            <h4>🤝 Client-Focused Approach</h4>
            <p>We listen, understand, and build solutions tailored to you.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
