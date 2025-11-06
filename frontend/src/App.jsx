import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Intro from './pages/Intro';
import Chat from './pages/Chat';
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
            <Route path="/chat" element={<Chat />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
