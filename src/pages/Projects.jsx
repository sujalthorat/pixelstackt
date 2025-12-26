function Projects() {
  const projects = [
    {
      title: "Expense Tracker App",
      description: "Track daily income and expenses with charts and reports.",
      tech: "React, Vite, CSS",
      icon: "💰",
    },
    {
      title: "Business Website",
      description: "Professional business website with responsive design.",
      tech: "HTML, CSS, JavaScript",
      icon: "🌐",
    },
    {
      title: "Admin Dashboard",
      description: "Secure admin panel with charts, tables, and user roles.",
      tech: "React, Chart.js",
      icon: "📊",
    },
  ];

  return (
    <section className="section">
      <h2>Our Projects</h2>
      <p>We work on a wide range of projects including startup websites, business portfolios, admin dashboards, and full-stack web applications. Our development approach focuses on modern technologies, clean code, mobile-first design, and fast loading performance.

Our projects are built using technologies such as React.js, JavaScript, HTML5, CSS3, REST APIs, and modern UI practices to ensure long-term scalability and user satisfaction.</p>

      <div className="cards">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <small><strong>Tech:</strong> {project.tech}</small>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
