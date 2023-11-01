import Home from "./Components/Home"
import SobreMi from "./Components/SobreMi"
import Proyectos from "./Components/Proyectos"
import Contacto from "./Components/Contacto"
import Modal from "./Components/Navbar"

function App() {
  return (
    <>
      <Modal/>
      <div id="Home">
        <Home/>
      </div>
      <div id="SobreMi">
        <SobreMi />
      </div>
      <div id="Proyectos">
        <Proyectos />
      </div>
      <div id="Contacto">
        <Contacto />
      </div>
    </>
  )
}

export default App
