import React from 'react';
import { Code2, Database, Globe, Server, Wrench, Bot, ShieldCheck, Layers } from 'lucide-react';

const About: React.FC = () => {
    const skills = [
        {
          category: 'Frontend',
          icon: <Globe className="w-6 h-6" />,
          technologies: [
            { name: 'JSP', level: '초급' },
            { name: 'JavaScript', level: '초급'},
            { name: 'TypeScript', level: '입문' },
            { name: 'React', level: '입문' },
            { name: 'Tailwind CSS', level: '입문' }
          ]
        },
        {
          category: 'Backend',
          icon: <Server className="w-6 h-6" />,
          technologies: [
            { name: 'Java', level: '초급' },
            { name: 'Python', level: '입문' },
            { name: 'Spring/Spring boot', level: '초급' },
            { name: 'REST API', level: '초급' }
          ]
        },
        {
          category: 'DB',
          icon: <Database className="w-6 h-6" />,
          technologies: [
            { name: 'Oracle', level: '초급' },
            { name: 'MariaDB', level: '입문' },
          ]
        },
        {
            category: 'ORM & JPA',
            icon: <Database className="w-6 h-6" />,
            technologies: [
              { name: 'MyBatis', level: '초급' },
              { name: 'Spring Data JPA', level: '학습 중' },
            ]
        },
        {
          category: 'TEST',
          icon: <Code2 className="w-6 h-6" />,
          technologies: [
            { name: 'JUnit', level: '학습 예정' },
            { name: 'Mockito', level: '학습 예정' }
          ]
        },
        {
            category: '보안',
            icon: <ShieldCheck className="w-6 h-6"/>,
            technologies: [
                { name: 'Spring Security6', level: '입문' },
                { name: 'JWT', level: '입문' }
              ]
        }, 
        {
            category: 'Tools & Collaboration',
            icon: <Wrench className="w-6 h-6" />,
            technologies: [
              { name: 'Git/GitHub', level: '초급' },
              { name: 'Docker', level: '학습 예정'}
            ]
        }, 
        {
            category: 'AI',
            icon: <Bot className="w-6 h-6" />,
            technologies: [
              { name: 'Spring AI', level: '학습 예정' }
            ]           
        }
      ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-github-text mb-4">
                        About <span className="text-github-accent">Me</span>
                    </h2> 
                    <p className="text-lg text-github-text-secondary max-w-2xl mx-auto">
                        확장성과 안정성을 모두 갖춘 웹 서비스와 백엔드 시스템을 만드는 것을 즐기는 개발자입니다.
                    </p>                  
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="fade-in-left">
                        <div className="relative">
                            <div className="w-full h-80 bg-gradient-to-br from-github-accent/10 to-github-purple/10 rounded-2xl flex items-center justify-center">
                                <div className="text-center">
                                    <Code2 className="w-24 h-24 text-github-accent mx-auto mb-4" />
                                    <p className="text-github-text-secondary">
                                        <img 
                                            src="../images/profile.jpg"
                                            alt="Profile"
                                            className="w-24 h-24 rounded-full object-cover mx-auto mb-4"                                    
                                        />
                                    </p>
                                </div>                       
                            </div>
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-github-accent/10 rounded-full flex items-center justify-center animate-pulse">
                                <Layers className="w-8 h-8 text-github-accent" />
                            </div>         
                        </div>
                    </div>

                    <div className="fade-in-right">
                        <h3 className="text-2xl font-bold text-github-text mb-6">
                            Building Digital Solutions
                        </h3>
                    <div className="space-y-4 text-github-text-secondary">
                    <p>
                        With over 3+ years of experience in software development, I specialize in
                        creating robust and scalable applications. My journey spans from frontend
                        interfaces to complex backend architectures.
                    </p>
                    <p>
                        I'm passionate about clean code, innovative solutions, and staying up-to-date
                        with the latest technologies. My goal is to build software that not only
                        works but makes a real difference.
                    </p>
                    <p>
                        When I'm not coding, you'll find me exploring new technologies, contributing
                        to open-source projects, or mentoring aspiring developers.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center p-4 bg-github-surface rounded-lg">
                        <div className="text-2xl font-bold text-github-accent">50+</div>
                        <div className="text-sm text-github-text-secondary">Projects</div>
                    </div>
                    <div className="text-center p-4 bg-github-surface rounded-lg">
                        <div className="text-2xl font-bold text-github-accent">3+</div>
                        <div className="text-sm text-github-text-secondary">Years Exp</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Skills Section */}
        <div className="fade-in-up">
        <h3 className="text-2xl font-bold text-github-text mb-8 text-center">
            Technical <span className="text-github-accent">Skills</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
            <div
                key={skillCategory.category}
                className="skill-card bg-github-surface rounded-xl p-6 hover:bg-github-surface/80 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
            >
                <div className="flex items-center mb-4">
                <div className="text-github-accent mr-3">
                    {skillCategory.icon}
                </div>
                <h4 className="text-lg font-semibold text-github-text">
                    {skillCategory.category}
                </h4>
                </div>

                <div className="space-y-3">
                {skillCategory.technologies.map((tech, techIndex) => (
                    <div key={tech.name} className="skill-item">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-github-text-secondary">
                        {tech.name}
                        </span>
                        <span className="text-xs text-github-accent">
                        {tech.level}%
                        </span>
                    </div>
                    <div className="w-full bg-github-border rounded-full h-2">
                        <div
                        className="skill-bar h-2 rounded-full bg-gradient-to-r from-github-accent to-github-purple transition-all duration-1000 ease-out"
                        style={{
                            width: `${tech.level}%`,
                            animationDelay: `${(index * 150) + (techIndex * 100)}ms`
                        }}
                        ></div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
</section>
  );
};

export default About;