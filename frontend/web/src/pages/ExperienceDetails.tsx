export default function ExperienceDetails({ bookingHref = "/#inquire", packageId }: { bookingHref?: string; packageId?: string }) { return <>
{!packageId && <section className="experience-details" id="party">
<p className="eyebrow">Birthday parties & corporate gatherings</p>
<h2>Your party. Your roll selection.</h2>
<p>Choose the rolls you love and tell us how many of each. Build a spread for birthdays, office celebrations, team lunches, and corporate parties.</p>
<a className="button button-dark" href={bookingHref}>Build your party order ↗</a>
<h3>Classic rolls · from $12 per roll</h3>
<p>Order by the roll, with quantities chosen by you. Tell us your preferred selections when you inquire.</p>
<h3>Specialty rolls · from $16 per roll</h3>
<p>Add signature rolls to your spread. Final pricing depends on the selections and ingredients.</p>
<h3>Seaweed salad · $80 per tray</h3>
<p>Serves approximately 8–10 guests as a side.</p>
<h3>Squid salad · $80 per tray</h3>
<p>Serves approximately 8–10 guests as a side.</p>
<p>$450 minimum food order. $100 travel fee per event. No server service for birthday parties or group gatherings. Tell us whether you want platters or an on-site chef; service arrangements are confirmed in the final quote. Wedding sushi stations are also available by custom quote.</p>
</section>}
<section className="experience-details" id="details">
<p className="eyebrow">Clear from the start</p>
<h2>The finishing details</h2>
<p>$450 minimum food order · $100 travel fee per event. A server is available for private dinners and omakase at $150; no server service for birthday parties or group gatherings.</p>
<p>A server is already included in the dinner-for-two and family packages. For those experiences, we set your table and provide drink service so you can settle in and enjoy a more intimate evening.</p>
<p>Alcohol is not included. Any service of host-supplied alcohol must be confirmed for your event. Tableware, linens, glassware, and any rental needs will be agreed upon before booking. Applicable taxes and optional upgrades are additional.</p>
</section>
{(!packageId || packageId === "02") && <section className="experience-details" id="omakase">
<p className="eyebrow">Omakase · $150 per guest</p>
<h2>One course. One memorable bite.</h2>
<p>A tasting menu that moves from bright, delicate flavors to rich tuna and a final hand roll.</p>
<h3>01—04 / A fresh beginning</h3>
<p>Cucumber sunomono</p>
<p>Rice vinegar, sesame & a light citrus finish</p>
<p>Seasonal sashimi tasting</p>
<p>Chef’s selection of tuna and salmon</p>
<p>Salmon nigiri</p>
<p>Fresh salmon over seasoned sushi rice</p>
<p>Yellowtail nigiri</p>
<p>Yellowtail with a delicate citrus accent</p>
<h3>05—08 / The ocean’s finest</h3>
<p>Hokkaido scallop nigiri</p>
<p>Sweet scallop, citrus zest & sea salt</p>
<p>Ama ebi nigiri</p>
<p>Sweet shrimp with a light ponzu accent</p>
<p>Akami tuna nigiri</p>
<p>Lean tuna with a brush of soy</p>
<p>Chutoro nigiri</p>
<p>Medium-fatty tuna, gently seasoned</p>
<h3>09—12 / A rich finish</h3>
<p>Otoro nigiri</p>
<p>Richly marbled fatty tuna</p>
<p>Uni gunkan</p>
<p>Sea urchin, seasoned rice & crisp nori</p>
<p>Chef’s hand roll</p>
<p>Tuna, cucumber & sesame in crisp nori</p>
<p>A sweet ending</p>
<p>Mochi ice cream or a seasonal dessert</p>
<p>Sample menu for planning. Courses and seafood availability are confirmed before booking; any substitution is agreed with the host. Specialty fish listed here are part of the omakase package and are not automatically included in other dinners. Please discuss allergies and raw-seafood preferences in advance.</p>
<a className="button button-dark" href={bookingHref}>Plan your omakase ↗</a>
</section>}
<section className="experience-details" id="process">
<p className="eyebrow">From first hello to the last bite</p>
<h2>You host. We handle the sushi.</h2>
<p>01 /</p>
<h3>Tell us your plans</h3>
<p>Share your date, location, guest count, and the kind of evening you have in mind.</p>
<p>02 /</p>
<h3>Make the menu yours</h3>
<p>We agree on the menu, dietary needs, table setup, server arrangements, and your complete quote before confirming.</p>
<p>03 /</p>
<h3>Enjoy your own sushi night</h3>
<p>Your chef prepares and presents dinner. With our server-inclusive packages, we set your table and provide drink service throughout the meal, then clean the work area afterward.</p>
</section>
<section className="experience-details" id="extras">
<p className="eyebrow">Optional extras</p>
<h2>Make it <em>your evening.</em></h2>
<p>Personal touches to discuss when planning your dinner.</p>
<h3>Dedicated server · $150</h3>
<p>Add table setup and drink service to your private dinner or omakase. Already included in the dinner-for-two and family packages.</p>
<h3>Premium fish selections</h3>
<p>Ask about specialty fish and sashimi additions. Availability and pricing confirmed with your menu.</p>
<h3>Cooked & vegetarian menus</h3>
<p>Build a table everyone can enjoy. Let us know about preferences and allergies before booking.</p>
<h3>Frozen drinks & mocktails</h3>
<p>Tropical fruit blends to complement your gathering. Alcohol is not included; any host-supplied alcohol service requires confirmation before booking.</p>
</section>
</> }
