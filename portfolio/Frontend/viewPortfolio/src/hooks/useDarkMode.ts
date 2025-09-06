import { useState, useEffect } from 'react';

export const useDarkMode = () => {

    // 컴포넌트가 처음 렌더링할때만 실행하기 위함. (지연평가)
    const [darkMode, setDarkMode] = useState(() => {
        // 로컬스토리지는 클라이언트에서만 관리하면 되기에 다크모드 세팅이 적합하다.
        const storedDarkmode = localStorage.getItem('darkMode');
        console.log("으악!!", storedDarkmode);
        if(storedDarkmode) {
            return JSON.parse(storedDarkmode);
        } else {
            // 미디어가 다크모드를 선호하는지 체크 후 matches로 반환 (true: dark, false: light)
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches;
        }
    });

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        let doc = document.documentElement.classList;
        console.log("......", doc);
        // doc의 엘리먼트들 중 darkMode가 dark라면 add,아니면 remove
        if(darkMode) {
            doc.add('dark');
        } else {
            doc.remove('dark');
        }
    }, [darkMode]);

    // 다크모드 세팅
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return { darkMode, toggleDarkMode };
};

export default useDarkMode;