import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css'
import Login from './Login.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>  
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
