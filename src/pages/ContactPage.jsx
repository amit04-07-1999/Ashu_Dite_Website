import React from 'react';

const ContactPage = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl lg:text-2xl text-orange-50">
              Ready to start your health journey? Consult directly with Dr. Ashu Basist every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Consultation Information</h2>

                  {/* Phone */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+917428430175" className="text-orange-500 hover:text-orange-500">
                          +91 74284 30175
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <a href="mailto:ashukumar8869@gmail.com" className="text-orange-500 hover:text-orange-500">
                          ashukumar8869@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  {/* <div className="mb-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          123 Wellness Street<br />
                          Suite 456<br />
                          Health City, HC 12345
                        </p>
                      </div>
                    </div>
                  </div> */}

                  {/* WhatsApp */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                        <a
                          href="https://wa.me/917428430175?text=Hi%20Dr.%20Ashu%20Basist!%20I%20would%20like%20to%20discuss%20a%20nutrition%20plan."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-500"
                        >
                          Message on WhatsApp
                        </a>
                        <p className="text-gray-600 text-sm mt-2">Quick updates and personalised follow-ups directly with Dr. Ashu Basist.</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      {/* Facebook */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                        aria-label="Facebook"
                      >
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/dieticsandnutrition2025?utm_source=qr&igsh=MWRwaDMzbmVyMGllYw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                        aria-label="Instagram"
                      >
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                          <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      {/* LinkedIn */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      {/* YouTube */}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors"
                        aria-label="YouTube"
                      >
                        <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a2.946 2.946 0 0 0-2.072-2.083C19.641 3.5 12 3.5 12 3.5s-7.641 0-9.426.603a2.946 2.946 0 0 0-2.072 2.083C0 7.987 0 12 0 12s0 4.013.502 5.814a2.946 2.946 0 0 0 2.072 2.084C4.359 20.5 12 20.5 12 20.5s7.641 0 9.426-.602a2.946 2.946 0 0 0 2.072-2.084C24 16.013 24 12 24 12s0-4.013-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Options */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Dr. Ashu Basist</h2>
                  <p className="text-gray-600 mb-10">
                    Reach out directly to Dr. Ashu Basist for personalised nutrition guidance. Choose the channel that suits you
                    best and get expert advice without waiting for a backend form submission.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <a
                      href="tel:+917428430175"
                      className="group bg-orange-50 hover:bg-orange-100 transition-all duration-300 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Dr. Ashu</h3>
                      <p className="text-gray-600 mb-3">Speak directly with the doctor.</p>
                      <span className="text-orange-500 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        Call Now
                      </span>
                    </a>

                    <a
                      href="mailto:ashukumar8869@gmail.com"
                      className="group bg-orange-50 hover:bg-orange-100 transition-all duration-300 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Dr. Ashu</h3>
                      <p className="text-gray-600 mb-3">Share reports or request a detailed plan.</p>
                      <span className="text-orange-500 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        Send Email
                      </span>
                    </a>

                    <a
                      href="https://wa.me/917428430175?text=Hi%20Dr.%20Ashu%20Basist!%20I%20would%20like%20to%20know%20more."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-orange-50 hover:bg-orange-100 transition-all duration-300 rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-lg"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Dr. Ashu</h3>
                      <p className="text-gray-600 mb-3">Best for quick questions and follow-ups.</p>
                      <span className="text-orange-500 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                        Start a chat now
                      </span>
                    </a>
                  </div>

                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Response Time</h3>
                          <p className="text-gray-600">Most enquiries are answered Monday to Saturday, 9:00 AM - 8:00 PM.</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-orange-500 font-semibold shadow-sm">
                        Direct consultation with Dr. Ashu
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
              Visit Our Clinic
            </h2>
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="text-sm">123 Wellness Street, Suite 456, Health City, HC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;

