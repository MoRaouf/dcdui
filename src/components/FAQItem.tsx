
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button 
        className="flex items-center justify-between w-full p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition focus:outline-none"
        onClick={toggleFaq}
      >
        <span className="text-lg font-medium text-charcoal">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-dcd-purple" />
        ) : (
          <ChevronDown className="text-dcd-purple" />
        )}
      </button>
      <div className={`bg-white px-5 pb-5 rounded-b-lg -mt-1 shadow-md ${isOpen ? '' : 'hidden'}`}>
        <p className="text-charcoal">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
