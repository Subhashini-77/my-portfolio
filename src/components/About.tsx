import React from 'react';
import { Code, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate fresher ready to make an impact in the software development world
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                Hello! I'm <strong className="text-purple-600">Subhashini</strong>, a recent Electronics and Communication Engineering graduate 
                from SSM Institute of Engineering and Technology. While my academic background is in ECE, 
                my true passion lies in software development and creating digital solutions.
              </p>
              <p className="text-lg leading-relaxed">
                I've dedicated myself to learning programming languages like Java and C++, along with 
                web technologies including HTML and CSS. I believe in continuous learning and am excited 
                to contribute fresh perspectives to innovative projects.
              </p>
              <p className="text-lg leading-relaxed">
                As a fresher, I bring enthusiasm, adaptability, and a strong foundation in problem-solving. 
                I'm eager to grow, learn from experienced developers, and contribute to meaningful projects 
                that make a difference.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Problem Solver</h3>
              </div>
              <p className="text-gray-600">
                I enjoy breaking down complex problems into manageable solutions and writing clean, efficient code.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Passionate Learner</h3>
              </div>
              <p className="text-gray-600">
                Constantly exploring new technologies and frameworks to stay current with industry trends.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Goal-Oriented</h3>
              </div>
              <p className="text-gray-600">
                Focused on building a successful career in software development and contributing to innovative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;