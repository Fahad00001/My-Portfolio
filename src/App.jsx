import About from "./components/About"
import Banner from "./components/Banner"
import Expertise from "./components/Expertise"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
  

  return (
   <>
   {/* <button className='bg-orange-600 text-white text-2xl  px-3 rounded-sm shadow-lg'>Hire me</button> */}
   <Navbar/>
   <Banner/>
   <About/>
   <Services/>
   <Expertise/>
   <Footer/>
   </>

  )
}

export default App
