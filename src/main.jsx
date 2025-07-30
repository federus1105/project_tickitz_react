import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
// import Home_2 from './components/Home_2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
     {/* <Register/> */}
     <Login/>
     {/* <Home_2/> */}
  </StrictMode>,
)
