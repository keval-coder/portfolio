export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5/CSS3', level: 98 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 87 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'AWS', level: 50 },
        { name: 'Agile/Scrum', level: 90 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'JavaScript',
            'React',
            'Node.js',
            'TypeScript',
            'MongoDB',
            'PostgreSQL',
            'Docker',
            'AWS',
            'Git',
            'REST API',
            'GraphQL',
            'CI/CD',
          ].map((tech, index) => (
            <div
              key={index}
              className="px-4 py-3 bg-white dark:bg-gray-900 rounded-lg shadow text-center text-gray-700 dark:text-gray-300 font-medium hover:scale-105 transition-transform"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
