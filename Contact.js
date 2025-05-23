# Contact.js
```
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You could add form validation or API call here
    setSubmitted(true);
  };

  if (submitted) {
    return <p>Thank you, {formData.name}! Your message has been sent.</p>;
  }

  return (
    <section>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: 6 }}>
          Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', padding: 8, marginBottom: 15, borderRadius: 4, border: '1px solid #ccc' }}
        />

        <label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', padding: 8, marginBottom: 15, borderRadius: 4, border: '1px solid #ccc' }}
        />

        <label htmlFor="message" style={{ display: 'block', marginBottom: 6 }}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          style={{ width: '100%', padding: 8, marginBottom: 15, borderRadius: 4, border: '1px solid #ccc' }}
        />

        <button type="submit" style={{ padding: '10px 20px', background: '#0077cc', color: '#fff', border: 'none', borderRadius: 4 }}>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
```
