import React, { useState, useEffect } from "react";
import {
  Trophy,
  Users,
  Zap,
  Target,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import jnnce1 from "@/assets/jnnce1.jpg";
import jnnce2 from "@/assets/jnnce2.jpg";
import jnnce3 from "@/assets/jnnce3.jpg";
import bgs1 from "@/assets/bgs1.jpg";
import bgs2 from "@/assets/bgs2.jpg";
import bgs3 from "@/assets/bgs3.jpg";
import ait from "@/assets/ait.jpeg";
import ait1 from "@/assets/ait1.jpg";
import mal1 from "@/assets/mal1.jpeg";
import mal2 from "@/assets/mal2.png";

// import jnnce1 from '@/assets/jnnce1.jpg';
// import jnnce2 from '@/assets/jnnce2.jpg';
// import jnnce3 from '@/assets/jnnce3.jpg';

const Hackathons = () => {
  // Hackathon data must be declared before it's used in hooks or functions.
  const hackathons = [
    {
      id: 1,
      title: "MONAIthon 2025 National Level 2-days Hackathon,JNNCE SHIMOGA",
      achievement: "🥉 2n Runner-up",
      project:
        "BRATS & DRIVE AI-Powered Medical Imaging Analysis, model training using Monai Framework",
      description:
        "Developed an AI-driven medical imaging solution using BRATS and DRIVE datasets for brain tumor and retinal image analysis, enabling accurate segmentation and diagnostic insights.",
      technologies: [
        "Python",
        "Koggle",
        "Machine Learning",
        "Deep Learning",
        "FastAPI",
        "React.js",
        "Medical Imaging Datasets (BRATS, DRIVE)",
      ],
      date: "2025",
      participants: "200+ participants",
      gradient: "from-electric-blue to-electric-cyan",
      icon: Trophy,
      photos: [jnnce1, jnnce2, jnnce3],
    },
    {
      id: 2,
      title: "Web Designing Hackathon, BGSIT, ACU B.G.Nagar",
      achievement: "🥉 Third Place",
      project: "E-Learning Platform with AI-Driven Personalization",
      description:
        "Designed and developed an interactive e-learning platform with AI-driven personalization to enhance student engagement, learning experience, and content accessibility.",
      technologies: [
        "React.js",
        "REST API Integration",
        "AI-Based Content Personalization",
        "Responsive & Accessible Design",
        "Modern Frontend Architecture",
      ],
      date: "2025",
      participants: "150+ participants",
      gradient: "from-electric-purple to-electric-pink",
      icon: Target,
      photos: [bgs1, bgs2, bgs3],
    },
    {
      id: 3,
      title: "Aignite 2.0 National Level Project Expo ,AIT Chikkamagaluru",
      achievement: "🧑‍💻 Internship Offer",
      project: "Model Training",
      description:
        "BRATS & DRIVE AI-Powered Medical Imaging Analysis using Monai Framework",
      technologies: ["Deep Learning", "Model Training", "Koggle"],
      date: "2025",
      participants: "400+ participants",
      gradient: "from-electric-cyan to-electric-blue",
      icon: Zap,
      photos: [ait, ait1],
    },
    {
      id: 4,
      title: "Automathon 2025 Hackathon, MCE Hassan",
      achievement: "🚀 Top 4 Finalist",
      project: "Automatic Certificate Generator",
      description:
        "Built an automation-driven certificate generation system that automatically creates, stores, and distributes personalized certificates, reducing manual effort and turnaround time.",
      technologies: [
        "n8n Automation",
        "Workflow Design",
        "Google Forms",
        "Google Drive API",
        "Email Automation",
        "HTML-to-PDF Generation",
      ],
      date: "2025",
      participants: "150+ participants",
      gradient: "from-electric-cyan to-electric-blue",
      icon: Zap,
      photos: [mal1, mal2],
    },
  ];

  const [activePhotos, setActivePhotos] = useState({});

  // Function to handle the photo navigation for a specific hackathon.
  const handlePhotoChange = (hackathonId, direction) => {
    setActivePhotos((prev) => {
      const currentPhotoIndex = prev[hackathonId] || 0;
      const hackathon = hackathons.find((h) => h.id === hackathonId);
      if (!hackathon || !hackathon.photos) return prev;

      let newIndex = currentPhotoIndex;
      if (direction === "next") {
        newIndex = (currentPhotoIndex + 1) % hackathon.photos.length;
      } else {
        newIndex =
          (currentPhotoIndex - 1 + hackathon.photos.length) %
          hackathon.photos.length;
      }

      return { ...prev, [hackathonId]: newIndex };
    });
  };

  // useEffect hook to handle the automatic photo scrolling
  useEffect(() => {
    // Set an interval to change the photo every 3 seconds for each hackathon
    const interval = setInterval(() => {
      setActivePhotos((prev) => {
        const nextPhotos = { ...prev };
        hackathons.forEach((hackathon) => {
          if (hackathon.photos && hackathon.photos.length > 1) {
            const currentPhotoIndex = prev[hackathon.id] || 0;
            nextPhotos[hackathon.id] =
              (currentPhotoIndex + 1) % hackathon.photos.length;
          }
        });
        return nextPhotos;
      });
    }, 3000); // 3-second delay

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [hackathons.length]); // Re-run effect only if the number of hackathons changes

  return (
    <section id="hackathons" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathons & <span className="gradient-text">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-electric mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Competitive achievements showcasing innovation and problem-solving
            skills in high-pressure environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {hackathons.map((hackathon) => {
            const IconComponent = hackathon.icon;
            // Get the current photo index for this specific hackathon card
            const currentPhotoIndex = activePhotos[hackathon.id] || 0;
            const hasMultiplePhotos =
              hackathon.photos && hackathon.photos.length > 1;

            return (
              <div
                key={hackathon.id}
                className="glass rounded-2xl overflow-hidden electric-glow group hover:scale-105 transition-all duration-300"
              >
                {/* Photo Showcase Section */}
                {hackathon.photos && hackathon.photos.length > 0 && (
                  <div className="relative h-64 overflow-hidden rounded-t-2xl">
                    <img
                      src={hackathon.photos[currentPhotoIndex]}
                      alt={`${hackathon.title} photo ${currentPhotoIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />
                    {/* Navigation buttons */}
                    {hasMultiplePhotos && (
                      <>
                        <button
                          onClick={() =>
                            handlePhotoChange(hackathon.id, "prev")
                          }
                          className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                          aria-label="Previous photo"
                        >
                          <ArrowLeft size={20} />
                        </button>
                        <button
                          onClick={() =>
                            handlePhotoChange(hackathon.id, "next")
                          }
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                          aria-label="Next photo"
                        >
                          <ArrowRight size={20} />
                        </button>
                      </>
                    )}
                    {/* Dots indicator */}
                    {hasMultiplePhotos && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {hackathon.photos.map((_, dotIndex) => (
                          <span
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                              dotIndex === currentPhotoIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {/* Header */}
                <div
                  className={`p-6 bg-gradient-to-r ${hackathon.gradient} bg-opacity-10`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-background/30 backdrop-blur-sm">
                      <IconComponent size={24} className="text-space-dark" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-space-dark">
                        {hackathon.achievement}
                      </div>
                      <div className="text-sm text-space-dark/70">
                        {hackathon.date}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-space-dark mb-2">
                    {hackathon.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-space-dark/70">
                    <Users size={14} />
                    {hackathon.participants}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {hackathon.project}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {hackathon.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-3">
                      Technologies Used
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-card-border/30 text-muted-foreground rounded-md hover:bg-primary/10 hover:text-foreground transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Achievement Badge */}
                <div className="px-6 pb-6">
                  <div className="w-full p-3 rounded-lg bg-gradient-glow text-center">
                    <div className="text-primary font-semibold text-sm">
                      🏆 Competition Winner
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center electric-glow">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Hackathons Won</div>
          </div>
          <div className="glass rounded-xl p-6 text-center electric-glow">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">
              Total Participants Competed Against
            </div>
          </div>
          <div className="glass rounded-xl p-6 text-center electric-glow">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Hackathons Participated</div>
          </div>
        </div>

        {/* Competitive Edge */}
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 electric-glow max-w-2xl mx-auto">
            <Trophy className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              <span className="gradient-text">Competitive Innovation</span>
            </h3>
            <p className="text-muted-foreground">
              Proven ability to deliver innovative AI solutions under pressure,
              competing against top talent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
