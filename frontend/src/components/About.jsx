import React from 'react';
import { Code2, Database, Layout, Server, Download, Zap, GitBranch, Palette, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const About = () => {
  const skills = [
    {
      icon: Layout,
      title: 'Frontend',
      description: 'React, JavaScript, HTML, CSS',
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Node.js, Express, REST APIs',
    },
    {
      icon: Database,
      title: 'Database',
      description: 'SQL, MongoDB, Integration',
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git, GitHub, Collaboration',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Responsive, Clean Interfaces',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'Modern Web Standards, APIs',
    },
  ];

  const handleDownloadResume = () => {
    window.open(
      'https://customer-assets.emergentagent.com/job_1ec3fbe4-1f66-41e1-9b93-4c110b7b59f4/artifacts/3py8po07_Andres%20Felipe%20CV%20%282%29.pdf',
      '_blank'
    );
  };

  return (
    <section id="about" className="py-20 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4 text-blue-500" />
            <span className="text-blue-600 font-medium text-sm">EXPERTISE</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full stack developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <Card
                key={index}
                className="border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {skill.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            onClick={handleDownloadResume}
            className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-6 h-auto text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 rounded-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;