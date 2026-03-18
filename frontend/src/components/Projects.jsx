import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Heritage Platform',
      description: 'Colonial architecture restoration platform with heritage gallery',
      technologies: ['React', 'Node.js', 'Full Stack'],
      liveUrl: 'https://heritageproject.vercel.app/',
      color: 'border-orange-200 hover:border-orange-400',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      id: 2,
      title: 'Hotel Booking',
      description: 'Luxury hotel booking system with real-time availability',
      technologies: ['React', 'Express', 'REST API'],
      liveUrl: 'https://finalboking.vercel.app/',
      color: 'border-blue-200 hover:border-blue-400',
      buttonColor: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      id: 3,
      title: 'Healthcare Platform',
      description: 'Executive health analytics and medical dashboard',
      technologies: ['React', 'Node.js', 'SQL'],
      liveUrl: 'https://healtcaree.vercel.app/',
      color: 'border-teal-200 hover:border-teal-400',
      buttonColor: 'bg-teal-500 hover:bg-teal-600',
    },
    {
      id: 4,
      title: 'Alzheimer Analytics',
      description: 'Healthcare data visualization and analytics platform',
      technologies: ['React', 'Analytics', 'Data Viz'],
      liveUrl: 'https://alzheimer-henna.vercel.app/',
      color: 'border-purple-200 hover:border-purple-400',
      buttonColor: 'bg-purple-500 hover:bg-purple-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-8 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4 text-blue-500" />
            <span className="text-blue-600 font-medium text-sm">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Clean, efficient web applications built with modern technologies
          </p>
        </div>

        {/* 4 Projects in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`overflow-hidden border-2 ${project.color} transition-all duration-300 group bg-white`}
            >
              {/* Live Preview */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <iframe
                  src={project.liveUrl}
                  title={project.title}
                  className="w-full h-full scale-[0.35] origin-top-left transform pointer-events-none"
                  style={{
                    width: '285%',
                    height: '285%',
                  }}
                />
              </div>
              
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-md border border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className={`w-full ${project.buttonColor} text-white font-medium text-sm py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200`}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;