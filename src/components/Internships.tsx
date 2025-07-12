import React from 'react';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Internships: React.FC = () => {
  const internships = [
    {
      company: "RailNets",
      location: "Madurai",
      role: "Engineering Intern",
      duration: "2024",
      description: "Explored railway safety protocols, automated control mechanisms, and the integration of telecommunication systems for efficient train operations.",
      keyLearnings: [
        "Railway safety protocols and standards",
        "Automated control mechanisms in rail systems",
        "Telecommunication system integration",
        "Efficient train operation management",
        "Industrial safety practices"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      icon: <Building2 className="text-white" size={24} />
    },
    {
      company: "Fantasy Solutions",
      location: "Remote",
      role: "Software Development Intern",
      duration: "2024",
      description: "Designed and developed the login interface and navigation for a Blood Bank Management app, ensuring seamless user authentication.",
      keyLearnings: [
        "User interface design principles",
        "Authentication system development",
        "Navigation flow optimization",
        "Healthcare application development",
        "User experience best practices"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      icon: <Building2 className="text-white" size={24} />
    }
  ];

  return (
    <section id="internships" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hands-on experience gained through internships and real-world projects
          </p>
        </div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${internship.bgGradient} p-8 rounded-2xl border ${internship.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Company Info */}
                <div className="flex items-start gap-6 lg:flex-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${internship.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {internship.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{internship.role}</h3>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{internship.company}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span className="font-medium">{internship.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">{internship.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {internship.description}
                    </p>
                  </div>
                </div>

                {/* Key Learnings */}
                <div className="lg:w-1/3">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle size={20} className="mr-2 text-green-600" />
                    Key Learnings
                  </h5>
                  <ul className="space-y-2">
                    {internship.keyLearnings.map((learning, learningIndex) => (
                      <li key={learningIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-gradient-to-r ${internship.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-sm">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready for New <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Opportunities</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              These internship experiences have equipped me with practical skills and industry knowledge. 
              I'm excited to apply these learnings in a full-time software development role.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;