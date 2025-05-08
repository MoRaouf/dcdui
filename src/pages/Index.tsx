
import React, { useState, useEffect } from "react";
import { 
  Award, 
  HandsHelping, 
  Lightbulb, 
  Building, 
  Users, 
  GraduationCap, 
  ArrowRight, 
  TextHeight, 
  CircleDot, 
  VolumeUp, 
  Languages, 
  Menu, 
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {/* Accessibility Toolbar */}
      <div className="accessibility-toolbar fixed left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg z-40 p-3 flex flex-col space-y-3">
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="Increase Font Size">
          <TextHeight size={20} />
        </button>
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="High Contrast">
          <CircleDot size={20} />
        </button>
        <button className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" title="Text to Speech">
          <VolumeUp size={20} />
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
                      <HandsHelping size={24} />
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
      </main>

      {/* Footer can be added here */}
    </div>
  );
};

export default Index;
