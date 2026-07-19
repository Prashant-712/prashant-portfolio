import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ReqoreCaseStudy from './pages/ReqoreCaseStudy.jsx'

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
        </Routes>
      </main>
      <Footer />
    </>
  )
}
