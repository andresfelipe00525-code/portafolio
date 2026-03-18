import React from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andres_felipe_florez@hotmail.com',
      link: 'mailto:andres_felipe_florez@hotmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+57 312 372 5058',
      link: 'tel:+573123725058',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://www.linkedin.com/in/andr%C3%A9s-felipe-florez-933891383/',
    },
  ];

  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next project? Get in touch and let's create something exceptional together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card
                key={index}
                className="border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-semibold text-gray-500 uppercase mb-2 tracking-wide">
                    {info.label}
                  </h3>
                  <a
                    href={info.link}
                    target={info.icon === Linkedin ? '_blank' : undefined}
                    rel={info.icon === Linkedin ? 'noopener noreferrer' : undefined}
                    className="text-gray-900 hover:text-blue-500 transition-colors duration-200 font-medium text-base block"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-blue-500 rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-3">
            Ready to Start?
          </h3>
          <p className="text-blue-50 mb-6 text-base max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean, efficient web solutions.
          </p>
          <Button
            onClick={() =>
              window.open(
                'mailto:andres_felipe_florez@hotmail.com?subject=Project Inquiry',
                '_blank'
              )
            }
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-5 h-auto font-semibold text-base shadow-md hover:shadow-lg transition-all duration-200 rounded-xl"
          >
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;