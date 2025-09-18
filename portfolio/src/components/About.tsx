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
          category: 'DB/ORM&JPA',
          icon: <Database className="w-6 h-6" />,
          technologies: [
            { name: 'Oracle', level: '초급' },
            { name: 'MariaDB', level: '입문' },
            { name: 'Spring Data JPA', level: '입문' }
          ]
        },
        {
          category: 'TEST',
          icon: <Code2 className="w-6 h-6" />,
          technologies: [
            { name: 'JUnit', level: '학습예정' },
            { name: 'Mockito', level: '학습예정' }
          ]
        },
        {
            category: '보안 & 인증',
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
              { name: 'Docker', level: '학습예정'}
            ]
        }, 
        {
            category: 'AI',
            icon: <Bot className="w-6 h-6" />,
            technologies: [
              { name: 'Spring AI', level: '학습예정' }
            ]           
        }
          
      ];

};

export default About;