
import React from 'react';

const AccessibilityToolbar = () => {
  return (
    <div id="accessibility-toolbar" className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg z-40 p-3 flex flex-col space-y-3 w-auto">
      <button 
        className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" 
        title="Increase Font Size"
        aria-label="Increase Font Size"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          <path d="M13 10a1 1 0 11-2 0 1 1 0 012 0zM7 10a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </button>
      <button 
        className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" 
        title="High Contrast"
        aria-label="Toggle High Contrast Mode"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14V4a6 6 0 010 12z" clipRule="evenodd" />
        </svg>
      </button>
      <button 
        className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" 
        title="Text to Speech"
        aria-label="Toggle Text to Speech"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <button 
        className="w-10 h-10 bg-soft-beige rounded-full flex items-center justify-center text-dcd-purple hover:bg-sky-blue hover:text-white transition" 
        title="Sign Language"
        aria-label="Toggle Sign Language Interpreter"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default AccessibilityToolbar;
