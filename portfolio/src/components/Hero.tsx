import React, { useEffect, useState } from 'react';
import { ArrowDown, Code, Database, Server } from 'lucide-react';
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";


const Hero: React.FC = () => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = ['개발 사랑', '프로젝트 전 주기 경험'];

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
    
        const typeText = () => {
            const currentText = texts[currentIndex];
          
            if (!isDeleting) {
                // 타이핑 중
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.substring(0, displayText.length + 1));
                    timeoutId = setTimeout(typeText, 1000);
                } else {
                // 타이핑 완료, 잠시 대기 후 삭제 시작
                    timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                    typeText();
                    }, 500);
                }
            } else {
                // 삭제 중
                if (displayText.length > 0) {
                    setDisplayText(displayText.substring(0, displayText.length - 1));
                    timeoutId = setTimeout(typeText, 500);
                } else {
                // 삭제 완료, 다음 텍스트로 이동
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                    timeoutId = setTimeout(typeText, 500);
                }
            }
        };
    
        timeoutId = setTimeout(typeText, 200);
    
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [displayText, isDeleting, currentIndex]);
    
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-github-accent/10 to-github-purple/10"></div>
                <div className="grid-pattern"></div>
            </div>    

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <div className="fade-in-up">
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <FaJava className="w-8 h-8 text-github-accent animate-float" />
                        <SiSpring className="w-8 h-8 text-github-spring animate-float" />
                        <Database className="w-8 h-8 text-github-purple animate-float-delayed" />
                        <Server className="w-8 h-8 text-github-accent animate-float" />                      
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        {/* <span className="text-github-text">안녕하세요!</span>
                        <br /> */}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-github-accent to-github-purple">
                        백엔드 개발자, 백두현입니다.
                        </span>
                    </h1>

                    <div className="text-xl sm:text-2xl lg:text-3xl text-github-text-secondary mb-8 h-16 flex items-center justify-center">
                        <span className="typing-text">
                            {displayText}
                        <span className="typing-cursor">|</span>
                        </span> 
                    </div>

                    <p className="text-lg text-github-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
                        <p>SI 역량으로 협업과 문제 해결 능력을 갖춘 백엔드 개발 지망생입니다.</p>
                        <p>백엔드와 AI 역량으로 개발의 힘을 선배님들과 함께 발휘하겠습니다.</p>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn-primary group"
                        >
                            프로젝트로 가기
                            <Code className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-200" />
                        </button>      
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-secondary group"
                        >
                            연락처로 가기
                            <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-200" />
                        </button>                 
                    </div>

                    <div className="animate-bounce">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-github-text-secondary hover:text-github-accent transition-colors duration-200"
                        >
                            <ArrowDown className="w-6 h-6 mx-auto" />
                        </button>
                    </div>
                </div>
            </div>       

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 opacity-20 animate-float">
                <div className="w-3 h-3 bg-github-accent rounded-full"></div>
            </div>
            <div className="absolute top-1/3 right-16 opacity-20 animate-float-delayed">
                <div className="w-2 h-2 bg-github-purple rounded-full"></div>
            </div>
            <div className="absolute bottom-1/4 left-1/4 opacity-20 animate-float">
                <div className="w-4 h-4 border border-github-accent rounded-full"></div>
            </div>               
        </section>
    )
};

export default Hero;