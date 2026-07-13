import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";

import './css/index.css'
import App from './pages/App.jsx'

import ProtectedRoute from './modules/ProtectedRoute.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />} path="/" />
          <Route element={<ProtectedRoute />}>
            //rutas protejidas.
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>,
)
