import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './pages/App'
import './main.css'
import Router from './router'
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>,
)