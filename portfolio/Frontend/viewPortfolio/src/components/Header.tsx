import React from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
    darkMode : boolean;       // 다크 모드 on:off
    toggleDarkMode : () => void;
}

const Header : React.FC<HeaderProps> = ({darkMode, toggleDarkMode}) => {

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-b 
        ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <nav>
                <div>
                    <div>
                        백두's portfolio
                        {`다크모드 on,off ${darkMode}`}
                    {/* 데스크탑 네비게이션 */}

                        <button>Home</button>
                        <button>About</button>
                        <button>Projects</button>
                        <button>Contact</button>
                        <button
                            onClick={toggleDarkMode}
                        >
                            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
                        </button>
                    </div>
                    {/* 모바일 네비게이션 */}
                </div>
            </nav>
        </header>

    );
}

export default Header;