import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './css/index.css'
import App from './pages/App.jsx'
import { AppProvider } from "./context/AppProvider";

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
