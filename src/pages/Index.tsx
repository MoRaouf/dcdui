import React, { useState, useEffect } from "react";
import { 
  Award, 
  HandHelping, 
  Lightbulb, 
  Building, 
  Users, 
  GraduationCap, 
  ArrowRight, 
  Type, 
  CircleDot, 
  Volume, 
  Languages, 
  Menu, 
  Check,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQItem from "@/components/FAQItem";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // FAQ data
  const faqItems = [
    {
      question: "Who is eligible to apply for the award?",
      answer: "Any government entity, private sector company, or third-sector organization operating in Abu Dhabi for at least two years is eligible to apply. Organizations must demonstrate their commitment to inclusion of People of Determination through policies, practices, or programs."
    },
    {
      question: "What is the application deadline?",
      answer: "The application deadline for the 2025 award cycle is September 30, 2025. All materials must be submitted through the online portal by 11:59 PM GST on this date. Late submissions will not be considered."
    },
    {
      question: "Can organizations apply for multiple categories?",
      answer: "Yes, organizations can apply for up to three award categories if they meet the specific criteria for each. However, separate documentation and evidence must be provided for each category application."
    },
    {
      question: "What documents are required for the application?",
      answer: "Required documents include: organization profile, trade license or equivalent, inclusion policy documents, evidence of initiatives implemented, measurable outcomes and impact data, testimonials from People of Determination (if available), and any relevant certifications or previous recognitions."
    },
    {
      question: "When will winners be announced?",
      answer: "Winners will be announced at the annual Abu Dhabi Excellence Award ceremony in December 2025. All finalists will be notified approximately one month before the ceremony and will be invited to attend."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-dcd-purple rounded-lg flex items-center justify-center text-white">
              <span className="font-bold text-xl">DAMJ</span>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-bold text-charcoal hidden md:block">Abu Dhabi Excellence Award</h1>
              <p className="text-sm text-dcd-purple hidden md:block">People of Determination Inclusion</p>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">Home</span>
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">About</span>
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">Categories</span>
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">Apply</span>
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">Success Stories</span>
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">FAQ</span>
            <span className="text-charcoal hover:text-dcd-purple font-medium transition cursor-pointer">Contact</span>
          </nav>
          
          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button className="px-3 py-1 border border-dcd-purple text-dcd-purple rounded-md text-sm font-medium hover:bg-dcd-purple hover:text-white transition">
              عربي
            </button>
            
            {/* Apply Now Button */}
            <span className="hidden md:inline-block px-4 py-2 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition cursor-pointer">
              Apply Now
            </span>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-charcoal">
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Accessibility Toolbar - Fixed width and position instead of full width */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg z-40 p-3 flex flex-col space-y-3 w-auto">
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="Increase Font Size">
          <Type size={20} />
        </button>
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="High Contrast">
          <CircleDot size={20} />
        </button>
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="Text to Speech">
          <Volume size={20} />
        </button>
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="Sign Language">
          <Languages size={20} />
        </button>
      </div>

      {/* Main Content - With top padding to account for fixed header */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-dcd-purple text-white">
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Abu Dhabi Excellence Award for People of Determination Inclusion</h1>
              <p className="text-lg mb-6">Recognizing organizations that champion inclusion and accessibility in Abu Dhabi</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <span className="px-6 py-3 bg-gold text-charcoal rounded-lg font-bold hover:bg-opacity-90 transition text-center cursor-pointer">Apply Now</span>
                <span className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white hover:text-dcd-purple transition text-center cursor-pointer">Learn More</span>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img className="rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eedd040e4a-d07dc91a053b6d3e176f.png" alt="professional award ceremony with diverse people of determination and officials in Abu Dhabi, inclusive atmosphere, professional photography" />
            </div>
          </div>
          
          {/* Countdown Timer */}
          <div className="bg-charcoal py-4">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8">
                <p className="text-white font-bold">Application Deadline:</p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="bg-dcd-purple text-white rounded-lg p-2 w-16">
                      <span className="text-xl font-bold">45</span>
                    </div>
                    <p className="text-sm text-white mt-1">Days</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-dcd-purple text-white rounded-lg p-2 w-16">
                      <span className="text-xl font-bold">12</span>
                    </div>
                    <p className="text-sm text-white mt-1">Hours</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-dcd-purple text-white rounded-lg p-2 w-16">
                      <span className="text-xl font-bold">30</span>
                    </div>
                    <p className="text-sm text-white mt-1">Minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Award Section */}
        <section className="py-16 bg-soft-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">About the Award</h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <p className="text-lg mb-4">The Abu Dhabi Excellence Award for People of Determination Inclusion (Damj) is an initiative by the Department of Community Development (DCD) to recognize organizations that excel in creating inclusive environments.</p>
                <p className="text-lg mb-6">This prestigious award celebrates innovative approaches to accessibility, employment opportunities, and social inclusion for People of Determination across Abu Dhabi.</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-dcd-purple flex items-center justify-center text-white">
                      <Award size={24} />
                    </div>
                    <span className="ml-3 font-medium">Excellence</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-emerald flex items-center justify-center text-white">
                      <HandHelping size={24} />
                    </div>
                    <span className="ml-3 font-medium">Inclusion</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-sky-blue flex items-center justify-center text-white">
                      <Lightbulb size={24} />
                    </div>
                    <span className="ml-3 font-medium">Innovation</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-dcd-purple mb-4">Award Objectives</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-3" />
                      <span>Promote inclusion of People of Determination in all sectors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-3" />
                      <span>Recognize organizations implementing best practices in accessibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-3" />
                      <span>Encourage innovation in inclusive services and environments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-3" />
                      <span>Share success stories that inspire others to follow</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-emerald mt-1 mr-3" />
                      <span>Create a more inclusive society in Abu Dhabi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Award Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Award Categories</h2>
              <p className="text-lg max-w-3xl mx-auto">Organizations can apply in the following categories based on their initiatives and achievements in inclusion</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-soft-beige rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Building size={32} />
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-3">Workplace Inclusion</h3>
                <p className="mb-4">Recognizing organizations that excel in hiring, training, and creating supportive work environments for People of Determination.</p>
                <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
              
              {/* Category 2 */}
              <div className="bg-soft-beige rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-3">Accessible Services</h3>
                <p className="mb-4">For organizations providing exceptional accessible services, digital platforms, and customer experiences.</p>
                <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
              
              {/* Category 3 */}
              <div className="bg-soft-beige rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-3">Innovative Solutions</h3>
                <p className="mb-4">Celebrating innovative approaches, technologies, and programs that enhance inclusion and accessibility.</p>
                <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
              
              {/* Category 4 */}
              <div className="bg-soft-beige rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-3">Community Engagement</h3>
                <p className="mb-4">For organizations leading community initiatives that promote inclusion and awareness.</p>
                <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
              
              {/* Category 5 */}
              <div className="bg-soft-beige rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-3">Educational Excellence</h3>
                <p className="mb-4">Recognizing educational institutions with outstanding inclusive programs and accommodations.</p>
                <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
              
              {/* Category 6 */}
              <div className="bg-soft-beige rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <div className="w-16 h-16 bg-dcd-purple rounded-full flex items-center justify-center text-white mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold text-dcd-purple mb-3">Leadership & Governance</h3>
                <p className="mb-4">For organizations with exemplary leadership and policies supporting inclusion at all levels.</p>
                <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="py-16 bg-dcd-purple text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
              <p className="text-lg max-w-3xl mx-auto">Follow these simple steps to submit your organization for the Abu Dhabi Excellence Award</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Register Online</h3>
                <p className="mb-4">Create an account on our portal and verify your organization's eligibility.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Complete organization profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Verify eligibility criteria</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Select relevant award categories</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Submit Documentation</h3>
                <p className="mb-4">Provide evidence of your organization's inclusive practices and achievements.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Upload required documents</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Share success metrics and KPIs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Include testimonials and case studies</span>
                  </li>
                </ul>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dcd-purple text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Evaluation Process</h3>
                <p className="mb-4">Our committee will review applications and may conduct site visits to finalists.</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Initial screening by experts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Site visits for shortlisted organizations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-gold mt-1 mr-3" />
                    <span>Final selection by award committee</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <span className="inline-block px-8 py-4 bg-gold text-charcoal rounded-lg font-bold hover:bg-opacity-90 transition text-lg cursor-pointer">Start Your Application</span>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Success Stories</h2>
              <p className="text-lg max-w-3xl mx-auto">Learn from organizations that have created outstanding inclusive environments</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Success Story 1 */}
              <div className="bg-soft-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a5c1880067-c2ee80d22208d2d6d948.png" alt="diverse workplace with people of determination in Abu Dhabi office, professional setting, inclusive environment" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-emerald text-white text-xs px-3 py-1 rounded-full">Workplace Inclusion</span>
                  </div>
                  <h3 className="text-xl font-bold text-dcd-purple mb-3">Al Masraf Bank</h3>
                  <p className="mb-4">Transformed their hiring practices to include People of Determination at all levels, achieving a 15% inclusion rate across departments.</p>
                  <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                    Read Full Story <ArrowRight size={20} className="ml-2" />
                  </span>
                </div>
              </div>
              
              {/* Success Story 2 */}
              <div className="bg-soft-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/759f4ee47f-266a7b6648390ec43422.png" alt="accessible digital technology being used by people with disabilities in modern Abu Dhabi setting, professional photography" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-sky-blue text-white text-xs px-3 py-1 rounded-full">Innovative Solutions</span>
                  </div>
                  <h3 className="text-xl font-bold text-dcd-purple mb-3">Etisalat Digital</h3>
                  <p className="mb-4">Developed a suite of accessible digital services that have transformed how People of Determination interact with government platforms.</p>
                  <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                    Read Full Story <ArrowRight size={20} className="ml-2" />
                  </span>
                </div>
              </div>
              
              {/* Success Story 3 */}
              <div className="bg-soft-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1e6c138a30-b65197c89a917c3f35fb.png" alt="inclusive education classroom in Abu Dhabi with teachers and students of determination, supportive learning environment" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-gold text-white text-xs px-3 py-1 rounded-full">Educational Excellence</span>
                  </div>
                  <h3 className="text-xl font-bold text-dcd-purple mb-3">New York University Abu Dhabi</h3>
                  <p className="mb-4">Created comprehensive support systems for students of determination, from accessible facilities to specialized academic resources.</p>
                  <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                    Read Full Story <ArrowRight size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <span className="inline-block px-6 py-3 border-2 border-dcd-purple text-dcd-purple rounded-lg font-bold hover:bg-dcd-purple hover:text-white transition cursor-pointer">View All Success Stories</span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-soft-beige">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Frequently Asked Questions</h2>
              <p className="text-lg max-w-3xl mx-auto">Find answers to common questions about the Abu Dhabi Excellence Award</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <FAQItem 
                  key={index} 
                  question={item.question} 
                  answer={item.answer} 
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="mb-4">Don't see your question answered here?</p>
              <span className="inline-block px-6 py-3 bg-dcd-purple text-white rounded-lg font-bold hover:bg-dcd-purple-dark transition cursor-pointer">Contact Us</span>
            </div>
          </div>
        </section>

        {/* News & Updates Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Latest News & Updates</h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* News Item 1 */}
              <div className="bg-soft-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7a9b1ff0ec-82153df94d1e65d6e835.png" alt="professional Abu Dhabi government press conference announcing award program, officials at podium, formal setting" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-dcd-purple">May 15, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-dcd-purple mb-3">2025 Award Cycle Officially Launched</h3>
                  <p className="mb-4">The Department of Community Development has officially opened applications for the 2025 Abu Dhabi Excellence Award for People of Determination Inclusion.</p>
                  <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                    Read More <ArrowRight size={20} className="ml-2" />
                  </span>
                </div>
              </div>
              
              {/* News Item 2 */}
              <div className="bg-soft-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3d233ec491-6e06d5942652bd1cfdc2.png" alt="professional workshop with diverse participants discussing inclusion in Abu Dhabi, corporate setting, professional photography" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-dcd-purple">April 28, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-dcd-purple mb-3">Application Workshop Series Announced</h3>
                  <p className="mb-4">A series of workshops to help organizations prepare their award applications will be held throughout Abu Dhabi starting next month.</p>
                  <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                    Read More <ArrowRight size={20} className="ml-2" />
                  </span>
                </div>
              </div>
              
              {/* News Item 3 */}
              <div className="bg-soft-beige rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/4d213c23e7-c8496d8689b17bc7a241.png" alt="award ceremony with trophies and recognition for inclusion initiatives in Abu Dhabi, formal event, professional photography" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-dcd-purple">March 10, 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-dcd-purple mb-3">New Award Category Added for 2025</h3>
                  <p className="mb-4">This year's award will include a new category for "Digital Accessibility Excellence" recognizing achievements in inclusive technology.</p>
                  <span className="text-dcd-purple font-bold flex items-center cursor-pointer">
                    Read More <ArrowRight size={20} className="ml-2" />
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <span className="inline-block px-6 py-3 border-2 border-dcd-purple text-dcd-purple rounded-lg font-bold hover:bg-dcd-purple hover:text-white transition cursor-pointer">View All News</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-dcd-purple text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg max-w-3xl mx-auto">Have questions about the award? Our team is here to help</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block mb-2 font-medium" htmlFor="name">Full Name</label>
                      <input id="name" type="text" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block mb-2 font-medium" htmlFor="email">Email Address</label>
                      <input id="email" type="email" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium" htmlFor="organization">Organization</label>
                    <input id="organization" type="text" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your organization" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-medium" htmlFor="subject">Subject</label>
                    <input id="subject" type="text" className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Message subject" />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 font-medium" htmlFor="message">Message</label>
                    <textarea id="message" rows={4} className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your message"></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-gold text-charcoal rounded-lg font-bold hover:bg-opacity-90 transition">Send Message</button>
                </form>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple mr-4">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Address</h4>
                        <p>Department of Community Development<br />Al Muhairy Center, Sheikh Zayed the First Street<br />Abu Dhabi, United Arab Emirates</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple mr-4">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <p>+971 2 555 5555</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-dcd-purple mr-4">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <p>damj.award@dcd.gov.ae</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-6">Working Hours</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Sunday - Thursday</span>
                      <span>8:00 AM - 3:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday</span>
                      <span>Closed</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition cursor-pointer">
                        <Twitter size={20} />
                      </span>
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition cursor-pointer">
                        <Instagram size={20} />
                      </span>
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition cursor-pointer">
                        <Linkedin size={20} />
                      </span>
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-gold transition cursor-pointer">
                        <Youtube size={20} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-charcoal text-white pt-12 pb-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Column 1 */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-dcd-purple rounded-lg flex items-center justify-center text-white">
                    <span className="font-bold text-xl">DAMJ</span>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-bold">Abu Dhabi Excellence Award</h3>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">Recognizing and celebrating organizations that champion inclusion and accessibility for People of Determination in Abu Dhabi.</p>
                <div className="flex space-x-4">
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">
                    <Twitter size={20} />
                  </span>
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">
                    <Instagram size={20} />
                  </span>
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">
                    <Linkedin size={20} />
                  </span>
                  <span className="text-gray-400 hover:text-white transition cursor-pointer">
                    <Youtube size={20} />
                  </span>
                </div>
              </div>
              
              {/* Column 2 */}
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Home</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">About the Award</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Award Categories</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">How to Apply</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Success Stories</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">News & Updates</span></li>
                </ul>
              </div>
              
              {/* Column 3 */}
              <div>
                <h3 className="text-lg font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Application Guide</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Eligibility Criteria</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Frequently Asked Questions</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Accessibility Guidelines</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Previous Winners</span></li>
                  <li><span className="text-gray-400 hover:text-white transition cursor-pointer">Contact Support</span></li>
                </ul>
              </div>
              
              {/* Column 4 */}
              <div>
                <h3 className="text-lg font-bold mb-4">Subscribe</h3>
                <p className="text-gray-400 mb-4">Stay updated with the latest news about the award and inclusion initiatives.</p>
                <form className="mb-4">
                  <div className="flex">
                    <input type="email" className="w-full p-3 bg-[#444444] border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your email" />
                    <button type="submit" className="bg-gold text-charcoal px-4 rounded-r-lg font-bold hover:bg-opacity-90 transition">
                      <Send size={20} />
                    </button>
                  </div>
                </form>
                <div className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/40x25" alt="Abu Dhabi Government" className="h-6" />
                  <img src="https://via.placeholder.com/40x25" alt="DCD" className="h-6" />
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 Department of Community Development, Abu Dhabi. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
                  <span className="hover:text-white transition cursor-pointer">Terms of Use</span>
                  <span className="hover:text-white transition cursor-pointer">Accessibility Statement</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
import React from 'react';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Your existing Index page content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-dcd-purple">Welcome to Abu Dhabi Excellence Award</h1>
        <p className="mt-4">This is the homepage content.</p>
      </div>
    </Layout>
  );
};

export default Index;
  );
};

export default Index;
