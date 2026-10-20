import React from 'react'
import ReactDOM from 'react-dom/client'
import PackagesPage from './pages/PackagesPage'
import './styles.css'
import './packages.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><PackagesPage /></React.StrictMode>,
)
