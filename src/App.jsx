import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/footer'
import AdvisoryBoard from './pages/AdvisoryBoard'
import About from './components/About/About'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
