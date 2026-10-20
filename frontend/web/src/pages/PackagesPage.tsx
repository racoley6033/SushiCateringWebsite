import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, Waves } from 'lucide-react'

const packages = [
  {
    id: '01', name: 'Sushi Lover', price: '$21.95', label: 'A little variety',
    description: 'Choose three half rolls from the menu’s listed options, including California, cucumber, crunch crab, Kentucky, Myrtle Beach, salad, salmon, tuna, or yellowtail.',
  },
  {
    id: '02', name: 'Sushi Deluxe', price: '$30.95', label: 'Nigiri favorites',
    description: 'A California roll with eight pieces of chef’s choice nigiri.',
  },
  {
    id: '03', name: 'Sashimi Deluxe', price: '$34', label: 'Sashimi selection',
    description: 'Seventeen pieces of chef’s choice sashimi.',
  },
  {
    id: '04', name: 'Nigiri Navy', price: '$58', label: 'A fuller spread',
    description: 'Two rolls with chef’s choice of seven nigiri and seven sashimi.',
  },
  {
    id: '05', name: 'The Sakana', price: '$60', label: 'Five-roll boat',
    description: 'Choose any five sushi rolls from the menu, except lobster rolls.',
  },
  {
    id: '06', name: 'Dragon Boat', price: '$88.95', label: 'For the center of the table',
    description: 'Choose any eight sushi rolls from the menu, except lobster rolls.',
  },
]

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
          <p>Start with the party boat and combo favorites from the menu. Pick a set, or use these as a starting point for your gathering.</p>
          <a className="button button-dark" href="#package-list">Explore the packages <ArrowRight size={16}/></a>
          <div className="hero-meta"><span className="meta-pin"><MapPin size={15}/></span><span>South Carolina coast <i/> Pee Dee</span></div>
        </div>
        <div className="package-hero-photo"><img src="/images/hero-catering.webp" alt="A colorful sushi boat arranged for sharing"/><span>MADE FOR THE MIDDLE OF THE TABLE</span></div>
      </section>

      <section className="package-list" id="package-list">
        <div className="package-intro"><p className="eyebrow">02 / PICK YOUR SPREAD</p><h2>Menu favorites,<br/><em>ready to share.</em></h2><p>The choices below come from the menu you shared. The menu describes this section as served with soup and salad.</p></div>
        <div className="package-cards">{packages.map((item)=><article className="deal-card" key={item.id}>
          <div className="deal-card-top"><span>{item.id} / COAST &amp; COUNTRY</span><span className="deal-check"><Check size={14}/></span></div>
          <p className="deal-label">{item.label}</p><div className="deal-title-row"><h3>{item.name}</h3><strong>{item.price}</strong></div>
          <p className="deal-description">{item.description}</p><div className="deal-bottom"><span>FROM THE PARTY BOAT &amp; COMBO MENU</span><Waves size={15}/></div>
        </article>)}</div>
      </section>

      <section className="package-note"><div className="note-mark">鮨</div><div><p className="eyebrow">A NOTE BEFORE YOU PLAN</p><h2>Let’s make it fit<br/>your <em>gathering.</em></h2><p>These are the prices and choices shown on the supplied menu. Confirm current availability, portion details, catering pricing, and delivery arrangements when planning an event.</p><a className="button button-dark" href="/#inquire">Talk through your event <ArrowRight size={16}/></a></div></section>
      <div className="back-link-wrap"><a className="text-link dark-link" href="/"><ArrowLeft size={15}/> Back to the home page</a></div>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="/"><span className="brand-mark">鮨</span><span>COAST <span className="brand-dot">&amp;</span> COUNTRY<span className="brand-small">SUSHI CATERING</span></span></a><p>Made for gathering. Rooted in South Carolina.</p><span className="copyright">© 2026 COAST &amp; COUNTRY</span></footer>
  </>
}

export default PackagesPage
