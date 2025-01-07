import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header/Header.tsx'
import Skills from './components/skills/Skills.tsx'
import Details from './components/details/Details.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='app'>
      <Header />
      <Details />
      <Skills />
    </div>
  </StrictMode>,
)
