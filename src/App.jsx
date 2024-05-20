
import Navbar from './component/Navbar'
import Landingpage from './component/Landingpage'

import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Feature from "./component/Feature";

import Cards from './component/Cards'
import Footer from './component/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App