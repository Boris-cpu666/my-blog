'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    // 模拟异步提交
    setTimeout(() => {
      setLoading(false);
      setSuccess('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-h1 text-white mb-4">Get in Touch</h1>
        <p className="text-xl text-subtext mb-12">
          Have a question, a project idea, or just want to say hi? Feel free to reach out.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="input w-full"
              placeholder="Elon Musk"
              value={form.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="input w-full"
              placeholder="elon@tesla.com"
              value={form.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              className="input w-full"
              placeholder="I have an amazing idea for a new AI project..."
              value={form.message}
              onChange={handleChange}
              disabled={loading}
            ></textarea>
          </div>
          {error && <div className="text-error text-sm text-center">{error}</div>}
          {success && <div className="text-success text-sm text-center">{success}</div>}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 