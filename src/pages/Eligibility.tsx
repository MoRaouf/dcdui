
import React from 'react';
import Layout from '@/components/Layout';
import { Check, Download, File, FileText, Play } from 'lucide-react';

const Eligibility = () => {
  return (
    <Layout>
      {/* Main Content */}
      <main>
        {/* Page Header */}
        <section id="eligibility-header" className="bg-dcd-purple text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Eligibility & Criteria</h1>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-lg max-w-3xl text-center">Understanding who can apply and how applications will be evaluated</p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div id="breadcrumbs" className="bg-soft-beige py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <span className="text-dcd-purple hover:text-dcd-purple-dark transition cursor-pointer">Home</span>
              <span className="text-gold mx-2">/</span>
              <span className="text-charcoal font-medium">Eligibility & Criteria</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div id="eligibility-tabs" className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <button id="tab-eligibility" className="px-6 py-4 font-medium text-dcd-purple border-b-2 border-dcd-purple focus:outline-none" onClick={() => switchTab('eligibility')}>
                Eligibility Criteria
              </button>
              <button id="tab-assessment" className="px-6 py-4 font-medium text-charcoal hover:text-dcd-purple border-b-2 border-transparent hover:border-dcd-purple focus:outline-none" onClick={() => switchTab('assessment')}>
                Assessment & Evaluation
              </button>
            </div>
          </div>
        </div>

        {/* Eligibility Content */}
        <section id="eligibility-content" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Who Can Apply</h2>
                <p className="text-lg mb-6">The Abu Dhabi Excellence Award for People of Determination Inclusion (Damj) is open to organizations that meet the following criteria:</p>
                
                <div className="bg-soft-beige rounded-lg p-8 mb-8">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-4 text-lg" />
                      <div>
                        <h3 className="font-bold text-charcoal">Eligible Entities</h3>
                        <p>Government entities, private sector companies, and third-sector organizations operating in Abu Dhabi. Individuals are not eligible to apply.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-4 text-lg" />
                      <div>
                        <h3 className="font-bold text-charcoal">Operational History</h3>
                        <p>Organizations must have been operating for at least 2 years in Abu Dhabi prior to application.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-4 text-lg" />
                      <div>
                        <h3 className="font-bold text-charcoal">Geographic Scope</h3>
                        <p>Services or initiatives must be implemented within the Emirate of Abu Dhabi.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-4 text-lg" />
                      <div>
                        <h3 className="font-bold text-charcoal">Legal Compliance</h3>
                        <p>Organizations must be in compliance with all applicable UAE and Abu Dhabi laws and regulations related to People of Determination.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-4 text-lg" />
                      <div>
                        <h3 className="font-bold text-charcoal">Documentation</h3>
                        <p>Applicants must provide evidence of inclusion initiatives and their impact on People of Determination.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div id="category-specific" className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Category-Specific Eligibility</h2>
                <p className="text-lg mb-6">Depending on the award category you're applying for, additional eligibility requirements may apply:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-3">
                        <FileText size={20} />
                      </div>
                      <h3 className="font-bold text-charcoal">Workplace Inclusion</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Must employ at least one Person of Determination</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Must have workplace accommodation policies in place</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-3">
                        <FileText size={20} />
                      </div>
                      <h3 className="font-bold text-charcoal">Educational Excellence</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Schools must have a minimum rating of "Good" by ADEK</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Must provide services to students of determination for at least 2 academic years</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-3">
                        <FileText size={20} />
                      </div>
                      <h3 className="font-bold text-charcoal">Accessible Services</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Must offer services directly to People of Determination</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Physical and/or digital accessibility features must be implemented</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-3">
                        <FileText size={20} />
                      </div>
                      <h3 className="font-bold text-charcoal">Innovative Solutions</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Innovation must be implemented and in use for at least 1 year</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Must demonstrate measurable impact on inclusion</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div id="exclusions" className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Exclusions</h2>
                <p className="text-lg mb-6">The following entities are not eligible to apply for the award:</p>
                
                <div className="bg-soft-beige rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-error mt-1 mr-4 text-lg">×</span>
                      <p>Specialized rehabilitation centers that exclusively serve People of Determination as their primary function</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-error mt-1 mr-4 text-lg">×</span>
                      <p>Organizations operating outside the geographical boundaries of Abu Dhabi Emirate</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-error mt-1 mr-4 text-lg">×</span>
                      <p>Organizations with less than 2 years of operational history in Abu Dhabi</p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-error mt-1 mr-4 text-lg">×</span>
                      <p>Individual applicants not representing an organization</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div id="eligibility-cta" className="text-center">
                <p className="text-lg mb-6">Still not sure if your organization is eligible? Contact our team for guidance.</p>
                <button className="px-6 py-3 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition">
                  Contact Us For Eligibility Check
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Content (Hidden by Default) */}
        <section id="assessment-content" className="py-12 bg-white hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Judging Process</h2>
                <p className="text-lg mb-6">Applications for the Abu Dhabi Excellence Award are evaluated through a rigorous two-stage process by an independent committee of experts:</p>
                
                <div className="relative mb-12">
                  {/* Process Timeline */}
                  <div className="absolute left-6 top-8 bottom-8 w-1 bg-gold"></div>
                  
                  {/* Stage 1 */}
                  <div className="relative pl-16 pb-10">
                    <div className="absolute left-0 w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="bg-soft-beige rounded-lg p-6">
                      <h3 className="text-xl font-bold text-dcd-purple mb-3">Initial Screening</h3>
                      <p className="mb-4">All applications undergo a preliminary review to ensure they meet the basic eligibility requirements and have submitted complete documentation.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Verification of eligibility criteria</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Review of application completeness</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Initial scoring against basic requirements</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Stage 2 */}
                  <div className="relative pl-16 pb-10">
                    <div className="absolute left-0 w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="bg-soft-beige rounded-lg p-6">
                      <h3 className="text-xl font-bold text-dcd-purple mb-3">Detailed Evaluation</h3>
                      <p className="mb-4">Shortlisted applications are thoroughly evaluated by a panel of experts in inclusion, accessibility, and relevant fields.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>In-depth assessment of submitted materials</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Site visits to verify implementation</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Interviews with key stakeholders</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Stage 3 */}
                  <div className="relative pl-16">
                    <div className="absolute left-0 w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="bg-soft-beige rounded-lg p-6">
                      <h3 className="text-xl font-bold text-dcd-purple mb-3">Final Selection</h3>
                      <p className="mb-4">The Award Committee reviews the evaluation results and selects winners for each category based on their overall scores.</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Committee deliberation on finalist applications</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Selection of winners and honorable mentions</p>
                        </li>
                        <li className="flex items-start">
                          <Check className="text-emerald mt-1 mr-3" />
                          <p>Approval by the Department of Community Development</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="evaluation-criteria" className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Evaluation Criteria</h2>
                <p className="text-lg mb-6">Applications are assessed based on the following key criteria, with specific weightings applied to each:</p>
                
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-dcd-purple text-white">
                        <th className="p-4 text-left rounded-tl-lg">Criteria</th>
                        <th className="p-4 text-left">Description</th>
                        <th className="p-4 text-center rounded-tr-lg">Weighting</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="p-4 font-medium">Impact on Inclusion</td>
                        <td className="p-4">Measurable positive impact on the inclusion of People of Determination</td>
                        <td className="p-4 text-center">30%</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-soft-beige">
                        <td className="p-4 font-medium">Innovation</td>
                        <td className="p-4">Originality and creativity of approach to inclusion challenges</td>
                        <td className="p-4 text-center">20%</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="p-4 font-medium">Sustainability</td>
                        <td className="p-4">Long-term viability and integration of inclusive practices</td>
                        <td className="p-4 text-center">15%</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-soft-beige">
                        <td className="p-4 font-medium">Leadership Commitment</td>
                        <td className="p-4">Demonstrated support from organizational leadership</td>
                        <td className="p-4 text-center">15%</td>
                      </tr>
                      <tr className="border-b border-gray-200 bg-white">
                        <td className="p-4 font-medium">Alignment with Standards</td>
                        <td className="p-4">Compliance with international best practices and accessibility standards</td>
                        <td className="p-4 text-center">10%</td>
                      </tr>
                      <tr className="bg-soft-beige">
                        <td className="p-4 font-medium rounded-bl-lg">Stakeholder Engagement</td>
                        <td className="p-4">Involvement of People of Determination in planning and implementation</td>
                        <td className="p-4 text-center rounded-br-lg">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-soft-beige rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-dcd-purple mb-4">Scoring System</h3>
                  <p className="mb-4">Each criterion is scored on a scale of 1-10, with 10 being the highest possible score:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-3 font-bold">
                          1-3
                        </div>
                        <span className="font-medium">Below Expectations</span>
                      </div>
                      <p className="text-sm pl-11">Limited evidence of inclusion efforts with minimal impact</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mr-3 font-bold">
                          4-6
                        </div>
                        <span className="font-medium">Meets Expectations</span>
                      </div>
                      <p className="text-sm pl-11">Satisfactory inclusion practices with moderate impact</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-3 font-bold">
                          7-8
                        </div>
                        <span className="font-medium">Exceeds Expectations</span>
                      </div>
                      <p className="text-sm pl-11">Strong inclusion practices with significant impact</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white mr-3 font-bold">
                          9-10
                        </div>
                        <span className="font-medium">Exceptional</span>
                      </div>
                      <p className="text-sm pl-11">Exemplary, innovative inclusion practices with transformative impact</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div id="category-criteria" className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Category-Specific Criteria</h2>
                <p className="text-lg mb-6">In addition to the general evaluation criteria, each award category has specific focus areas:</p>
                
                <div className="space-y-6">
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-3">
                        <FileText size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-dcd-purple">Workplace Inclusion</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Recruitment and hiring practices for People of Determination</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Workplace accommodations and accessibility</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Career development and advancement opportunities</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Inclusive workplace culture and awareness</p>
                      </li>
                    </ul>
                    <button className="text-dcd-purple font-medium flex items-center">
                      Download Detailed Criteria <Download className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-3">
                        <FileText size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-dcd-purple">Accessible Services</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Physical accessibility of facilities</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Digital accessibility of websites and applications</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Staff training on serving People of Determination</p>
                      </li>
                      <li className="flex items-start">
                        <Check className="text-emerald mt-1 mr-3" />
                        <p>Alternative formats for communication and service delivery</p>
                      </li>
                    </ul>
                    <button className="text-dcd-purple font-medium flex items-center">
                      Download Detailed Criteria <Download className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div id="site-visits" className="mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-6">Site Visits & Presentations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                      <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-dcd-purple mb-3">Site Visits</h3>
                    <p className="mb-4">Shortlisted organizations will receive an on-site visit from the evaluation committee to verify implementation of inclusion initiatives.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Typically 2-3 hours in duration</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Tour of facilities and observation of practices</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Interviews with leadership, staff, and People of Determination</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-soft-beige rounded-lg p-6">
                    <div className="w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                      <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-dcd-purple mb-3">Presentations</h3>
                    <p className="mb-4">Finalists will be invited to present their inclusion initiatives to the Award Committee, highlighting key achievements and impact.</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>20-minute presentation followed by Q&A</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Focus on measurable outcomes and impact</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold text-xs mt-1.5 mr-2">•</span>
                        <p>Inclusion of testimonials or participation of People of Determination encouraged</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div id="assessment-cta" className="text-center">
                <p className="text-lg mb-6">Ready to prepare your application based on these criteria?</p>
                <button className="px-6 py-3 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition">
                  Download Application Guide
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources Section */}
        <section id="related-resources" className="py-12 bg-soft-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-dcd-purple mb-4">Related Resources</h2>
              <p className="text-lg max-w-3xl mx-auto">Access these helpful resources to guide your award application</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-dcd-purple mb-2">Application Guide</h3>
                <p className="mb-4 text-gray-700">Step-by-step instructions for completing your award application</p>
                <button className="text-dcd-purple font-medium flex items-center">
                  Download PDF <Download className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-dcd-purple mb-2">Evaluation Checklist</h3>
                <p className="mb-4 text-gray-700">Complete checklist of criteria used by the evaluation committee</p>
                <button className="text-dcd-purple font-medium flex items-center">
                  Download PDF <Download className="ml-2 h-4 w-4" />
                </button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-12 h-12 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <FileText size={24} />
                </div>
                <h3 className="text-lg font-bold text-dcd-purple mb-2">Application Webinar</h3>
                <p className="mb-4 text-gray-700">Recorded session explaining the application process in detail</p>
                <button className="text-dcd-purple font-medium flex items-center">
                  Watch Video <Play className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section (Mini) */}
        <section id="eligibility-faq" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-dcd-purple mb-4">Frequently Asked Questions</h2>
                <p className="text-lg">Common questions about eligibility and assessment</p>
              </div>
              
              <div className="space-y-4">
                {/* FAQ Items would go here */}
                <div className="border border-gray-200 rounded-lg">
                  <button className="flex items-center justify-between w-full p-5 text-left focus:outline-none" onClick={() => toggleFaq('faq-e1')}>
                    <span className="font-medium text-charcoal">Can organizations apply for multiple categories?</span>
                    <span className="text-dcd-purple" id="faq-e1-icon">+</span>
                  </button>
                  <div className="hidden px-5 pb-5" id="faq-e1-content">
                    <p className="text-charcoal">Yes, organizations can apply for up to three award categories if they meet the specific criteria for each. A separate application must be submitted for each category, with relevant documentation tailored to that category's requirements.</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg">
                  <button className="flex items-center justify-between w-full p-5 text-left focus:outline-none" onClick={() => toggleFaq('faq-e2')}>
                    <span className="font-medium text-charcoal">Are international organizations with Abu Dhabi branches eligible?</span>
                    <span className="text-dcd-purple" id="faq-e2-icon">+</span>
                  </button>
                  <div className="hidden px-5 pb-5" id="faq-e2-content">
                    <p className="text-charcoal">Yes, international organizations with legally established branches in Abu Dhabi that have been operating for at least 2 years are eligible. However, the assessment will focus only on inclusion initiatives implemented within Abu Dhabi.</p>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg">
                  <button className="flex items-center justify-between w-full p-5 text-left focus:outline-none" onClick={() => toggleFaq('faq-e3')}>
                    <span className="font-medium text-charcoal">How are site visits conducted and scheduled?</span>
                    <span className="text-dcd-purple" id="faq-e3-icon">+</span>
                  </button>
                  <div className="hidden px-5 pb-5" id="faq-e3-content">
                    <p className="text-charcoal">Site visits are scheduled with shortlisted organizations approximately 4-6 weeks after the application deadline. Organizations will receive at least 2 weeks' notice to prepare. The evaluation team typically consists of 2-3 members who will observe facilities, review documentation, and interview key stakeholders.</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="px-6 py-3 border-2 border-dcd-purple text-dcd-purple rounded-lg font-bold hover:bg-dcd-purple hover:text-white transition">
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
                <button className="px-6 py-3 bg-gold text-charcoal rounded-lg font-bold hover:bg-opacity-90 transition">
                  Contact Us
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white hover:text-dcd-purple transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

