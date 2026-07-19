import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import SkillsTools from '../components/SkillsTools.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <CaseStudies />
      <About />
      <SkillsTools />
      <Contact />
    </>
  )
}