import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './fucntions/Theme.jsx'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './fucntions/Search.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <SearchProvider>
            <App />
      </SearchProvider>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
