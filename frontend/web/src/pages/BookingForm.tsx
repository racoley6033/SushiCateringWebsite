import ContactDetails from './ContactDetails'
import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { experiences } from '../experiences'

type Experience = typeof experiences[number]

export default function BookingForm({ experience }: { experience: Experience }) {
  const [prepared, setPrepared] = useState(false)
  function prepareRequest(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const summary = ['Coast Sushi Service — booking request', `Package: ${experience.name}`, `Price: ${experience.price}`, experience.note, '', ...Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`), '', 'Request only. Availability, menu, and final quote must be confirmed.'].join('\n')
    window.location.href = `mailto:coastsushiservice@gmail.com?subject=${encodeURIComponent(`Booking inquiry — ${experience.name}`)}&body=${encodeURIComponent(summary)}`
    setPrepared(true)
  }
  return <section id="booking" className="inquiry">
    <div className="inquiry-copy"><p className="eyebrow">PLAN YOUR EXPERIENCE</p><h2>Your table.<br/><em>Your sushi night.</em></h2><p>Request {experience.name.toLowerCase()} for your next gathering. {experience.price}.</p><p>{experience.note}</p><p>Share your date, location, and preferences. Availability and your complete quote must be confirmed before a booking is reserved.</p><ContactDetails /></div>
    <form className="inquiry-form" onSubmit={prepareRequest}>
      <h3>Book {experience.name}</h3>
      <label>Your name<input name="Name" autoComplete="name" required placeholder="Full name"/></label>
      <label>Email address<input name="Email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
      <label>Phone number (optional)<input name="Phone" type="tel" autoComplete="tel" placeholder="Best contact number"/></label>
      <div className="form-row"><label>Event date<input name="Event date" type="date" min={new Date().toLocaleDateString('en-CA')} required/></label><label>Guests<input name="Guests" type="number" min={experience.id === '03' ? 2 : 1} max={experience.id === '03' ? 2 : experience.id === '04' ? 5 : undefined} defaultValue={experience.id === '03' ? 2 : experience.id === '04' ? 5 : 8} required/></label></div>
      <label>Event location<input name="Location" required placeholder="City and venue or address"/></label>
      <fieldset className="booking-extras">
        <legend>Optional extras</legend>
        {experience.id === '01' || experience.id === '02' ? <label><input type="checkbox" name="Dedicated server" value="Requested — $150"/><span>Dedicated server · $150<small>Add table setup and drink service to your private dinner or omakase. Already included in the dinner-for-two and family packages.</small></span></label> : experience.id === '05' ? <p>No server service is offered for birthday parties or group gatherings.</p> : <p>A dedicated server, table setup, and drink service are already included in your package.</p>}
        <label><input type="checkbox" name="Premium fish selections" value="Requested — confirm availability and pricing"/><span>Premium fish selections<small>Ask about specialty fish and sashimi additions. Availability and pricing confirmed with your menu.</small></span></label>
        <label><input type="checkbox" name="Cooked and vegetarian menus" value="Requested — discuss preferences and allergies"/><span>Cooked &amp; vegetarian menus<small>Build a table everyone can enjoy. Let us know about preferences and allergies before booking.</small></span></label>
        <label><input type="checkbox" name="Frozen drinks and mocktails" value="Requested — confirm availability and pricing"/><span>Frozen drinks &amp; mocktails<small>Tropical fruit blends to complement your gathering. Alcohol is not included; any host-supplied alcohol service requires confirmation before booking.</small></span></label>
      </fieldset>
      {experience.id === '05' && <>
        <label>Roll selections & quantities<textarea name="Roll selections and quantities" rows={4} placeholder="List your preferred classic and specialty rolls, with quantities"/></label>
        <div className="form-row"><label>Seaweed salad trays · $80 each<input name="Seaweed salad trays" type="number" min="0" defaultValue="0"/></label><label>Squid salad trays · $80 each<input name="Squid salad trays" type="number" min="0" defaultValue="0"/></label></div>
        <label>Service preference<select name="Service preference" defaultValue="Discuss options"><option>Discuss options</option><option>Platters</option><option>On-site chef</option></select></label>
      </>}
      <label>Dietary needs & event details<textarea name="Notes" rows={4} placeholder="Allergies, menu preferences, service needs, or special occasions"/></label>
      <button className="button button-dark submit-button" type="submit">Prepare booking email <ArrowRight size={16}/></button>
      <p className="form-note">Opens your email app. Review and send the draft to submit your request. Your date is reserved only after confirmation.</p>
      {prepared && <div className="form-success" role="status"><Check size={22}/><p>Send the prepared draft in your email app. If it didn’t open, email coastsushiservice@gmail.com or call 843-251-2291. Your date is not yet reserved.</p></div>}
    </form>
  </section>
}
