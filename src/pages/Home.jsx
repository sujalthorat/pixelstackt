import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="section hero hero-bg">
  <h1>
    Modern Web Design & <br />
    Scalable Web Applications
  </h1>

  <p className="hero-text">
  PixelStack Technologies is a modern web development company specializing in
professional website design, web development, React web applications, and
admin dashboards. We help startups and businesses build fast, secure, and
scalable digital solutions using modern technologies and clean UI design.

  </p>

  <div className="hero-buttons">
    <button onClick={() => navigate("/services")}>Our Services</button>
    <button className="outline" onClick={() => navigate("/contact")}>
      Contact Us
    </button>
  </div>
</section>

      {/* ABOUT SHORT INTRO */}
      <section className="section">
  <h2>Who We Are</h2>

  <p className="section-text">
    PixelStack Technologies is a modern web solutions company focused on
    delivering high-quality websites, web applications, and admin dashboards.
  </p>

  <p className="section-text">
    As a newly established company, we bring fresh ideas, modern tools,
    and a strong commitment to quality, performance, and client satisfaction.
  </p>
</section>


      {/* SERVICES PREVIEW */}
      <section className="section">
        <h2>Our Services</h2>

        <div className="cards">
          <div
            className="card"
            onClick={() => navigate("/services/web-design")}
          >
            <h3>Web Design</h3>
            <p>
              Clean, modern, and responsive website designs that attract users
              and build trust.
            </p>
          </div>

          <div
            className="card"
            onClick={() => navigate("/services/website-development")}
          >
            <h3>Website Development</h3>
            <p>
              Fast, secure, and scalable websites built using modern web
              technologies.
            </p>
          </div>

          <div
            className="card"
            onClick={() => navigate("/services/react-apps")}
          >
            <h3>React Web Applications</h3>
            <p>
              Interactive and dynamic web applications developed using React and
              modern tools.
            </p>
          </div>

          <div
            className="card"
            onClick={() => navigate("/services/admin-dashboards")}
          >
            <h3>Admin Dashboards</h3>
            <p>
              Powerful admin panels to manage data, users, and business
              operations efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
<section className="section why-choose">
  <h2>Why Choose PixelStack Technologies</h2>

  <div className="cards">
    <div className="card">
      <h3>Modern Technologies ⚡</h3>
      <p>
        We use the latest tools and frameworks like React and modern JavaScript
        to build scalable and future-ready applications.
      </p>
    </div>

    <div className="card">
      <h3>Clean & Responsive Design 🎨</h3>
      <p>
        Our designs are clean, modern, and fully responsive across all devices.
      </p>
    </div>

    <div className="card">
      <h3>Fast Performance 🚀</h3>
      <p>
        Optimized code and best practices ensure fast-loading and smooth
        applications.
      </p>
    </div>

    <div className="card">
      <h3>Client-Focused Approach 🤝</h3>
      <p>
        We prioritize client needs and deliver solutions that create real value.
      </p>
    </div>
  </div>
</section>


      {/* CALL TO ACTION */}
      <section className="section hero">
        <h2>Let’s Build Something Great Together</h2>

        <p>
          Have an idea or need a website? We’re ready to help you turn your vision
          into reality.
        </p>

        <button onClick={() => navigate("/contact")}>
          Contact Us
        </button>
      </section>
    </>
  );
}

export default Home;
