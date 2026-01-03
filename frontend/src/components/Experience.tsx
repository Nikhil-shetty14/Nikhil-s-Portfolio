import { Building, Calendar, MapPin, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack + React Native Intern",
      company: "Automatech",
      period: "Nov 2025 – Present",
      location: "Bengaluru, India",
      type: "Internship",
      achievements: [
        "Developed a full-stack MERN + Mobile application with React Native Expo and Node.js backend",
        "Integrated AI-powered automation features (smart validation, summarization, or chat assistance) to enhance user interaction",
        "Implemented backend workflows to automate repetitive tasks and improve system efficiency",
        "Ensured scalable API design and smooth data synchronization between mobile and web platforms"
      ],
      technologies: ["React Native (Expo)", "Node.js APIs", "MongoDB", "API","MERN stack"],
      gradient: "from-electric-blue to-electric-cyan"
    },
    {
      title: "Campus Ambassodar",
      company: "Inovact Private Limited",
      period: "Aug 2025 –  2025",
      location: "Mysuru, India",
      type: "Part-time",
      achievements: [
        "Increased campus awareness and participation by 30%+ through targeted WhatsApp and social media outreach",
        "Drove 200+ student registrations for webinars, workshops, and learning programs",
        "Built and managed an active student community, improving peer engagement and referrals by 25%+",
        "Promoted career-focused initiatives, contributing to consistent campus-level growth and visibility",
        "Finetuned Opensource LLMs for various usecases"
      ],
      technologies: ["Communication", "Leadership", "Social Media Marketing", "Community Building", "Networking"],
      gradient: "from-electric-purple to-electric-pink"
    },
    // {
    //   title: "AIML Intern",
    //   company: "AIML Spectrum",
    //   period: "June 2024 – July 2024",
    //   location: "Bangalore, India",
    //   type: "Internship",
    //   achievements: [
    //     "Achieved 60% user satisfaction by developing a RAG-based news chatbot processing 1,000+ daily news articles, with 95% retrieval accuracy using LangChain and Qdrant vector storage",
    //     "Reduced patient wait times by 50% through implementing an AI healthcare chatbot, successfully handling 1000+ daily patient queries with 78% accuracy in vital sign monitoring",
    //     "Automated medical PDF data extraction achieving 85% accuracy, reducing manual processing time by 75% while maintaining HIPAA compliance, processing 500+ medical records daily",
    //   ],
    //   technologies: ["Python", "OCR", "Medical Text Extraction", "Data Processing","Web Scrapping"],
    //   gradient: "from-electric-purple to-electric-pink"
    // }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          MERN Stack & Mobile Developer crafting real-world, scalable applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-electric hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block" 
                     style={{ top: '2rem' }} />
                
                {/* Experience Card */}
                <div className="md:ml-16 glass rounded-2xl overflow-hidden electric-glow group hover:scale-[1.02] transition-all duration-300">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${exp.gradient} bg-opacity-10`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-background/20 backdrop-blur-sm">
                          <Building size={24} className="text-foreground" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="text-lg font-semibold text-foreground mb-2">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                            <div className="px-2 py-1 bg-background/30 text-foreground rounded-md font-medium">
                              {exp.type}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Zap size={18} className="text-primary" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <p className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-sm font-medium bg-card-border/30 text-muted-foreground rounded-lg hover:bg-primary/10 hover:text-foreground transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlight */}
        {/* <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-glow mb-4">
              <Zap size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              <span className="gradient-text">Specialized in Production AI</span>
            </h3>
            <p className="text-muted-foreground">
              From healthcare systems to enterprise solutions, I build AI that scales and delivers real value
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;