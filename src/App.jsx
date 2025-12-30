
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
// import Highlights from './components/Highlights'
import Navbar from './components/Navbar'
import ServicesPage from './components/Service'
import HRTrainingPage from './components/HRTrainingPage'
import CustomerCarePage from './components/CustomerCarePage'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {


  return (
    <>
    <Navbar />

    <Routes>
        <Route path="/" element={<Hero />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/hr-training" element={<HRTrainingPage />} />
          <Route path="/services/customer-care" element={<CustomerCarePage />} />


          
      </Routes>
     <Contact />
       <ScrollToTopButton />
    
   
      <h1 className='bg-red-600 text-yellow-500'>hello saurabh. </h1>
    </>
  )
}

export default App
