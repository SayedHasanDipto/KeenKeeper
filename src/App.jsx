import './App.css'
import { Outlet } from 'react-router';
import HeroSection from './component/hero/HeroSection';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';

function App() {

  return (
    <>
      <header className='geist'>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen bg-base-200">
        <Outlet />
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
