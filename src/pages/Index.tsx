import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "UiPath", level: 95, category: "Expert" },
    { name: "RPA", level: 95, category: "Expert" },
    { name: "SQL", level: 80, category: "Proficient" },
    { name: "Python", level: 70, category: "Intermediate" },
    { name: "AS400/Mainframe", level: 85, category: "Proficient" },
    { name: "API Integration", level: 75, category: "Proficient" }
  ];

  const projects = [
    {
      title: "Mainframe User Provisioning BOT",
      description: "Automated AS400 application using UiPath terminal session activities, SMTP for email, and HTTP requests for REST APIs.",
      tech: ["UiPath", "AS400", "REST API", "SMTP"]
    },
    {
      title: "User Availability Reporting BOT", 
      description: "Searched AS400 apps for user presence, generated Excel reports, emailed clients, and created incidents via ServiceNow API.",
      tech: ["UiPath", "Excel", "ServiceNow API", "AS400"]
    },
    {
      title: "Weekly/Monthly Audit Report Automation",
      description: "Consolidated bot-generated reports to track provisioning trends, audit logs, and manual hours saved.",
      tech: ["UiPath", "Excel", "Data Analysis", "Reporting"]
    }
  ];

  const services = [
    "UiPath BOT Development",
    "AS400/Mainframe Automation", 
    "Excel & Report Automation",
    "API Integration (REST APIs, ServiceNow)"
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Hrithik Basu</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            transform: `translateY(${scrollY * 0.1}px)`
          }} />
        </div>

        <div className="text-center z-10 px-6">
          {/* Profile Picture Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
            HB
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-4 animate-fade-in">
            Hrithik Basu
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-6 animate-fade-in">
            RPA Developer | UiPath Expert
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto animate-fade-in">
            Automating processes efficiently using RPA, UiPath, and Python.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="prose prose-lg mx-auto text-slate-600 leading-relaxed">
            <p className="mb-6">
              Hrithik Basu is a dedicated RPA Developer at <strong>Wipro Technologies</strong> with over 3 years of IT experience. 
              He holds a BTech degree in Electrical Engineering from West Bengal University of Technology (2022).
            </p>
            <p className="mb-6">
              Passionate about automation, Hrithik specializes in building robust automation solutions using UiPath, SQL, 
              and Python scripting. His expertise lies in creating efficient, scalable automation workflows that drive 
              business value and operational excellence.
            </p>
            <p>
              Core values: <em>Dedication, attention to detail, and continuous learning</em> drive his approach to 
              delivering high-quality automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
                <p className="text-sm text-slate-500 mt-2">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-8">What I Offer</h2>
          <p className="text-xl text-center text-slate-600 mb-12">
            Specializing in scalable RPA solutions using UiPath
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{service}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-slate-300 mb-12">
            Let's discuss how automation can transform your business processes
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <a 
              href="mailto:hrithikbasu28@gmail.com"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
            >
              <Mail className="w-8 h-8 mb-3 text-blue-400" />
              <span className="text-sm text-slate-300">Email</span>
              <span className="text-sm font-medium">hrithikbasu28@gmail.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/hrithik-basu-79072a19a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
            >
              <Linkedin className="w-8 h-8 mb-3 text-blue-400" />
              <span className="text-sm text-slate-300">LinkedIn</span>
              <span className="text-sm font-medium">Connect with me</span>
            </a>
            
            <a 
              href="tel:+91-8013554280"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
            >
              <div className="w-8 h-8 mb-3 text-blue-400 flex items-center justify-center">📞</div>
              <span className="text-sm text-slate-300">Phone</span>
              <span className="text-sm font-medium">+91-8013554280</span>
            </a>
            
            <a 
              href="https://github.com/rajbasu-0416"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors duration-300"
            >
              <Github className="w-8 h-8 mb-3 text-blue-400" />
              <span className="text-sm text-slate-300">GitHub</span>
              <span className="text-sm font-medium">View my code</span>
            </a>
          </div>

          <Button 
            onClick={() => window.open('mailto:hrithikbasu28@gmail.com', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start a Conversation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 Hrithik Basu. All rights reserved.</p>
          <p className="text-sm mt-2">RPA Developer | Automating the Future</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
