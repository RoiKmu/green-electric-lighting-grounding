import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Green Electric Industrial Supply",
  description: "Get in touch with Green Electric Industrial Supply for quotes, inquiries, and support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-industrial-950 text-white sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <div>
                <h1 className="text-2xl font-bold text-green-electric-400 flex items-start">
                  Green Electric<sup className="text-[10px] ml-0.5 mt-1 text-green-electric-400">®</sup>
                </h1>
                <p className="text-xs text-industrial-400 tracking-wider uppercase">Industrial Supply</p>
              </div>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/about" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">About Us</Link>
              <Link href="/products/machines" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Machines</Link>
              <Link href="/products/tools" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Tools</Link>
              <Link href="/products/materials" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Raw Materials</Link>
              <Link href="/products/accessories" className="text-industrial-300 hover:text-green-electric-400 font-medium transition-colors">Accessories</Link>
              <Link href="/contact" className="text-green-electric-400 font-medium">Contact</Link>
            </div>
            <Link href="/contact" className="px-6 py-2.5 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-medium transition-all duration-300">
              Get Quote
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-industrial-900 via-industrial-800 to-green-electric-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-green-electric-600/20 text-green-electric-400 rounded-full text-sm font-semibold mb-6">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-industrial-300 leading-relaxed">
              Have questions about our products or need a quote? We&apos;re here to help. Reach out to our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-industrial-900 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">Email</h3>
                    <a href="mailto:grace.wang@wuxigreen.com" className="text-green-electric-600 hover:text-green-electric-700 text-lg">
                      grace.wang@wuxigreen.com
                    </a>
                    <p className="text-industrial-500 mt-1">We typically respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">Phone</h3>
                    <a href="tel:+8617766353591" className="text-green-electric-600 hover:text-green-electric-700 text-lg">
                      +86 177 6635 3591
                    </a>
                    <p className="text-industrial-500 mt-1">Monday - Friday, 9:00 AM - 6:00 PM (CST)</p>
                  </div>
                </div>

                {/* WeChat */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-7.062-6.122zm-2.036 2.87c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982z"/>
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">WeChat</h3>
                    <p className="text-industrial-700 text-lg">Available on request</p>
                    <p className="text-industrial-500 mt-1">Scan QR code or add by phone number</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-green-electric-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-electric-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-industrial-900 mb-1">Location</h3>
                    <p className="text-industrial-700 text-lg">Wuxi, Jiangsu Province, China</p>
                    <p className="text-industrial-500 mt-1">Serving customers worldwide</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-12 p-6 bg-industrial-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-industrial-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-industrial-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-industrial-400">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-industrial-500 mt-4">* All times are China Standard Time (CST/UTC+8)</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl border border-industrial-100 p-8">
                <h2 className="text-2xl font-bold text-industrial-900 mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-industrial-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-industrial-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-industrial-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-industrial-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-industrial-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="machines">Machines Inquiry</option>
                      <option value="tools">Tools Inquiry</option>
                      <option value="materials">Raw Materials Inquiry</option>
                      <option value="accessories">Accessories Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-industrial-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-industrial-200 rounded-lg focus:ring-2 focus:ring-green-electric-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-green-electric-600 text-white rounded-lg hover:bg-green-electric-500 font-semibold text-lg transition-all duration-300 shadow-lg shadow-green-electric-900/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <h3 className="font-bold text-white text-lg">Green Electric</h3>
                <p className="text-xs text-industrial-500">Industrial Supply</p>
              </div>
              <p className="text-industrial-400 leading-relaxed">
                Your trusted partner for industrial machinery, tools, and materials since 1993.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Products</h4>
              <ul className="space-y-3 text-industrial-400">
                <li><Link href="/products/machines" className="hover:text-green-electric-400 transition-colors">Machines</Link></li>
                <li><Link href="/products/tools" className="hover:text-green-electric-400 transition-colors">Tools</Link></li>
                <li><Link href="/products/materials" className="hover:text-green-electric-400 transition-colors">Raw Materials</Link></li>
                <li><Link href="/products/accessories" className="hover:text-green-electric-400 transition-colors">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3 text-industrial-400">
                <li><Link href="/about" className="hover:text-green-electric-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-green-electric-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-3 text-industrial-400">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  grace.wang@wuxigreen.com
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-electric-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +86 177 6635 3591
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-industrial-800 pt-8 text-center text-industrial-500">
            <p>&copy; 2026 Green Electric Industrial Supply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
