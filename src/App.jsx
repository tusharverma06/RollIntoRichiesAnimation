import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import { Header } from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import WhatsAppPopup from './Components/Hero/WhatsApp';
function App() {

  // NOTE: CHANGE PHONE NUMBER
  const phoneNumber = '12345678'
  const callUrl = `tel:${phoneNumber}`; // Link to initiate a call

  return (
    <Router>
      <div className='relative flex flex-col items-center justify-start w-full min-h-screen bg-transparent '>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        {/* whatsapp button */}
        <WhatsAppPopup />


        {/* call us */}
        <a href={callUrl} className="sm:hidden block fixed left-1/2 -translate-x-1/2 w-11/12 bottom-4 px-6 py-3 rounded-lg z-[2000]  shadow-[0px_4px_16px_0px_rgba(0,0,0,0.40)] text-base font-bold text-bg-primary bg-[linear-gradient(90deg,#F2C75E_0%,#CE9639_100%)]">
          Call Us
        </a>

        <Footer />
      </div>
    </Router>
  )
}

export default App
