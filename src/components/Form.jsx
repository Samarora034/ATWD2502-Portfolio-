import React, { useState, useRef } from "react";
import "../styles/Form.css";

const ContactForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    setFormData({ name, email, message });
    console.log("Form Data Submitted:", formData);
    alert("Message Sent Successfully!");
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          ref={nameRef}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          ref={emailRef}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          ref={messageRef}
          required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;

