import { ArrowLeft, ArrowRight, ArrowUpRight, Waves } from 'lucide-react'

const highlights = [
  { id: '01', name: 'Uni', label: 'Delicate & oceanic', description: 'Prized sea urchin, selected for its fresh ocean flavor and creamy texture.' },
  { id: '02', name: 'Toro', label: 'Rich & buttery', description: 'The luxurious belly cut of tuna, celebrated for its delicate texture and richness.' },
  { id: '03', name: 'Bluefin tuna', label: 'A sushi specialty', description: 'High-quality bluefin, prepared with care to highlight its distinctive flavor.' },
  { id: '04', name: 'The chef’s selection', label: 'Seasonal & personal', description: 'Additional nigiri, sashimi, and seasonal courses complete your ten-course experience. The final selection depends on sourcing and chef review.' },
]

export default function PackagesPage() {
  return <>
    <header className="topbar">
      <a className="brand" href="/" aria-label="Coast Sushi Catering home"><span className="brand-mark">鮨</span><span>COAST<span className="brand-small">SUSHI CATERING · PRIVATE OMAKASE</span></span></a>
      <nav className="package-nav" aria-label="Main navigation"><a href="/#approach">Our approach</a><a href="/packages.html" aria-current="page">Omakase menu</a><a href="/#area">Service area</a><a className="nav-cta" href="/#inquire">Request a chef <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="package-hero">
        <div className="package-hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule"/> PRIVATE CHEF · TEN COURSES</p>
          <h1>A little trust.<br/>An <em>extraordinary</em> evening.</h1>
          <p>Omakase at your home or event. Your chef creates a ten-course meal with specialty sushi and fresh, high-quality seafood, featuring uni, toro, and bluefin tuna.</p>
          <p><strong>$160 per person · Book at least two weeks ahead.</strong></p>
          <a className="button button-dark" href="/#inquire">Plan your omakase <ArrowRight size={16}/></a>
        </div>
        <div className="package-hero-photo"><img src="/images/nigiri-platter.webp" alt="Nigiri and sashimi from the chef’s sushi portfolio"/><span>CHEF’S PORTFOLIO · YOUR MENU WILL VARY</span></div>
      </section>
      <section className="package-list" id="package-list">
        <div className="package-intro"><p className="eyebrow">THE INGREDIENTS</p><h2>Exceptional fish.<br/><em>A personal menu.</em></h2><p>These are highlights of the experience, not a fixed course list. The chef selects your ten courses around the season, availability, and reviewed guest preferences. Toro is a tuna belly cut and may be sourced from bluefin.</p></div>
        <div className="package-cards">{highlights.map(item => <article className="deal-card" key={item.id}><div className="deal-card-top"><span>{item.id} / COAST SUSHI CATERING</span><Waves size={15}/></div><p className="deal-label">{item.label}</p><div className="deal-title-row"><h3>{item.name}</h3></div><p className="deal-description">{item.description}</p><div className="deal-bottom"><span>PART OF THE OMAKASE EXPERIENCE</span></div></article>)}</div>
      </section>
      <section className="package-note"><div className="note-mark">鮨</div><div><p className="eyebrow">BEFORE YOUR EVENING</p><h2>Planned with care.<br/><em>Made for you.</em></h2><p>Allow at least 14 days for booking review and fish sourcing. We welcome event requests from Pawleys Island through North Myrtle Beach and Conway. The chef reviews your address, kitchen access, guest count, and dietary needs before accepting.</p><p>The $160 per-person base covers the ten-course omakase experience. Your final quote will identify any taxes, travel, gratuity, or additional charges. Setup, service equipment, cleanup, payment, and cancellation terms will be agreed before confirmation. No payment is collected on this site.</p><p>Meals may include raw fish and allergens. Please share all allergies when requesting a chef; accommodations and specific ingredients are subject to review and availability.</p><a className="button button-dark" href="/#inquire">Request your evening <ArrowRight size={16}/></a></div></section>
      <div className="back-link-wrap"><a className="text-link dark-link" href="/"><ArrowLeft size={15}/> Back to the home page</a></div>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="/"><span className="brand-mark">鮨</span><span>COAST<span className="brand-small">SUSHI CATERING · PRIVATE OMAKASE</span></span></a><p>Private omakase. Rooted in South Carolina.</p><span className="copyright">© 2026 COAST SUSHI CATERING</span></footer>
  </>
}
