
import React from 'react';
import Layout from '@/components/Layout';

const Apply = () => {
  return (
    <Layout>
      {/* Page Header Section */}
      <section id="how-to-apply-header" className="bg-dcd-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">How to Apply</h1>
            <p className="text-lg max-w-3xl">Step-by-step guidance for submitting your application to the Abu Dhabi Excellence Award for People of Determination Inclusion</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="bg-soft-beige py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <span className="text-dcd-purple hover:underline cursor-pointer">Home</span>
            <span className="mx-2 text-dcd-purple">/</span>
            <span className="text-charcoal">How to Apply</span>
          </div>
        </div>
      </div>

      {/* Registration Portal Section */}
      <section id="registration-portal" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-dcd-purple mb-4">Registration Portal</h2>
              <p className="text-lg mb-6">All applications for the Abu Dhabi Excellence Award must be submitted through our secure online Award Portal. The portal provides a streamlined application process with step-by-step guidance.</p>
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="mt-1">
                    <span className="text-emerald text-xl mr-3">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">UAE Pass Integration</h3>
                    <p>Our portal is integrated with UAE Pass for secure and simplified authentication. Government entities can log in directly using their UAE Pass credentials.</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <div className="mt-1">
                    <span className="text-emerald text-xl mr-3">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Secure Document Submission</h3>
                    <p>Safely upload all supporting materials and documents through our encrypted portal system.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1">
                    <span className="text-emerald text-xl mr-3">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Application Tracking</h3>
                    <p>Monitor your application status at any time through your organization's dashboard.</p>
                  </div>
                </div>
              </div>
              <button className="px-8 py-4 bg-gold text-charcoal rounded-lg font-bold hover:bg-gold/90 transition text-center cursor-pointer">
                Apply Now <span className="ml-2">→</span>
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="bg-soft-beige rounded-lg p-6 shadow-md">
                <div className="mb-6 text-center">
                  <span className="text-dcd-purple text-5xl mb-4 block">💻</span>
                  <h3 className="text-xl font-bold text-dcd-purple">Award Portal Features</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center p-3 bg-white rounded-lg">
                    <span className="text-sky-blue mr-3">🔒</span>
                    <span>Secure login with UAE Pass or dedicated account</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg">
                    <span className="text-sky-blue mr-3">💾</span>
                    <span>Save and resume your application at any time</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg">
                    <span className="text-sky-blue mr-3">📤</span>
                    <span>Upload supporting documents in multiple formats</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg">
                    <span className="text-sky-blue mr-3">🔔</span>
                    <span>Receive notifications about your application status</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg">
                    <span className="text-sky-blue mr-3">🌐</span>
                    <span>Bilingual interface in English and Arabic</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg">
                    <span className="text-sky-blue mr-3">🎧</span>
                    <span>Live chat support for technical assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps Section */}
      <section id="application-steps" className="py-12 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dcd-purple mb-4">Application Steps</h2>
            <p className="text-lg max-w-3xl mx-auto">Follow these four simple steps to complete your application for the Abu Dhabi Excellence Award</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div id="step-create-account" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-dcd-purple py-4 px-6 flex items-center">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Create Account / Log In</h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <span className="text-dcd-purple text-4xl mb-3 block">👤</span>
                </div>
                <p className="mb-4">Start by creating an account on our Award Portal or log in using your existing credentials.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Use UAE Pass for quick authentication (recommended for government entities)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Or create a dedicated account with your organization email</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Verify your email address to activate your account</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div id="step-fill-application" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-dcd-purple py-4 px-6 flex items-center">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">Fill Application Form</h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <span className="text-dcd-purple text-4xl mb-3 block">📝</span>
                </div>
                <p className="mb-4">Complete the online application form with details about your organization and inclusion initiatives.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Provide organization information and contact details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Select the award categories you're applying for (up to three)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Describe your inclusion initiatives and their impact</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div id="step-submit-materials" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-dcd-purple py-4 px-6 flex items-center">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Submit Supporting Materials</h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <span className="text-dcd-purple text-4xl mb-3 block">📤</span>
                </div>
                <p className="mb-4">Upload all required documents and supporting evidence for your application.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Upload organizational policies and procedures related to inclusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Provide evidence of implementation (photos, videos, testimonials)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Include metrics and impact data to support your application</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div id="step-review-confirm" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-dcd-purple py-4 px-6 flex items-center">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white">Review & Confirmation</h3>
              </div>
              <div className="p-6">
                <div className="mb-6 text-center">
                  <span className="text-dcd-purple text-4xl mb-3 block">✅</span>
                </div>
                <p className="mb-4">Review your entire application before final submission and receive confirmation.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Carefully review all information for accuracy and completeness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Submit your final application by the deadline</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald mt-1 mr-3">✓</span>
                    <span>Receive a confirmation email with your application reference number</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Dates Section */}
      <section id="key-dates" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dcd-purple mb-4">Key Dates</h2>
            <p className="text-lg max-w-3xl mx-auto">Mark these important dates in your calendar for the 2025 award cycle</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-dcd-purple transform -translate-x-1/2"></div>

            {/* Date 1 */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-dcd-purple">May 15, 2025</h3>
                <p className="text-lg font-medium">Applications Open</p>
                <p className="text-gray-600">The online portal opens for organizations to begin their applications</p>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full transform -translate-x-1/2 z-10"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-soft-beige p-4 rounded-lg shadow-md md:mt-0">
                  <p>Organizations can create accounts, review requirements, and begin gathering documentation</p>
                </div>
              </div>
            </div>

            {/* Date 2 */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                <div className="bg-soft-beige p-4 rounded-lg shadow-md md:mt-0">
                  <p>Last day to submit applications. Portal closes at 11:59 PM GST</p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full transform -translate-x-1/2 z-10"></div>
              <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                <h3 className="text-xl font-bold text-dcd-purple">September 30, 2025</h3>
                <p className="text-lg font-medium">Application Deadline</p>
                <p className="text-gray-600">Final day to complete and submit your application</p>
              </div>
            </div>

            {/* Date 3 */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-dcd-purple">October 15-30, 2025</h3>
                <p className="text-lg font-medium">Evaluation Period</p>
                <p className="text-gray-600">Review of applications by the award committee</p>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full transform -translate-x-1/2 z-10"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-soft-beige p-4 rounded-lg shadow-md md:mt-0">
                  <p>Initial screening and shortlisting of applications by sector experts and committee members</p>
                </div>
              </div>
            </div>

            {/* Date 4 */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-24 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1 mb-6 md:mb-0">
                <div className="bg-soft-beige p-4 rounded-lg shadow-md md:mt-0">
                  <p>Finalists will be notified and site visits scheduled for verification of submitted information</p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full transform -translate-x-1/2 z-10"></div>
              <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
                <h3 className="text-xl font-bold text-dcd-purple">November 10, 2025</h3>
                <p className="text-lg font-medium">Finalists Announced</p>
                <p className="text-gray-600">Shortlisted organizations are notified</p>
              </div>
            </div>

            {/* Date 5 */}
            <div className="flex flex-col md:flex-row items-center relative">
              <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                <h3 className="text-xl font-bold text-dcd-purple">December 15, 2025</h3>
                <p className="text-lg font-medium">Award Ceremony</p>
                <p className="text-gray-600">Winners announced at the official ceremony</p>
              </div>
              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-gold rounded-full transform -translate-x-1/2 z-10"></div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-soft-beige p-4 rounded-lg shadow-md md:mt-0">
                  <p>Official award ceremony in Abu Dhabi with government officials and stakeholders to recognize winners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="inline-block px-6 py-3 border-2 border-dcd-purple text-dcd-purple rounded-lg font-bold hover:bg-dcd-purple hover:text-white transition cursor-pointer">
              Download Full Timeline <span className="ml-2">⬇</span>
            </button>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="py-12 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dcd-purple mb-4">Guidelines for Applicants</h2>
            <p className="text-lg max-w-3xl mx-auto">Important tips and requirements to ensure your application meets all criteria</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-dcd-purple mb-4 flex items-center">
                <span className="text-emerald mr-3">👍</span> Do's
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Ensure your initiative clearly aligns with at least one award category</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Provide measurable results and data to support your application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Submit all materials in both Arabic and English</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Include testimonials from People of Determination who have benefited</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Demonstrate sustainability and long-term commitment to inclusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Start your application early to allow time for gathering all materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald mt-1 mr-3">✓</span>
                  <span>Use clear, concise language that highlights your achievements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-dcd-purple mb-4 flex items-center">
                <span className="text-error mr-3">👎</span> Don'ts
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Submit incomplete applications or missing required documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Focus on planned future initiatives rather than implemented programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Submit applications after the deadline (no exceptions will be made)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Include irrelevant information that doesn't support your application</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Make claims without supporting evidence or documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Submit materials in file formats other than those specified</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mt-1 mr-3">✗</span>
                  <span>Exceed the maximum word count for written responses</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-dcd-purple mb-4">Required Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-charcoal mb-3">Organizational Documents</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Valid trade license or equivalent registration document</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Organization structure and governance documents</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Inclusion and accessibility policies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Previous recognitions or certifications (if applicable)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-charcoal mb-3">Initiative-Specific Documents</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Detailed description of inclusion initiatives (max 2,000 words)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Evidence of implementation (photos, videos, testimonials)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Impact metrics and measurement data</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-sky-blue mr-3">📄</span>
                    <span>Case studies or success stories (max 3 examples)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="inline-block px-6 py-3 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition cursor-pointer">
                Download Complete Guidelines PDF <span className="ml-2">📄</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dcd-purple mb-4">Application Workshops & Webinars</h2>
            <p className="text-lg max-w-3xl mx-auto">Join our orientation sessions to learn more about the application process</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Workshop 1 */}
            <div className="bg-soft-beige rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-dcd-purple text-white px-4 py-2 rounded-lg">
                    <span className="mr-2">📅</span> June 5, 2025
                  </div>
                  <span className="bg-emerald text-white text-sm px-3 py-1 rounded-full">In-Person</span>
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-2">Application Orientation Workshop</h3>
                <p className="text-gray-600 mb-4">A comprehensive overview of the award categories, eligibility criteria, and application process.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🕙</span>
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">📍</span>
                    <span>Abu Dhabi National Exhibition Centre</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🌐</span>
                    <span>Arabic & English (Simultaneous Translation)</span>
                  </div>
                </div>
                <button className="inline-block w-full text-center px-4 py-2 bg-dcd-purple text-white rounded-lg font-medium hover:bg-dcd-purple-dark transition cursor-pointer">
                  Register Now
                </button>
              </div>
            </div>

            {/* Workshop 2 */}
            <div className="bg-soft-beige rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-dcd-purple text-white px-4 py-2 rounded-lg">
                    <span className="mr-2">📅</span> June 20, 2025
                  </div>
                  <span className="bg-sky-blue text-white text-sm px-3 py-1 rounded-full">Virtual</span>
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-2">Documentation Preparation Webinar</h3>
                <p className="text-gray-600 mb-4">Learn how to prepare and present supporting documents that strengthen your application.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🕙</span>
                    <span>2:00 PM - 3:30 PM</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🎥</span>
                    <span>Online (Zoom)</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🌐</span>
                    <span>Arabic & English (Simultaneous Translation)</span>
                  </div>
                </div>
                <button className="inline-block w-full text-center px-4 py-2 bg-dcd-purple text-white rounded-lg font-medium hover:bg-dcd-purple-dark transition cursor-pointer">
                  Register Now
                </button>
              </div>
            </div>

            {/* Workshop 3 */}
            <div className="bg-soft-beige rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-dcd-purple text-white px-4 py-2 rounded-lg">
                    <span className="mr-2">📅</span> July 15, 2025
                  </div>
                  <span className="bg-emerald text-white text-sm px-3 py-1 rounded-full">In-Person</span>
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-2">Q&A Session with Past Winners</h3>
                <p className="text-gray-600 mb-4">Hear from previous award winners about their successful applications and initiatives.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🕙</span>
                    <span>4:00 PM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">📍</span>
                    <span>Department of Community Development Headquarters</span>
                  </div>
                  <div className="flex items-center text-charcoal">
                    <span className="text-sky-blue mr-3">🌐</span>
                    <span>Arabic & English (Simultaneous Translation)</span>
                  </div>
                </div>
                <button className="inline-block w-full text-center px-4 py-2 bg-dcd-purple text-white rounded-lg font-medium hover:bg-dcd-purple-dark transition cursor-pointer">
                  Register Now
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-4">Can't attend these sessions? All workshops will be recorded and made available online.</p>
            <button className="inline-block px-6 py-3 border-2 border-dcd-purple text-dcd-purple rounded-lg font-bold hover:bg-dcd-purple hover:text-white transition cursor-pointer">
              View Recorded Sessions <span className="ml-2">▶</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Link Section */}
      <section id="faq-link" className="py-12 bg-dcd-purple text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-lg">Visit our Frequently Asked Questions page for answers to common queries about the application process, eligibility criteria, and award categories.</p>
            </div>
            <div className="md:w-1/3 text-center">
              <button className="inline-block px-8 py-4 bg-gold text-charcoal rounded-lg font-bold hover:bg-gold/90 transition text-lg cursor-pointer">
                Visit FAQ Page <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section id="contact-support" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-dcd-purple mb-4">Need Further Assistance?</h2>
            <p className="text-lg max-w-3xl mx-auto">Our support team is available to help you with any questions about the application process</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-soft-beige rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-dcd-purple mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4">
                      ✉️
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p>applications@damjaward.ae</p>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4">
                      📞
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Helpline</h4>
                      <p>+971 2 555 5555</p>
                      <p className="text-sm text-gray-600">Sunday - Thursday: 8:00 AM - 3:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4">
                      💬
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Live Chat</h4>
                      <p>Available on the application portal</p>
                      <p className="text-sm text-gray-600">Sunday - Thursday: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dcd-purple mb-4">Quick Contact Form</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-charcoal mb-2" htmlFor="quick-name">Name</label>
                    <input id="quick-name" type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dcd-purple" placeholder="Your name" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-charcoal mb-2" htmlFor="quick-email">Email</label>
                    <input id="quick-email" type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dcd-purple" placeholder="Your email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-charcoal mb-2" htmlFor="quick-question">Question</label>
                    <textarea id="quick-question" rows={3} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dcd-purple" placeholder="Your question about the application process"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition">
                    Send Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-dcd-purple text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">Take the first step towards recognition for your organization's inclusion initiatives</p>
          <button className="inline-block px-10 py-4 bg-gold text-charcoal rounded-lg font-bold hover:bg-gold/90 transition text-xl cursor-pointer">
            Start Your Application Now <span className="ml-2">→</span>
          </button>
          <p className="mt-6 text-white/80">Application deadline: September 30, 2025</p>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
