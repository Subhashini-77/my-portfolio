import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Users, Target } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  duration: string;
  teamSize?: string;
  objectives: string[];
  outcomes: string[];
  gradient: string;
  bgGradient: string;
  borderColor: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Miniaturized SRR Antenna",
      shortDescription: "Fabric substrates for miniaturized SRRs enabling compact, flexible components in high-frequency wireless devices.",
      fullDescription: "This innovative project explores the use of fabric substrates for miniaturized Split Ring Resonators (SRRs) to create compact and flexible antenna components suitable for high-frequency wireless applications. The research demonstrates the feasibility of integrating textile materials into antenna design, opening new possibilities for wearable technology and conformal antenna applications.",
      technologies: ["Antenna Design", "RF Engineering", "Textile Materials", "High-Frequency Analysis", "Electromagnetic Simulation"],
      category: "RF & Antenna Engineering",
      duration: "6 months",
      teamSize: "Individual Project",
      objectives: [
        "Design miniaturized SRR antennas using fabric substrates",
        "Analyze high-frequency performance characteristics",
        "Evaluate flexibility and durability of textile-based antennas",
        "Optimize antenna parameters for wearable applications"
      ],
      outcomes: [
        "Successfully demonstrated fabric-based SRR antenna functionality",
        "Achieved compact form factor suitable for wearable devices",
        "Validated performance in IoT and medical device applications",
        "Contributed to advancement in conformal antenna technology"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      borderColor: "border-purple-100",
      icon: <Target className="text-white" size={24} />
    },
    {
      id: 2,
      title: "Advanced Driving Assistance System (ADAS) Simulation",
      shortDescription: "Designed and simulated ADAS framework using CANoe for real-time vehicle communication testing.",
      fullDescription: "This comprehensive project involved designing and simulating an Advanced Driving Assistance System (ADAS) framework using the CANoe application. The system enables real-time testing of vehicle communication protocols and CAN bus-based sensor integration, focusing on critical safety features like obstacle detection, lane monitoring, and adaptive cruise control.",
      technologies: ["CANoe", "CAN Bus Protocol", "Vehicle Communication", "Sensor Integration", "Real-time Systems", "Automotive Testing"],
      category: "Automotive Systems",
      duration: "4 months",
      teamSize: "Team of 3",
      objectives: [
        "Develop comprehensive ADAS simulation framework",
        "Implement real-time vehicle communication protocols",
        "Integrate CAN bus-based sensor systems",
        "Test obstacle detection and lane monitoring algorithms",
        "Validate adaptive cruise control functionality"
      ],
      outcomes: [
        "Successfully simulated complete ADAS framework",
        "Achieved real-time communication between vehicle components",
        "Demonstrated effective obstacle detection capabilities",
        "Enhanced understanding of vehicular safety systems",
        "Provided insights for automotive automation advancement"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      icon: <Users className="text-white" size={24} />
    },
    {
      id: 3,
      title: "Traffic Light Signaling System",
      shortDescription: "Real-time traffic light control system simulation with timing algorithms and pedestrian integration.",
      fullDescription: "This project involved simulating a sophisticated real-time traffic light control system using the Wokwi platform. The system incorporates advanced timing algorithms, state transitions, and pedestrian signal integration to optimize traffic flow and enhance urban mobility management.",
      technologies: ["Wokwi Simulation", "Embedded Systems", "State Machine Design", "Timing Algorithms", "IoT Integration", "Traffic Management"],
      category: "Embedded Systems & IoT",
      duration: "3 months",
      teamSize: "Individual Project",
      objectives: [
        "Design intelligent traffic light control algorithms",
        "Implement state-based traffic signal transitions",
        "Integrate pedestrian crossing signals",
        "Optimize traffic flow patterns",
        "Simulate real-world traffic scenarios"
      ],
      outcomes: [
        "Developed fully functional traffic light simulation",
        "Achieved optimized traffic flow management",
        "Successfully integrated pedestrian safety features",
        "Demonstrated scalable urban traffic solutions",
        "Enhanced understanding of smart city technologies"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      icon: <Target className="text-white" size={24} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions and research projects showcasing technical expertise and problem-solving skills
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover="hover"
              className={`bg-gradient-to-br ${project.bgGradient} p-6 rounded-2xl border ${project.borderColor} cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300`}
              onClick={() => setSelectedProject(project)}
              layoutId={`project-${project.id}`}
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mr-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.category}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 line-clamp-3">{project.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-white/60 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/60 text-gray-700 rounded-full text-xs font-medium">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  {project.duration}
                </div>
                <motion.div 
                  className="text-purple-600 font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Details →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div
                className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layoutId={`project-${selectedProject.id}`}
              >
                <div className={`bg-gradient-to-br ${selectedProject.bgGradient} p-8 border-b ${selectedProject.borderColor}`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${selectedProject.gradient} rounded-xl flex items-center justify-center mr-6`}>
                        {selectedProject.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                        <p className="text-lg text-gray-600">{selectedProject.category}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-white/20 rounded-full transition-colors"
                    >
                      <X size={24} className="text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={20} className="mr-3" />
                      <span className="font-medium">Duration: {selectedProject.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Users size={20} className="mr-3" />
                      <span className="font-medium">{selectedProject.teamSize}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Target size={20} className="mr-2 text-purple-600" />
                        Objectives
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <ExternalLink size={20} className="mr-2 text-green-600" />
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className={`px-4 py-2 bg-gradient-to-r ${selectedProject.gradient} text-white rounded-full font-medium shadow-lg`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;