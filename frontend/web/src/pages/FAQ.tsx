const questions = [
  {
    question: 'What are the minimum order and extra fees?',
    answer: 'The minimum food order is $450, with a $100 travel fee per event. A server can be added for $150 to the private sushi dinner or omakase. The $550 dinner for two and $800 family dinner already include a server. No server service is offered for birthday parties or group gatherings. Taxes and agreed upgrades are additional.',
  },
  {
    question: 'What do I need to provide?',
    answer: 'A clear kitchen workspace, running water, and dining space for your guests. We’ll confirm refrigeration, access, tableware, linens, glassware, and any rental or equipment needs while planning your event. Dinner-for-two and family packages include table setup and drink service with a dedicated server.',
  },
  {
    question: 'Can you accommodate guests who don’t eat raw fish?',
    answer: 'Yes, cooked and vegetarian selections can be included in the agreed menu. Share allergies before booking so we can discuss ingredients and preparation; an allergen-free environment cannot be guaranteed.',
  },
  {
    question: 'Is alcohol included?',
    answer: 'No. Alcohol is not included in the sushi package. Any service involving host-supplied alcohol must be confirmed separately for your gathering and location.',
  },
  {
    question: 'How do I confirm a booking?',
    answer: 'Submitting or preparing an inquiry does not reserve a date. Availability, your menu, the final quote, deposit and cancellation terms must be agreed upon before confirmation.',
  },
  {
    question: 'Where do you travel?',
    answer: 'Our service area is Myrtle Beach and the Grand Strand, including North Myrtle Beach and Conway. Ask about your location; a $100 travel fee applies per event. Service availability for your address is confirmed before booking.',
  },
]

export default function FAQ() {
  return <section id="faq" className="faq" aria-labelledby="faq-title">
    <p className="eyebrow">BEFORE WE GATHER</p>
    <h2 id="faq-title">A few common <em>questions.</em></h2>
    <div className="faq-list">{questions.map(({ question, answer }) => <details key={question}>
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>)}</div>
    <p className="seafood-notice">Consuming raw or undercooked seafood may increase your risk of foodborne illness, especially if you have certain medical conditions.</p>
  </section>
}
