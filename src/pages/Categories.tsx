
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Lightbulb, 
  HandHelping, 
  ArrowRight, 
  Check,
  Briefcase, 
  Accessibility
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Categories = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section id="categories-header" className="bg-dcd-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Award Categories & Pillars</h1>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-lg max-w-3xl text-center">Comprehensive framework for recognizing excellence in inclusion of People of Determination</p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="bg-soft-beige py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-dcd-purple hover:text-dcd-purple-dark transition">Home</Link>
            <span className="text-gold mx-2">›</span>
            <span className="text-charcoal">Award Categories & Pillars</span>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section id="categories-intro" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-soft-beige rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-dcd-purple mb-6">Award Structure</h2>
              <p className="text-lg mb-6">The Abu Dhabi Excellence Award for People of Determination Inclusion (Damj) is structured into three main pillars, each representing a critical dimension of inclusion. These pillars – <span className="font-semibold">Inclusive Services</span>, <span className="font-semibold">Inclusive Employment</span>, and <span className="font-semibold">Accessible Environment</span> – comprise multiple award categories that recognize excellence across various domains of inclusion.</p>
              <p className="text-lg mb-6">Each pillar addresses specific aspects of how organizations can create meaningful inclusion for People of Determination, from providing accessible public-facing services to implementing inclusive workplace practices and developing accessible physical and digital environments.</p>
              <p className="text-lg">Organizations can apply for categories within one or more pillars, based on their strengths and achievements in these areas of inclusion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="award-pillars" className="py-12 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dcd-purple mb-4">The Three Pillars of Excellence</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          {/* Pillar 1: Inclusive Services */}
          <div id="pillar-1" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-dcd-purple text-white p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-dcd-purple mr-4">
                    <HandHelping size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Pillar 1: Inclusive Services</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg mb-8">This pillar recognizes organizations that provide exceptional inclusive public-facing services in various sectors including health, education, tourism, and transport. These organizations demonstrate a commitment to ensuring their services are accessible, accommodating, and responsive to the needs of People of Determination.</p>
                
                <h4 className="text-xl font-bold text-dcd-purple mb-4">Award Categories</h4>
                
                <div className="space-y-6">
                  {/* Category 1 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 1: Best Inclusive Healthcare Service (Private Sector)</h5>
                    <p>Recognizing private healthcare providers that have implemented comprehensive accessibility measures, specialized services, and staff training to ensure quality healthcare for People of Determination.</p>
                  </div>
                  
                  {/* Category 2 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 2: Best Inclusive Education Service (Government Sector)</h5>
                    <p>Honoring government educational institutions that demonstrate excellence in providing inclusive learning environments, specialized support services, and appropriate accommodations for students of determination.</p>
                  </div>
                  
                  {/* Category 3 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 3: Best Inclusive Tourism Service</h5>
                    <p>Celebrating tourism facilities and services that have gone above and beyond to ensure accessibility and enjoyable experiences for visitors of determination.</p>
                  </div>
                  
                  {/* Category 4 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 4: Best Inclusive Transport Service</h5>
                    <p>Recognizing transport providers that have implemented accessible vehicles, facilities, and support systems to ensure mobility for People of Determination.</p>
                  </div>
                  
                  {/* Category 5 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 5: Best Inclusive Retail Experience</h5>
                    <p>Honoring retail establishments that provide accessible shopping environments, staff training, and accommodations for customers of determination.</p>
                  </div>
                  
                  {/* Category 6 */}
                  <div className="border-l-4 border-gold pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 6: Best Inclusive Third-Sector Service</h5>
                    <p>Recognizing non-profit and community organizations that provide exceptional inclusive services and support for People of Determination.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 2: Inclusive Employment */}
          <div id="pillar-2" className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-emerald text-white p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-emerald mr-4">
                    <Briefcase size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Pillar 2: Inclusive Employment</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg mb-8">This pillar honors entities with exemplary inclusive workplace practices that go beyond basic compliance to create truly supportive and empowering work environments for People of Determination. These organizations demonstrate commitment through recruitment, accommodation, career development, and workplace culture.</p>
                
                <h4 className="text-xl font-bold text-dcd-purple mb-4">Award Categories</h4>
                
                <div className="space-y-6">
                  {/* Category 7 */}
                  <div className="border-l-4 border-emerald pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 7: Most Inclusive Work Environment – Government</h5>
                    <p>Recognizing government entities that have implemented outstanding inclusive employment practices, workplace accommodations, and career development opportunities for employees of determination.</p>
                  </div>
                  
                  {/* Category 8 */}
                  <div className="border-l-4 border-emerald pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 8: Most Inclusive Work Environment – Private</h5>
                    <p>Celebrating private sector companies that excel in recruiting, retaining, and advancing employees of determination through inclusive policies, accessible workplaces, and supportive cultures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3: Accessible Environment */}
          <div id="pillar-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-sky-blue text-white p-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-sky-blue mr-4">
                    <Accessibility size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">Pillar 3: Accessible Environment</h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg mb-8">This pillar recognizes outstanding efforts in creating accessible physical and digital environments that enable full participation by People of Determination. These environments go beyond minimum requirements to implement thoughtful, innovative accessibility features that benefit everyone.</p>
                
                <h4 className="text-xl font-bold text-dcd-purple mb-4">Award Categories</h4>
                
                <div className="space-y-6">
                  {/* Category 9 */}
                  <div className="border-l-4 border-sky-blue pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 9: Excellence in Accessibility (Built Environment)</h5>
                    <p>Honoring organizations that have created exemplary accessible physical spaces, including buildings, public areas, and facilities that incorporate universal design principles and innovative accessibility solutions.</p>
                  </div>
                  
                  {/* Category 10 */}
                  <div className="border-l-4 border-sky-blue pl-6">
                    <h5 className="text-lg font-bold mb-2">Category 10: Excellence in Accessible Digital Services</h5>
                    <p>Recognizing organizations that have developed highly accessible websites, apps, and digital platforms that enable People of Determination to access information and services independently.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Information */}
      <section id="application-info" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-dcd-purple text-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                <p className="mb-4">Organizations can apply for multiple categories across different pillars. Each application will be evaluated based on specific criteria relevant to the category.</p>
                <p>Our team is available to provide guidance on selecting the most appropriate categories for your organization's inclusion initiatives.</p>
              </div>
              <div className="md:w-1/3 flex flex-col space-y-4">
                <Link to="/apply">
                  <Button className="w-full bg-gold text-charcoal hover:bg-gold/90 font-bold">Apply Now</Button>
                </Link>
                <Button variant="outline" className="w-full bg-white text-dcd-purple hover:bg-soft-beige font-bold">Download Criteria</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Specific to Categories */}
      <section id="categories-faq" className="py-12 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dcd-purple mb-4">Frequently Asked Questions</h2>
            <p className="text-lg max-w-3xl mx-auto">Common questions about award categories and application process</p>
            <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <CategoryFaqItem 
              question="Can organizations apply for multiple categories?" 
              answer="Yes, organizations can apply for multiple categories across different pillars. However, each application must include specific documentation and evidence relevant to the particular category. We recommend focusing on categories where your organization has demonstrated significant achievements."
            />
            
            <CategoryFaqItem 
              question="What evidence should we provide for each category?" 
              answer="Each category has specific evaluation criteria. Generally, you should provide evidence of policies, practices, implementation details, measurable outcomes, and impact on People of Determination. Documentation may include policies, photographs, testimonials, statistics, and case studies that demonstrate your organization's achievements in the specific category."
            />
            
            <CategoryFaqItem 
              question="Are there different criteria for government and private sector organizations?" 
              answer="While the fundamental principles of inclusion remain the same, some categories have specific criteria tailored to either government or private sector contexts. These differences account for the varying regulatory frameworks, resources, and operational environments. The detailed criteria for each category can be downloaded from our website."
            />
            
            <CategoryFaqItem 
              question="How are the award winners selected?" 
              answer="Each application undergoes a rigorous evaluation process by a committee of experts in inclusion and accessibility. The evaluation includes document review, interviews, and potentially site visits for finalists. Winners are selected based on innovation, impact, sustainability, and alignment with best practices in inclusion for People of Determination."
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

// CategoryFaqItem Component
const CategoryFaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <button 
        className="flex items-center justify-between w-full p-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-charcoal">{question}</span>
        <span className="text-dcd-purple">
          {isOpen ? 
            <ArrowRight className="transform rotate-90" size={20} /> : 
            <ArrowRight className="transform rotate-0" size={20} />
          }
        </span>
      </button>
      
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-charcoal">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Categories;
