import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import { Header } from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <Router>
      <div className='relative flex flex-col items-center justify-start w-full min-h-screen bg-transparent '>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
<Footer/>
      </div>
    </Router>
  )
}

export default App
