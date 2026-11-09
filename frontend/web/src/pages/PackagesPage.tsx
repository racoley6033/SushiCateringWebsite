import SiteHeader from './SiteHeader'
import ContactDetails from './ContactDetails'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, Waves } from 'lucide-react'

import { experiences } from '../experiences'
import FAQ from './FAQ'
import ExperienceDetails from './ExperienceDetails'
import BookingForm from './BookingForm'

const experienceCopy: Record<string, string> = {
  '05': 'Your party. Your roll selection. Choose the rolls you love and tell us how many of each. Build a spread for birthdays, office celebrations, team lunches, and corporate parties.',
  '01': 'Bring your guests together for a private sushi dinner, prepared by your chef. Choose three rolls for the group and enjoy a generous selection of nigiri and rolls at your own table.',
  '02': 'Settle in for a 12-course tasting journey, presented one course at a time. Explore delicate seafood, rich tuna, and the chef’s finishing touches in an evening built around the menu.',
  '03': 'Make an evening of just the two of you. A private chef and dedicated server take care of your five-course sushi dinner, table setup, and attentive drink service.',
  '04': 'Gather up to five guests for a shared sushi dinner. Your private chef and dedicated server bring starters, sashimi, nigiri, signature roll platters, and a sweet finish to the table.',
}
const experiencePhotos: Record<string, string> = {
  '05': '/images/celebration-spread.webp',
  '01': '/images/sushi-boat.webp',
  '02': '/images/nigiri-platter-original.jpeg',
  '03': '/images/signature-rolls-original.jpeg',
  '04': '/images/celebration-spread.webp',
}

function PackagesPage() {
  const selected = experiences.find(item => item.slug === new URLSearchParams(window.location.search).get('experience'))
  document.title = `${selected?.name ?? 'Sushi Packages'} | Coast Sushi Service`
  return <>
    <SiteHeader packagesPage />

    <main>
      <section className={selected ? "package-hero experience-hero" : "package-hero"}>
        <div className="package-hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule"/> {selected ? selected.label : "01 / MENU PACKAGES"}</p>
          <h1>{selected ? selected.name : <>Good things come<br/>in <em>generous</em> packages.</>}</h1>
          {selected ? <><p className="experience-price">{selected.price}</p><p>{experienceCopy[selected.id]}</p></> : <p>Private sushi dinners, a chef’s tasting journey, and generous spreads for your next gathering.</p>}
          <a className="button button-dark" href={selected ? "#booking" : "#package-list"}>{selected ? "Request a booking" : "Explore the packages"} <ArrowRight size={16}/></a>
          <div className="hero-meta"><span className="meta-pin"><MapPin size={15}/></span><span>Myrtle Beach <i/> Grand Strand, SC</span></div>
        </div>
        <div className="package-hero-photo"><img src={selected ? experiencePhotos[selected.id] : "/images/hero-catering.webp"} alt="Chef-prepared sushi, shown as an example of our presentation"/><span>MADE FOR THE MIDDLE OF THE TABLE</span></div>
      </section>

      {selected ? <section className="experience-overview" aria-labelledby="included-title">
        <div className="experience-overview-heading"><p className="eyebrow">YOUR EXPERIENCE, IN DETAIL</p><h2 id="included-title">An evening<br/><em>made for you.</em></h2><p>{experienceCopy[selected.id]}</p><a className="text-link dark-link" href="#booking">Plan this experience <ArrowRight size={16}/></a></div>
        <div className="experience-inclusions"><h3>{selected.id === '05' ? "Build your party order" : "What’s included"}</h3><ul>{selected.items.map((item, index) => <li key={item}><span className="inclusion-number">{String(index + 1).padStart(2, '0')}</span><span>{item}</span><Check size={18}/></li>)}</ul><div className="experience-pricing"><p className="eyebrow">PRICING & SERVICE</p><strong>{selected.price}</strong><p>{selected.note}</p><p>Applicable taxes and agreed upgrades are additional. Your menu, availability, and final quote are confirmed before booking.</p></div></div>
      </section> : <section className="package-list" id="package-list">
        <div className="package-intro"><p className="eyebrow">02 / PICK YOUR SPREAD</p><h2>Your evening,<br/><em>made personal.</em></h2><p>Choose your experience, then make the menu yours. Pricing and service details are agreed before booking.</p></div>
        <div className="package-cards">{experiences.map((item)=><article className="deal-card" key={item.id}>
          <div className="deal-card-top"><span>{item.id} / COAST SUSHI SERVICE</span><span className="deal-check"><Check size={14}/></span></div>
          <p className="deal-label">{item.label}</p><div className="deal-title-row"><h3>{item.name}</h3><strong>{item.price}</strong></div>
          <ul className="deal-description">{item.items.map(line => <li key={line}>{line}</li>)}</ul><p className="deal-description">{item.note}</p><a className="text-link dark-link" href={selected ? "#booking" : `/packages.html?experience=${item.slug}`}>{item.cta} <ArrowUpRight size={14}/></a><div className="deal-bottom"><span>YOUR PRIVATE SUSHI EXPERIENCE</span><Waves size={15}/></div>
        </article>)}</div>
      </section>}

      <ExperienceDetails packageId={selected?.id} bookingHref={selected ? "#booking" : "/#inquire"} />
      <FAQ />
      {selected && <BookingForm experience={selected} />}
      {selected && <div className="back-link-wrap"><a className="text-link dark-link" href="/packages.html">View all packages <ArrowRight size={15}/></a></div>}
      <div className="back-link-wrap"><a className="text-link dark-link" href="/"><ArrowLeft size={15}/> Back to the home page</a></div>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="/"><span className="brand-mark">鮨</span><span>COAST<span className="brand-small">SUSHI SERVICE</span></span></a><ContactDetails /><span className="copyright">© 2026 COAST SUSHI SERVICE</span></footer>
  </>
}

export default PackagesPage
