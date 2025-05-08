
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

      {/* FAQ Section (Mini) */}
      <section id="eligibility-faq" className="py-12 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-dcd-purple mb-4">Frequently Asked Questions</h2>
              <p className="text-lg">Common questions about eligibility and assessment</p>
            </div>
            
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border border-gray-200 rounded-lg">
                <button className="flex items-center justify-between w-full p-5 text-left focus:outline-none">
                  <span className="font-medium text-charcoal">Can organizations apply for multiple categories?</span>
                  <span className="text-dcd-purple">⌄</span>
                </button>
                <div className="px-5 pb-5">
                  <p className="text-charcoal">Yes, organizations can apply for up to three award categories if they meet the specific criteria for each. A separate application must be submitted for each category, with relevant documentation tailored to that category's requirements.</p>
                </div>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="border border-gray-200 rounded-lg">
                <button className="flex items-center justify-between w-full p-5 text-left focus:outline-none">
                  <span className="font-medium text-charcoal">Are international organizations with Abu Dhabi branches eligible?</span>
                  <span className="text-dcd-purple">⌄</span>
                </button>
                <div className="hidden px-5 pb-5">
                  <p className="text-charcoal">Yes, international organizations with legally established branches in Abu Dhabi that have been operating for at least 2 years are eligible. However, the assessment will focus only on inclusion initiatives implemented within Abu Dhabi.</p>
                </div>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="border border-gray-200 rounded-lg">
                <button className="flex items-center justify-between w-full p-5 text-left focus:outline-none">
                  <span className="font-medium text-charcoal">How are site visits conducted and scheduled?</span>
                  <span className="text-dcd-purple">⌄</span>
                </button>
                <div className="hidden px-5 pb-5">
                  <p className="text-charcoal">Site visits are scheduled with shortlisted organizations approximately 4-6 weeks after the application deadline. Organizations will receive at least 2 weeks' notice to prepare. The evaluation team typically consists of 2-3 members who will observe facilities, review documentation, and interview key stakeholders.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="inline-block px-6 py-3 border-2 border-dcd-purple text-dcd-purple rounded-lg font-bold hover:bg-dcd-purple hover:text-white transition cursor-pointer">
                View All FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section id="contact-banner" className="py-12 bg-dcd-purple text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-2">Need Help With Your Application?</h2>
              <p className="text-lg">Our team is available to answer your questions about eligibility and criteria</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-gold text-charcoal rounded-lg font-bold hover:bg-gold/90 transition cursor-pointer">
                Contact Us
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white hover:text-dcd-purple transition cursor-pointer">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
