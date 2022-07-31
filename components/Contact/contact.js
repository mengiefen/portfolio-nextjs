import Container, { Button } from "./contact.styled";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="welcome">
        <h2>Contact me</h2>
        <p>
          I&apos;m always interested in hearing about new projects, so if
          you&apos;d like to chat please get in touch.
        </p>
      </div>
      <form ref={form} onSubmit={handleSubmit}>
        <ul>
          <li>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </li>
          <li>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </li>

          <li>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </li>
        </ul>
        <Button className="form-btn" type="submit" whileTap={{ scale: 0.8 }}>
          Send message
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
