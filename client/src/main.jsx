import React from 'react'
import ReactDOM from 'react-dom/client'
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import {ThemeProvider} from './components/ThemeContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster/>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
