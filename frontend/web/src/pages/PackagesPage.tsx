import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, Waves } from 'lucide-react'

import { experiences } from '../experiences'
import ExperienceDetails from './ExperienceDetails'

function PackagesPage() {
  return <>
    <header className="topbar">
      <a className="brand" href="/" aria-label="Coast and Country Sushi home"><span className="brand-mark">鮨</span><span>COAST <span className="brand-dot">&amp;</span> COUNTRY<span className="brand-small">SUSHI CATERING</span></span></a>
      <nav className="package-nav" aria-label="Main navigation"><a href="/#approach">Our approach</a><a href="/packages.html" aria-current="page">Packages</a><a href="/#area">Service area</a><a className="nav-cta" href="/#inquire">Plan your gathering <ArrowUpRight size={15}/></a></nav>
    </header>

    <main>
      <section className="package-hero">
        <div className="package-hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule"/> 01 / MENU PACKAGES</p>
          <h1>Good things come<br/>in <em>generous</em> packages.</h1>
          <p>Private sushi dinners, a chef’s tasting journey, and generous spreads for your next gathering.</p>
          <a className="button button-dark" href="#package-list">Explore the packages <ArrowRight size={16}/></a>
          <div className="hero-meta"><span className="meta-pin"><MapPin size={15}/></span><span>South Carolina coast <i/> Pee Dee</span></div>
        </div>
        <div className="package-hero-photo"><img src="/images/hero-catering.webp" alt="A colorful sushi boat arranged for sharing"/><span>MADE FOR THE MIDDLE OF THE TABLE</span></div>
      </section>

      <section className="package-list" id="package-list">
        <div className="package-intro"><p className="eyebrow">02 / PICK YOUR SPREAD</p><h2>Your evening,<br/><em>made personal.</em></h2><p>Choose your experience, then make the menu yours. Pricing and service details are agreed before booking.</p></div>
        <div className="package-cards">{experiences.map((item)=><article className="deal-card" key={item.id}>
          <div className="deal-card-top"><span>{item.id} / COAST &amp; COUNTRY</span><span className="deal-check"><Check size={14}/></span></div>
          <p className="deal-label">{item.label}</p><div className="deal-title-row"><h3>{item.name}</h3><strong>{item.price}</strong></div>
          <ul className="deal-description">{item.items.map(line => <li key={line}>{line}</li>)}</ul><p className="deal-description">{item.note}</p><a className="text-link dark-link" href={item.id === '02' ? '#omakase' : '/#inquire'}>{item.cta} <ArrowUpRight size={14}/></a><div className="deal-bottom"><span>YOUR PRIVATE SUSHI EXPERIENCE</span><Waves size={15}/></div>
        </article>)}</div>
      </section>

      <ExperienceDetails />
      <div className="back-link-wrap"><a className="text-link dark-link" href="/"><ArrowLeft size={15}/> Back to the home page</a></div>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="/"><span className="brand-mark">鮨</span><span>COAST <span className="brand-dot">&amp;</span> COUNTRY<span className="brand-small">SUSHI CATERING</span></span></a><p>Made for gathering. Rooted in South Carolina.</p><span className="copyright">© 2026 COAST &amp; COUNTRY</span></footer>
  </>
}

export default PackagesPage
