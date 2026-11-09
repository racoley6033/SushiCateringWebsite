import SiteHeader from './SiteHeader'
import ContactDetails from './ContactDetails'
import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, MapPin, Minus, Plus, Waves } from 'lucide-react'

import { experiences } from '../experiences'
import FAQ from './FAQ'
import ExperienceDetails from './ExperienceDetails'

const serviceAreas = ['Myrtle Beach', 'North Myrtle Beach', 'Conway', 'Surrounding Grand Strand']


function App() {
  const [count, setCount] = useState(12)
  const [submitted, setSubmitted] = useState(false)

  function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [...Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`), `Guests: ${count}`, '', 'Please confirm availability, final pricing, and booking terms.'].join('\n')
    window.location.href = `mailto:coastsushiservice@gmail.com?subject=${encodeURIComponent('Coast Sushi Service — event inquiry')}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return <>
    <SiteHeader />

    <main id="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule"/> A LOCAL SUSHI CATERING EXPERIENCE</p>
          <h1>Bring everyone<br/>to the <em>table.</em></h1>
          <p className="hero-lede">Thoughtful sushi, made for sharing. We bring a fresh catering experience for gatherings in Myrtle Beach, North Myrtle Beach, Conway, and the surrounding Grand Strand.</p>
          <div className="hero-actions"><a className="button button-dark" href="#inquire">Plan your gathering <ArrowRight size={16}/></a><a className="text-link" href="#approach">Get to know us <ArrowDown size={14}/></a></div>
          <div className="hero-meta"><span className="meta-pin"><MapPin size={15}/></span><span>Myrtle Beach <i/> Grand Strand, SC</span></div>
        </div>
        <div className="hero-art">
          <img className="hero-photo" src="/images/hero-catering.webp" alt="A colorful sushi boat prepared for sharing" />
          <div className="hero-stamp">MADE<br/>TO SHARE</div>
          <div className="art-caption"><span>MADE FOR THE MIDDLE OF THE TABLE</span><span>GRAND STRAND · SOUTH CAROLINA</span></div>
          <span className="vertical-note">GOOD FOOD. GOOD COMPANY.</span>
        </div>
      </section>

      <div className="ticker" aria-label="Our packages"><div className="ticker-track">{[0, 1].map(copy => <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{experiences.map(item => <span className="ticker-package" key={item.id}>{item.name.toUpperCase()} <span>✳</span></span>)}</div>)}</div></div>

      <section id="approach" className="intro section-grid">
        <p className="eyebrow section-label">01 / OUR APPROACH</p><div><h2>Good food has a way<br/>of making <em>moments.</em></h2><p className="body-copy">A celebration deserves more than a tray dropped at the door. We create a sushi experience that feels considered from the first bite to the last guest at the table — grounded in local hospitality and made to bring people together.</p><a className="text-link dark-link" href="#occasions">Explore our experiences <ArrowRight size={15}/></a></div>
      </section>



      <section id="occasions" className="occasions">
        <div className="section-head"><div><p className="eyebrow">02 / MADE FOR YOUR MOMENT</p><h2>A good fit for<br/><em>getting together.</em></h2></div><p className="head-note">From a backyard celebration to a table full of colleagues, choose a private dinner, omakase, or a party spread built around your roll selections.</p></div>
        <div className="package-grid">{experiences.map(p=><a className="package-card" key={p.id} href={`/packages.html?experience=${p.slug}`}><div className="card-top"><span>{p.id}</span><ArrowUpRight size={17}/></div><div><p className="card-note">{p.label}</p><h3>{p.name}</h3><p className="package-price">{p.price}</p><ul className="package-inclusions">{p.items.map(item => <li key={item}>{item}</li>)}</ul><p className="package-terms">{p.note}</p></div><div className="card-bottom"><span>Details &amp; booking</span><ArrowRight size={15}/></div></a>)}</div>
      </section>

      <section className="food-gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading"><div><p className="eyebrow">03 / FROM OUR BOARD</p><h2 id="gallery-title">Made by hand.<br/><em>Ready to share.</em></h2></div><p>Real sushi, prepared by our chef.<br/>A few glimpses of what can bring a table together.</p></div>
        <div className="gallery-grid">
          <figure className="gallery-card gallery-wide"><img src="/images/sushi-boat.webp" alt="A sushi boat filled with rolls, nigiri, and sashimi" loading="lazy"/><figcaption><span>A boat for the whole table</span><small>MADE TO PASS AROUND</small></figcaption></figure>
          <figure className="gallery-card"><img src="/images/nigiri-platter-original.jpeg" alt="A fresh assortment of nigiri and sashimi on a platter" loading="lazy"/><figcaption><span>A little of everything</span><small>NIGIRI · SASHIMI · MORE</small></figcaption></figure>
          <figure className="gallery-card"><img src="/images/celebration-spread.webp" alt="A long sushi spread arranged for a celebration" loading="lazy"/><figcaption><span>Make it a centerpiece</span><small>FOR YOUR GATHERING</small></figcaption></figure>
          <figure className="gallery-card gallery-tall"><img src="/images/signature-rolls-original.jpeg" alt="Specialty sushi rolls prepared and plated by hand" loading="lazy"/><figcaption><span>Rolls worth slowing down for</span><small>PREPARED BY HAND</small></figcaption></figure>
        </div>
      </section>

      <ExperienceDetails />



      <section id="area" className="area section-grid"><p className="eyebrow section-label">04 / AROUND HERE</p><div><p className="eyebrow area-kicker"><Waves size={15}/> AROUND THE GRAND STRAND</p><h2>Rooted here.<br/><em>On your table.</em></h2><p className="body-copy">Serving Myrtle Beach, North Myrtle Beach, Conway, and the surrounding Grand Strand. Tell us where you’re gathering and we’ll talk through what’s possible.</p><div className="area-list">{serviceAreas.map((place,i)=><span key={place}><b>0{i+1}</b>{place}</span>)}</div></div></section>

      <FAQ />

      <section id="inquire" className="inquiry"><div className="inquiry-copy"><p className="eyebrow">05 / START A CONVERSATION</p><h2>Let’s make room<br/>for <em>one more.</em></h2><p>Tell us a little about the gathering you have in mind. Contact us to discuss availability, your menu, and the details.</p><ContactDetails /></div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          {submitted ? <div className="form-success"><span className="success-icon"><Check size={22}/></span><h3>Your email draft is ready.</h3><p>Send the draft in your email app to submit your inquiry. If it didn’t open, email coastsushiservice@gmail.com or call 843-251-2291. Your date is not reserved until confirmed.</p><button type="button" className="text-link dark-link" onClick={()=>setSubmitted(false)}>Edit your details <ArrowRight size={15}/></button></div> : <>
            <label>Your name<input name="name" required placeholder="How should we address you?"/></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
            <label>What are you celebrating?<select name="occasion" defaultValue=""><option value="" disabled>Select an occasion</option><option>Private Sushi Dinner</option><option>Omakase Experience</option><option>Private Dinner for Two</option><option>Family Dinner</option><option>Birthday or corporate party</option><option>Wedding or milestone</option><option>Work event</option><option>Something else</option></select><ChevronDown className="select-icon" size={16}/></label>
            <div className="form-row"><label>Event date<input name="date" type="date"/></label><label>Estimated guests<div className="stepper"><button type="button" aria-label="Decrease guest count" onClick={()=>setCount(Math.max(2,count-1))}><Minus size={14}/></button><span>{count}</span><button type="button" aria-label="Increase guest count" onClick={()=>setCount(count+1)}><Plus size={14}/></button></div></label></div>
            <label>Where will you gather?<input name="location" placeholder="City or neighborhood"/></label>
            <button className="button button-dark submit-button" type="submit">Prepare inquiry email <ArrowRight size={16}/></button><p className="form-note">Opens your email app. Review and send the draft to submit your inquiry; a date is reserved only after confirmation.</p>
          </>}
        </form>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">鮨</span><span>COAST<span className="brand-small">SUSHI SERVICE</span></span></a><ContactDetails /><span className="copyright">© 2026 COAST SUSHI SERVICE</span></footer>
  </>
}

export default App
