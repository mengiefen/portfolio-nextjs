import Container, { Button } from './contact.styled';
import { useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import INBOX from '../../public/inbox.svg';
import ENVELOPE from '../../public/envelope.svg';
import { motion } from 'framer-motion';
import FlashMessage from '../FlashMessages/FlashMessage';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [flash, setFlash] = useState({
    type: '',
    show: false,
    message: 'Your message is successfully sent! I will get back to you soon.',
    duration: 10000,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setFlash({
          ...flash,
          type: 'success',
          show: true,
          message:
            'Your message is succesfully delivered. I will reach out to your ',
        });
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      },
      (error) => {
        setFlash({
          ...flash,
          type: 'alert',
          show: true,
          message: 'Your message was not sent.',
        });
      },
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
      {flash.show && (
        <FlashMessage
          message={flash.message}
          duration={flash.duration}
          type={flash.type}
        />
      )}
      <div className="welcome">
        <h2>Contact me</h2>
        <div className="border-bottom"></div>
      </div>
      <div className="form-holder">
        <form ref={form} onSubmit={handleSubmit}>
          <p>
            I&apos;m always interested in hearing about new projects, so if
            you&apos;d like to chat please get in touch.
          </p>
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
        <motion.div
          initial={{ scale: 0.5, x: 100 }}
          whileInView={{ scale: 0.75, x: 0 }}
          transition={{ ease: 'easeOut', duration: 1 }}
          className="contact-image"
        >
          <Image src={ENVELOPE} width={300} height={300} alt="picture of me" />
        </motion.div>
      </div>
    </Container>
  );
};

export default Contact;
