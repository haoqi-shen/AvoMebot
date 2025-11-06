import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import MeBot from './components/MeBot';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <MeBot />
      </div>
    </Router>
  );
}

export default App;
