import './App.css'
import Header from "./components/Header.tsx";
import useDarkMode from './hooks/useDarkMode';

function App() {
  const { darkMode, toggleDarkMode} = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </div>
  )
}

export default App
