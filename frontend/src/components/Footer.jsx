import React from 'react';
import { Zap, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Zap className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">ANDRÉS FLOREZ</span>
              <span className="text-xs text-gray-400">Full Stack Developer</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Andrés Felipe Florez.</span>
            <span className="flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" fill="currentColor" /> in Colombia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;