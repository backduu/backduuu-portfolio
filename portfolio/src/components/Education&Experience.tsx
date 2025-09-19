import React from 'react';
import { Calendar, MapPin, Award, GraduationCap, BookOpen, AlignCenterVertical as Certificate } from 'lucide-react';

const EducationAndExperience: React.FC = () => {
    const educationData = [
        {
            id: 1,
            type: 'university',
            title: '컴퓨터공학과 학사',
            institution: '금오공과대학교',
            location: '경상북도',
            period: '2020.03',
            description: '다양한 경험을 하며 좋아하는 것을 찾던 시기',
            achievements: [
                { main: '학점: 3.11/4.0', sub: ''},
                { main: '국제 공동 캡스톤 디자인 프로젝트 금상 수상', sub: ''}
            ],
            subjects: ['자료구조', '소프트웨어 공학과 설계', '창의설계프로젝트', '네트워크', '웹 프로그래밍', '아두이노', '라즈베리파이이']        
        }, 
        {
            id: 2,
            type: 'company',
            title: 'GIT',
            institution: '사원/인턴',
            location: '서울',
            period: '2021.04 ~ 2021.09',
            description: [
                '전장사업팀 완성차파트 인턴',
            ],
            achievements: [
                    { main: 'MFC/WPF 기반의 완성차 진단 프로그램 개발', sub: ''}
                ],
            subjects: ['C++', 'C#', 'WPF', 'MFC', 'MySQL']
        }, 
        {
            id: 3,
            type: 'company',
            title: '교보DTS',
            institution: '사원/팀원',
            location: '서울',
            period: '2022.07 ~ 2025.03',
            description: 'SW개발 1팀',
            achievements: [
                { main: '교육사업팀 LMS 운영 및 개발 지원', sub: '사용자 및 관리자 페이지 기능 개선 및 고도화'},
                { main: '미래에셋생명 디지털 헬스케어 서비스 구축', sub: '관리자 페이지 개발 및 통계 화면 개발'},
                { main: 'KCA 서비스 홈페이지 고도화 구축', sub: '전체 프로젝트 개발 리딩'},
            ],
            subjects: ['JAVA', 'SPRING', 'SPRING BOOT', 'TOMCAT', 'JAVASCRIPT', 'JSP', 'ORACLE']          
        },
        {
            id: 4,
            type: 'certification',
            title: '정보처리기사',
            institution: '최종합격',
            location: '한국산업인력공단',
            period: '2023.09',
            description: '',
            achievements: [],
            subjects: []
        },
        {
            id: 5,
            type: 'bootcamp',
            title: 'SK 쉴더스 루키즈 지능형 애플리케이션 개발자 양성 과정 수료',
            institution: 'SK 쉴더스',
            location: '서울',
            period: '2025.07 ~ 2026.01',
            achievements: [
                {main: '7번방의 기적 | 웹개발 담당', sub: 'python, streamlit 기반 크롤링 시스템을 이용한 월세 부동산 매물 추천 서비스'}, 
                {main: 'peerFlow | PM/백엔드 담당', sub: 'Springboot, React 기반의 루키즈 수강생 협업 서비스'},
                {main: 'GenAI | SpringAI 개발 담당', sub: ''},
                {main: 'Cloud/AWS | 담당', sub: ''},
                {main: '최종 프로젝트 | 담당', sub: ''}
            ],
            subjects: ['python', 'WebScraping', 'Streamlit', 'JAVA', 'SPRING BOOT', 'JPA', 'React', 'Typescript', 'Oracle', 'LangChain', 'SpringAI', 'Docker', 'AWS']
        }
    ];

    const getIcon = (type:string) => {
        switch(type) {
            case 'university':
                return <GraduationCap className="w-5 h-5"/>;
            case 'bootcamp':
                return <BookOpen className="w-5 h-5"/>;
            case 'company':
                return <Award className="w-5 h-5" />;
            case 'certification':
                return <Certificate className="w-5 h-5" />;                
            default:
                return <GraduationCap className="w-5 h-5" />;
        }
    }

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'university':
                return 'text-github-purple border-github-purple bg-github-purple/10';
            case 'bootcamp':
                return 'text-github-accent border-github-accent bg-github-accent/10';
            case 'certification':
                return 'text-blue-400 border-blue-400 bg-blue-400/10';
            case 'company':
                return 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
            default:
                return 'text-github-accent border-github-accent bg-github-accent/10';
        }
    };

    const getTypeName = (type: string) => {
        switch (type) {
          case 'university':
            return 'BACHELOR\'S DEGREE';
          case 'bootcamp':
            return 'ACADEMY';
          case 'certification':
            return 'CERTIFICATION';
          case 'company':
            return 'WORK';
          default:
            return 'EDUCATION';
        }
      };

    return (
        <section id="educationAndExperience" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-surface/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-github-text mb-4">
                        Education & <span className="text-github-accent">Experience</span>
                    </h2>
                    <p className="text-lg text-github-text-secondary max-w-2xl mx-auto">
                        난관을 헤쳐나가며 개발의 정도를 걷고 있습니다.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-github-purple to-github-accent"></div>
                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <div
                                key={item.id} className={`education-card fade-in-up relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start`}
                                style={{ animationDelay: `${index * 150}ms` }}
                            >   
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-github-dark border-4 border-github-purple rounded-full z-10"></div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 w-full md:w-5/11 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                                    <div className="education-item bg-github-surface rounded-xl p-6 hover:bg-github-surface/80 transition-all duration-300 group">
                                        {/* Type Badge */}
                                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)} mb-3`}>
                                            {getIcon(item.type)}
                                            <span className="ml-2">{getTypeName(item.type)}</span>
                                        </div>      

                                        {/* Title and Institution */}
                                        <h3 className="text-xl font-bold text-github-text mb-2 group-hover:text-github-accent transition-colors duration-200">
                                            {item.title}
                                        </h3>       

                                        <div className="flex items-center text-github-text-secondary mb-2 text-sm">
                                            <span className="font-medium">{item.institution}</span>
                                            <span className="mx-2">•</span>
                                            <MapPin className="w-3 h-3 mr-1" />
                                            <span>{item.location}</span>
                                        </div>        

                                        <div className="flex items-center text-github-accent mb-4 text-sm">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            <span>{item.period}</span>
                                        </div>          

                                        {/* Description */}
                                        <p className="text-github-text-secondary mb-4">
                                            {item.description}
                                        </p>


                                        {/* Achievements */}
                                        {item.achievements?.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-sm font-medium text-github-text mb-2 text-center">⭐</h4>
                                            <ul className="space-y-1">
                                                {item.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="text-sm text-github-text-secondary">
                                                        <div className="flex items-start">
                                                            <span className="text-github-accent mr-2 mt-1.5">•</span>
                                                            <span className="font-medium">{achievement.main}</span>
                                                        </div>
                                                        {achievement.sub && (
                                                            <div className="ml-5 text-xs text-github-text-secondary">
                                                            - {achievement.sub}
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        )}
                                        {/* Subjects */}
                                        <div className="flex flex-wrap gap-2">
                                            {item.subjects.map((subject, idx) => (
                                                <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-github-border/50 text-github-text-secondary rounded"
                                                >
                                                {subject}
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
};

export default EducationAndExperience;