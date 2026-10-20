import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, MapPin, Minus, Plus, Sparkles, Waves, X } from 'lucide-react'

const serviceAreas = ['Pawleys Island', 'Murrells Inlet', 'Myrtle Beach', 'North Myrtle Beach', 'Conway', 'Florence']

const packages = [
  { n: '01', title: 'The gathering', text: 'A welcoming spread for birthdays, family celebrations, and evenings with friends.', note: 'Intimate events' },
  { n: '02', title: 'The celebration', text: 'A generous sushi table designed to be the centerpiece of your special occasion.', note: 'Milestones & parties' },
  { n: '03', title: 'The table', text: 'A considered menu for team dinners, client events, and memorable work gatherings.', note: 'Business & events' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [count, setCount] = useState(12)
  const [submitted, setSubmitted] = useState(false)

  function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return <>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Coast and Country Sushi home"><span className="brand-mark">鮨</span><span>COAST <span className="brand-dot">&amp;</span> COUNTRY<span className="brand-small">SUSHI CATERING</span></span></a>
      <button className="menu-toggle" aria-label={navOpen ? 'Close menu' : 'Open menu'} onClick={() => setNavOpen(!navOpen)}>{navOpen ? <X/> : <Menu/>}</button>
      <nav className={navOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#approach" onClick={() => setNavOpen(false)}>Our approach</a><a href="/packages.html">Packages</a><a href="#occasions" onClick={() => setNavOpen(false)}>Catering</a><a href="#area" onClick={() => setNavOpen(false)}>Service area</a>
        <a className="nav-cta" href="#inquire" onClick={() => setNavOpen(false)}>Plan your gathering <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule"/> A LOCAL SUSHI CATERING EXPERIENCE</p>
          <h1>Bring everyone<br/>to the <em>table.</em></h1>
          <p className="hero-lede">Thoughtful sushi, made for sharing. We’re building a fresh catering experience for gatherings from the Grand Strand to the Pee Dee.</p>
          <div className="hero-actions"><a className="button button-dark" href="#inquire">Plan your gathering <ArrowRight size={16}/></a><a className="text-link" href="#approach">Get to know us <ArrowDown size={14}/></a></div>
          <div className="hero-meta"><span className="meta-pin"><MapPin size={15}/></span><span>Pawleys Island <i/> Florence, SC</span></div>
        </div>
        <div className="hero-art">
          <img className="hero-photo" src="/images/hero-catering.webp" alt="A colorful sushi boat prepared for sharing" />
          <div className="hero-stamp">MADE<br/>TO SHARE</div>
          <div className="art-caption"><span>MADE FOR THE MIDDLE OF THE TABLE</span><span>GRAND STRAND · SOUTH CAROLINA</span></div>
          <span className="vertical-note">GOOD FOOD. GOOD COMPANY.</span>
        </div>
      </section>

      <div className="ticker"><div className="ticker-track">SUSHI FOR GATHERINGS <span>✳</span> MADE FOR SHARING <span>✳</span> LOCAL TO THE CAROLINAS <span>✳</span> SUSHI FOR GATHERINGS <span>✳</span></div></div>

      <section id="approach" className="intro section-grid">
        <p className="eyebrow section-label">01 / THE IDEA</p><div><h2>Good food has a way<br/>of making <em>moments.</em></h2><p className="body-copy">A celebration deserves more than a tray dropped at the door. Our vision is a sushi experience that feels considered from the first bite to the last guest at the table — grounded in local hospitality and made to bring people together.</p><a className="text-link dark-link" href="#occasions">See what we’re planning <ArrowRight size={15}/></a></div>
      </section>

      <section className="food-gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading"><div><p className="eyebrow">02 / FROM OUR BOARD</p><h2 id="gallery-title">Made by hand.<br/><em>Ready to share.</em></h2></div><p>Real sushi, prepared by our chef.<br/>A few glimpses of what can bring a table together.</p></div>
        <div className="gallery-grid">
          <figure className="gallery-card gallery-wide"><img src="/images/sushi-boat.webp" alt="A sushi boat filled with rolls, nigiri, and sashimi" loading="lazy"/><figcaption><span>A boat for the whole table</span><small>MADE TO PASS AROUND</small></figcaption></figure>
          <figure className="gallery-card"><img src="/images/nigiri-platter.webp" alt="A fresh assortment of nigiri and sashimi on a platter" loading="lazy"/><figcaption><span>A little of everything</span><small>NIGIRI · SASHIMI · MORE</small></figcaption></figure>
          <figure className="gallery-card"><img src="/images/celebration-spread.webp" alt="A long sushi spread arranged for a celebration" loading="lazy"/><figcaption><span>Make it a centerpiece</span><small>FOR YOUR GATHERING</small></figcaption></figure>
          <figure className="gallery-card gallery-tall"><img src="/images/signature-rolls.webp" alt="Specialty sushi rolls prepared and plated by hand" loading="lazy"/><figcaption><span>Rolls worth slowing down for</span><small>PREPARED BY HAND</small></figcaption></figure>
        </div>
      </section>

      <section id="occasions" className="occasions">
        <div className="section-head"><div><p className="eyebrow">03 / MADE FOR YOUR MOMENT</p><h2>A good fit for<br/><em>getting together.</em></h2></div><p className="head-note">From a backyard celebration to a table full of colleagues, we’re shaping catering around the way people gather.</p></div>
        <div className="package-grid">{packages.map(p=><article className="package-card" key={p.n}><div className="card-top"><span>{p.n}</span><ArrowUpRight size={17}/></div><div><p className="card-note">{p.note}</p><h3>{p.title}</h3><p>{p.text}</p></div><div className="card-bottom"><span>LET’S MAKE A PLAN</span><ArrowRight size={15}/></div></article>)}</div>
      </section>

      <section className="quote-band"><div className="quote-mark">“</div><blockquote>Gather close.<br/><em>Pass the good stuff.</em></blockquote><div className="quote-foot"><span>A BETTER KIND OF CATERED TABLE</span><span>GRAND STRAND · PEE DEE</span></div></section>

      <section id="area" className="area section-grid"><p className="eyebrow section-label">04 / AROUND HERE</p><div><p className="eyebrow area-kicker"><Waves size={15}/> COAST TO COUNTRY</p><h2>Rooted here.<br/><em>On your table.</em></h2><p className="body-copy">Serving events across the South Carolina coast and inland communities. Tell us where you’re gathering and we’ll talk through what’s possible.</p><div className="area-list">{serviceAreas.map((place,i)=><span key={place}><b>0{i+1}</b>{place}</span>)}</div></div></section>

      <section id="inquire" className="inquiry"><div className="inquiry-copy"><p className="eyebrow">05 / START A CONVERSATION</p><h2>Let’s make room<br/>for <em>one more.</em></h2><p>Tell us a little about the gathering you have in mind. We’ll follow up when booking details are ready.</p><div className="inquiry-contact"><span className="contact-icon"><Sparkles size={17}/></span><span>Something special is taking shape.<small>Booking contact details are coming soon.</small></span></div></div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          {submitted ? <div className="form-success"><span className="success-icon"><Check size={22}/></span><h3>Thanks for sharing.</h3><p>Your event details are ready for this preview. Booking contact will be added before launch.</p><button type="button" className="text-link dark-link" onClick={()=>setSubmitted(false)}>Edit your details <ArrowRight size={15}/></button></div> : <>
            <label>Your name<input name="name" required placeholder="How should we address you?"/></label>
            <label>What are you celebrating?<select name="occasion" defaultValue=""><option value="" disabled>Select an occasion</option><option>Birthday or family celebration</option><option>Wedding or milestone</option><option>Work event</option><option>Something else</option></select><ChevronDown className="select-icon" size={16}/></label>
            <div className="form-row"><label>Event date<input name="date" type="date"/></label><label>Estimated guests<div className="stepper"><button type="button" aria-label="Decrease guest count" onClick={()=>setCount(Math.max(2,count-1))}><Minus size={14}/></button><span>{count}</span><button type="button" aria-label="Increase guest count" onClick={()=>setCount(count+1)}><Plus size={14}/></button></div></label></div>
            <label>Where will you gather?<input name="location" placeholder="City or neighborhood"/></label>
            <button className="button button-dark submit-button" type="submit">Share your event details <ArrowRight size={16}/></button><p className="form-note">Preview only — inquiry delivery will be connected before the site launches.</p>
          </>}
        </form>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">鮨</span><span>COAST <span className="brand-dot">&amp;</span> COUNTRY<span className="brand-small">SUSHI CATERING</span></span></a><p>Made for gathering. Rooted in South Carolina.</p><span className="copyright">© 2026 COAST &amp; COUNTRY — A WORK IN PROGRESS</span></footer>
  </>
}

export default App
