import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-6">
              Get In <span className="bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 font-sans max-w-3xl mx-auto px-4">
              Ready to start your next project? Let's work together to create something amazing.
              I'm always excited to discuss new opportunities and challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <a
                    key={title}
                    href={href}
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs sm:text-sm font-medium">{title}</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-semibold text-sm sm:text-base">Open to Opportunities</span>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-300 text-sm sm:text-base">
                    🚀 <strong>Freelance Projects:</strong> Available for new client projects and collaborations
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base">
                    💼 <strong>Job Opportunities:</strong> Open to full-time and contract positions
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base">
                    🤝 <strong>Partnerships:</strong> Interested in innovative projects and startup opportunities
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-green-500/20">
                  <p className="text-green-300 text-xs sm:text-sm font-medium">
                    Let's discuss how we can work together!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <form action="https://formspree.io/f/yourFormId" method="POST" className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-blue-500 transition-all duration-200 resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <Send size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      <span>Send Message</span>
                </button>

                {/* Encouragement Message */}
                <div className="text-center pt-4">
                  <p className="text-slate-300 text-sm sm:text-base font-medium">
                    💬 Send me a message or drop me an email - I'll reply within 24 hours!
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Let's discuss your project, job opportunity, or collaboration idea.
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg text-sm sm:text-base">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm sm:text-base">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;