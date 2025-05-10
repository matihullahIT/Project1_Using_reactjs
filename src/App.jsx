// import Navbar from "./components/navbar"
import HeroSection from "./components/HeroSection"
import Cards from "./components/cards";
import Testimonials from "./components/testimonails";
import "./index.css"
function App() {
  document.title="LOGO";
  return (
    <>
    <div className=" ">
      {/* <Navbar/>k */}
      <HeroSection/>
      <Cards/>
      <Testimonials/>
    </div>
    </>
  )
}

export default App
