import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronDown, Menu, MapPin, Sparkles, Waves, X } from 'lucide-react'

const serviceAreas = ['Pawleys Island', 'Murrells Inlet', 'Myrtle Beach', 'North Myrtle Beach', 'Conway']

const packages = [
  { n: '01', title: 'Your private chef', text: 'A chef-led sushi experience at your home or event, with each course prepared for your table.', note: 'At your table' },
  { n: '02', title: 'Ten considered courses', text: 'A seasonal omakase journey featuring specialty sushi and fresh, high-quality seafood.', note: '$160 per guest' },
  { n: '03', title: 'Time to source the best', text: 'Request your chef at least two weeks ahead so we can review your event and source the fish.', note: '14 days’ notice' },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [count, setCount] = useState(2)
  const [request, setRequest] = useState<Record<string, string> | null>(null)
  const earliestDate = () => {
    const today = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }))
    today.setDate(today.getDate() + 14)
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
  }
  function submitInquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const date = form.elements.namedItem('date') as HTMLInputElement
    date.setCustomValidity(date.value < earliestDate() ? 'Please choose a date at least 14 days ahead.' : '')
    if (!form.reportValidity()) return
    setRequest(Object.fromEntries(Array.from(new FormData(form).entries()).map(([key, value]) => [key, String(value)])))
  }
  function downloadRequest() {
    if (!request) return
    const body = ['PRIVATE OMAKASE REQUEST — NOT SENT OR CONFIRMED', ...Object.entries(request).map(([key, value]) => `${key}: ${value}`), `Guests: ${count}`, `Base estimate: $${count * 160} ($160 per guest)`, '10 courses per guest. Final menu, availability, fees, setup and terms require chef review.'].join('\n')
    const url = URL.createObjectURL(new Blob([body], { type: 'text/plain' }))
    const link = document.createElement('a')
    link.href = url
    link.download = 'omakase-request.txt'
    link.click()
    URL.revokeObjectURL(url)
  }

  return <>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Coast Sushi Catering home"><span className="brand-mark">鮨</span><span>COAST<span className="brand-small">SUSHI CATERING · PRIVATE OMAKASE</span></span></a>
      <button className="menu-toggle" aria-expanded={navOpen} aria-controls="main-nav" aria-label={navOpen ? 'Close menu' : 'Open menu'} onClick={() => setNavOpen(!navOpen)}>{navOpen ? <X/> : <Menu/>}</button>
      <nav id="main-nav" className={navOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
        <a href="#approach" onClick={() => setNavOpen(false)}>Our approach</a><a href="/packages.html">Omakase menu</a><a href="#occasions" onClick={() => setNavOpen(false)}>The experience</a><a href="#area" onClick={() => setNavOpen(false)}>Service area</a>
        <a className="nav-cta" href="#inquire" onClick={() => setNavOpen(false)}>Request a chef <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule"/> A LOCAL SUSHI CATERING · PRIVATE OMAKASE EXPERIENCE</p>
          <h1>Omakase.<br/>At <em>your table.</em></h1>
          <p className="hero-lede">A private chef. Ten thoughtful courses. Fresh, high-quality sushi featuring uni, toro, and bluefin tuna. An intimate omakase experience, brought to you for $160 per person.</p>
          <div className="hero-actions"><a className="button button-dark" href="#inquire">Request a chef <ArrowRight size={16}/></a><a className="text-link" href="#approach">Get to know us <ArrowDown size={14}/></a></div>
          <div className="hero-meta"><span className="meta-pin"><MapPin size={15}/></span><span>Pawleys Island <i/> North Myrtle Beach, SC</span></div>
        </div>
        <div className="hero-art">
          <img className="hero-photo" src="/images/hero-catering.webp" alt="A colorful sushi boat prepared for sharing" />
          <div className="hero-stamp">10 COURSES<br/>$160 / GUEST</div>
          <div className="art-caption"><span>A PRIVATE CHEF EXPERIENCE</span><span>GRAND STRAND · SOUTH CAROLINA</span></div>
          <span className="vertical-note">GOOD FOOD. GOOD COMPANY.</span>
        </div>
      </section>

      <div className="ticker"><div className="ticker-track">PRIVATE OMAKASE <span>✳</span> $160 PER PERSON <span>✳</span> BOOK TWO WEEKS AHEAD <span>✳</span> PRIVATE OMAKASE <span>✳</span></div></div>

      <section id="approach" className="intro section-grid">
        <p className="eyebrow section-label">01 / THE IDEA</p><div><h2>Leave the menu<br/>to <em>the chef.</em></h2><p className="body-copy">Omakase means entrusting the menu to the chef. Settle in as your private chef guides your table through ten courses, shaped by the season and the finest fish available. Share your preferences ahead of time; the final menu is reviewed for your event.</p><a className="text-link dark-link" href="#occasions">Explore your experience <ArrowRight size={15}/></a></div>
      </section>

      <section className="food-gallery" aria-labelledby="gallery-title">
        <div className="gallery-heading"><div><p className="eyebrow">02 / FROM OUR BOARD</p><h2 id="gallery-title">Fresh fish.<br/><em>Thoughtful craft.</em></h2></div><p>A look at our chef’s sushi portfolio.<br/>Your omakase menu is selected for your event.</p></div>
        <div className="gallery-grid">
          <figure className="gallery-card gallery-wide"><img src="/images/sushi-boat.webp" alt="A sushi boat filled with rolls, nigiri, and sashimi" loading="lazy"/><figcaption><span>A boat for the whole table</span><small>MADE TO PASS AROUND</small></figcaption></figure>
          <figure className="gallery-card"><img src="/images/nigiri-platter.webp" alt="A fresh assortment of nigiri and sashimi on a platter" loading="lazy"/><figcaption><span>A little of everything</span><small>NIGIRI · SASHIMI · MORE</small></figcaption></figure>
          <figure className="gallery-card"><img src="/images/celebration-spread.webp" alt="A long sushi spread arranged for a celebration" loading="lazy"/><figcaption><span>Make it a centerpiece</span><small>FOR YOUR GATHERING</small></figcaption></figure>
          <figure className="gallery-card gallery-tall"><img src="/images/signature-rolls.webp" alt="Specialty sushi rolls prepared and plated by hand" loading="lazy"/><figcaption><span>Rolls worth slowing down for</span><small>PREPARED BY HAND</small></figcaption></figure>
        </div>
      </section>

      <section id="occasions" className="occasions">
        <div className="section-head"><div><p className="eyebrow">03 / MADE FOR YOUR MOMENT</p><h2>One evening.<br/><em>Ten courses.</em></h2></div><p className="head-note">From birthdays to evenings with friends, bring the sushi counter experience home. $160 per person, with at least two weeks’ notice.</p></div>
        <div className="package-grid">{packages.map(p=><article className="package-card" key={p.n}><div className="card-top"><span>{p.n}</span><ArrowUpRight size={17}/></div><div><p className="card-note">{p.note}</p><h3>{p.title}</h3><p>{p.text}</p></div><div className="card-bottom"><span>PRIVATE CHEF · OMAKASE</span><ArrowRight size={15}/></div></article>)}</div>
      </section>

      <section className="quote-band"><div className="quote-mark">“</div><blockquote>Uni. Toro. Bluefin.<br/><em>An evening to savor.</em></blockquote><div className="quote-foot"><span>SPECIALTY SEAFOOD · SUBJECT TO SEASONAL AVAILABILITY</span><span>GRAND STRAND · SOUTH CAROLINA</span></div></section>

      <section id="area" className="area section-grid"><p className="eyebrow section-label">04 / AROUND HERE</p><div><p className="eyebrow area-kicker"><Waves size={15}/> COAST TO COUNTRY</p><h2>Rooted here.<br/><em>On your table.</em></h2><p className="body-copy">Private chef requests from Pawleys Island to North Myrtle Beach, and Conway. Share your full event address so the chef can review travel and the space before accepting. Any travel charges will be identified in your quote.</p><div className="area-list">{serviceAreas.map((place,i)=><span key={place}><b>0{i+1}</b>{place}</span>)}</div></div></section>

      <section id="inquire" className="inquiry"><div className="inquiry-copy"><p className="eyebrow">05 / START A CONVERSATION</p><h2>Your evening<br/>starts <em>here.</em></h2><p>Plan your private, ten-course omakase at $160 per guest. Choose a date at least 14 days ahead. The chef reviews dates, seafood availability, dietary needs, and your setup before accepting a booking.</p><div className="inquiry-contact"><span className="contact-icon"><Sparkles size={17}/></span><span>Two weeks to plan something special.<small>Requests are subject to chef approval.</small></span></div></div>
        <form className="inquiry-form" onSubmit={submitInquiry}>
          <p className="form-note">Booking delivery is being configured. You can review and download your details here; nothing is sent or reserved.</p>
          <div hidden={request !== null} className="booking-fields">
            <label>Your name<input name="name" autoComplete="name" required placeholder="Full name"/></label>
            <div className="form-row"><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label><label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="Best contact number"/></label></div>
            <label>Occasion<select name="occasion" defaultValue="Dinner with friends"><option>Dinner with friends</option><option>Birthday or anniversary</option><option>Work event</option><option>Other</option></select><ChevronDown className="select-icon" size={16}/></label>
            <div className="form-row"><label>Preferred date<input name="date" type="date" required min={earliestDate()} onChange={event => event.currentTarget.setCustomValidity('')}/></label><label>Preferred start time<input name="time" type="time" required/></label></div>
            <p className="form-note">At least 14 days’ notice is required for fish sourcing. Dates remain subject to chef approval.</p>
            <label>Number of guests<input name="guests" type="number" min="1" step="1" required value={count} onChange={event => setCount(event.currentTarget.value === '' ? 0 : Number(event.currentTarget.value))}/></label>
            <div className="estimate" aria-live="polite"><span>{count} guests × $160 · 10 courses each</span><strong>${(count * 160).toLocaleString('en-US')}</strong><small>Base estimate only. Taxes, travel, gratuity, and any other charges will be itemized in the final quote before you agree. Guest count and setup are subject to chef review.</small></div>
            <label>Full event address<input name="address" autoComplete="street-address" required placeholder="Street, city, state, ZIP"/></label>
            <label>Food preferences &amp; dislikes<textarea name="preferences" placeholder="Tell the chef what your guests enjoy." rows={3}/></label>
            <label>Allergies &amp; dietary restrictions<textarea name="allergies" required placeholder="List all restrictions, or write None." rows={3}/></label>
            <p className="form-note">The menu may include raw fish, shellfish, soy, sesame, and wheat. Accommodations require chef review and are not guaranteed.</p>
            <label>Space &amp; event notes<textarea name="setup" placeholder="Kitchen, counter and refrigeration access, rental rules, accessibility, or other details." rows={3}/></label>
            <button className="button button-dark submit-button" type="submit">Review your request <ArrowRight size={16}/></button>
          </div>
          {request && <div className="form-success" role="status"><h3>Review your evening.</h3><p>{request.name} · {count} guests<br/>{request.date} at {request.time}<br/>{request.address}<br/>Base estimate: ${(count * 160).toLocaleString('en-US')}</p><p>Your details have not been sent. Download a copy to keep while booking delivery is being connected. No booking, fish order, or payment has been confirmed.</p><button type="button" className="button button-dark" onClick={downloadRequest}>Download request <ArrowDown size={16}/></button><button type="button" className="text-link dark-link" onClick={() => setRequest(null)}>Edit details <ArrowRight size={15}/></button></div>}

        </form>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">鮨</span><span>COAST<span className="brand-small">SUSHI CATERING · PRIVATE OMAKASE</span></span></a><p>Private omakase. Rooted in South Carolina.</p><span className="copyright">© 2026 COAST SUSHI CATERING</span></footer>
  </>
}

export default App
