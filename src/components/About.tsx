import { Code2, Rocket, Users, Award } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Delivering high-quality projects within deadlines',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborating effectively with cross-functional teams',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional results',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate Senior Full Stack Developer with over 5 years of experience
                in designing and building modern web applications. My journey in software
                development has been driven by a love for solving complex problems and
                creating elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Throughout my career, I've had the privilege of working on diverse projects
                ranging from enterprise applications to innovative startups. I specialize in
                building scalable architectures using cutting-edge technologies and best
                practices.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                When I'm not coding, I enjoy staying up-to-date with the latest tech trends,
                contributing to open-source projects, and mentoring aspiring developers. I
                believe in continuous learning and always strive to improve my craft.
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-48 h-48 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Code2 className="w-24 h-24" />
                  </div>
                  <p className="text-xl font-semibold">Keval Mendapara</p>
                  <p className="text-blue-100">Senior Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
