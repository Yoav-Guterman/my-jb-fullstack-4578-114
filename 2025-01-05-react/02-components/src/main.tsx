import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PetStore from './components/pet-store/PetStore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PetStore />
  </StrictMode>,
)
