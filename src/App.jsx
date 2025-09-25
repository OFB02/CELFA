import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/footer'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Research from './pages/Research'
import About from './components/About/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import Accessibility from './pages/Accessibility'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/advisory-board" element={<AdvisoryBoard />} />
        <Route path="/research" element={<Research />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
