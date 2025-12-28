/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import { useTypewriter } from "./hooks/useTypewriter";
import {
  Code2,
  Database,
  Server,
  Layers,
  Lock,
  GitBranch,
  Box,
  Mail,
  Github,
  Linkedin,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import CustomCursor from "./components/CustomCursor";
import useScrollAnimation from "./hooks/useScrollAnimation";
import { supabase } from "./lib/supabase";

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  // Remove this:
  // const [roleIndex, setRoleIndex] = useState(0);
  // const roles = ['Backend Developer', 'Full Stack Engineer', 'Node.js Specialist', 'API Architect'];

  // Add this:
  const roles = [
    "Backend Developer",
    "Full Stack Engineer",
    "Node.js Specialist",
    "API Architect",
  ];
  const typedRole = useTypewriter(roles, 150, 1500);

  const skills = [
    { name: "Node.js", icon: Code2, color: "from-green-400 to-emerald-500" },
    { name: "TypeScript", icon: Code2, color: "from-blue-400 to-blue-600" },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-green-700" },
    { name: "REST API", icon: Server, color: "from-cyan-400 to-cyan-600" },
    {
      name: "Microservices",
      icon: Layers,
      color: "from-purple-400 to-purple-600",
    },
    { name: "Docker", icon: Box, color: "from-blue-500 to-blue-700" },
    { name: "Auth Systems", icon: Lock, color: "from-red-400 to-red-600" },
    { name: "Git", icon: GitBranch, color: "from-orange-400 to-orange-600" },
  ];

  const experience = [
    {
      title: "Backend Developer",
      company: "Anemoia",
      period: "Feb 2025 – Present",
      description: [
        "Building and maintaining scalable backend services",
        "API development using Node.js & TypeScript",
        "Database design and optimization",
        "Working with Dockerized production systems",
      ],
    },
    {
      title: "Backend Developer / Intern",
      company: "SageTeck & Esper Solution",
      period: "2022 – 2024",
      description: [
        "PHP-based CRM (SuiteCRM) customization",
        "JavaScript & jQuery for dynamic UI",
        "MySQL database optimization",
        "Full-stack collaboration with teams",
      ],
    },
  ];

  const services = [
    {
      title: "Backend Development",
      description:
        "Scalable server-side applications with Node.js and TypeScript",
      icon: Server,
    },
    {
      title: "REST API Development",
      description:
        "Robust and secure RESTful APIs with comprehensive documentation",
      icon: Code2,
    },
    {
      title: "Database Design",
      description: "Optimized database schemas for MongoDB and SQL databases",
      icon: Database,
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web applications with modern frameworks",
      icon: Layers,
    },
  ];

  const projects = [
    {
      title: "REST API Platform",
      description:
        "High-performance RESTful API with authentication, rate limiting, and comprehensive documentation",
      tags: ["Node.js", "Express", "MongoDB", "JWT"],
      icon: <Server className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: "Microservices Architecture",
      description:
        "Distributed system with Docker containers, service discovery, and load balancing",
      tags: ["Docker", "Node.js", "Redis", "Nginx"],
      icon: <Layers className="w-12 h-12 text-purple-400" />,
    },
    {
      title: "CRM Custom Backend",
      description:
        "Customized SuiteCRM backend with custom modules, workflows, and integrations",
      tags: ["PHP", "MySQL", "SuiteCRM", "API"],
      icon: <Database className="w-12 h-12 text-green-400" />,
    },
    {
      title: "Auth System",
      description:
        "Secure authentication and authorization system with role-based access control",
      tags: ["Node.js", "JWT", "OAuth", "bcrypt"],
      icon: <Lock className="w-12 h-12 text-red-400" />,
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");

    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen cursor-none">
      <CustomCursor />

      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg z-40 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AK
          </h1>
          <div className="flex gap-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin size={20} />
              <span className="text-sm">Islamabad / Wah Cantt, Pakistan</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Asad Khan
              </span>
            </h1>

            <div className="h-12">
              <p className="text-2xl md:text-3xl text-gray-400 transition-all duration-500">
                {typedRole}
                <span className="blinking-cursor">|</span>
              </p>
            </div>

            <p className="text-xl text-gray-400 leading-relaxed">
              Building Scalable, Secure & High-Performance Backend Systems
            </p>

            <p className="text-gray-500 max-w-xl">
              Passionate Backend Developer with 2+ years of experience building
              production-ready APIs, managing databases, and architecting
              scalable systems. Currently building at Anemoia.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Let's Work Together
                <ArrowRight size={20} />
              </button>
              <a
                href="#projects"
                className="px-8 py-3 border border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/AsadKhan219"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/asad-khan-0260a9253/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:asad.devhub@gmail.com"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end animate-fade-in delay-300">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse" />
              <img
                src="https://res.cloudinary.com/dd3pq9abq/image/upload/v1766913088/asad_final_sovdd3.jpg"
                alt="Asad Khan"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Core{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-center text-gray-500 mb-16">
              Technologies I work with to build scalable systems
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 100}>
                <div className="group relative bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  />
                  <div className="relative flex flex-col items-center gap-4">
                    <div
                      className={`p-4 bg-gradient-to-br ${skill.color} rounded-lg`}
                    >
                      <skill.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6 bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-center text-gray-500 mb-16">
              My career path and experience
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="relative pl-8 border-l-2 border-cyan-500/50">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full" />
                  <div className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">
                          {exp.title}
                        </h3>
                        <p className="text-xl text-gray-400">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 bg-gray-800 px-4 py-2 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-gray-400"
                        >
                          <CheckCircle2
                            size={20}
                            className="text-cyan-500 mt-1 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-12 text-center">
              <div className="inline-block bg-gray-900 rounded-xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-2">Education</h3>
                <p className="text-xl text-cyan-400">
                  Bachelor of Computer Science
                </p>
                <p className="text-gray-400">HITEC University, Islamabad</p>
                <p className="text-gray-500 mt-2">
                  Graduated: 2023 | Grade: A-
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Services{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Offered
              </span>
            </h2>
            <p className="text-center text-gray-500 mb-16">
              What I can do for you
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-center text-gray-500 mb-16">
              Showcase of backend expertise and scalable architectures
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
                  <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-00" />
                    {project.icon}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                      {project.title}
                      <ExternalLink
                        size={20}
                        className="text-gray-500 group-hover:text-cyan-400 transition-colors"
                      />
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-800 text-cyan-400 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Scalable Together
              </span>
            </h2>
            <p className="text-center text-gray-500 mb-16">
              Ready to start your next project? Get in touch!
            </p>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitStatus === "loading"
                  ? "Sending..."
                  : submitStatus === "success"
                  ? "Message Sent!"
                  : submitStatus === "error"
                  ? "Failed to send"
                  : "Send Message"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 Asad Khan. All rights reserved.</p>
          <p className="mt-2">
            Backend Developer | Node.js Specialist | API Architect
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
