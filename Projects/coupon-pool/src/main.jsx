import React from 'react'
     import ReactDOM from 'react-dom/client'
     import { BrowserRouter } from 'react-router-dom'
     import App from './App.jsx'
     import 'bootstrap/dist/css/bootstrap.min.css'
     import 'bootstrap/dist/js/bootstrap.bundle.min.js'
     import './index.css'

     // Initialize Bootstrap tooltips globally
     document.addEventListener('DOMContentLoaded', () => {
       const tooltipTriggerList = [].slice.call(
         document.querySelectorAll('[data-bs-toggle="tooltip"]')
       )
       tooltipTriggerList.forEach((tooltipTriggerEl) => {
         new window.bootstrap.Tooltip(tooltipTriggerEl)
       })
     })

     ReactDOM.createRoot(document.getElementById('root')).render(
       <React.StrictMode>
         <BrowserRouter>
           <App />
         </BrowserRouter>
       </React.StrictMode>,
     )