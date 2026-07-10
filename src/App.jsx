import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header/Header'
import Home from './page/home/Home'
import About from './page/about/About'
import Project from './page/project/Project'
import ProjectDetail from './page/project/ProjectDetail'
import Contact from './page/contact/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
