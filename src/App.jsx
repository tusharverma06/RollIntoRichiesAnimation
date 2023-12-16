import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './Pages/Home'
import { Header } from './Components/Navbar/Navbar'
function App() {

  return (
    <Router>
      <div className='relative flex flex-col items-center justify-start w-full min-h-screen bg-transparent '>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
