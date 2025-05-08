
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ChevronDown } from 'lucide-react';
import FAQItem from '@/components/FAQItem';

const FAQ = () => {
  const [language, setLanguage] = useState<'english' | 'arabic'>('english');

  const toggleLanguage = (lang: 'english' | 'arabic') => {
    setLanguage(lang);
  };

  const englishFAQs = [
    {
      question: "Who can apply for the Damj Award?",
      answer: `The Damj Award is open to organizations in Abu Dhabi from the following sectors:
      • Government entities and departments
      • Private sector companies and corporations
      • Non-profit organizations and foundations
      • Educational institutions
      • Healthcare providers
      
      Individual applicants are not eligible. Organizations must have been operating in Abu Dhabi for at least one year and demonstrate concrete initiatives supporting People of Determination inclusion.`
    },
    {
      question: "Is there an application fee?",
      answer: "No, there is no application fee to participate in the Damj Award. The Department of Community Development has made the award completely free to encourage widespread participation and recognize excellence in inclusion without financial barriers."
    },
    {
      question: "What is the deadline for submissions?",
      answer: "The deadline for the current award cycle is September 30, 2025. All applications must be submitted through the official online portal by 11:59 PM (UAE time) on this date. Late submissions will not be considered under any circumstances."
    },
    {
      question: "How are winners selected?",
      answer: `The selection process consists of several stages:
      1. Initial Screening: Applications are reviewed for completeness and eligibility.
      2. Technical Evaluation: A committee of inclusion experts evaluates applications based on established criteria for each category.
      3. Site Visits: Shortlisted organizations receive site visits to verify and assess their inclusion initiatives firsthand.
      4. Final Judging: A high-level panel including government officials, People of Determination representatives, and industry experts makes the final selection.
      
      All evaluations use a standardized scoring system that prioritizes impact, innovation, sustainability, and alignment with Abu Dhabi's inclusion strategy.`
    },
    {
      question: "Can one entity submit multiple entries?",
      answer: "Yes, organizations can apply for up to three different award categories, provided they meet the specific criteria for each category. However, each category application must be submitted separately with relevant documentation and evidence specific to that category. Organizations should focus on their strongest areas of inclusion rather than applying for all categories."
    },
    {
      question: "Will the submitted projects be made public?",
      answer: `By default, only general information about winning and shortlisted organizations will be made public. This includes:
      • Organization name and sector
      • Award category
      • Brief description of the initiative (as approved by the organization)
      
      Detailed application materials remain confidential. However, winners will be invited to share their best practices through:
      • Case studies on the Damj Award website
      • Presentations at inclusion workshops and conferences
      • Participation in knowledge-sharing events
      
      Organizations can specify confidential information in their applications that should not be shared under any circumstances.`
    },
    {
      question: "What do winners receive?",
      answer: `Winners of the Damj Award receive:
      • Official Damj Award trophy and certificate presented at a high-profile ceremony
      • Permission to use the Damj Award winner logo in their communications for two years
      • Recognition in official Department of Community Development publications
      • Media coverage through government channels
      • Invitation to showcase their initiatives at inclusion forums and events
      • Opportunities to participate in knowledge exchange programs
      
      The award focuses on recognition and promoting best practices rather than financial prizes.`
    },
    {
      question: "How often is the award held?",
      answer: "The Damj Award is held annually. The cycle begins with the opening of applications in May, followed by the evaluation process from October to November, and culminates with the awards ceremony in December each year. This annual frequency allows for regular recognition of progress and innovations in inclusion practices across Abu Dhabi."
    },
    {
      question: "How can I learn more about making my services inclusive?",
      answer: `The Department of Community Development offers several resources to help organizations improve their inclusion practices:
      • Inclusion Workshops: Regular training sessions on various aspects of accessibility and inclusion
      • Technical Guidelines: Sector-specific guidance documents available for download from our website
      • Advisory Services: Organizations can request specialized consultation sessions
      • Success Stories: Case studies of previous award winners are available in the Success Stories section
      • Networking Events: Regular opportunities to connect with inclusion experts and other organizations
      
      Visit the Resources section of our website at damj.addcd.gov.ae/resources or contact our support team at support@damj.addcd.gov.ae for more information.`
    }
  ];

  const arabicFAQs = [
    {
      question: "من يمكنه التقدم لجائزة دمج؟",
      answer: `جائزة دمج متاحة للمؤسسات في أبوظبي من القطاعات التالية:
      • الجهات والدوائر الحكومية
      • شركات ومؤسسات القطاع الخاص
      • المنظمات والمؤسسات غير الربحية
      • المؤسسات التعليمية
      • مقدمي الرعاية الصحية
      
      الأفراد غير مؤهلين للتقديم. يجب أن تكون المؤسسات قد عملت في أبوظبي لمدة عام واحد على الأقل وأن تظهر مبادرات ملموسة تدعم دمج أصحاب الهمم.`
    },
    {
      question: "هل هناك رسوم للتقديم؟",
      answer: "لا، لا توجد رسوم للتقديم للمشاركة في جائزة دمج. قامت دائرة تنمية المجتمع بجعل الجائزة مجانية تماماً لتشجيع المشاركة الواسعة والاعتراف بالتميز في الدمج دون حواجز مالية."
    },
    {
      question: "ما هو الموعد النهائي للتقديم؟",
      answer: "الموعد النهائي لدورة الجائزة الحالية هو 30 سبتمبر 2025. يجب تقديم جميع الطلبات من خلال البوابة الإلكترونية الرسمية بحلول الساعة 11:59 مساءً (بتوقيت الإمارات) في هذا التاريخ. لن يتم النظر في الطلبات المتأخرة تحت أي ظرف من الظروف."
    },
    {
      question: "كيف يتم اختيار الفائزين؟",
      answer: `تتكون عملية الاختيار من عدة مراحل:
      1. الفحص الأولي: تتم مراجعة الطلبات للتأكد من اكتمالها وأهليتها.
      2. التقييم الفني: تقوم لجنة من خبراء الدمج بتقييم الطلبات بناءً على معايير محددة لكل فئة.
      3. الزيارات الميدانية: تتلقى المؤسسات المختارة زيارات ميدانية للتحقق من مبادرات الدمج الخاصة بها وتقييمها بشكل مباشر.
      4. التحكيم النهائي: تقوم لجنة رفيعة المستوى تضم مسؤولين حكوميين وممثلين عن أصحاب الهمم وخبراء في الصناعة بالاختيار النهائي.
      
      تستخدم جميع التقييمات نظام تسجيل موحد يعطي الأولوية للتأثير والابتكار والاستدامة والتوافق مع استراتيجية أبوظبي للدمج.`
    }
  ];

  return (
    <Layout>
      {/* Page Header Section */}
      <section id="page-header" className="bg-dcd-purple text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Frequently Asked Questions</h1>
              <p className="text-lg">Find answers to common questions about the Damj Award</p>
            </div>
            <div className="mt-6 md:mt-0">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link to="/" className="text-white hover:text-gold transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <ChevronDown className="h-4 w-4 mx-2 rotate-90 text-gold" />
                      <span className="text-gold">FAQ</span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Main Content Section */}
      <section id="faq-content" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-dcd-purple mb-4">Common Questions About the Damj Award</h2>
              <p className="text-lg text-charcoal">Below you'll find answers to the most frequently asked questions about the Abu Dhabi Excellence Award for People of Determination Inclusion.</p>
            </div>

            {/* FAQ Tabs - English and Arabic */}
            <div id="faq-tabs" className="mb-10">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`py-3 px-6 font-medium ${language === 'english' ? 'text-dcd-purple border-b-2 border-dcd-purple' : 'text-gray-500 hover:text-dcd-purple'}`}
                  onClick={() => toggleLanguage('english')}
                >
                  English
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${language === 'arabic' ? 'text-dcd-purple border-b-2 border-dcd-purple' : 'text-gray-500 hover:text-dcd-purple'}`}
                  onClick={() => toggleLanguage('arabic')}
                >
                  العربية
                </button>
              </div>
            </div>

            {/* FAQ Accordion - English */}
            <div id="english-faqs" className={`space-y-4 ${language === 'english' ? '' : 'hidden'}`}>
              {englishFAQs.map((faq, index) => (
                <FAQItem key={`en-faq-${index}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            {/* FAQ Accordion - Arabic */}
            <div id="arabic-faqs" className={`space-y-4 ${language === 'arabic' ? '' : 'hidden'}`} dir="rtl">
              {arabicFAQs.map((faq, index) => (
                <FAQItem key={`ar-faq-${index}`} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            {/* Additional FAQ Support */}
            <div className="mt-12 bg-soft-beige rounded-lg p-6">
              <h3 className="text-xl font-bold text-dcd-purple mb-4">Still Have Questions?</h3>
              <p className="text-charcoal mb-6">If you couldn't find the answer to your question, please feel free to contact our support team.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center px-6 py-3 bg-dcd-purple text-white rounded-lg hover:bg-dcd-purple-dark transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Email Us
                </button>
                <button className="flex items-center justify-center px-6 py-3 border border-dcd-purple text-dcd-purple rounded-lg hover:bg-dcd-purple hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section id="related-resources" className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dcd-purple mb-4">Related Resources</h2>
            <p className="text-lg text-charcoal">Explore these resources to learn more about inclusion practices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Resource 1 */}
            <div id="resource-1" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-sky-blue rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dcd-purple mb-2">Application Guidelines</h3>
              <p className="text-charcoal mb-4">Detailed guide on how to prepare a successful award application</p>
              <Link to="#" className="text-dcd-purple font-medium flex items-center hover:underline">
                Download PDF 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </Link>
            </div>
            
            {/* Resource 2 */}
            <div id="resource-2" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dcd-purple mb-2">Inclusion Best Practices</h3>
              <p className="text-charcoal mb-4">Video series featuring previous winners sharing their approaches</p>
              <Link to="#" className="text-dcd-purple font-medium flex items-center hover:underline">
                Watch Videos 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </Link>
            </div>
            
            {/* Resource 3 */}
            <div id="resource-3" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-dcd-purple mb-2">Upcoming Workshops</h3>
              <p className="text-charcoal mb-4">Schedule of training sessions to help improve your inclusion initiatives</p>
              <Link to="#" className="text-dcd-purple font-medium flex items-center hover:underline">
                View Schedule 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta-section" className="py-16 bg-dcd-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply for the Damj Award?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">Showcase your organization's commitment to inclusion and be recognized for your achievements in creating accessible environments for People of Determination.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply" className="px-8 py-4 bg-gold text-charcoal rounded-lg font-bold hover:bg-opacity-90 transition">
              Start Your Application
            </Link>
            <Link to="/categories" className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-bold hover:bg-white hover:text-dcd-purple transition">
              Learn More About Categories
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
