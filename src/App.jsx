import Navbar from "./components/navbar"
import HeroSection from "./components/HeroSection"
import Cards from "./components/cards";
import "./index.css"
function App() {
  document.title="LOGO";
  return (
    <>
    <div className="mx-8 my-3">
      <Navbar/>
      <HeroSection/>
      <br/>
      <Cards/>
    </div>
    </>
  )
}

export default App
