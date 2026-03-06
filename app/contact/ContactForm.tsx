'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // 获取表单数据
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // 这里的 API 路由我们在下一步配置，目前先模拟请求
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setIsSuccess(true);
      // 可选：清空表单
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setErrorMsg('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-electric-50 border border-green-electric-200 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-electric-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-industrial-900 mb-2">Message Sent!</h3>
        <p className="text-industrial-600 mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-green-electric-600 font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-industrial-100 p-8">
      <h2 className="text-2xl font-bold text-industrial-900 mb-6">Send Us a Message</h2>
      
      {errorMsg && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-industrial-700 mb-2">Your Name *</label>
            <input
              type="text" id="name" name="name" required disabled={isSubmitting}
              className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-industrial-700 mb-2">Company</label>
            <input
              type="text" id="company" name="company" disabled={isSubmitting}
              className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-industrial-700 mb-2">Email Address *</label>
            <input
              type="email" id="email" name="email" required disabled={isSubmitting}
              className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-industrial-700 mb-2">Phone Number</label>
            <input
              type="tel" id="phone" name="phone" disabled={isSubmitting}
              className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-industrial-700 mb-2">Subject *</label>
          <select
            id="subject" name="subject" required disabled={isSubmitting}
            className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
          >
            <option value="">Select a subject</option>
            <option value="quote">Request a Quote</option>
            <option value="machines">Machines Inquiry</option>
            <option value="tools">Tools Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-industrial-700 mb-2">Message *</label>
          <textarea
            id="message" name="message" rows={5} required disabled={isSubmitting}
            className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:bg-gray-50"
            placeholder="Tell us about your requirements..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-electric-900/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}