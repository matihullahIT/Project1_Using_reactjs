// import Navbar from "./components/navbar"
import HeroSection from "./components/HeroSection"
import Cards from "./components/cards";
import Testimonials from "./components/testimonails";
import Contact_us from "./components/Contact us"
import Footer from "./components/footer";
import "./index.css"
function App() {
  document.title="LOGO";
  return (
    <>
    <div>
      {/* <Navbar/>k */}
      <HeroSection/>
      <Cards/>
      <Testimonials/>
      <Contact_us/>
      <Footer/>
    </div>
    </>
  )
}

export default App
