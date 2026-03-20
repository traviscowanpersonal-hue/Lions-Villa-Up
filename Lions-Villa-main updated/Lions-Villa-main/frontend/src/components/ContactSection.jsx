import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import { Send, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: '',
    message: '',
    honeypot: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill in your name, email, and phone number.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Thanks \u2014 we'll get back to you shortly!");
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', check_in: '', check_out: '', message: '', honeypot: '' });
      } else {
        toast.error('Something went wrong. Please try again or call us directly.');
      }
    } catch (err) {
      toast.error('Unable to send. Please call us at (876) 986-7353.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ background: 'hsl(28 20% 5%)' }}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left info */}
          <motion.div
            className="lg:col-span-2 flex flex-col justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Get in Touch"
              title="Book Your Stay"
              subtitle="Fill in the form and we'll respond fast. Or call us directly for instant availability."
            />
            <a
              href="tel:+18769867353"
              className="inline-flex items-center gap-3 px-5 py-4 rounded-xl mb-6 transition-colors duration-200 hover:brightness-105"
              style={{ background: '#D4A017', color: '#0B0A08', fontWeight: 600 }}
            >
              <Phone size={20} />
              <div>
                <div className="text-xs font-medium opacity-75">Call Us Directly</div>
                <div className="text-lg font-bold">(876) 986-7353</div>
              </div>
            </a>
            <p className="text-xs" style={{ color: 'hsl(40 10% 55%)' }}>
              17 Chapleton Road Clarendon, May Pen, Jamaica
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div
                className="rounded-2xl p-10 flex flex-col items-center justify-center text-center border"
                style={{ background: 'hsl(28 28% 6%)', borderColor: 'rgba(212,160,23,0.3)' }}
              >
                <CheckCircle size={48} style={{ color: '#D4A017' }} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#FFF9EE' }}>
                  Inquiry Sent!
                </h3>
                <p className="text-sm mb-6" style={{ color: 'hsl(40 10% 65%)' }}>
                  Thanks for reaching out to Lion's Villa. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors duration-200 hover:border-[#D4A017]"
                  style={{ borderColor: 'hsl(35 25% 25%)', color: '#D4A017' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                data-testid="contact-form"
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 sm:p-8 border"
                style={{ background: 'hsl(28 28% 6%)', borderColor: 'hsl(35 25% 18%)' }}
              >
                {/* Honeypot - hidden */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold" style={{ color: 'hsl(40 10% 72%)' }}>Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      data-testid="contact-form-name-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{
                        background: 'hsl(28 20% 8%)',
                        borderColor: 'hsl(35 25% 20%)',
                        color: '#FFF9EE',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#D4A017')}
                      onBlur={e => (e.target.style.borderColor = 'hsl(35 25% 20%)')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold" style={{ color: 'hsl(40 10% 72%)' }}>Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="contact-form-email-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{
                        background: 'hsl(28 20% 8%)',
                        borderColor: 'hsl(35 25% 20%)',
                        color: '#FFF9EE',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#D4A017')}
                      onBlur={e => (e.target.style.borderColor = 'hsl(35 25% 20%)')}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="text-xs font-semibold mb-1.5 block" style={{ color: 'hsl(40 10% 72%)' }}>Phone Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    data-testid="contact-form-phone-input"
                    placeholder="(876) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border"
                    style={{
                      background: 'hsl(28 20% 8%)',
                      borderColor: 'hsl(35 25% 20%)',
                      color: '#FFF9EE',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#D4A017')}
                    onBlur={e => (e.target.style.borderColor = 'hsl(35 25% 20%)')}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="check_in" className="text-xs font-semibold" style={{ color: 'hsl(40 10% 72%)' }}>Check-in Date</label>
                    <input
                      id="check_in"
                      name="check_in"
                      type="date"
                      data-testid="contact-form-checkin-input"
                      value={form.check_in}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{
                        background: 'hsl(28 20% 8%)',
                        borderColor: 'hsl(35 25% 20%)',
                        color: form.check_in ? '#FFF9EE' : 'hsl(40 10% 45%)',
                        colorScheme: 'dark',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#D4A017')}
                      onBlur={e => (e.target.style.borderColor = 'hsl(35 25% 20%)')}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="check_out" className="text-xs font-semibold" style={{ color: 'hsl(40 10% 72%)' }}>Check-out Date</label>
                    <input
                      id="check_out"
                      name="check_out"
                      type="date"
                      data-testid="contact-form-checkout-input"
                      value={form.check_out}
                      onChange={handleChange}
                      className="px-4 py-3 rounded-xl text-sm outline-none border"
                      style={{
                        background: 'hsl(28 20% 8%)',
                        borderColor: 'hsl(35 25% 20%)',
                        color: form.check_out ? '#FFF9EE' : 'hsl(40 10% 45%)',
                        colorScheme: 'dark',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#D4A017')}
                      onBlur={e => (e.target.style.borderColor = 'hsl(35 25% 20%)')}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="text-xs font-semibold mb-1.5 block" style={{ color: 'hsl(40 10% 72%)' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-form-message-textarea"
                    placeholder="Tell us about your stay — number of guests, preferences, questions..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border resize-none"
                    style={{
                      background: 'hsl(28 20% 8%)',
                      borderColor: 'hsl(35 25% 20%)',
                      color: '#FFF9EE',
                    }}
                    onFocus={e => (e.target.style.borderColor = '#D4A017')}
                    onBlur={e => (e.target.style.borderColor = 'hsl(35 25% 20%)')}
                  />
                </div>

                <button
                  type="submit"
                  data-testid="contact-form-submit-button"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-colors duration-200 disabled:opacity-60"
                  style={{ background: '#D4A017', color: '#0B0A08' }}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeLinecap="round" /></svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={17} />
                      Send Booking Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-center mt-3" style={{ color: 'hsl(40 10% 50%)' }}>
                  We respond fast — or call <a href="tel:+18769867353" className="underline" style={{ color: '#D4A017' }}>(876) 986-7353</a> for instant availability.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
