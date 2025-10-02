import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8 animate-fadeIn">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Keval Mendapara
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-medium mb-6">
              Senior Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Crafting elegant solutions with 5+ years of experience in building
              scalable web applications and turning ideas into reality
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn">
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </button>
          </div>

          <div className="mt-16 flex justify-center space-x-6 text-gray-600 dark:text-gray-400 animate-fadeIn">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="border-l border-gray-300 dark:border-gray-700"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div className="border-l border-gray-300 dark:border-gray-700"></div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">30+</p>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          aria-label="Scroll down"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
