import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'
import LazyLoader from './LazyLoader';
window.urlAPI = ""
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LazyLoader />
  </React.StrictMode>
)