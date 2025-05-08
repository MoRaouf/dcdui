
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer id="footer" className="bg-charcoal text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <div className="w-12 h-12 bg-dcd-purple rounded-lg flex items-center justify-center text-white">
                <span className="font-bold text-xl">DAMJ</span>
              </div>
              <div className="ml-3">
                <h3 className="font-bold">Abu Dhabi Excellence Award</h3>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">Recognizing and celebrating organizations that champion inclusion and accessibility for People of Determination in Abu Dhabi.</p>
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </span>
              <span className="text-gray-400 hover:text-white transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </span>
            </div>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About the Award</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white transition">Award Categories</Link></li>
              <li><Link to="/apply" className="text-gray-400 hover:text-white transition">How to Apply</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-white transition">Success Stories</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition">News & Updates</Link></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/resources/guide" className="text-gray-400 hover:text-white transition">Application Guide</Link></li>
              <li><Link to="/eligibility" className="text-gray-400 hover:text-white transition">Eligibility Criteria</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition">Frequently Asked Questions</Link></li>
              <li><Link to="/resources/accessibility" className="text-gray-400 hover:text-white transition">Accessibility Guidelines</Link></li>
              <li><Link to="/winners" className="text-gray-400 hover:text-white transition">Previous Winners</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact Support</Link></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest news about the award and inclusion initiatives.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  className="w-full p-3 bg-gray-700 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gold" 
                  placeholder="Your email" 
                />
                <Button className="bg-gold text-charcoal hover:bg-gold/90 rounded-l-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </Button>
              </div>
            </form>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-12 bg-gray-500 rounded"></div>
              <div className="h-6 w-12 bg-gray-500 rounded"></div>
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
  );
};

export default Footer;
