export const data = {
  personal: {
    name: "LIVISH KUMAR",
    role: "Backend Software Engineer",
    email: "livishkumarlk83@gmail.com",
    phone: "+919363254736",
    github: "http://github.com/livishkumar",
    linkedin: "http://www.linkedin.com/in/livishkumar53716728a",
    location: "India",
    summary: "Backend Software Engineer with expertise in architecting scalable enterprise systems using Java, Python, and Spring Boot. Highly skilled in Microservices architecture, Lead Full Stack development, and high-performance API design. Proven track record in optimizing system performance by 60% and managing cloud infrastructure on AWS and Docker to achieve high availability.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop", // Fallback image
    actualImage: "./profile.jpg", // Update this with your actual image URL
    resumeUrl: "/livish_cv.pdf",
  },
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript"],
    backend: ["Spring Boot", "RESTful APIs", "Microservices", "JPA/Hibernate", "JWT Authentication"],
    frontend: ["React", "Tailwind CSS", "HTML", "CSS"],
    databases: ["PostgreSQL", "Neo4j", "Apache Solr"],
    cloud: ["AWS (EC2, S3)", "Docker", "Linux", "CI/CD Pipelines (Jenkins/GitHub Actions)", "Git"],
    tools: ["Postman", "Swagger (OpenAPI)", "IntelliJ IDEA", "VS Code", "Figma"]
  },
  experience: [
    {
      company: "Nectar IT",
      role: "Junior Java Developer",
      period: "June 2025 – Present",
      tasks: [
        "Architected and maintained scalable backend services using Java and Spring Boot for enterprise-level applications.",
        "Designed and integrated secure RESTful APIs, implementing JWT-based authentication and role-based access control (RBAC).",
        "Configured and deployed applications on AWS EC2 and managed cloud storage using AWS S3.",
        "Streamlined development workflows by supporting CI/CD pipelines for automated build and deployment processes.",
        "Optimized data retrieval and search efficiency by utilizing Apache Solr and PostgreSQL.",
        "Collaborated on debugging and resolving software defects to enhance overall application performance and reliability."
      ]
    }
  ],
  projects: [
    {
      title: "Job-Day Enterprise HR Management System",
      role: "Lead Full Stack Developer",
      highlights: [
        "Architected and built a comprehensive HR platform utilizing 18 Spring Boot microservices and a React frontend, serving over 10,000 users.",
        "Implemented robust JWT authentication, PostgreSQL databases, and Docker-based deployment, achieving 99.9% system uptime.",
        "Led a cross-functional development team, optimizing overall system performance by 60%.",
        "Reduced deployment time from 4 hours to 15 minutes by automating CI/CD pipelines."
      ]
    },
    {
      title: "Computer Inventory Management System",
      role: "Full-Stack Developer",
      highlights: [
        "Built a full-stack application to track and manage organizational IT assets efficiently.",
        "Developed a responsive user interface using React and Tailwind CSS for seamless asset tracking.",
        "Created backend services with Spring Boot and PostgreSQL, incorporating role-based access control."
      ]
    }
  ],
  education: [
    {
      school: "RP Sarathy Institute of Technology Model School",
      degree: "Bachelor of Computer Science Engineering",
      period: "2021 – 2025",
      grade: "CGPA: 7.5 / 10.0"
    }
  ],
  languages: [
    { name: "Tamil", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working Proficiency" }
  ]
};