// JavaScript functions for the page interaction
const toggleFaq = (id: string) => {
  const content = document.getElementById(`${id}-content`);
  const icon = document.getElementById(`${id}-icon`);
  
  if (content && icon) {
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.textContent = '-';
    } else {
      content.classList.add('hidden');
      icon.textContent = '+';
    }
  }
};

const switchTab = (tab: string) => {
  // Get elements
  const tabEligibility = document.getElementById('tab-eligibility');
  const tabAssessment = document.getElementById('tab-assessment');
  const eligibilityContent = document.getElementById('eligibility-content');
  const assessmentContent = document.getElementById('assessment-content');
  
  if (tabEligibility && tabAssessment && eligibilityContent && assessmentContent) {
    // Update tab styling
    tabEligibility.classList.remove('text-dcd-purple', 'border-dcd-purple');
    tabEligibility.classList.add('text-charcoal', 'border-transparent');
    tabAssessment.classList.remove('text-dcd-purple', 'border-dcd-purple');
    tabAssessment.classList.add('text-charcoal', 'border-transparent');
    
    if (tab === 'eligibility') {
      tabEligibility.classList.remove('text-charcoal', 'border-transparent');
      tabEligibility.classList.add('text-dcd-purple', 'border-dcd-purple');
      eligibilityContent.classList.remove('hidden');
      assessmentContent.classList.add('hidden');
    } else {
      tabAssessment.classList.remove('text-charcoal', 'border-transparent');
      tabAssessment.classList.add('text-dcd-purple', 'border-dcd-purple');
      eligibilityContent.classList.add('hidden');
      assessmentContent.classList.remove('hidden');
    }
  }
};

export default Eligibility;
