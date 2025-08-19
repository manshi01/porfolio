import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Innovation Corp',
      location: 'Remote',
      period: '2022 - Present',
      description: [
        'Led development of a scalable e-commerce platform serving 50k+ users',
        'Implemented microservices architecture reducing system latency by 40%',
        'Mentored junior developers and conducted code reviews',
        'Collaborated with product team to define technical requirements',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Ltd',
      location: 'Mumbai, India',
      period: '2021 - 2022',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Improved application performance by 30% through optimization techniques',
        'Implemented automated testing reducing bugs by 25%',
        'Worked closely with UX team to implement pixel-perfect designs',
      ],
      technologies: ['React', 'TypeScript', 'Redux', 'Jest', 'Figma'],
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      location: 'Bangalore, India',
      period: '2020 - 2021',
      description: [
        'Built and maintained company website and internal tools',
        'Integrated third-party APIs for payment and analytics',
        'Participated in agile development process',
        'Created documentation for development processes',
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'MongoDB', 'Express.js'],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Delhi, India',
      period: '2016 - 2020',
      grade: 'CGPA: 8.5/10',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline dot */}
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-6 flex-1 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-gray-500 text-sm mt-1 sm:mt-0">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-medium shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    {edu.grade}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Certifications
              </h3>
              
              <div className="space-y-4">
                {[
                  'AWS Cloud Practitioner',
                  'Google Analytics Certified',
                  'MongoDB Developer Certification',
                  'React Professional Certification',
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium text-sm">
                        {cert}
                      </span>
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;