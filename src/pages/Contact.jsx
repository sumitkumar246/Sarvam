import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://Sarvam-1.onrender.com/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Enquiry submitted successfully");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Backend Error:", error);
      alert("Backend not connected");
    }
  };

  return (
    <section className="contact-section">
      <form className="premium-form" onSubmit={handleSubmit}>
        <span>Get In Touch</span>
        <h2>Book Your Consultation</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
        />

        <button type="submit">Submit Enquiry</button>
      </form>
    </section>
  );
};

export default Contact;