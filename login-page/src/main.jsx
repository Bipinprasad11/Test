import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css'
import Homepage from './homepage.jsx'
import Signup from './signup.jsx'
import Loginpage from './Loginpage.jsx'
import UserPage from './UserPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/user" element={<UserPage/>}/>

    </Routes>
  </BrowserRouter>,
)
