import './App.css'
import { Outlet } from 'react-router';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';

function App() {

  return (
    <>
      <header className='geist'>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer></Footer>


    </>
  )
}

export default App
