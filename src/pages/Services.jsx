import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="section">
      <h2>Our Services</h2>
      <p>Our services include modern website design, full-stack web development,
React web applications, and admin dashboard development. We build clean,
responsive, and high-performance websites that work seamlessly across all
devices.

PixelStack Technologies focuses on delivering secure, scalable, and easy-to-use
solutions tailored to each client’s business needs.</p>

      <div className="cards">
        <div className="card">
          <Link to="/services/web-design">Web Design</Link>
        </div>

        <div className="card">
          <Link to="/services/website-development">
            Website Development
          </Link>
        </div>

        <div className="card">
          <Link to="/services/react-apps">
            React Web Applications
          </Link>
        </div>

        <div className="card">
          <Link to="/services/admin-dashboards">
            Admin Dashboards
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Services;
