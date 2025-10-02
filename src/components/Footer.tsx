import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      link: '#',
      label: 'GitHub',
      ariaLabel: 'Visit GitHub profile'
    },
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/keval-mendapara-68a708117',
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      icon: Twitter,
      link: '#',
      label: 'Twitter',
      ariaLabel: 'Visit Twitter profile'
    },
    {
      icon: Mail,
      link: 'mailto:kevalmendapara1997@gmail.com',
      label: 'Email',
      ariaLabel: 'Send email'
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Keval Mendapara</h3>
            <p className="text-gray-400 mb-4">
              Senior Full Stack Developer passionate about building innovative web solutions
              and creating exceptional user experiences.
            </p>
            <p className="text-gray-400">
              Based in India, working globally.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.link}
                    target={social.link.startsWith('http') ? '_blank' : undefined}
                    rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <a
                  href="mailto:kevalmendapara1997@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  kevalmendapara1997@gmail.com
                </a>
              </p>
              <p className="text-gray-400">
                <a
                  href="tel:+917990423824"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 7990423824
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Keval Mendapara. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> by
              Keval Mendapara
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
