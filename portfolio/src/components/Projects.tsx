import React from 'react';
import { ExternalLink, Github,  Database } from 'lucide-react';

const Projects: React.FC = () => {
  // TODO 프로젝트들이 완성되면 그림 넣고 노션 페이지 이동 넣어서 프로젝트 기간동안 어떤 생각으로 구현했는지, 어떤 고난이 있었는지 추가하기.
  const projects = [
    {
      id: 1,
      title: '전자상거래 서비스',
      description: '예시',
      image: 'https://images.pexels.com/photos/6771178/pexels-photo-6771178.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'backend',
      type: 'backend',
      githubUrl: '#',
      liveUrl: '#',
      features: ['RESTful API Design', 'Microservices', 'Payment Gateway', 'Real-time Notifications']
    },
    {
      id: 2,
      title: 'AI 챗봇 기반 차량 추천 서비스',
      description: '예시',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'TypeScript'],
      category: 'backend',
      type: 'backend',
      githubUrl: '#',
      liveUrl: '#',
      features: ['Real-time Messaging', 'File Sharing', 'Message Encryption', 'User Authentication']
    },
    {
      id: 3,
      title: 'PeerFlow',
      description: '실시간 작업 관리와 팀 커뮤니케이션을 지원하는 협업 프로젝트 관리 플랫폼.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Axios', 'Springboot', 'SpringSecurity6 + JWT', 'WebSocket', 'STOMP', 'MariaDB'],
      category: 'team',
      type: 'team',
      githubUrl: 'https://github.com/orgs/Rookies-2/repositories',
      liveUrl: '#',
      features: [
        'Team Collaboration',
        'WebSocket + STOMP 기반 실시간 그룹/개인 채팅 및 알림',
        'Spring Security 6 + JWT 기반 인증/인가',
        '강사/학생 간 과제 CRUD 및 제출 알림',
        '강사/학생 간 공지사항 CRUD 및 공지 알림림'
        ]
    },
    {
      id: 4,
      title: '루키즈 AI 서비스',
      description: '예시',
      image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'],
      category: 'team',
      type: 'team',
      githubUrl: '#',
      liveUrl: '#',
      features: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Payment Integration']
    },
    {
        id: 5,
        title: '루키즈 최종 프로젝트',
        description: '예시',
        image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'],
        category: 'team',
        type: 'team',
        githubUrl: '#',
        liveUrl: '#',
        features: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Payment Integration']
      }
  ];


  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-github-text mb-4">
            Featured <span className="text-github-accent">Projects</span>
          </h2>
          <p className="text-lg text-github-text-secondary max-w-2xl mx-auto">
            
          </p>
        </div>

       {/* Projects Grid */}
       <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in-up bg-github-surface rounded-xl overflow-hidden hover:bg-github-surface/80 transition-all duration-300 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-github-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-github-accent/20 text-github-accent border border-github-accent/30">
                    <Database className="w-3 h-3 mr-1" />
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-github-text mb-2 group-hover:text-github-accent transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-github-text-secondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-github-text mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-github-accent/10 text-github-accent rounded border border-github-accent/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-github-border/50 text-github-text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-3 py-2 text-sm bg-github-border/50 hover:bg-github-border transition-colors duration-200 rounded-lg text-github-text-secondary hover:text-github-text"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-3 py-2 text-sm bg-github-accent hover:bg-github-accent/80 transition-colors duration-200 rounded-lg text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
