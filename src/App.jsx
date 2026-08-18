import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ReqoreCaseStudy from './pages/ReqoreCaseStudy.jsx'
import Big11CaseStudy from './pages/Big11CaseStudy.jsx'
import DesignSystemCaseStudy from './pages/DesignSystemCaseStudy.jsx'


function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies/reqore-mail" element={<ReqoreCaseStudy />} />
          <Route path="/case-studies/Big11-india" element={<Big11CaseStudy />} />
          <Route path="/case-studies/design-system" element={<DesignSystemCaseStudy />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}