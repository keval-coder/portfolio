import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Freelancing",
      period: "2025 - Present",
      location: "Remote",
      description:
        "Collaborating with a remote team of 10+ members to design, develop, and deploy scalable full-stack applications.",
      achievements: [
        "Architected and delivered 5+ major features, increasing user engagement by 40%",
        "Implemented CI/CD pipelines, reducing deployment time by 75% and improving release efficiency",
        "Enhanced system reliability and scalability by migrating critical services to AWS",
        "Established coding best practices and performed code reviews, improving overall code quality",
      ],
      technologies: [
        "React",
        "Express.js",
        "Node.js",
        "JavaScript",
        "MongoDB",
        "AWS",
        "Stripe",
        "Google Calendar Sync",
      ],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Tameta Tech",
      period: "2024 - 2025",
      location: "On-site",
      description:
        "Leading development of enterprise-level applications using React, Node.js, and AWS. Mentoring junior developers and establishing best practices for code quality and team collaboration.",
      achievements: [
        "Architected and delivered 5+ major features increasing user engagement by 40%",
        "Reduced application load time by 60% through optimization and code refactoring",
        "Led a team of 4 developers in successful project deliveries",
        "Implemented CI/CD pipeline reducing deployment time by 75%",
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "CodeOptim",
      period: "2022 - 2024",
      location: "On-site",
      description:
        "Developed and maintained multiple client-facing web applications using modern JavaScript frameworks. Collaborated with design and product teams to deliver pixel-perfect implementations.",
      achievements: [
        "Built responsive web applications from scratch",
        "Improved application performance by implementing lazy loading and code splitting",
        "Integrated third-party APIs and payment gateways",
        "Maintained 99.9% uptime for production applications",
      ],
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Git",
        "AirTable",
        "Redux Toolkit",
      ],
    },
    {
      title: "Junior Full Stack Developer",
      company: "Micrasol LLP",
      period: "2020 - 2022",
      location: "On-site",
      description:
        "Started my professional journey building full-stack applications and learning industry best practices. Contributed to various projects and gained hands-on experience with modern web technologies.",
      achievements: [
        "Developed and deployed 3 full-stack applications",
        "Collaborated with senior developers to implement new features",
        "Participated in code reviews and agile ceremonies",
        "Learned and applied React, Node.js, and database management",
      ],
      technologies: [
        "Vue.js",
        "NestJS",
        "Node.js",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            My professional journey
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 dark:bg-blue-900"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          <Briefcase className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period} • {exp.location}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-700 dark:text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mr-2">
                              •
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
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
      </div>
    </section>
  );
}
