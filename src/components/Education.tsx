import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.E (Electronics and Communication Engineering)",
      institution: "SSM Institute of Engineering and Technology",
      percentage: "76%",
      duration: "2021 - 2025",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100"
    },
    {
      degree: "Higher Secondary (HSLC)",
      institution: "Vidhya Parthi Higher Secondary School",
      percentage: "87%",
      duration: "2020 - 2021",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100"
    },
    {
      degree: "Secondary School (SSLC)",
      institution: "Vidhya Parthi Higher Secondary School",
      percentage: "86%",
      duration: "2018 - 2019",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Educational <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and achievements
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${edu.bgGradient} p-8 rounded-2xl border ${edu.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="flex items-start gap-6 flex-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className="text-white" size={28} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-gray-700 mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Award size={16} className="mr-2" />
                        <span className="font-medium">{edu.percentage}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`bg-gradient-to-r ${edu.gradient} text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg`}>
                  {edu.percentage}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements and Certifications */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Achievements & <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="text-lg text-gray-800 font-medium">
                      <strong>Certified in C++ Programming</strong> - IECD under SUITS
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="text-lg text-gray-800 font-medium">
                      <strong>Paper Presentations</strong> - Presented on Neuralink and AWS, received awards for both presentations
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="text-left">
                    <p className="text-lg text-gray-800 font-medium">
                      <strong>Career Essentials in Data Analysis</strong> - Microsoft Certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;