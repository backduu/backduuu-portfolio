import React from 'react';
import { Code2, Database, Globe, Server, Wrench, Bot, ShieldCheck, Layers } from 'lucide-react';

const About: React.FC = () => {
    // level에 따른 색상 매핑 함수
    const getLevelInfo = (level: string) => {
        const levels = {
            '학습 예정': { label: '학습예정', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
            '학습 중': { label: '학습중', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
            '입문': { label: '입문', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
            '초급': { label: '초급', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
            '중급': { label: '중급', color: 'bg-github-accent/20 text-github-accent border-github-accent/30' },
            '고급': { label: '고급', color: 'bg-github-purple/20 text-github-purple border-github-purple/30' }
        };
      
        return levels[level as keyof typeof levels] || levels.entry;
    };

    const skills = [
        {
          category: 'Frontend',
          icon: <Globe className="w-6 h-6" />,
          technologies: [
            { name: 'JSP', level: '초급' },
            { name: 'JavaScript', level: '초급'},
            { name: 'TypeScript', level: '입문'},
            { name: 'React', level: '입문'},
            { name: 'Tailwind CSS', level: '입문'}
          ]
        },
        {
          category: 'Backend',
          icon: <Server className="w-6 h-6" />,
          technologies: [
            { name: 'Java', level: '초급'},
            { name: 'Python', level: '초급'},
            { name: 'Spring/Spring boot', level: '초급'},
            { name: 'REST API', level: '초급'}
          ]
        },
        {
          category: 'DB',
          icon: <Database className="w-6 h-6" />,
          technologies: [
            { name: 'Oracle', level: '초급'},
            { name: 'MariaDB', level: '입문'},
          ]
        },
        {
            category: 'ORM & JPA',
            icon: <Database className="w-6 h-6" />,
            technologies: [
              { name: 'MyBatis', level: '초급'},
              { name: 'Spring Data JPA', level: '입문'},
            ]
        },
        {
          category: 'TEST',
          icon: <Code2 className="w-6 h-6" />,
          technologies: [
            { name: 'JUnit', level: '초급'},
            { name: 'Mockito', level: '학습 예정'}
          ]
        },
        {
            category: 'Security',
            icon: <ShieldCheck className="w-6 h-6"/>,
            technologies: [
                { name: 'Spring Security6', level: '입문'},
                { name: 'JWT', level: '입문'}
              ]
        }, 
        {
            category: 'Tools & Collaboration',
            icon: <Wrench className="w-6 h-6" />,
            technologies: [
              { name: 'Git/GitHub', level: '초급'},
              { name: 'Docker', level: '학습 예정'}
            ]
        }, 
        {
            category: 'AI',
            icon: <Bot className="w-6 h-6" />,
            technologies: [
              { name: 'Spring AI', level: '학습 예정'}
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
                        확장성과 안정성을 위해 개발의 길을 걷는 개발자.
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
                                    
                                </h3>
                            <div className="space-y-4 text-github-text-secondary">
                            <p>내용추가해야함.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="text-center p-4 bg-github-surface rounded-lg">
                                <div className="text-2xl font-bold text-github-accent">3</div>
                                <div className="text-sm text-github-text-secondary">프로젝트</div>
                            </div>
                            <div className="text-center p-4 bg-github-surface rounded-lg">
                                <div className="text-2xl font-bold text-github-accent">약 3년</div>
                                <div className="text-sm text-github-text-secondary">개발 경험</div>
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
                                    <span className={`text-xs px-2 py-1 rounded-full border ${getLevelInfo(tech.level).color}`}>
                                    {getLevelInfo(tech.level).label}
                                    </span>
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