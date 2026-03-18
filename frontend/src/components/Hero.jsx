import React from 'react';
import { ArrowRight, Code, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] pt-28 pb-20 px-8 hero-gradient relative overflow-hidden">
      {/* Soft decorative blurs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Photo - Left Side */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative group">
              {/* Soft gradient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 via-blue-300 to-purple-200 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition duration-500"></div>
              
              {/* Photo container */}
              <div className="relative">
                <div className="w-[350px] h-[420px] rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img
                    src="https://customer-assets.emergentagent.com/job_1ec3fbe4-1f66-41e1-9b93-4c110b7b59f4/artifacts/q3tw8zh8_image.png"
                    alt="Andrés Felipe Florez"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Code badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 p-3 rounded-xl shadow-lg">
                  <Code className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Description - Right Side */}
          <div className="lg:col-span-3 space-y-5">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-blue-600 font-medium text-sm">Available for Projects</span>
            </div>
            
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2 leading-tight">
                Andrés Felipe
              </h1>
              <h1 className="text-5xl font-bold text-blue-500 mb-4 leading-tight">
                Florez
              </h1>
              <p className="text-2xl text-gray-700 font-medium">
                Full Stack Web Developer
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              Creating <span className="text-blue-500 font-semibold">clean, efficient</span> web applications with modern technologies. Specialized in <span className="text-blue-500 font-semibold">React, Node.js, and responsive design</span>. Every project is built with precision, performance, and user experience in mind.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToProjects}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 h-auto text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 rounded-xl"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-blue-400 px-8 py-6 h-auto text-base font-medium transition-all duration-200 rounded-xl"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;