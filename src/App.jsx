import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import View from './Pages/View'
import Footer from './Components/Footer'
import Mainpage from './Pages/Mainpage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
       <Route path='/' element={<Mainpage/>} />
       <Route path='/:id/view' element={<View/>} />
       <Route path='/*' element={<Navigate to={'/'} />} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
