import React from 'react';
import { Code, Palette, Users, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Proficient in modern web technologies including React, Node.js, and cloud platforms.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces with attention to user experience.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Experienced in working with cross-functional teams using agile methodologies.',
    },
    {
      icon: Trophy,
      title: 'Problem Solving',
      description: 'Passionate about tackling complex challenges and delivering innovative solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated developer with a passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With a strong foundation in computer science and years of hands-on experience, 
                I specialize in creating robust, scalable web applications that deliver exceptional 
                user experiences.
              </p>
              
              <p>
                My journey in tech has taken me through various domains, from e-commerce platforms 
                to enterprise applications, always focusing on clean code, performance optimization, 
                and user-centric design.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers in the community.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-blue-600">Experience:</span>
                  <span className="text-gray-600 ml-2">3+ Years</span>
                </div>
                <div>
                  <span className="font-medium text-blue-600">Location:</span>
                  <span className="text-gray-600 ml-2">India</span>
                </div>
                <div>
                  <span className="font-medium text-blue-600">Focus:</span>
                  <span className="text-gray-600 ml-2">Full-Stack Development</span>
                </div>
                <div>
                  <span className="font-medium text-blue-600">Available:</span>
                  <span className="text-gray-600 ml-2">For Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;