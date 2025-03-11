import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mobiles from './components/Mobiles.jsx'

createRoot(document.getElementById('root')).render(
  <Mobiles></Mobiles>,
)
