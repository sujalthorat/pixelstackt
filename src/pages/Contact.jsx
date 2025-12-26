function Contact() {
  return (
    <section className="section">
      <h2>Contact Us</h2>
      <p>Get in touch with PixelStack Technologies to discuss your project requirements, ideas, or business goals. We work closely with startups and growing businesses to deliver clean design, modern development, and client-focused solutions.

Fill out the contact form or reach out directly, and we’ll respond as quickly as possible.</p>

      {/* Contact Form */}
      <form className="card" style={{ maxWidth: "420px", margin: "auto" }}>
        <input placeholder="Your Name" style={inputStyle} />
        <input placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Your Message" style={inputStyle}></textarea>
        <button style={btnStyle}>Send Message</button>
      </form>

      {/* Direct Contact Links */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <p>
          📧 Email:{" "}
          <a href="mailto:pixelstacktechnologies@gmail.com">
            pixelstacktechnologies@gmail.com
          </a>
        </p>

        <p>
          📸 Instagram:{" "}
          <a
            href="https://www.instagram.com/pixelstacktechnologies?igsh=eTY3eDBzazkzMG80"
            target="_blank"
            rel="noreferrer"
          >
            @pixelstacktechnologies
          </a>
        </p>

        <p>
          💬 WhatsApp:{" "}
          <a
            href="https://wa.me/918010717086"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Contact;
