import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIdMobileMenuOpen] = useState(false);

    // 스크롤 이벤트 처리
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 섹션 스크롤 smooth하게 이동 함수
    const scrollToSection = (sectionId:String) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({
            behavior:'smooth'
        });

        setIdMobileMenuOpen(false); 
    }

    // 네비게이션 목록 정의
    const navigation = [
        { name: '홈', id: 'home'},
        { name: '소개', id: 'about' },
        { name: '학력/활동', id: 'educationAndExperience'},
        { name: '프로젝트', id: 'projects' },
        { name: '연락처', id: 'contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-github-dark/95 backdrop-blur-md border-b border-github-border' : 'bg-transparent'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex-shrink-0">
                        <h1 className="text-xl font-bold text-github-accent">BACKDUU'S</h1>
                    </div>

                {/* 데스크톱 버전 */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-8">
                        {/* 네비게이션 가로 정렬 */}
                        {
                            navigation.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-sm font-medium transition-colors duration-200 hover:text-github-accent ${
                                            activeSection === item.id ? 'text-github-accent' : 'text-github-text-secondary'
                                        }`}                                           
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                {/* 깃, 링크드인, 메일 */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                    <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                    <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                    </a>
                </div>

                {/* 모바일 버전 */}
                <div className="md:hidden">
                    <button
                    onClick={() => setIdMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-github-text-secondary hover:text-github-accent transition-colors duration-200"
                    >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
                </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-github-border">
                        <div className="py-4 space-y-4">
                        {navigation.map((item) => (
                            <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-github-accent ${
                                activeSection === item.id ? 'text-github-accent' : 'text-github-text-secondary'
                            }`}
                            >
                            {item.name}
                            </button>
                        ))}
                        <div className="flex space-x-4 px-4 pt-2">
                            <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                            <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                            <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-github-text-secondary hover:text-github-accent transition-colors duration-200">
                            <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        </div>
                    </div>
                    )}
            </div>
        </header>
    );
};

export default Header;