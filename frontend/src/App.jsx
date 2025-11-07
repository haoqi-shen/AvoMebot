import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Intro from './pages/Intro';
import Chat from './pages/Chat';
import Products from './pages/Products';
import MyStory from './pages/MyStory';
import Community from './pages/Community';
import Footer from './components/Footer';
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
            <Route path="/products" element={<Products />} />
            <Route path="/projects" element={<Navigate to="/products" replace />} />
            <Route path="/mystory" element={<MyStory />} />
            <Route path="/community" element={<Community />} />
            {/* Redirect old routes to new ones */}
            <Route path="/experience" element={<Navigate to="/mystory" replace />} />
            <Route path="/education" element={<Navigate to="/mystory" replace />} />
            <Route path="/certifications" element={<Navigate to="/mystory" replace />} />
            <Route path="/blog" element={<Navigate to="/community" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
