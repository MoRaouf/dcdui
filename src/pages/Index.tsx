
import React, { useEffect, useState } from "react";
import { Award } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-award-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-award-dark via-award-dark to-black opacity-80"></div>
      
      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} transition-all duration-700 ease-out`}>
          <div className="inline-flex items-center justify-center mb-6">
            <Award className="text-award-gold w-12 h-12 mr-2" />
            <div className="h-px w-12 bg-award-gold/30"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white tracking-tight mb-6">
            <span className="inline-block shimmer bg-clip-text text-transparent bg-gradient-to-r from-award-gold via-white to-award-gold">
              DCD Awards
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto opacity-90 mb-8 font-light">
            Celebrating excellence in digital design and innovation
          </p>
          
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-award-gold to-transparent"></div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="absolute bottom-8 text-center text-sm text-gray-500">
        <p>© 2025 DCD Awards</p>
      </div>
    </div>
  );
};

export default Index;
