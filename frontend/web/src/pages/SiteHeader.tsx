import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export default function SiteHeader({ packagesPage = false }: { packagesPage?: boolean }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  return <header className="topbar">
    <a className="brand" href="/" aria-label="Coast Sushi Service home"><span className="brand-mark">鮨</span><span className="brand-name">COAST SUSHI<br/>SERVICE</span></a>
    <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav id="main-navigation" className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
      <a href="/packages.html" aria-current={packagesPage ? 'page' : undefined} onClick={() => setOpen(false)}>Packages</a>
      <a href="/#occasions" onClick={() => setOpen(false)}>Catering</a>
      <a href="/#area" onClick={() => setOpen(false)}>Service area</a>
      <a className="nav-cta" href="/#inquire" onClick={() => setOpen(false)}>Plan your gathering <ArrowUpRight size={15}/></a>
    </nav>
  </header>
}
