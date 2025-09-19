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
            description: 'SW 개발의 기초부터 프로젝트 관련 교과 과정들을 이수하며 협업을 통한 개발 방법론을 학습했습니다.',
            achievements: [
                '학점: 3.11/4.0',
                '국제 공동 캡스톤 디자인 프로젝트 금상 수상',
                '졸업작품: 스마트 캐리어'
            ],
            subjects: ['자료구조', '소프트웨어 공학과 설계', '창의설계프로젝트', '네트워크']        
        }, 
        {
            id: 2,
            type: 'company',
            title: 'GIT 완성차파트 SW개발팀',
            institution: '사원/인턴',
            location: '서울',
            period: '2021.04 ~ 2021.09',
            description: 'MFC/WPF 기반의 완성차 진단 프로그램 개발 담당',
            achievement: [],
            subjects: ['C++', 'C#', 'WPF', 'MFC', 'MySQL']
        }, 
        {
            id: 3,
            type: 'company',
            title: '교보DTS SW개발 1팀',
            institution: '사원/팀원',
            location: '서울',
            period: '2022.07 ~ 2025.03',
            description: 'SI/SM 프로젝트에서 웹 솔루션 개발 담당',
            achievement: [
                '교육사업팀 LMS 운영 및 개발 지원',
                'SI 프로젝트 웹 솔루션 개발 담당 (미래에셋생명, KCA서비스 등)'
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
            achievement: [],
            subjects: []
        },
        {
            id: 5,
            type: 'bootcamp',
            title: 'SK 쉴더스 루키즈 지능형 애플리케이션 개발자 양성 과정 수료',
            institution: 'SK 쉴더스',
            location: '서울',
            period: '2025.07 ~ 2026.01',
            achievement: [
                '7번방의 기적 (크롤링 시스템 기반 월세 부동산 매물 추천 서비스) 개발 팀 프로젝트 - 웹개발 담당',
                'peerFlow (루키즈 4기 내부 협업용 서비스) 개발 팀 프로젝트 - PM/백엔드 담당',
                '[미정] GenAI - SpringAI 개발 담당',
                '[미정] Cloud/AWS - 담당',
                '[미정] 최종 프로젝트 - 담당'
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
            return '학위';
          case 'bootcamp':
            return '아카데미';
          case 'certification':
            return '자격증';
          case 'company':
            return '경험';
          default:
            return '교육';
        }
      };

    return (
        <section id="educationAndExperience" className="py-20 px-4 sm:px-6 lg:px-8 bg-github-surface/30">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16 fade-in-up">
                </div>
            </div>
        </section>
    );
};

export default EducationAndExperience;