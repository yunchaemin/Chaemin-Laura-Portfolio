import React, { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Globe, Send, CornerDownRight } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Construct pre-populated mailto link for seamless email client integration (e.g., Outlook)
    const emailAddress = 'chaemin.yun.pm@gmail.com';
    const emailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Chaemin,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    
    const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;
    
    // Open in mail client
    window.location.href = mailtoUrl;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark pt-40 md:pt-44 pb-24 px-6 md:px-12 lg:px-24 font-sans selection:bg-rose-500 selection:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* Left column: Contact info block */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-mono text-xs text-rose-500 uppercase tracking-widest font-bold">
              <span>Get In Touch</span>
              <span className="w-12 h-[1px] bg-rose-500" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-neutral-900 leading-none">
              Let's Connect
            </h1>
            <p className="font-sans text-neutral-600 text-sm leading-relaxed">
              Have a project, campaign, or team workflows that require premium coordination? Reach out to discuss how we can partner.
            </p>
          </div>

          {/* Quick contact tags */}
          <div className="space-y-6 pt-4">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-rose-50 border border-rose-100 text-rose-500 rounded-none">
                <Mail size={16} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-neutral-400 block tracking-widest uppercase">EMAIL DIRECT</span>
                <a 
                  href="mailto:chaemin.yun.pm@gmail.com" 
                  className="font-serif text-xl text-neutral-800 hover:text-rose-500 transition-colors duration-300"
                >
                  chaemin.yun.pm@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-rose-50 border border-rose-100 text-rose-500 rounded-none">
                <MapPin size={16} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-neutral-400 block tracking-widest uppercase">LOCATION</span>
                <span className="font-serif text-xl text-neutral-800">
                  Seoul, South Korea
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-rose-50 border border-rose-100 text-rose-500 rounded-none">
                <Globe size={16} />
              </div>
              <div>
                <span className="font-mono text-[9px] text-neutral-400 block tracking-widest uppercase">OPERATIONAL HUB</span>
                <span className="font-serif text-xl text-neutral-800">
                  Global & Domestic Remote
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white border border-neutral-200/60 font-mono text-xs text-neutral-500 space-y-1">
            <div className="flex items-center space-x-2 text-rose-500 font-bold mb-2">
              <CornerDownRight size={14} />
              <span>OUTLOOK INTEGRATION</span>
            </div>
            <p className="leading-relaxed">
              Submitting this form compiles and initializes an authentic draft directly in your preferred desktop or web email client.
            </p>
          </div>
        </div>

        {/* Right column: Editorial form styling */}
        <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 md:p-12 relative shadow-xl">
          {/* Subtle design accents */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-neutral-300" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-neutral-300" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-neutral-300" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-neutral-300" />

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                  YOUR NAME <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alexis Sévigny"
                  className="w-full bg-transparent border-b border-neutral-300 focus:border-rose-500 py-2.5 text-neutral-800 text-sm focus:outline-none transition-colors duration-350"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                  EMAIL ADDRESS <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alexis@company.com"
                  className="w-full bg-transparent border-b border-neutral-300 focus:border-rose-500 py-2.5 text-neutral-800 text-sm focus:outline-none transition-colors duration-350"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                SUBJECT <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Campaign Coordination Proposal"
                className="w-full bg-transparent border-b border-neutral-300 focus:border-rose-500 py-2.5 text-neutral-800 text-sm focus:outline-none transition-colors duration-350"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-bold">
                MESSAGE <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share detail specifications of your request..."
                className="w-full bg-transparent border-b border-neutral-300 focus:border-rose-500 py-2.5 text-neutral-800 text-sm focus:outline-none transition-colors duration-350 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto bg-rose-600 hover:bg-neutral-900 text-white font-mono text-xs tracking-widest uppercase py-4 px-10 rounded-none transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>SEND DIRECT DRAFT</span>
                <Send size={12} />
              </button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-600 font-mono text-xs text-center md:text-left mt-4"
              >
                ✓ Draft prepared. Opening default mail client...
              </motion.div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
