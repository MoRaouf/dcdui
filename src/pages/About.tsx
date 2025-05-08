
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Building, GraduationCap, UniversalAccess, FilePdf, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section id="page-header" className="bg-dcd-purple text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About the Award</h1>
              <nav className="flex items-center text-sm" aria-label="Breadcrumb">
                <Link to="/" className="cursor-pointer hover:underline">Home</Link>
                <span className="mx-2 text-xs">›</span>
                <span className="text-gold">About the Award</span>
              </nav>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-5xl text-gold font-bold">DAMJ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Overview Section */}
      <section id="award-overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Award Overview</h2>
              <p className="text-lg">Understanding the vision and purpose behind Abu Dhabi's commitment to inclusion</p>
              <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
            </div>
            
            <div className="prose max-w-none text-charcoal text-lg">
              <p className="mb-6">
                The Abu Dhabi Excellence Award for People of Determination Inclusion (Damj) represents a cornerstone initiative in the emirate's broader strategy to create a fully inclusive society. Launched under the patronage of His Highness Sheikh Khaled bin Mohamed bin Zayed Al Nahyan, Crown Prince of Abu Dhabi, this award recognizes organizations that have demonstrated exceptional commitment to including People of Determination in all aspects of society.
              </p>
              <p className="mb-6">
                Through this award, Abu Dhabi aims to highlight best practices, inspire innovation, and establish benchmarks for inclusion across all sectors. The award serves as both recognition for achievements and a catalyst for continued progress in building a society where everyone can participate fully and equally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Award Objectives Section */}
      <section id="award-objectives" className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Award Objectives & Vision</h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
              <p className="text-lg text-charcoal">
                The Damj Award has been established with clear objectives aligned with Abu Dhabi's vision for an inclusive society. These objectives guide the award's criteria and evaluation process:
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
              <ul className="space-y-6">
                {[
                  {
                    title: "Promote Innovative Inclusive Practices",
                    desc: "Encourage organizations to develop and implement innovative approaches that enhance the inclusion of People of Determination in all aspects of society."
                  },
                  {
                    title: "Recognize Outstanding Inclusion Efforts",
                    desc: "Acknowledge and celebrate organizations across government, private, and third sectors that demonstrate exceptional commitment to accessibility and inclusion."
                  },
                  {
                    title: "Establish Benchmarks for Excellence",
                    desc: "Create and promote standards of excellence in inclusion that inspire other organizations to enhance their own practices and policies."
                  },
                  {
                    title: "Sustain Disability Inclusion Beyond 2024 Strategy",
                    desc: "Ensure the momentum of inclusion initiatives continues beyond the Abu Dhabi People of Determination Strategy 2020-2024, creating lasting change in society."
                  },
                  {
                    title: "Foster Collaboration Across Sectors",
                    desc: "Encourage partnerships and knowledge sharing between organizations to create a more comprehensive approach to inclusion throughout Abu Dhabi."
                  },
                  {
                    title: "Raise Public Awareness",
                    desc: "Increase understanding and awareness about the capabilities and rights of People of Determination, helping to build a more inclusive community mindset."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dcd-purple mb-2">{item.title}</h3>
                      <p className="text-charcoal">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patron's Message Section */}
      <section id="patrons-message" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Patron's Message</h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-dcd-purple to-dcd-purple-dark flex items-center justify-center">
                    <span className="text-white/50 text-lg">Official Portrait</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-soft-beige rounded-lg p-8 shadow-md relative">
                  <div className="text-5xl text-gold opacity-30 absolute top-4 left-4">"</div>
                  
                  <div className="pl-6">
                    <p className="text-charcoal mb-6 text-lg italic">
                      In Abu Dhabi, we envision a society where every individual, regardless of ability, can lead a dignified and fulfilling life. The Damj Award represents our commitment to recognizing those who share this vision and work tirelessly to make it a reality.
                    </p>
                    
                    <p className="text-charcoal mb-6 text-lg italic">
                      By celebrating excellence in inclusion, we not only honor the achievements of today but also inspire the innovations of tomorrow. Together, we are building an Abu Dhabi that embraces diversity, removes barriers, and enables all people to contribute their unique talents and perspectives.
                    </p>
                    
                    <p className="text-charcoal mb-8 text-lg italic">
                      I invite all organizations to participate in this journey toward a more inclusive emirate, where the full participation of People of Determination enriches our community and strengthens our future.
                    </p>
                    
                    <div className="flex flex-col">
                      <span className="font-bold text-dcd-purple text-xl">H.E. Dr. Mugheer Khamis Al Khaili</span>
                      <span className="text-charcoal">Chairman, Department of Community Development</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-right">
                  <p className="text-dcd-purple font-medium">Available in Arabic:</p>
                  <Button 
                    variant="outline" 
                    className="mt-2 border-dcd-purple text-dcd-purple hover:bg-dcd-purple hover:text-white"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                    View Arabic Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origins & Alignment Section */}
      <section id="origins-alignment" className="py-16 bg-soft-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Origins & Strategic Alignment</h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <div className="md:w-1/2">
                  <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-sky-blue to-dcd-purple flex items-center justify-center">
                      <span className="text-white/50 text-lg">Strategic Launch Event</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-dcd-purple mb-4">Strategic Foundation</h3>
                  <p className="text-charcoal mb-4">
                    The Abu Dhabi Excellence Award for People of Determination Inclusion was launched in 2025 as a key initiative within the Abu Dhabi People of Determination Strategy 2020-2024, under the patronage of His Highness Sheikh Khaled bin Mohamed bin Zayed Al Nahyan, Crown Prince of Abu Dhabi.
                  </p>
                  <p className="text-charcoal">
                    This award represents a significant milestone in Abu Dhabi's journey toward creating a fully inclusive society, building on the foundation established by the strategy while ensuring its principles continue to flourish beyond the strategy's timeframe.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-dcd-purple mb-4">Alignment with Abu Dhabi Vision</h3>
                <p className="text-charcoal mb-6">
                  The Damj Award aligns with several key pillars of Abu Dhabi's vision for social development:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dcd-purple mb-1">Social Inclusion</h4>
                      <p className="text-charcoal text-sm">Ensuring all community members can participate fully in society</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dcd-purple mb-1">Economic Participation</h4>
                      <p className="text-charcoal text-sm">Enabling meaningful employment and contribution to the economy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dcd-purple mb-1">Education & Development</h4>
                      <p className="text-charcoal text-sm">Providing equal access to quality education and growth opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dcd-purple rounded-full flex items-center justify-center text-white mr-4 mt-1 flex-shrink-0">
                      <UniversalAccess className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dcd-purple mb-1">Accessible Infrastructure</h4>
                      <p className="text-charcoal text-sm">Creating physical and digital environments accessible to all</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between bg-soft-beige p-6 rounded-lg">
                  <div className="mb-4 sm:mb-0 sm:mr-4">
                    <h4 className="font-bold text-dcd-purple mb-2">Key Reference Document</h4>
                    <p className="text-charcoal text-sm">Download the complete Abu Dhabi People of Determination Strategy 2020-2024</p>
                  </div>
                  <Button 
                    className="bg-dcd-purple text-white hover:bg-dcd-purple-dark"
                  >
                    <FilePdf className="h-4 w-4 mr-2" />
                    Download Strategy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Identity Section */}
      <section id="award-identity" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-dcd-purple mb-4">Award Identity</h2>
              <div className="w-24 h-1 bg-gold mb-6"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-2/5">
                <div className="bg-dcd-purple rounded-lg p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <h3 className="text-dcd-purple text-5xl font-bold">دمج</h3>
                  </div>
                  <h3 className="text-white text-3xl font-bold mb-4">DAMJ</h3>
                  <p className="text-white text-lg mb-6">Integration • Inclusion • Belonging</p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-emerald rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5">
                <div className="bg-soft-beige rounded-lg p-8 h-full">
                  <h3 className="text-2xl font-bold text-dcd-purple mb-6">The Meaning Behind "Damj"</h3>
                  
                  <p className="text-charcoal mb-6">
                    The name "Damj" (دمج) comes from the Arabic word meaning "integration" or "inclusion" – perfectly embodying the core purpose of this award. This name was carefully chosen to reflect:
                  </p>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="text-gold text-xs mt-2 mr-3">●</div>
                      <p className="text-charcoal"><span className="font-bold">Cultural Relevance:</span> Rooted in Arabic language and values, reflecting Abu Dhabi's identity while addressing a universal principle.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="text-gold text-xs mt-2 mr-3">●</div>
                      <p className="text-charcoal"><span className="font-bold">Conceptual Depth:</span> Encompasses not just physical integration but meaningful participation and belonging in all aspects of society.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="text-gold text-xs mt-2 mr-3">●</div>
                      <p className="text-charcoal"><span className="font-bold">Simplicity & Memorability:</span> A concise, powerful word that resonates and is easy to remember across languages and cultures.</p>
                    </li>
                  </ul>
                  
                  <p className="text-charcoal mb-6">
                    The Damj Award visual identity features colors and symbols that represent diversity, excellence, and growth. The integration of Arabic and English elements reflects our commitment to creating bridges between all members of society.
                  </p>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      className="border-dcd-purple text-dcd-purple hover:bg-dcd-purple hover:text-white"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Brand Guidelines
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-dcd-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Apply for the Damj Award?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join the organizations making a difference in the lives of People of Determination in Abu Dhabi</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button 
              className="px-8 py-6 bg-gold text-charcoal hover:bg-gold/90 font-bold text-lg"
            >
              Apply Now
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-dcd-purple font-bold text-lg"
            >
              Learn About Categories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
